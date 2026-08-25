/* =========================================================================
   Bilingual layer - English (en) / Gaeilge (ga)
   UI strings live here; page content lives in data.js under each item's
   `ga` block. Values may contain inline HTML and are injected with
   innerHTML - they are author-written constants, never user input.
   ========================================================================= */

const LANGS = ['en', 'ga'];
const LANG_KEY = 'lang';

const STRINGS = {
  en: {
    'meta.title': 'Kyle Joyce - Software Engineer',
    'meta.desc': "Kyle Joyce (Kyle Ó Seoighe) - software engineer from Cork, Ireland. From bare-metal C device drivers to Unity simulations and full-stack web. Immersive Software Engineering @ University of Limerick.",

    'a11y.skip': 'Skip to content',
    'a11y.home': 'Home',
    'a11y.primaryNav': 'Primary',
    'a11y.theme': 'Toggle light and dark theme',
    'a11y.menu': 'Toggle menu',
    'a11y.lang': 'Athraigh go Gaeilge - switch to Irish',
    'a11y.scroll': 'Scroll to about',

    'nav.name': 'Kyle&nbsp;Joyce',
    'nav.about': 'About',
    'nav.work': 'Work',
    'nav.skills': 'Skills',
    'nav.journey': 'Journey',
    'nav.contact': 'Contact',

    'hero.location': 'Cork City, Ireland',
    'hero.available': '· Available for collaboration',
    'hero.name': 'Kyle Joyce',
    'hero.nameAlt': 'Kyle&nbsp;Ó&nbsp;Seoighe',
    'hero.lead': 'Software engineer working from bare-metal <strong>C device drivers</strong> up to <strong>Unity simulations</strong> and <strong>full-stack web</strong>. Currently on the <strong>Immersive Software Engineering</strong> MSc at the University of Limerick.',
    'hero.ctaWork': 'View my work',
    'hero.ctaContact': 'Get in touch',
    'hero.statCoded': 'languages coded',
    'hero.statProjects': 'featured projects',
    'hero.statSpoken': 'languages spoken',

    'about.title': 'About',
    'about.p1': "Born and raised in <strong>Cork city</strong>, I'm a software engineering student on the <strong>Immersive Software Engineering (MSc)</strong> programme at the University of Limerick, where the focus is as much on entrepreneurship and communication as it is on code.",
    'about.p2': "I like working across the whole stack of computing - one week it's a <strong>Linux device driver in C</strong>, the next it's a <strong>Unity physics simulation</strong>, a <strong>React front-end</strong>, or routing a <strong>PCB for a rocket flight computer</strong>. I got my start teaching younger students to code at CoderDojo, and I still love breaking hard ideas down into simple ones.",
    'about.p3': "I'm a fluent Irish speaker and currently building <strong>Ardán</strong>, a social platform for the language. I'm also a qualified sailing instructor, teaching out of Monkstown Bay and Cove Sailing Club.",
    'about.basedKey': 'Based in',
    'about.basedVal': 'Cork, Ireland',
    'about.studyKey': 'Studying',
    'about.studyVal': 'BSc/MSc · ISE@UL',
    'about.focusKey': 'Focus',
    'about.focusVal': 'Systems · Web · Games',
    'about.speaksKey': 'Speaks',
    'about.speaksVal': 'English · Gaeilge · Español',
    'about.nowKey': 'Currently',
    'about.nowVal': 'Intern at Examinaite in Dogpatch Labs',

    'work.title': 'Selected work',
    'work.sub': "What I've been building.",

    'skills.title': 'Skills &amp; tools',

    'journey.title': 'The journey so far',
    'journey.beyond': 'A few other things',

    'contact.title': "Let's build something.",
    'contact.lead': 'Open to internships, collaborations and interesting problems - especially anything touching systems, hardware, games or the Irish language.',
    'contact.email': 'Email me',

    'footer.made': 'Built by hand - just not mine. Thanks, Claude!'
  },

  ga: {
    'meta.title': 'Kyle Ó Seoighe - Innealtóir Bogearraí',
    'meta.desc': 'Kyle Ó Seoighe (Kyle Joyce) - innealtóir bogearraí as Corcaigh, Éire. Ó thiománaithe gléis C ar an lom-mhiotal go hinsamhaltaí Unity agus forbairt ghréasáin iomlán. Immersive Software Engineering @ Ollscoil Luimnigh.',

    'a11y.skip': 'Téigh go dtí an t-ábhar',
    'a11y.home': 'Baile',
    'a11y.primaryNav': 'Príomhnascleanúint',
    'a11y.theme': 'Athraigh idir an téama sorcha agus dorcha',
    'a11y.menu': 'Oscail nó dún an roghchlár',
    'a11y.lang': 'Switch to English - athraigh go Béarla',
    'a11y.scroll': 'Scrollaigh síos go dtí Fúm',

    'nav.name': 'Kyle&nbsp;Ó&nbsp;Seoighe',
    'nav.about': 'Fúm',
    'nav.work': 'Obair',
    'nav.skills': 'Scileanna',
    'nav.journey': 'Turas',
    'nav.contact': 'Teagmháil',

    'hero.location': 'Cathair Chorcaí, Éire',
    'hero.available': '· Ar fáil le haghaidh comhoibrithe',
    'hero.name': 'Kyle&nbsp;Ó&nbsp;Seoighe',
    'hero.nameAlt': 'Kyle Joyce',
    'hero.lead': 'Innealtóir bogearraí a oibríonn ó <strong>thiománaithe gléis C</strong> ar an lom-mhiotal aníos go <strong>hinsamhaltaí Unity</strong> agus <strong>forbairt ghréasáin iomlán</strong>. Faoi láthair i mbun an MSc <strong>Immersive Software Engineering</strong> in Ollscoil Luimnigh.',
    'hero.ctaWork': 'Féach ar mo chuid oibre',
    'hero.ctaContact': 'Déan teagmháil',
    'hero.statCoded': 'teanga ríomhchláraithe',
    'hero.statProjects': 'tionscadal roghnaithe',
    'hero.statSpoken': 'teanga labhartha',

    'about.title': 'Fúm',
    'about.p1': 'Rugadh agus tógadh i <strong>gcathair Chorcaí</strong> mé, agus is mac léinn innealtóireachta bogearraí mé ar an gclár <strong>Immersive Software Engineering (MSc)</strong> in Ollscoil Luimnigh, áit a bhfuil an bhéim ar fhiontraíocht agus ar chumarsáid chomh mór is atá sí ar an gcód.',
    'about.p2': 'Is maith liom obair a dhéanamh trasna na ríomhaireachta ar fad - seachtain amháin is <strong>tiománaí gléis Linux i C</strong> atá ann, an chéad cheann eile is <strong>insamhail fisice in Unity</strong> é, nó <strong>tosach React</strong>, nó <strong>PCB do ríomhaire eitilte roicéid</strong> a ródú. Thosaigh mé amach ag múineadh ríomhchlárúcháin do dhaltaí óga ag CoderDojo, agus is breá liom fós smaointe casta a bhriseadh síos ina gcinn shimplí.',
    'about.p3': 'Tá Gaeilge líofa agam agus táim ag tógáil <strong>Ardán</strong> faoi láthair, ardán sóisialta don teanga. Is teagascóir seoltóireachta cáilithe mé chomh maith, ag múineadh as Cuan Bhaile na Manach agus as Club Seoltóireachta an Chóibh.',
    'about.basedKey': 'Lonnaithe i',
    'about.basedVal': 'Corcaigh, Éire',
    'about.studyKey': 'Ag staidéar',
    'about.studyVal': 'BSc/MSc · ISE@UL',
    'about.focusKey': 'Fócas',
    'about.focusVal': 'Córais · Gréasán · Cluichí',
    'about.speaksKey': 'Teangacha',
    'about.speaksVal': 'Béarla · Gaeilge · Spáinnis',
    'about.nowKey': 'Faoi láthair',
    'about.nowVal': 'Intéirneach ag Examinaite i Dogpatch Labs',

    'work.title': 'Obair roghnaithe',
    'work.sub': 'An rud a bhí á thógáil agam.',

    'skills.title': 'Scileanna agus uirlisí',

    'journey.title': 'An turas go dtí seo',
    'journey.beyond': 'Cúpla rud eile',

    'contact.title': 'Tógaimis rud éigin.',
    'contact.lead': "Oscailte d'intéirnseachtaí, do chomhoibriú agus d'fhadhbanna suimiúla - go háirithe aon rud a bhaineann le córais, crua-earraí, cluichí nó an Ghaeilge.",
    'contact.email': 'Seol ríomhphost chugam',

    'footer.made': 'Tógtha de láimh - ach níorbh iad mo lámha féin iad. Go raibh maith agat, Claude!'
  }
};

