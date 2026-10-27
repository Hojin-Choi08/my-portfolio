// All site content lives here. Edit text freely — components read from this file.
// Empty strings ("") hide the related button/link/logo.
// NOTE: this file is also imported by vite.config.js (for SEO tags), so keep it
// plain data — no asset imports.
//
// Structure:
//   - `shared*` constants: things that are the same in every language (links,
//     image paths, colors, tags). Edit them once here.
//   - `content.en` / `content.ko`: all visible text, one full copy per language.

// TODO: replace with your real domain (no trailing slash) before deploying.
export const SITE_URL = 'https://hojinchoi.vercel.app';

export const languages = [
  { code: 'en', label: 'EN', name: 'English', flag: 'us' },
  { code: 'ko', label: 'KO', name: '한국어', flag: 'kr' },
];
export const defaultLanguage = 'en';

// ---------------------------------------------------------------------------
// Shared (language-independent)
// ---------------------------------------------------------------------------

const sharedProfile = {
  photo: '/HojinChoiProfilePhoto1.jpg', // path in /public
  email: 'hojin.choi0620@gmail.com',
  // Drop resume.pdf into /public, then set this to '/resume.pdf'.
  resume: '/resume.pdf',
};

export const links = {
  github: 'https://github.com/Hojin-Choi08',
  linkedin: 'https://www.linkedin.com/in/Hojin-Choi08',
};

// Tech names double as icon keys — see src/data/stackIcons.js.
const sharedStack = {
  frontend: ['JavaScript', 'Vue.js', 'Nuxt', 'React', 'Tailwind CSS'],
  backend: ['Python', 'FastAPI', 'Azure Functions'],
  data: ['Supabase', 'PostgreSQL', 'Azure Table / Blob Storage'],
  tools: ['Git', 'Vercel', 'Cloudflare Pages', 'Unreal Engine'],
};

// logo: small app icon shown next to the title, e.g. '/projects/logos/hojicha.svg'
// color: panel color — hojicha | matcha | latte | coral
const sharedProjects = {
  campusshare: {
    id: 'campusshare',
    color: 'hojicha',
    image: '/projects/campusshare.jpg',
    logo: '',
    tags: ['Vue 3', 'Azure Functions', 'Python', 'Azure Storage', 'Cloudflare Pages', 'Stripe'],
    live: 'https://campusshare.northwestu.dev',
    github: '',
  },
  hojicha: {
    id: 'hojicha',
    color: 'matcha',
    image: '/projects/hojicha.jpg',
    logo: '',
    tags: ['Vue', 'Python', 'Azure', 'Cloudflare'],
    live: 'https://hojicha.northwestu.dev',
    github: '',
  },
  ttabom: {
    id: 'ttabom',
    color: 'latte',
    image: '/projects/ttabom.jpg',
    logo: '',
    tags: ['Nuxt', 'Tailwind CSS', 'FastAPI', 'Supabase', 'Vercel'],
    live: 'https://ttabom-frontend.vercel.app/prototype',
    github: '',
  },
};

// ---------------------------------------------------------------------------
// English
// ---------------------------------------------------------------------------

