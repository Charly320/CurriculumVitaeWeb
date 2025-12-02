import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, MatIconModule, TranslatePipe],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  private translate = inject(TranslateService);
  
  get lang(): 'es' | 'en' {
    return this.translate.lang;
  }

  get name() {
    return this.contactInfo.name[this.lang];
  }

  get title() {
    return this.contactInfo.title[this.lang];
  }

  get description() {
    return this.contactInfo.description[this.lang];
  }

  get quote() {
    return this.contactInfo.quote[this.lang];
  }

  contactInfo = {
    name: {
      es: 'Carlos Enrique Villagrán G.',
      en: 'Carlos Enrique Villagrán G.'
    },
    title: {
      es: 'Senior Software Developer • Especialista en Bases de Datos (Oracle)',
      en: 'Senior Software Developer • Database Specialist (Oracle)'
    },
    technologies: [
      'C#',
      '.NET',
      'Node.js',
      'NestJS',
      'Angular',
      'APIs REST',
      'PL/SQL Oracle',
      'SQL Optimization'
    ],
    description: {
      es: 'Análisis estratégico de Software.',
      en: 'Strategic Software Analysis.'
    },
    location: 'Santiago, Chile',
    email: 'carlos.villagran04@live.cl',
    phone: '+56966951056',
    phoneDisplay: '+56 9 6695 1056',
    linkedin: 'https://www.linkedin.com/in/ing-carlos-villagran/',
    cvPdfUrl: 'assets/pdf/CV_Carlos_Villagran_2026.pdf',
    quote: {
      es: 'Falla rápido, aprende rápido, inténtalo de nuevo',
      en: 'Fail fast, learn fast, try again'
    }
  };
}