/* Typed hero roles, per language */
const ROLES = {
  en: [
    { prefix: 'I build', text: 'systems software in C' },
    { prefix: 'I build', text: 'games & simulations' },
    { prefix: 'I build', text: 'full-stack web apps' },
    { prefix: 'I build', text: 'hardware & PCBs' },
    { prefix: 'Cruthaím', text: 'earraí as Gaeilge' }
  ],
  ga: [
    { prefix: 'Cruthaím', text: 'bogearraí córais i C' },
    { prefix: 'Cruthaím', text: 'cluichí agus insamhaltaí' },
    { prefix: 'Cruthaím', text: 'aipeanna gréasáin iomlána' },
    { prefix: 'Cruthaím', text: 'crua-earraí agus PCBanna' },
    { prefix: 'I build', text: 'things in English too' }
  ]
};

const I18N = {
  /* Current language - the early <head> script has already resolved and
     stamped it on <html>, so trust that as the single source of truth. */
  get current() {
    const l = document.documentElement.getAttribute('lang');
    return LANGS.indexOf(l) === -1 ? 'en' : l;
  },

  other(lang) {
    return lang === 'ga' ? 'en' : 'ga';
  },

  /* UI string lookup, falling back to English then to the key itself. */
  t(key, lang) {
    const l = lang || I18N.current;
    const dict = STRINGS[l] || STRINGS.en;
    return dict[key] !== undefined ? dict[key] : (STRINGS.en[key] !== undefined ? STRINGS.en[key] : key);
  },

  /* Field lookup on a data.js item: `item.ga.field` when in Irish and the
     translation exists, otherwise the untranslated English field. Proper
     nouns (project names, tech tags) are simply left out of the `ga` block. */
  f(item, field, lang) {
    const l = lang || I18N.current;
    if (l !== 'en' && item[l] && item[l][field] !== undefined) return item[l][field];
    return item[field];
  },

  /* Parallel array lookup, e.g. skill chips: falls back per-array, not per-item. */
  a(item, field, lang) {
    const v = I18N.f(item, field, lang);
    return Array.isArray(v) ? v : (item[field] || []);
  },

  roles(lang) {
    return ROLES[lang || I18N.current] || ROLES.en;
  },

  /* Walk the static markup and swap every tagged node/attribute. */
  applyStatic(lang) {
    const l = lang || I18N.current;
    document.documentElement.setAttribute('lang', l);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      el.innerHTML = I18N.t(el.getAttribute('data-i18n'), l);
    });
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      el.setAttribute('aria-label', I18N.t(el.getAttribute('data-i18n-aria'), l));
    });

    document.title = I18N.t('meta.title', l);
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute('content', I18N.t('meta.desc', l));
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', I18N.t('meta.title', l));
  },

  set(lang) {
    const l = LANGS.indexOf(lang) === -1 ? 'en' : lang;
    document.documentElement.setAttribute('lang', l);
    try { localStorage.setItem(LANG_KEY, l); } catch (e) { /* private mode */ }
    return l;
  }
};
