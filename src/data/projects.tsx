/* eslint-disable global-require */

import { sortBy } from '@site/src/utils/jsUtils';
import { Project } from '@site/src/shared/dto/Project';

// prettier-ignore
const PROJECTS: Project[] = [
  {
    title: 'Simple Paint',
    description: 'A simple paint app made with Windows Forms and C#.',
    // preview: require('./showcase/agilets.png'),
    preview: null,
    website: 'https://YourName.github.io/SimplePaint',
    source: 'https://github.com/YourName/SimplePaint',
    tags: ['favorite', 'courseproject'],
  },
  {
    title: 'YourName',
    description: 'My public template for GitHub profile page.',
    // preview: require('./showcase/aispeaker.png'),
    preview: null,
    website: 'https://github.com/YourName',
    source: 'https://github.com/YourName/YourName',
    tags: ['favorite', 'personal'],
  },
  {
    title: 'Game Oggy',
    description: 'A simple game made with Windows Forms and C#, inspired by Oggy and the Cockroaches.',
    // preview: require('./showcase/aide_jeune.png'),
    preview: null,
    website: 'https://YourName.github.io/OGGY/',
    source: 'https://github.com/YourName/OGGY',
    tags: ['favorite', 'courseproject'],
  },
  {
    title: 'x2mint',
    description: 'A graduration project, which is a website for creating and taking tests online with MERN stack, inspired by kahoot.it.',
    // preview: require('./showcase/algolia.png'),
    preview: null,
    website: 'https://x2mint.vercel.app',
    source: 'https://github.com/YourName/x2mint',
    tags: ['favorite', 'courseproject'],
  },
  {
    title: 'Portfolio',
    description: 'My portfolio website, made with ReactJS and Docuaurus.',
    // preview: require('./showcase/astronomer.png'),
    preview: null,
    website: 'https://YourName.github.io',
    source: 'https://github.com/YourName/YourName.github.io',
    tags: ['favorite', 'personal', 'opensource'],
  },
  {
    title: 'Tetris',
    description: 'A simple Tetris game made with C++',
    preview: null,
    website: 'https://YourName.github.io/Tetris-Cpp/',
    source: 'https://github.com/YourName/Tetris-Cpp',
    tags: ['opensource', 'courseproject'],
  },
];

function sortProjects() {
  let result = PROJECTS;
  // Sort by site name
  result = sortBy(result, (project) => project.title.toLowerCase());
  
  // Sort by favorite tag, favorites first
  result = sortBy(result, (project) => !project.tags.includes('favorite'));
  return result;
}

export const sortedProjects = sortProjects();