const en = {
  seo: {
    title: 'Hojin Choi — Full Stack Developer',
    description:
      'Portfolio of Hojin Choi, a full-stack developer and CS senior at Northwest University building web apps with Vue, React, Python and Azure.',
    ogImage: '/og-image.png', // path in /public; made absolute with SITE_URL
  },

  profile: {
    ...sharedProfile,
    firstName: 'Hojin',
    lastName: 'Choi',
    label: 'Portfolio — Class of 2026 — Full-Stack Developer',
    tagline: 'Full-stack developer, slow-steeped.',
    intro: 'CS senior at Northwest University, building web apps from the database to the last pixel.',
    location: 'Kirkland, WA', // shown in the footer
    photoAlt: 'Portrait of Hojin Choi',
  },

  // Sections in page order. `label` is the nav text; sections are numbered
  // automatically ("No. 01 — About"); `subtitle` is the italic line under the title.
  sections: [
    { id: 'about', label: 'About', title: 'About', subtitle: 'A little about me.' },
    { id: 'skills', label: 'Skills', title: 'Skills', subtitle: 'How I like to work.' },
    { id: 'projects', label: 'Work', title: 'Work', subtitle: 'Selected projects, steeped slowly.' },
    { id: 'contact', label: 'Contact', title: 'Contact', subtitle: "Let's work together." },
  ],

  about: {
    // TODO: edit this draft.
    bio: [
      "I'm a Computer Science senior at Northwest University, graduating in December 2026. I build full-stack web apps end to end — from the database and serverless APIs to the interface people actually click on.",
      'Lately that has meant a campus item-sharing platform, a gamified to-do app, and a banking app built in a weekend hackathon. Outside the web, I like experimenting with game development in Unreal Engine.',
    ],
    stackLabel: 'The menu — tech I work with',
    stack: [
      { group: 'Frontend', items: sharedStack.frontend },
      { group: 'Backend', items: sharedStack.backend },
      { group: 'Data', items: sharedStack.data },
      { group: 'Tools', items: sharedStack.tools },
    ],
  },

  skills: [
    {
      title: 'Problem Solving',
      description: 'I break fuzzy problems into small, testable pieces and work through them until they ship.',
    },
    {
      title: 'Collaboration',
      description: 'I work well in teams under pressure, from hackathon sprints to shared codebases with code review.',
    },
    {
      title: 'Communication',
      description: 'I explain technical decisions clearly to teammates, users and non-technical stakeholders alike.',
    },
  ],

  projects: [
    {
      ...sharedProjects.campusshare,
      title: 'CampusShare',
      kicker: 'Capstone — Solo — 2026',
      tagline: 'Borrow it from someone down the hall.',
      imageAlt: 'Screenshot of the CampusShare item listing page',
      summary:
        'A campus item-sharing platform for Northwest University students. Built solo as my capstone, it lets students lend and borrow items with verified accounts and a trust score.',
      details: {
        problem:
          'Students often need things for a short time — a calculator, a camping stove, a monitor — but there was no trusted, campus-only way to borrow them from each other.',
        role: 'Solo developer (capstone): product design, frontend, serverless backend, storage and deployment.',
        features: [
          '.edu email verification with JWT authentication',
          'Borrow request flow with approval and return tracking',
          'Trust score based on borrowing history',
          'Barcode scanning to check items in and out',
          'Admin dashboard for moderation',
          'Stripe Checkout integration',
        ],
      },
    },
    {
      ...sharedProjects.hojicha,
      title: 'Hojicha',
      kicker: 'Side project — Solo',
      tagline: 'Finish a task, brew a drink.',
      imageAlt: 'Screenshot of the Hojicha to-do app showing a brewed drink',
      summary:
        'A gamified to-do app where finishing tasks brews drinks. You level up as a barista and unlock new recipes as you stay productive.',
      details: {
        // TODO: edit
        problem:
          'Plain to-do lists are easy to abandon. I wanted the reward loop of a game to make finishing everyday tasks feel satisfying.',
        role: 'Solo developer: game design, frontend, backend and deployment.',
        features: [
          'XP and barista levels earned by completing tasks',
          'Recipe unlocks as you level up',
          'Calendar view of tasks',
          'Friends list',
          'Email notifications',
        ],
      },
    },
    {
      ...sharedProjects.ttabom,
      title: 'ttabom',
      kicker: 'FinTech Husky Hack — UW Tacoma — 2026',
      tagline: 'A bank in a weekend.',
      imageAlt: 'Screenshot of the ttabom digital banking dashboard',
      summary:
        'A digital-banking-style web app built at FinTech Husky Hack (UW Tacoma, 2026). It brings account overviews and money management into a clean, mobile-friendly interface.',
      details: {
        // TODO: edit
        problem:
          'Built in a hackathon timeframe: deliver a convincing digital-banking experience with real auth and data, fast.',
        role: 'Team member at FinTech Husky Hack 2026 — TODO: describe your part.',
        features: [
          'Account overview dashboard',
          'FastAPI backend with Supabase (PostgreSQL) data',
          'Responsive Nuxt + Tailwind UI',
          'Deployed on Vercel',
        ],
      },
    },
  ],

  contact: {
    blurb:
      "I'm looking for full-stack roles starting after December 2026. Have a project, a question or just want to say hi? Send me a message.",
  },

  // Small interface strings
  ui: {
    skipToContent: 'Skip to content',
    backToTop: 'back to top',
    menuOpen: 'Menu +',
    menuClose: 'Close ×',
    language: 'Language',
    no: 'No.',
    fig: 'Fig. 1',
    plate: 'Plate',
    opensInNewTab: 'opens in new tab',
    downloadResume: 'Download resume',
    live: 'Live',
    code: 'Code',
    details: 'Details',
    close: 'Close',
    builtWith: 'Built with',
    problem: 'Problem',
    role: 'My role',
    features: 'Key features',
    writeDirectly: 'Or write directly',
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message →',
      sending: 'Sending…',
      success: 'Thank you — your message is on its way.',
      error: 'Something went wrong. Please try again, or email me directly.',
    },
    brewedIn: 'Brewed in',
  },
};

