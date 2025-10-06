import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MatrixBgComponent } from './components/matrix-bg/matrix-bg.component';
import { TranslateService } from './services/translate.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, MatrixBgComponent],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('curriculumVitaeWeb');
  // ensure TranslateService is instantiated
  constructor(private ts: TranslateService) {
    // load default language
    this.ts.loadTranslations(this.ts.lang);
  }
}
