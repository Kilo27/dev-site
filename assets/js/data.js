/* =========================================================================
   Content data — curated from Kyle's GitHub (github.com/Kilo27) + resume.
   Edit here to update the site; markup is generated in main.js.
   ========================================================================= */

/* Inline SVG icons (stroke uses currentColor) */
const ICONS = {
  hand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M9 11V5.5a1.5 1.5 0 0 1 3 0V10m0-1V4.5a1.5 1.5 0 0 1 3 0V10m0-.5a1.5 1.5 0 0 1 3 0V15a6 6 0 0 1-6 6h-1.6a5 5 0 0 1-3.9-1.9l-3-3.7a1.6 1.6 0 0 1 2.4-2.1L9 15V6.5a1.5 1.5 0 0 1 3 0"/></svg>',
  sword: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 3H20v5.5L9.5 19 5 20l1-4.5L16.5 5"/><path d="m13 6 5 5M5 20l3.5-3.5M14 17l3 3 2-2-3-3"/></svg>',
  planet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="13" r="6"/><path d="M4.5 17c-1.6 1.7-2.5 3-2 3.6.9 1 5-1 9.3-4.6S19 8.3 18.4 7.5c-.5-.6-2 .2-4 1.6"/><circle cx="19" cy="5" r="1.2"/></svg>',
  cpu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 11h4v2h-4z" fill="currentColor" stroke="none"/><path d="M9 3v2M12 3v2M15 3v2M9 19v2M12 19v2M15 19v2M3 9h2M3 12h2M3 15h2M19 9h2M19 12h2M19 15h2"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4v16h16"/><path d="M8 15l3-4 3 2 5-7"/><circle cx="19" cy="6" r="1.3" fill="currentColor" stroke="none"/></svg>',
  chat: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 5h16v11H9l-4 4v-4H4z"/><path d="M8 10h8M8 13h5"/></svg>',
  rocket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3c3 1.5 5 4.5 5 9l-2.5 2.5h-5L7 11c0-4.5 2-7.5 5-8Z"/><circle cx="12" cy="9" r="1.6"/><path d="M9.5 14.5 7 17m7.5-2.5L17 17M10 19c-.5 1.5-2 2.5-2 2.5S8 20 8.5 18.5"/></svg>',
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.1-.75.4-1.27.73-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.28 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5Z"/></svg>',
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M8 7h9v9"/></svg>'
};

const PROJECTS = [
  {
    icon: 'hand',
    name: 'Leap Motion Device Driver',
    tagline: 'Control your machine with a wave of your hand',
    desc: 'A Linux device driver for the Ultraleap motion sensor that turns hand gestures into system commands — swipe to change volume, pinch to read memory usage, grab for uptime, and trace a circle to inspect your network interfaces. Written in C with a Makefile build and a userspace UI layer.',
    tags: ['C', 'Linux', 'Makefile', 'Ultraleap', 'Systems'],
    year: '2026',
    wide: true,
    links: [{ label: 'Source', url: 'https://github.com/Kilo27/device-driver', icon: 'github' }]
  },
  {
    icon: 'sword',
    name: 'The Forgotten Soldier',
    tagline: 'A 2D RPG engine, built from scratch in Java',
    desc: 'A tile-based adventure RPG in pure Java — rooms and sub-rooms, an inventory and combat system, NPCs with branching dialogue, sprite rendering with masks, and full save / load through object serialization.',
    tags: ['Java', 'Game Engine', 'OOP', 'Serialization'],
    year: '2025',
    links: [{ label: 'Source', url: 'https://github.com/Kilo27/The-Forgotten-Soldier', icon: 'github' }]
  },
  {
    icon: 'planet',
    name: 'Meteor Madness',
    tagline: 'NASA Space Apps 2025 · asteroid impact simulator',
    desc: 'Built at the NASA Space Apps Challenge in Athlone. A Unity simulation that procedurally generates the Earth — mesh, ocean and mantle — then pulls real Near-Earth-Object data to model asteroid trajectories and impacts, backed by a Python service and a companion web app.',
    tags: ['Unity', 'C#', 'ShaderLab', 'Python', 'NASA'],
    year: '2025',
    links: [{ label: 'Source', url: 'https://github.com/Kilo27/NASA_METEOR_MADNESS_4', icon: 'github' }]
  },
  {
    icon: 'cpu',
    name: 'SystemInfo',
    tagline: 'Your hardware at a glance, on any OS',
    desc: 'A cross-platform desktop app for Windows, macOS and Linux that surfaces detailed system information — CPU, cache, disk, GPU, network and OS — in a clean, navigable interface. Built with Java and Gradle.',
    tags: ['Java', 'Gradle', 'Cross-platform', 'Desktop'],
    year: '2025',
    links: [{ label: 'Source', url: 'https://github.com/Kilo27/SystemInfo', icon: 'github' }]
  },
  {
    icon: 'chart',
    name: 'Leaving Cert CS Project',
    tagline: 'Graded H1 · a full-stack prediction app',
    desc: 'My Leaving Certificate Computer Science project, awarded an H1. A React front-end paired with a Python back-end that web-scrapes data, generates predictions and reports on their accuracy — full-stack, end to end.',
    tags: ['React', 'Node.js', 'Python', 'Web Scraping'],
    year: '2025',
    links: [{ label: 'Source', url: 'https://github.com/Kilo27/LCCSproject', icon: 'github' }]
  },
  {
    icon: 'chat',
    name: 'Ardán',
    tagline: 'A social platform for the Irish language',
    desc: 'An Irish-language social media app born from a passion for language conservation — giving Gaeilge a modern, living space online. Currently in active development.',
    tags: ['React', 'Gaeilge', 'Social', 'In progress'],
    year: '2026',
    badge: 'In development',
    soon: true,
    links: [{ label: 'Coming soon', muted: true }]
  },
  {
    icon: 'rocket',
    name: 'Rocket Flight Computer',
    tagline: 'PCB & embedded software · bound for EuRoC',
    desc: 'Designing the schematics and routing the PCB for a rocket flight computer, targeting a launch at the European Rocketry Challenge (EuRoC) — bridging embedded software with real, physical hardware.',
    tags: ['PCB Design', 'Embedded', 'Hardware', 'C'],
    badge: 'In progress',
    soon: true,
    links: [{ label: 'In development', muted: true }]
  }
];

