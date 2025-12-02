import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../profile.service';
import type { ExperienceItem } from '../../data/profile-data';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  constructor(private profile: ProfileService) {}
  get experience(): ExperienceItem[] { return this.profile.experience(); }
}
