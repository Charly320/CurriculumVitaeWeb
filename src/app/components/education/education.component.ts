import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../profile.service';
import type { EducationItem } from '../../data/profile-data';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="container">
      <div class="grid">
        <div class="terminal-window" *ngFor="let ed of education">
          <div class="terminal-header" aria-hidden="true">
            <span class="dot dot-close"></span>
            <span class="dot dot-min"></span>
            <span class="dot dot-max"></span>
            <div class="terminal-title"><span class="material-icons" style="vertical-align:middle;margin-right:.35rem">school</span>{{ ed.institution }}</div>
          </div>
          <div class="terminal-body">
            <div class="degree">{{ ed.degree }}</div>
            <div class="period" *ngIf="ed.period">{{ ed.period }}</div>
            <div class="activities" *ngIf="ed.activities">{{ ed.activities }}</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  constructor(private profile: ProfileService) {}
  get education(): EducationItem[] { return this.profile.education(); }
}
