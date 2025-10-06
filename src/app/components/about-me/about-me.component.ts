import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from '../../pipes/translate.pipe';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [CommonModule, TranslatePipe],
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent {
  constructor(public profileService: ProfileService) {}

  get name(): string { return this.profileService.personalInfo().name; }
  get role(): string { return this.profileService.personalInfo().title; }
  get location(): string { return 'Santiago, Chile'; }
  get avatar(): string { return 'assets/img/yo.jpeg'; }
  get aboutText(): string { return this.profileService.personalInfo().aboutMe; }
}
