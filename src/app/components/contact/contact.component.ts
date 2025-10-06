import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  template: `
    <section>
      <h3>{{ 'contact.title' | translate }}</h3>
      <p>{{ 'contact.email' | translate }}</p>
    </section>
  `
})
export class ContactComponent {}
