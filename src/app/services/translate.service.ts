import { inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { en, es } from '../data';

type Translations = Record<string, any>;

@Injectable({ providedIn: 'root' })
export class TranslateService {
	private http = inject(HttpClient, { optional: true });
	private current = signal<'en' | 'es'>('en');
	private translations = signal<Translations>({});

	constructor() {
		// load in-memory translations for build/prerender
		this.translations.set(en);
	}

	get lang() {
		return this.current();
	}

	setLang(lang: 'en' | 'es') {
		if (lang === this.current()) return;
		this.current.set(lang);
		this.loadTranslations(lang);
	}

	async loadTranslations(lang: 'en' | 'es') {
		try {
			// Prefer in-memory objects for build/prerender to avoid HTTP fetch
			if (lang === 'en') {
				this.translations.set(en);
				return;
			}
			if (lang === 'es') {
				this.translations.set(es);
				return;
			}

			// Fallback: try to fetch from assets (browser runtime) if HttpClient available
			if (this.http) {
				const url = `/assets/i18n/${lang}.json`;
				const res = await firstValueFrom(this.http.get<Translations>(url));
				this.translations.set(res || {});
			} else {
				// No HttpClient available (tests or isolated environment) -> set empty
				this.translations.set({});
			}
		} catch (e) {
			console.error('Error loading translations', e);
			this.translations.set({});
		}
	}

	t(key: string, fallback?: string) {
		const parts = key.split('.');
		let cur: any = this.translations();
		for (const p of parts) {
			if (cur && p in cur) {
				cur = cur[p];
			} else {
				return fallback ?? key;
			}
		}
		return cur;
	}

	// Expose signals for templates
	get translationsSignal() {
		return this.translations;
	}

	get langSignal() {
		return this.current;
	}
}
