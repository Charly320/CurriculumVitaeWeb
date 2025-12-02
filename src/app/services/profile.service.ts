import { Injectable, computed, effect, inject, signal, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { ProfileData } from '../data/profile-data';
import { PROFILE_EN, PROFILE_ES } from '../data/profile.i18n';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { TranslateService } from './translate.service';

@Injectable({ providedIn: 'root' })
export class ProfileService {
	private http = inject(HttpClient, { optional: true });
	private translate = inject(TranslateService);
	private platformId = inject(PLATFORM_ID);
	private data = signal<ProfileData>(PROFILE_EN);

	constructor() {
		// initialize with current language
		this.setLang(this.translate.lang);

		// react to language changes
		effect(() => {
			const l = this.translate.langSignal();
			this.setLang(l);
		});
	}

	private async setLang(lang: 'en' | 'es') {
		// set in-memory default immediately (SSR/prerender safe)
		this.data.set(lang === 'es' ? PROFILE_ES : PROFILE_EN);
		// attempt override from assets if http available (browser runtime)
		if (this.http && isPlatformBrowser(this.platformId)) {
			try {
				const url = `assets/data/profile.${lang}.json`;
				const res = await firstValueFrom(this.http.get<ProfileData>(url));
				if (res) this.data.set(res);
			} catch {
				// ignore if asset not present
			}
		}
	}

	// exposed getters (computed for change detection friendliness)
	readonly personalInfo = computed(() => this.data().personalInfo);
	readonly experience = computed(() => this.data().experience);
	readonly education = computed(() => this.data().education);
	readonly skills = computed(() => this.data().skills);
	readonly certifications = computed(() => this.data().certifications);
}

