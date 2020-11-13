import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'William | Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hello, my name is',
  name: 'William,',
  subtitle: 'developer-in-training.',
  cta: 'See more',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  //WHERE TF IS THE IMAGE
  paragraphOne: 'NYU graduate, video game enthusiast, and soon-to-be web developer.',
  paragraphTwo: 'Writer.',
  paragraphThree: 'Test prep tutor.',
  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'YelpCamp',
    info: 'Sample project made through a web development course.',
    info2: 'Repo coming soon!',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'Game Project',
    info: "If nothing ends up here, assume I've given up.",
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: "Let's get in touch.",
  btn: 'Contact me',
  email: 'williamadenning@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'codepen',
      url: 'https://codepen.io/wdenning',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/williamadenning/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/wdenning',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
