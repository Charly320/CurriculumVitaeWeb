import { Component, ElementRef, Inject, OnDestroy, OnInit, PLATFORM_ID, ViewChild } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-matrix-bg',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matrix-bg.component.html',
  styleUrls: ['./matrix-bg.component.css']
})
export class MatrixBgComponent implements OnInit, OnDestroy {
  @ViewChild('canvas', { static: true }) canvasRef!: ElementRef<HTMLCanvasElement>;

  private ctx!: CanvasRenderingContext2D;
  private rafId: number | null = null;
  private columns = 0;
  private drops: number[] = [];
  private speeds: number[] = [];
  private tokens: Array<{ type: 'char' | 'word'; text?: string }> = [];
  private letterIndex: number[] = [];
  private lastRowDrawn: number[] = [];
  private readonly charSet = 'AQZXSWECCKEJRLKJHGPOISPDOFLKNlkjañsldupowiqerhabsdfアァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズヅブプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポ0123456789';
  private readonly words = [
    'erase','format','CD','compile','debug','git','push','pull','npm','build','deploy','server','client','API','SQL','bug','commit','branch','merge','terminal','code','framework','function','variable','loop','array','object','class','interface','module','package','library','command','shell','script','node','event','listener','thread','process','memory','storage','cache','index','database','query','serverless','request','response','JSON','XML','HTTP','HTTPS','token','key','algorithm','hash','encrypt','decrypt','CLI','OAuth','cookie','session','header','payload','binary','decimal','hex','regex','render','hydrate','bundle','prerender','router','service','component','inject','observable','promise','async','await','docker','kubernetes','cloud','S3','lambda','edge','deno','vite','esbuild','tsc','jest','vitest','lint','format','prettier','commitlint'
  ];
  private readonly fontSize = 15; // tuned size for readability without distraction
  private speedFactor = 0.18; // slower overall speed; raise/lower to adjust
  private readonly minSpeedChar = 0.26;
  private readonly maxSpeedChar = 0.88;
  private readonly minSpeedWord = 0.24;
  private readonly maxSpeedWord = 0.60;
  private readonly fade = 0.08;   // trail fade strength
  private isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) platformId: Object) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) return; // SSR guard
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d') as CanvasRenderingContext2D;
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
    this.loop();
  }

  ngOnDestroy(): void {
    if (!this.isBrowser) return;
    if (this.rafId !== null) cancelAnimationFrame(this.rafId);
    window.removeEventListener('resize', this.handleResize);
  }

  // Use arrow fn to keep `this` binding for addEventListener/removeEventListener
  private handleResize = () => {
    const canvas = this.canvasRef.nativeElement;
    const dpr = Math.min(window.devicePixelRatio || 1, 2); // cap DPR for perf
    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    this.columns = Math.ceil(width / this.fontSize);
    this.drops = new Array(this.columns).fill(0).map(() => Math.floor(Math.random() * height / this.fontSize));
    this.tokens = new Array(this.columns).fill(0).map(() => this.randomToken());
    this.speeds = new Array(this.columns).fill(0).map((_, i) => this.randomSpeed(this.tokens[i].type === 'word'));
    this.letterIndex = new Array(this.columns).fill(0);
    this.lastRowDrawn = new Array(this.columns).fill(-1);
    this.ctx.fillStyle = '#000000';
    this.ctx.fillRect(0, 0, width, height);
    this.ctx.font = `${this.fontSize}px 'Fira Code', 'Source Code Pro', 'Courier New', monospace`;
  };

  private loop = () => {
    const canvas = this.canvasRef.nativeElement;
    const width = canvas.width / (window.devicePixelRatio || 1);
    const height = canvas.height / (window.devicePixelRatio || 1);

    // Fading trail
    this.ctx.fillStyle = `rgba(0, 0, 0, ${this.fade})`;
    this.ctx.fillRect(0, 0, width, height);

    // Draw characters
    for (let i = 0; i < this.drops.length; i++) {
      const token = this.tokens[i];
      const x = i * this.fontSize; // strict vertical column
      const row = Math.floor(this.drops[i]);

      // Only draw when we move at least one row to keep grid-aligned letters
      if (row > this.lastRowDrawn[i]) {
        const y = row * this.fontSize;

        // Choose the glyph to render
        let glyph: string;
        if (token.type === 'word') {
          const word = token.text as string;
          const idx = this.letterIndex[i] % word.length;
          glyph = word.charAt(idx);
          this.letterIndex[i] = this.letterIndex[i] + 1;
        } else {
          glyph = this.charSet.charAt(Math.floor(Math.random() * this.charSet.length));
        }

        // Gradient green for a modern effect
        const grad = this.ctx.createLinearGradient(x, y - this.fontSize, x, y);
        grad.addColorStop(0, '#00ff00');
        grad.addColorStop(1, '#00cc66');
        this.ctx.fillStyle = grad;
        this.ctx.fillText(glyph, x, y);

        this.lastRowDrawn[i] = row;
      }

      // Reset drop randomly after it passes the bottom for varied density
      const yPos = this.drops[i] * this.fontSize;
      if (yPos > height && Math.random() > 0.975) {
        this.drops[i] = 0;
        this.tokens[i] = this.randomToken();
        this.speeds[i] = this.randomSpeed(this.tokens[i].type === 'word');
        this.letterIndex[i] = 0;
        this.lastRowDrawn[i] = -1;
      }

      // Advance drop with global speed factor
      this.drops[i] += this.speeds[i] * this.speedFactor;
    }

    this.rafId = requestAnimationFrame(this.loop);
  };

  private randomSpeed(isWord: boolean): number {
    const min = isWord ? this.minSpeedWord : this.minSpeedChar;
    const max = isWord ? this.maxSpeedWord : this.maxSpeedChar;
    return (min + Math.random() * (max - min));
  }

  private randomToken(): { type: 'char' | 'word'; text?: string } {
    // ~20% chance to be a word to keep the effect readable
    if (Math.random() < 0.2) {
      const w = this.words[Math.floor(Math.random() * this.words.length)];
      return { type: 'word', text: w };
    }
    return { type: 'char' };
  }
}
