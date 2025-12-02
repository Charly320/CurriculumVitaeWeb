export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  type?: string;
  description?: string;
  icon?: string;
};

export type EducationItem = {
  institution: string;
  degree: string;
  period?: string;
  activities?: string;
};

export type CertificationItem = {
  name: string;
  issuer: string;
  date?: string;
  credentialId?: string;
};

export type ProfileData = {
  personalInfo: {
    name: string;
    title: string;
    aboutMe: string;
  };
  experience: ExperienceItem[];
  education: EducationItem[];
  skills: string[];
  certifications: CertificationItem[];
};

export const PROFILE_DATA: ProfileData = {
  personalInfo: {
    name: 'Carlos Villagran Gatica',
    title: 'Desarrollador de software, Sénior Full-stack Developer',
    aboutMe:
      'Desde que tuve mi primer Nintendo de niño, supe que la tecnología era mi camino. Esa pasión me llevó a estudiar Ingeniería en Informática, donde no solo destaqué académicamente, sino que también fui organizador de eventos como Microsoft Student Partner. Mi carrera profecional comenzó en Stericycle, una empresa internacional en gestión de residuos biosanitarios con sede en Chile en el cual forme parte del equipo de desarrollo, desempeñándome en funciones de QA Tester para proyectos en India. Más tarde, me uní al Ejército de Chile, donde trabajé en el desarrollo del sistema core para la gestión del personal militar, un software clave que centraliza información crítica como calificaciones, sanciones, estudios y desempeño. Actualmente, soy Desarrollador Full Stack en ISAPRE Consalud, donde formo parte de un equipo ágil, multidisciplinario y autogestionado. Aquí he consolidado mis habilidades en metodologías ágiles, desarrollo de software en distintas plataformas y tecnologías. Más allá de la parte técnica, me destaco por mis habilidades interpersonales: conecto fácilmente con las personas, sé comunicar temas complejos con claridad y siempre me enfoco en la solución antes que en el problema. Siempre en búsqueda de nuevos desafíos y oportunidades para seguir creciendo.'
  },
  experience: [
    {
      company: 'Isapre Banmédica',
      icon: '🏢',
      role: 'Desarrollador Full Stack Senior',
      period: 'jul. 2025 - actualidad',
      location: 'Las Condes, Región Metropolitana de Santiago, Chile',
      type: 'Híbrido',
      description: 'Desarrollo y mantenimiento de sistemas internos, creación de APIs, optimización de procesos backend y apoyo técnico a equipos de desarrollo.'
    },
    {
      company: 'Isapre Consalud',
      icon: '🏥',
      role: 'Desarrollador Sénior Back-End',
      period: 'ago. 2021 - jun. 2025',
      location: 'Santiago, Región Metropolitana de Santiago, Chile',
      description: 'Desarrollo de soluciones backend, optimización de bases de datos, creación de servicios y soporte a sistemas críticos de la organización.'
    },
    {
      company: 'Ejército de Chile',
      icon: '🪖',
      role: 'Ingeniero en Informática',
      period: 'ene. 2018 - oct. 2021',
      location: 'Santiago, Región Metropolitana de Santiago, Chile',
      description: 'Desarrollo y mantenimiento de aplicaciones internas, gestión de bases de datos y soporte a sistemas institucionales.'
    },
    {
      company: 'Stericycle',
      icon: '♻️',
      role: 'Desarrollador / QA Tester',
      period: 'jul. 2016 - jul. 2017',
      location: 'Provincia de Valparaíso - Viña del mar, Chile',
      description: 'Seguimiento de aplicaciones construidas en el extranjero realizando validaciones como QA Tester.'
    },
    {
      company: 'Falabella Retail',
      icon: '🛒',
      role: 'Vendedor de Computación y Electrónica',
      period: 'ago. 2013 - ene. 2016',
      location: 'Chillán, Chile',
      description: 'Asesoría a clientes, venta de productos electrónicos, apoyo en retail y cumplimiento de metas comerciales.'
    }
  ],
  education: [
    {
      institution: 'Microsoft / Universidad Tecnológica de Chile',
      degree: 'Estudiante de Ingenieria',
      period: '2011 - 2015',
      activities:
        'Microsoft Student Partner (MSP) 2011–2015, expositor de nuevas tecnologías Microsoft, guía en Microsoft Virtual Academy y representante Active Manager Microsoft Office 365 año 2015.'
    },
    {
      institution: 'Universidad Tecnológica de Chile',
      degree: 'Titulado Ingeniero en Informática',
      period: '2011 - 2016',
      activities: ''
    },
    {
      institution: 'Oracle',
      degree: 'Oracle Database 12c R2: SQL and PL/SQL Fundamentals Ed 2 LVC PRV',
      period: 'oct. 2020',
      activities: 'ID de la credencial: 9491118'
    },
    {
      institution: 'CertiProf',
      degree: 'SCRUM FOUNDATION PROFESSIONAL CERTIFICATE',
      period: 'abr. 2019',
      activities: 'ID de la credencial: 31555371673312'
    },
    {
      institution: 'keep learning',
      degree: 'Contabilidad básica'
    },
    {
      institution: 'Universidad Tecnológica de Chile, Sede Chillán',
      degree: 'Ingeniero en Informática',
      activities:
        'Guía informático en taller Microsoft Virtual Academy 2014, alumno destacado área informática 2013-2014.'
    },
    {
      institution: 'Cisco Networking Academy',
      degree:
        'CCNA: Network fundamentals, Ingeniería informática'
    },
    {
      institution: 'Cisco Networking Academy',
      degree:
        'IT Essentials: PC hardware and software, Ingeniería informática'
    }
  ],
  skills: [
    'C#',
    'Oracle SQL',
    'PL/SQL',
    'Angular',
    'APIs REST',
    'Trabajo en equipo',
    'Transformación digital',
    'Capacidad de análisis'
  ],
  certifications: [
    {
      name: 'Oracle Database 12c R2: SQL and PL/SQL Fundamentals Ed 2 LVC PRV',
      issuer: 'Oracle',
      date: 'oct. 2020',
      credentialId: '9491118'
    },
    {
      name: 'SCRUM FOUNDATION PROFESSIONAL CERTIFICATE',
      issuer: 'CertiProf',
      date: 'abr. 2019',
      credentialId: '31555371673312'
    },
    { name: 'Contabilidad básica', issuer: 'keep learning' }
  ]
};
