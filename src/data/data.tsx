import {
  AcademicCapIcon, BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import testimonialImage from '../images/testimonial.webp';
import profilepic from '../images/willprofilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Will's Resume",
  description: "Resume site built with Will Li's React project",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Will Li.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Backend Software Engineer</strong> with more than five years of experience in internet industry. I am currently working at <strong className="text-stone-100">Temu</strong> which is a e-commerce company.
      </p>
      {/* <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time time, you can catch me training in <strong className="text-stone-100">Muay Thai</strong>,
        plucking my <strong className="text-stone-100">banjo</strong>, or exploring beautiful{' '}
        <strong className="text-stone-100">Vancouver Island</strong>.
      </p> */}
    </>
  ),
  actions: [
    // {
    //   href: '/assets/resume.pdf',
    //   text: 'Resume',
    //   primary: true,
    //   Icon: ArrowDownTrayIcon,
    // },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `A Senior Software Engineer with almost five years of experience in internet industry, specializing in designing and developing Microservice Which is high concurrency, high availability and high performance. A proven track record of being responsible for designing and developing Microservice systems from scratch. Good at using Agile management to improve software development lifecycle. Strong attention to detail, accuracy and time management. Interested in exploring new ideas and have a passion to make them happen.`,
  aboutItems: [
    {label: 'Location', text: 'Shanghai', Icon: MapIcon},
    {label: 'Work start year', text: '2019', Icon: CalendarIcon},
    {label: 'Nationality', text: 'China', Icon: FlagIcon},
    {label: 'Interests', text: 'Basketball, PUBG', Icon: SparklesIcon},
    {label: 'Study', text: 'Tongji University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'PDD Holdings Inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'Chinese',
        level: 10,
      },
      {
        name: 'English',
        level: 7,
      }
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'React',
        level: 4,
      },
      {
        name: 'Next.js',
        level: 4,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Java',
        level: 8,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'C#',
        level: 6,
      },
      {
        name: 'C++',
        level: 6,
      },
    ],
  },
  {
    name: 'Middleware',
    skills: [
      {
        name: 'MySQL',
        level: 8,
      },
      {
        name: 'NoSQL',
        level: 7,
      },
      {
        name: 'Cache',
        level: 7,
      },
      {
        name: 'MQ',
        level: 7,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: ' Match 2019',
    location: 'Tongji University',
    title: 'Master of Software Engineering',
    content: <p></p>,
  },
  {
    date: 'June 2015',
    location: 'Nanjing Institute of Technology',
    title: 'Bachelor of Vehicle Engineering',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2023 - Present',
    location: 'Temu',
    title: 'Senior Software Engineer',
    content: (
      <p>
        Be responsible for designing and developing many promotion backend microservice systems from scratch.
        Worked with product managers to provide an immersive shopping experience.
        Managed the daily scheduling of business requirements, technology evolution.
      </p>
    ),
  },
  {
    date: 'June 2020 - January 2023',
    location: 'PDD',
    title: 'Software Engineer',
    content: (
      <p>
        Maintained and enhanced the e-commerce activity system, including performance, optimization, reconstruction. 
        Supported million-lever qps, handling all kinds of high concurrency scenes, such as 618 Shooping Festival, Double Eleven Day. 
        Understand business requirements and communitated with team leader to make technical desicions.
      </p>
    ),
  },
  {
    date: 'July 2019 - October 2020',
    location: 'Trip.com',
    title: 'Software Engineer',
    content: (
      <p>
        Maintained the booking engine system for international air ticket. 
        Converted booking engine systems from C# to Java and TypeScript. 
        Migrated the database of booking engine systems from SQLSever to MySQL within schedule and budget constraints.
      </p>
    ),
  },
  {
    date: 'Match 2018 - December 2018',
    location: 'General Electric',
    title: 'C++ Software Engineer Intern',
    content: (
      <p>
        Participated in industry control software maintenance and development as a software engineer intern.
      </p>
    ),
  },
  


];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Here is a good spot for a message to your readers to let them know how best to reach out to you.',
  items: [
    {
      type: ContactType.Email,
      text: 'reachout@timbaker.me',
      href: 'mailto:reachout@timbaker.me',
    },
    {
      type: ContactType.Location,
      text: 'Victoria BC, Canada',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.Instagram,
      text: '@tbakerx',
      href: 'https://www.instagram.com/tbakerx/',
    },
    {
      type: ContactType.Github,
      text: 'tbakerx',
      href: 'https://github.com/tbakerx',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
