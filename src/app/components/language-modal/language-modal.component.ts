import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-language-modal',
  standalone: true,
  imports: [CommonModule, MatDialogModule, MatButtonModule],
  template: `
    <div class="language-modal">
      <div class="modal-header">
        <h2>🌍 Welcome / Bienvenido</h2>
      </div>
      
      <div class="modal-body">
        <p class="question">Please select your preferred language:</p>
        <p class="question-es">Por favor, selecciona tu idioma preferido:</p>
        
        <div class="language-options">
          <button mat-button class="lang-option" (click)="selectLanguage('en')">
            <div class="lang-info">
              <span class="lang-name">English</span>
              <span class="lang-desc">View site in English</span>
            </div>
          </button>
          
          <button mat-button class="lang-option" (click)="selectLanguage('es')">
            <div class="lang-info">
              <span class="lang-name">Español</span>
              <span class="lang-desc">Ver sitio en Español</span>
            </div>
          </button>
        </div>
        
        <p class="hint">
          💡 You can change the language anytime using the EN/ES button in the navigation bar.
          <br>
          💡 Puedes cambiar el idioma en cualquier momento usando el botón EN/ES en la barra de navegación.
        </p>
      </div>
    </div>
  `,
  styles: [`
    .language-modal {
      padding: 2rem;
      background: linear-gradient(135deg, #0b1220 0%, #151e2f 100%);
      color: #e5e7eb;
      font-family: 'Fira Code', 'Source Code Pro', 'Courier New', monospace;
      border-radius: 16px;
      border: 1px solid rgba(100,255,218,0.3);
      box-shadow: 0 20px 60px rgba(0,0,0,0.7);
      max-width: 600px;
    }

    .modal-header {
      text-align: center;
      margin-bottom: 2rem;
      padding-bottom: 1rem;
      border-bottom: 1px solid rgba(100,255,218,0.2);
    }

    .modal-header h2 {
      margin: 0;
      font-size: 1.8rem;
      font-weight: 700;
      color: #64ffda;
      letter-spacing: -0.5px;
    }

    .modal-body {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
    }

    .question, .question-es {
      text-align: center;
      font-size: 1.1rem;
      color: #cbd5e1;
      margin: 0;
      line-height: 1.6;
    }

    .question-es {
      margin-top: -1rem;
    }

    .language-options {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      margin: 1rem 0;
    }

    .lang-option {
      display: flex !important;
      align-items: center;
      gap: 1.5rem;
      padding: 1.5rem !important;
      background: rgba(100,255,218,0.05) !important;
      border: 2px solid rgba(100,255,218,0.2) !important;
      border-radius: 12px !important;
      transition: all 0.3s ease;
      cursor: pointer;
      width: 100%;
      justify-content: flex-start !important;
      text-transform: none !important;
      letter-spacing: normal !important;
    }

    .lang-option .mdc-button__label {
      display: flex;
      align-items: center;
      gap: 1.5rem;
      width: 100%;
      justify-content: flex-start;
    }

    .lang-option::before,
    .lang-option::after {
      display: none !important;
    }

    .lang-option:hover {
      background: rgba(100,255,218,0.15) !important;
      border-color: rgba(100,255,218,0.5) !important;
      transform: translateY(-3px);
      box-shadow: 0 8px 20px rgba(0,0,0,0.3);
    }

    .flag {
      font-size: 3rem;
      line-height: 1;
      flex-shrink: 0;
    }

    .lang-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 0.3rem;
      text-align: left;
    }

    .lang-name {
      font-size: 1.3rem;
      font-weight: 700;
      color: #e5e7eb;
    }

    .lang-desc {
      font-size: 0.9rem;
      color: #94a3b8;
    }

    .hint {
      text-align: center;
      font-size: 0.85rem;
      color: #64ffda;
      margin: 1rem 0 0;
      padding: 1rem;
      background: rgba(100,255,218,0.05);
      border: 1px solid rgba(100,255,218,0.2);
      border-radius: 8px;
      line-height: 1.6;
    }

    @media (max-width: 600px) {
      .language-modal {
        padding: 1.5rem;
      }

      .modal-header h2 {
        font-size: 1.5rem;
      }

      .flag {
        font-size: 2.5rem;
      }

      .lang-name {
        font-size: 1.1rem;
      }

      .hint {
        font-size: 0.8rem;
      }
    }
  `]
})
export class LanguageModalComponent implements OnInit {
  private isBrowser: boolean;

  constructor(
    private translateService: TranslateService,
    private dialogRef: MatDialogRef<LanguageModalComponent>,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    // Component initialization
  }

  selectLanguage(lang: 'en' | 'es'): void {
    this.translateService.setLang(lang);
    
    // Only use localStorage in browser
    if (this.isBrowser) {
      localStorage.setItem('selectedLanguage', lang);
      localStorage.setItem('languageSelected', 'true');
    }
    
    this.dialogRef.close();
  }
}