const SKILLS = [
  { title: 'Languages', items: ['Python', 'C', 'C++', 'Java', 'Kotlin', 'JavaScript'] },
  { title: 'Web', items: ['React', 'Node.js', 'HTML', 'CSS', 'REST'] },
  { title: 'Mobile', items: ['Android', 'Kotlin', 'Android Studio'] },
  { title: 'Systems & Hardware', items: ['Linux Drivers', 'Embedded C', 'PCB Design', 'Unity'] },
  { title: 'Tools & Practice', items: ['Git', 'GitHub', 'Gradle', 'Agile', 'Data Analysis'] },
  { title: 'Spoken', items: ['English', 'Gaeilge · fluent (TEG B2)', 'Español · conversational'] }
];

const TIMELINE = [
  {
    date: 'Sep 2025 — Present',
    title: 'MSc, Immersive Software Engineering',
    org: 'University of Limerick',
    desc: 'A residency-based programme blending deep software engineering with entrepreneurship and communication.'
  },
  {
    date: '2025',
    title: 'NASA Space Apps Challenge',
    org: 'Athlone, Ireland',
    desc: 'Built “Meteor Madness”, a Unity asteroid-impact simulator, over a hackathon weekend.'
  },
  {
    date: '2025',
    title: 'ACI Worldwide FooBar',
    org: 'Programming competition',
    desc: 'Progressed to Question 3 in ACI’s 2025 algorithmic challenge.'
  },
  {
    date: '2025',
    title: 'Leaving Certificate — 554 points',
    org: 'Gaelcholáiste Charraig Uí Leighin, Cork',
    desc: 'H1 in the Computer Science project; educated entirely through Irish.'
  },
  {
    date: 'Jan 2023 — Jun 2024',
    title: 'Coding Mentor',
    org: 'CoderDojo @ Cork Airport Business Park',
    desc: 'Taught beginner & intermediate Python, C++ and JavaScript, guiding students through hands-on challenges.'
  },
  {
    date: 'May 2023',
    title: 'Work Experience — IBM & Dell EMC',
    org: 'Cork',
    desc: 'Saw how IBM’s Cloud Pak for Security is built and how exploits are found and handled; toured Dell EMC end to end.'
  },
  {
    date: 'Oct 2022',
    title: 'Work Experience — Wunderman Thompson',
    org: 'Copenhagen, Denmark',
    desc: 'Watched global ad campaigns delivered across markets and languages for clients like Dell, Snapchat and Amazon.'
  }
];

const BEYOND = [
  { icon: '⛵', label: 'Sailing Instructor', note: 'Qualified · Monkstown Bay & Cove' },
  { icon: '🏴󠁩󠁥󠁣󠁿', label: 'Fluent Irish', note: 'TEG B2 · Maynooth' },
  { icon: '🗼', label: 'Tour Guide', note: 'Titanic Experience, Cobh' },
  { icon: '🏅', label: 'Gaisce Bronze', note: "President's Award" }
];
