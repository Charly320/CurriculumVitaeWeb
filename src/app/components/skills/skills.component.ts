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
    'PL/SQL (Oracle 11g / 19c)': 'plsql-oracle',
    'SQL Avanzado': 'sql-advanced',
    'Advanced SQL': 'sql-advanced',
    'C# (.NET Framework / .NET)': 'csharp-dotnet',
    'Visual Basic .NET': 'vb-net',
    'JavaScript & TypeScript (Node.js / NestJS)': 'js-ts-node',
    'APIs REST (C# / NestJS)': 'rest-apis',
    'REST APIs (C# / NestJS)': 'rest-apis',
    'Arquitectura de Servicios': 'service-architecture',
    'Service Architecture': 'service-architecture',
    'Optimización y Rendimiento': 'optimization',
    'Optimization & Performance': 'optimization',
    'Git, GitHub y Azure DevOps': 'git-devops',
    'Git, GitHub & Azure DevOps': 'git-devops',
    'Análisis y Lógica de Negocio': 'business-logic',
    'Business Logic Analysis': 'business-logic',
    'Scrum Master': 'scrum-master'
  };

  // Details per key: bilingual name and description + icon + category
  private details = {
    'plsql-oracle': {
      icon: 'storage',
      category: { es: '🗄️ Bases de Datos', en: '🗄️ Databases' },
      name: { es: 'PL/SQL (Oracle 11g / 19c)', en: 'PL/SQL (Oracle 11g / 19c)' },
      desc: {
        es: 'Desarrollo, mantenimiento y optimización de packages, funciones, procedimientos almacenados, CTEs complejos, tuning de consultas SQL y manejo de grandes volúmenes de datos en entornos productivos.',
        en: 'Development, maintenance and optimization of packages, functions, stored procedures, complex CTEs, SQL query tuning and handling large data volumes in production environments.'
      }
    },
    'sql-advanced': {
      icon: 'query_stats',
      category: { es: '🗄️ Bases de Datos', en: '🗄️ Databases' },
      name: { es: 'SQL Avanzado', en: 'Advanced SQL' },
      desc: {
        es: 'Diseño y optimización de consultas con JOIN explícitos, subconsultas, CTEs, validaciones condicionales, transformaciones de datos y mejora de rendimiento en procesos críticos.',
        en: 'Query design and optimization with explicit JOINs, subqueries, CTEs, conditional validations, data transformations and performance improvements in critical processes.'
      }
    },
    'csharp-dotnet': {
      icon: 'code',
      category: { es: '💻 Lenguajes de Programación', en: '💻 Programming Languages' },
      name: { es: 'C# (.NET Framework / .NET)', en: 'C# (.NET Framework / .NET)' },
      desc: {
        es: 'Desarrollo de APIs REST, integración con bases de datos, manejo de procesos síncronos y asíncronos, optimización de rendimiento, desarrollo de Windows Services y aplicaciones de escritorio WPF.',
        en: 'REST API development, database integration, synchronous and asynchronous process handling, performance optimization, Windows Services development and WPF desktop applications.'
      }
    },
    'vb-net': {
      icon: 'code_blocks',
      category: { es: '💻 Lenguajes de Programación', en: '💻 Programming Languages' },
      name: { es: 'Visual Basic .NET', en: 'Visual Basic .NET' },
      desc: {
        es: 'Mantenimiento y evolución de aplicaciones heredadas orientadas a procesos internos y operativos.',
        en: 'Maintenance and evolution of legacy applications focused on internal and operational processes.'
      }
    },
    'js-ts-node': {
      icon: 'javascript',
      category: { es: '💻 Lenguajes de Programación', en: '💻 Programming Languages' },
      name: { es: 'JavaScript & TypeScript', en: 'JavaScript & TypeScript' },
      desc: {
        es: 'Desarrollo de APIs REST con Node.js y NestJS, estructuración de proyectos backend con arquitectura modular, inyección de dependencias, validaciones y consumo de bases de datos.',
        en: 'REST API development with Node.js and NestJS, backend project structuring with modular architecture, dependency injection, validations and database consumption.'
      }
    },
    'rest-apis': {
      icon: 'api',
      category: { es: '🌐 APIs y Servicios', en: '🌐 APIs & Services' },
      name: { es: 'APIs REST (C# / NestJS)', en: 'REST APIs (C# / NestJS)' },
      desc: {
        es: 'Diseño de endpoints, manejo de objetos temporales en memoria, validación de entradas, control de flujo e integración con lógica de negocio en PL/SQL y otros servicios.',
        en: 'Endpoint design, in-memory temporary object handling, input validation, flow control and integration with PL/SQL business logic and other services.'
      }
    },
    'service-architecture': {
      icon: 'hub',
      category: { es: '🏗️ Arquitectura de Software', en: '🏗️ Software Architecture' },
      name: { es: 'Arquitectura de Servicios', en: 'Service Architecture' },
      desc: {
        es: 'Diseño de servicios para procesos masivos (como envío de correos por campañas), manejo de concurrencia, paralelismo y ejecución de tareas en segundo plano.',
        en: 'Service design for massive processes (such as campaign email sending), concurrency handling, parallelism and background task execution.'
      }
    },
    'optimization': {
      icon: 'speed',
      category: { es: '⚡ Optimización y Performance', en: '⚡ Optimization & Performance' },
      name: { es: 'Optimización y Rendimiento', en: 'Optimization & Performance' },
      desc: {
        es: 'Optimización de consultas SQL en entornos productivos, refactorización de SQL complejo, detección de cuellos de botella en procesos de base de datos y mejora de rendimiento en servicios backend.',
        en: 'SQL query optimization in production environments, complex SQL refactoring, database process bottleneck detection and backend service performance improvement.'
      }
    },
    'git-devops': {
      icon: 'integration_instructions',
      category: { es: '🚀 DevOps y Control de Versiones', en: '🚀 DevOps & Version Control' },
      name: { es: 'Git, GitHub y Azure DevOps', en: 'Git, GitHub & Azure DevOps' },
      desc: {
        es: 'Instalación de packages PL/SQL en múltiples ambientes (desarrollo, certificación y producción), control de versiones con Git y uso de GitHub y Azure DevOps como plataformas de repositorio y canalización de código.',
        en: 'PL/SQL package installation across multiple environments (development, certification and production), version control with Git and use of GitHub and Azure DevOps as repository and code pipeline platforms.'
      }
    },
    'business-logic': {
      icon: 'psychology',
      category: { es: '🧠 Análisis y Lógica de Negocio', en: '🧠 Business Logic Analysis' },
      name: { es: 'Análisis y Lógica de Negocio', en: 'Business Logic Analysis' },
      desc: {
        es: 'Implementación de reglas de negocio a nivel de base de datos y backend, validación de estados de procesos y flujos funcionales, transformación dinámica de resultados según parámetros de entrada.',
        en: 'Business rules implementation at database and backend level, process state and functional flow validation, dynamic result transformation based on input parameters.'
      }
    },
    'scrum-master': {
      icon: 'groups',
      category: { es: '👥 Gestión Ágil', en: '👥 Agile Management' },
      name: { es: 'Scrum Master', en: 'Scrum Master' },
      desc: {
        es: 'Formación en Scrum Master, proyección hacia liderazgo de equipos técnicos, enfoque en mejora continua, trabajo colaborativo y buenas prácticas de desarrollo.',
        en: 'Scrum Master training, projection towards technical team leadership, focus on continuous improvement, collaborative work and development best practices.'
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
          category: '',
          description: lang === 'es' ? 'Habilidad profesional' : 'Professional skill'
        };
      }
      return {
        key,
        icon: d.icon,
        name: d.name[lang] ?? label,
        category: d.category[lang] ?? '',
        description: d.desc[lang] ?? ''
      };
    });
  });
}
