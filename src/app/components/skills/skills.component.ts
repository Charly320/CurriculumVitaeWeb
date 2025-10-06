import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileService } from '../../profile.service';
import { MatIconModule } from '@angular/material/icon';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {
  private profile = inject(ProfileService);
  private translate = inject(TranslateService);

  // Map names (ES/EN) -> normalized keys
  private nameToKey: Record<string, string> = {
    'C#': 'csharp',
    'Oracle SQL': 'oracle-sql',
    'PL/SQL': 'plsql',
    'Angular': 'angular',
    'APIs REST': 'rest-apis',
    'REST APIs': 'rest-apis',
    'Trabajo en equipo': 'teamwork',
    'Teamwork': 'teamwork',
    'Transformación digital': 'digital-transformation',
    'Digital transformation': 'digital-transformation',
    'Capacidad de análisis': 'analytical-skills',
    'Analytical skills': 'analytical-skills'
  };

  // Details per key: bilingual name and description + icon
  private details = {
    'csharp': {
      icon: 'code',
      name: { es: 'C#', en: 'C#' },
      desc: {
        es: 'Lenguaje de programación moderno orientado a objetos del ecosistema .NET.',
        en: 'Modern object‑oriented programming language in the .NET ecosystem.'
      }
    },
    'oracle-sql': {
      icon: 'storage',
      name: { es: 'Oracle SQL', en: 'Oracle SQL' },
      desc: {
        es: 'Lenguaje para consultas y gestión de datos en bases Oracle.',
        en: 'Language for querying and managing data in Oracle databases.'
      }
    },
    'plsql': {
      icon: 'table_chart',
      name: { es: 'PL/SQL', en: 'PL/SQL' },
      desc: {
        es: 'Extensión procedimental de SQL para Oracle: funciones, procedimientos y triggers.',
        en: 'Oracle’s procedural extension to SQL: functions, procedures, and triggers.'
      }
    },
    'angular': {
      icon: 'developer_mode',
      name: { es: 'Angular', en: 'Angular' },
      desc: {
        es: 'Framework web para construir aplicaciones SPA escalables.',
        en: 'Web framework for building scalable SPA applications.'
      }
    },
    'rest-apis': {
      icon: 'api',
      name: { es: 'APIs REST', en: 'REST APIs' },
      desc: {
        es: 'Diseño y consumo de servicios HTTP para integración entre sistemas.',
        en: 'Design and consumption of HTTP services for system integrations.'
      }
    },
    'teamwork': {
      icon: 'groups',
      name: { es: 'Trabajo en equipo', en: 'Teamwork' },
      desc: {
        es: 'Colaboración efectiva, comunicación clara y enfoque en objetivos.',
        en: 'Effective collaboration, clear communication, and goal focus.'
      }
    },
    'digital-transformation': {
      icon: 'autorenew',
      name: { es: 'Transformación digital', en: 'Digital transformation' },
      desc: {
        es: 'Adopción estratégica de tecnología para mejorar procesos y valor.',
        en: 'Strategic adoption of technology to improve processes and value.'
      }
    },
    'analytical-skills': {
      icon: 'insights',
      name: { es: 'Capacidad de análisis', en: 'Analytical skills' },
      desc: {
        es: 'Análisis de datos y problemas para tomar decisiones informadas.',
        en: 'Analyzing data and problems to drive informed decisions.'
      }
    }
  } as const;

  // Cards computed from profile skills and current language
  readonly skillCards = computed(() => {
    const lang: 'en' | 'es' = this.translate.lang;
    const items = this.profile.skills();
    return items.map((label: string) => {
      const key = this.nameToKey[label] ?? label.toLowerCase().replace(/\s+/g, '-');
      const d = (this.details as any)[key];
      if (!d) {
        return {
          key,
          icon: 'star',
          name: label,
          description: lang === 'es' ? 'Habilidad' : 'Skill'
        };
      }
      return {
        key,
        icon: d.icon,
        name: d.name[lang] ?? label,
        description: d.desc[lang] ?? ''
      };
    });
  });
}
