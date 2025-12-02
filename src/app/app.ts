import { Component, signal, OnInit, inject, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MatrixBgComponent } from './components/matrix-bg/matrix-bg.component';
import { TranslateService } from './services/translate.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { LanguageModalComponent } from './components/language-modal/language-modal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatrixBgComponent, MatDialogModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {
  protected readonly title = signal('curriculumVitaeWeb');
  private dialog = inject(MatDialog);
  private isBrowser: boolean;
  
  // ensure TranslateService is instantiated
  constructor(
    private ts: TranslateService,
    @Inject(PLATFORM_ID) platformId: object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    
    // Check if language was previously selected (only in browser)
    if (this.isBrowser) {
      const savedLang = localStorage.getItem('selectedLanguage');
      if (savedLang) {
        this.ts.setLang(savedLang as 'en' | 'es');
      }
    }
    // load default language
    this.ts.loadTranslations(this.ts.lang);
  }

  ngOnInit(): void {
    // Show language selection modal only on first visit (only in browser)
    if (this.isBrowser) {
      const hasSelectedLanguage = localStorage.getItem('languageSelected');
      if (!hasSelectedLanguage) {
        setTimeout(() => {
          this.dialog.open(LanguageModalComponent, {
            width: '600px',
            maxWidth: '95vw',
            disableClose: true,
            panelClass: 'language-modal-overlay'
          });
        }, 500);
      }
    }
  }
}
