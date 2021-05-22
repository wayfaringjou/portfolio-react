import {
  mdiAws,
  mdiBash,
  mdiConsole,
  mdiGithub,
  mdiGraphql,
  mdiLanguageCss3,
  mdiLanguageHtml5,
  mdiLanguageJavascript,
  mdiLanguageTypescript,
  mdiMicrosoftVisualStudioCode,
  mdiNodejs,
  mdiNpm,
  mdiReact,
  mdiSass,
  mdiServer,
  mdiTools,
  mdiXml,
} from '@mdi/js';

const skillset = {
  frontend: {
    area: 'Front-End Developer',
    icon: mdiXml,
    description: `I look for ways to combine structure, function, and design 
    to communicate effectively and engage the user.`,
    tech: [
      { icon: mdiLanguageHtml5, name: 'HTML' },
      { icon: mdiLanguageCss3, name: 'CSS' },
      { icon: mdiSass, name: 'Sass' },
      { icon: mdiLanguageJavascript, name: 'Javascript' },
      { icon: mdiLanguageTypescript, name: 'Typescript' },
      { icon: mdiReact, name: 'React' },
    ],
  },
  backend: {
    area: 'Back-End Developer',
    icon: mdiServer,
    description: `When it comes to designing APIs or database schemas, I 
    work for solutions that are scalable, fast and secure.`,
    tech: [
      { icon: mdiNodejs, name: 'Node.js' },
      { icon: '', name: 'Express' },
      { icon: mdiGraphql, name: 'GraphQl' },
      { icon: '', name: 'PostgreSQL' },
    ],
  },
  other: {
    area: 'Other Tools',
    icon: mdiTools,
    description: `I love technology and working with all kinds of
    environments and tools.`,
    tech: [
      { icon: mdiGithub, name: 'GitHub' },
      { icon: mdiConsole, name: 'CLI' },
      { icon: mdiBash, name: 'Bash' },
      { icon: mdiNpm, name: 'NPM' },
      { icon: mdiAws, name: 'AWS' },
      { icon: mdiMicrosoftVisualStudioCode, name: 'VS Code' },
      { icon: '', name: 'Figma' },
      { icon: '', name: 'Inkscape' },
      { icon: '', name: 'Gimp' },
    ],
  },
};

export default skillset;
