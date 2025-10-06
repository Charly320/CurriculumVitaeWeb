import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../profile.service';
import type { ExperienceItem } from '../../data/profile-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="container">
      <div class="grid">
        <div class="terminal-window" *ngFor="let e of experience">
          <div class="terminal-header" aria-hidden="true">
            <span class="dot dot-close"></span>
            <span class="dot dot-min"></span>
            <span class="dot dot-max"></span>
            <div class="terminal-title"><span class="material-icons" style="vertical-align:middle;margin-right:.35rem">work</span>{{ e.company }}</div>
          </div>
          <div class="terminal-body">
            <div class="row-top">
              <div>
                <div class="role">{{ e.role }}</div>
                <div class="company">{{ e.company }}</div>
              </div>
              <div class="period">{{ e.period }}</div>
            </div>
            <div class="meta">{{ e.location }}<span *ngIf="e.type"> • {{ e.type }}</span></div>
            <div *ngIf="e.description" class="desc">{{ e.description }}</div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  constructor(private profile: ProfileService) {}
  get experience(): ExperienceItem[] { return this.profile.experience(); }
}
