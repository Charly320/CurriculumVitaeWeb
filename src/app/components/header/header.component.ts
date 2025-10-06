import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateService } from '../../services/translate.service';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslatePipe, MatToolbarModule, MatButtonModule, MatIconModule, MatMenuModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  mobileOpen = signal(false);

  constructor(private translate: TranslateService, private profile: ProfileService) {}

  get lang() { return this.translate.lang; }
  get name() { return this.profile.personalInfo().name; }
  get title() { return this.profile.personalInfo().title; }
  // Show only the last segment after comma to drop prefixes like "Software Developer, "
  get subtitle() {
    const t = this.title || '';
    const parts = t.split(',');
    return parts[parts.length - 1].trim();
  }

  changeLanguage(code: 'en' | 'es') {
    this.translate.setLang(code);
  }
}
