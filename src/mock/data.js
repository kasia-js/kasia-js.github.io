import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Portfolio website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'My name is',
  name: 'Katarzyna',
  subtitle: 'I am a Software Developer',
  cta:
    'I love to create beautiful, functional things that I can be proud of. To me programming is like a superpower, it allows us to bring the most amazing ideas to life and make a true difference.',
};

// ABOUT DATA
export const aboutData = {
  img: 'photo.jpg',
  paragraphOne:
    'I am a full-stack software developer specializing in the JavaScript ecosystem with a background in Civil & Structural Engineering.',
  paragraphTwo:
    'I have built things primarily with: React, JavaScript, TypeScript, Node.js, Express, Koa, Apollo, GraphQL, MongoDB, SQL, Bootsrap, MaterialUI, CSS, HTML, Jest. However, as a chartered Project Manager and experienced engineer, I can easily adapt to a new environment and pick up new skills.',
  paragraphThree:
    'When I do not code, I enjoy my free time with family and friends. I love sport, especially tennis, surfing, snowboarding, and horse riding. ',
  resume: 'https://kasia-js.github.io/resume/', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'screenshotsElit.jpg',
    title: 'Elit',
    info:
      'Elit is a web app created to provide a platform for developers to connect.create.collaborate(). Users log in with their GitHub account to find people to collaborate on their projects or join others to help them.',
    info2:
      'Tech stack: React, Redux, Apollo-GraphQL, Sequelize, PostgreSQL, Material UI, Bootstrap, Formik.',
    url: 'https://github.com/kasia-js/elit',
    repo: 'https://kasia-js.github.io/websiteInConsruction/',
  },
  {
    id: nanoid(),
    img: 'Screenshot.jpg',
    title: 'TodayFacts',
    info:
      'A web app created to provide information about events around the world on a given date. When a user opens the site, the facts of today are displayed. Then the user can search for any other date, select the most popular date from the cloud tag provided, and add facts to favorites.',
    info2:
      'Tech-stack: React, JavaScript, Node.js, Express, MongoDB, Mongoose, HTML, Bootstrap, CSS.',
    url: 'https://github.com/kasia-js/TodayFacts',
    repo: 'https://today-facts.herokuapp.com/#', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Movieflix.jpg',
    title: 'Movie Gallery',
    info: 'A front-end web app displaying movies using Heroku API.',
    info2: 'Tech-stack: React, JavaScript, MaterialUI, HTML, CSS.',
    url: 'https://github.com/kasia-js/react-gallery',
    repo: 'https://kasia-js.github.io/websiteInConsruction/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Navbar.jpg',
    title: 'React Navbar Library Component',
    info:
      'navigation-bar-component-for-react is a simple and customizable component to quickly create a navigation bar for your React UI.',
    info2: 'Tech stack: Typescript, React, Jest, CSS, HTML.',
    url: 'https://github.com/kasia-js/KHMNavBar',
    repo: 'https://kasia-js.github.io/websiteInConsruction/', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Would you like to work with me? Awesome!',
  btn: 'Send message',
  email: 'kolnykatarzyna@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/katarzyna-kolny-8b3384b9/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kasia-js',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