// ---------------------------------------------------------------------------
// Korean — TODO(ko): currently a copy of the English text. Translate each
// string in place; links, images and tags come from the shared block above.
// ---------------------------------------------------------------------------

const ko = {
  seo: en.seo, // SEO tags are generated from English at build time

  profile: {
    ...sharedProfile,
    firstName: 'Hojin', // TODO(ko): e.g. '호진'
    lastName: 'Choi', // TODO(ko): e.g. '최'
    label: 'Portfolio — Class of 2026 — Full-Stack Developer', // TODO(ko)
    tagline: 'Full-stack developer, slow-steeped.', // TODO(ko)
    intro: 'CS senior at Northwest University, building web apps from the database to the last pixel.', // TODO(ko)
    location: 'Kirkland, WA', // TODO(ko)
    photoAlt: 'Portrait of Hojin Choi', // TODO(ko)
  },

  // TODO(ko)
  sections: [
    { id: 'about', label: 'About', title: 'About', subtitle: 'A little about me.' },
    { id: 'skills', label: 'Skills', title: 'Skills', subtitle: 'How I like to work.' },
    { id: 'projects', label: 'Work', title: 'Work', subtitle: 'Selected projects, steeped slowly.' },
    { id: 'contact', label: 'Contact', title: 'Contact', subtitle: "Let's work together." },
  ],

  about: {
    // TODO(ko)
    bio: [
      "I'm a Computer Science senior at Northwest University, graduating in December 2026. I build full-stack web apps end to end — from the database and serverless APIs to the interface people actually click on.",
      'Lately that has meant a campus item-sharing platform, a gamified to-do app, and a banking app built in a weekend hackathon. Outside the web, I like experimenting with game development in Unreal Engine.',
    ],
    stackLabel: 'The menu — tech I work with', // TODO(ko)
    stack: [
      { group: 'Frontend', items: sharedStack.frontend }, // TODO(ko): group names
      { group: 'Backend', items: sharedStack.backend },
      { group: 'Data', items: sharedStack.data },
      { group: 'Tools', items: sharedStack.tools },
    ],
  },

  // TODO(ko)
  skills: [
    {
      title: 'Problem Solving',
      description: 'I break fuzzy problems into small, testable pieces and work through them until they ship.',
    },
    {
      title: 'Collaboration',
      description: 'I work well in teams under pressure, from hackathon sprints to shared codebases with code review.',
    },
    {
      title: 'Communication',
      description: 'I explain technical decisions clearly to teammates, users and non-technical stakeholders alike.',
    },
  ],

  // TODO(ko)
  projects: [
    {
      ...sharedProjects.campusshare,
      title: 'CampusShare',
      kicker: 'Capstone — Solo — 2026',
      tagline: 'Borrow it from someone down the hall.',
      imageAlt: 'Screenshot of the CampusShare item listing page',
      summary:
        'A campus item-sharing platform for Northwest University students. Built solo as my capstone, it lets students lend and borrow items with verified accounts and a trust score.',
      details: {
        problem:
          'Students often need things for a short time — a calculator, a camping stove, a monitor — but there was no trusted, campus-only way to borrow them from each other.',
        role: 'Solo developer (capstone): product design, frontend, serverless backend, storage and deployment.',
        features: [
          '.edu email verification with JWT authentication',
          'Borrow request flow with approval and return tracking',
          'Trust score based on borrowing history',
          'Barcode scanning to check items in and out',
          'Admin dashboard for moderation',
          'Stripe Checkout integration',
        ],
      },
    },
    {
      ...sharedProjects.hojicha,
      title: 'Hojicha',
      kicker: 'Side project — Solo',
      tagline: 'Finish a task, brew a drink.',
      imageAlt: 'Screenshot of the Hojicha to-do app showing a brewed drink',
      summary:
        'A gamified to-do app where finishing tasks brews drinks. You level up as a barista and unlock new recipes as you stay productive.',
      details: {
        problem:
          'Plain to-do lists are easy to abandon. I wanted the reward loop of a game to make finishing everyday tasks feel satisfying.',
        role: 'Solo developer: game design, frontend, backend and deployment.',
        features: [
          'XP and barista levels earned by completing tasks',
          'Recipe unlocks as you level up',
          'Calendar view of tasks',
          'Friends list',
          'Email notifications',
        ],
      },
    },
    {
      ...sharedProjects.ttabom,
      title: 'ttabom',
      kicker: 'FinTech Husky Hack — UW Tacoma — 2026',
      tagline: 'A bank in a weekend.',
      imageAlt: 'Screenshot of the ttabom digital banking dashboard',
      summary:
        'A digital-banking-style web app built at FinTech Husky Hack (UW Tacoma, 2026). It brings account overviews and money management into a clean, mobile-friendly interface.',
      details: {
        problem:
          'Built in a hackathon timeframe: deliver a convincing digital-banking experience with real auth and data, fast.',
        role: 'Team member at FinTech Husky Hack 2026 — TODO: describe your part.',
        features: [
          'Account overview dashboard',
          'FastAPI backend with Supabase (PostgreSQL) data',
          'Responsive Nuxt + Tailwind UI',
          'Deployed on Vercel',
        ],
      },
    },
  ],

  contact: {
    // TODO(ko)
    blurb:
      "I'm looking for full-stack roles starting after December 2026. Have a project, a question or just want to say hi? Send me a message.",
  },

  // TODO(ko)
  ui: {
    skipToContent: 'Skip to content',
    backToTop: 'back to top',
    menuOpen: 'Menu +',
    menuClose: 'Close ×',
    language: 'Language',
    no: 'No.',
    fig: 'Fig. 1',
    plate: 'Plate',
    opensInNewTab: 'opens in new tab',
    downloadResume: 'Download resume',
    live: 'Live',
    code: 'Code',
    details: 'Details',
    close: 'Close',
    builtWith: 'Built with',
    problem: 'Problem',
    role: 'My role',
    features: 'Key features',
    writeDirectly: 'Or write directly',
    form: {
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message →',
      sending: 'Sending…',
      success: 'Thank you — your message is on its way.',
      error: 'Something went wrong. Please try again, or email me directly.',
    },
    brewedIn: 'Brewed in',
  },
};

export const content = { en, ko };
