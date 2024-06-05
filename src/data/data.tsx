import {
  AcademicCapIcon, BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/11111.png';
import porfolioImage2 from '../images/portfolio/22222.png';
import porfolioImage3 from '../images/portfolio/33333.jpg';
import porfolioImage4 from '../images/portfolio/44444.jpg';
import porfolioImage5 from '../images/portfolio/55555.jpg';
import porfolioImage6 from '../images/portfolio/66666.jpg';
import porfolioImage7 from '../images/portfolio/77777.jpg';
import porfolioImage8 from '../images/portfolio/88888.jpg';

import testimonialImage from '../images/testimonial.webp';
import profilepic from '../images/willprofilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup, TestimonialSection,
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
        level: 9,
      },
      {
        name: 'English',
        level: 6,
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
        level: 9,
      },
      {
        name: 'Python',
        level: 6,
      },
      {
        name: 'C#',
        level: 5,
      },
      {
        name: 'C++',
        level: 5,
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
    title: 'Temu Short Video project',
    description: 'E-commerce short video system refers to a platform or system that integrates e-commerce functionalities with short video content. It allows users to create and share short videos showcasing products or services, with the option to directly purchase items featured in the videos. This system combines the engagement of short videos with the convenience of e-commerce shopping, creating a seamless shopping experience for users.',
    url: 'https://www.temu.com/',
    image: porfolioImage1,
  },
  {
    title: 'Temu Planting Tree project',
    description: 'The Planting Tree system is an environmental initiative within Temu, an online e-commerce platform. It encourages users to participate in eco-friendly activities such as planting trees and reducing carbon emissions. Users earn "water" by taking green actions in their daily lives, which can then be converted into real trees planted in designated areas. This system promotes sustainability and environmental awareness through gamification and social responsibility.',
    url: 'https://www.temu.com/',
    image: porfolioImage2,
  },
  {
    title: 'Temu User Profiling project',
    description: 'User Profiling System, is a technology used in marketing and analytics to create detailed profiles of individual users or customer segments. It involves collecting and analyzing data such as demographics, behavior patterns, preferences, and interactions with a product or service to understand and predict user behavior. This information helps businesses tailor their marketing strategies, personalized recommendations, and product offerings to meet the specific needs and interests of their target audience.',
    url: 'https://www.temu.com/',
    image: porfolioImage3,
  },
  {
    title: 'Temu Homepage project',
    description: 'The e-commerce homepage system refers to the main landing page of an online store or website dedicated to selling products or services. It is the first page that users see when they visit the website and typically showcases featured products, promotions, and navigation options to guide visitors to different sections of the online store. The design and layout of the e-commerce homepage system play a crucial role in attracting and engaging customers, ultimately leading to successful sales conversions.',
    url: 'https://www.temu.com/',
    image: porfolioImage4,
  },
  {
    title: 'Temu Activity project',
    description: 'The e-commerce activity system refers to a platform or system that facilitates various promotional activities and campaigns within an online store or e-commerce website. This system allows businesses to create and manage marketing campaigns, discounts, sales events, and other promotional activities to attract customers, drive sales, and enhance the overall shopping experience. By utilizing the e-commerce activity system, businesses can effectively engage with customers, increase brand visibility, and boost sales through targeted marketing initiatives.',
    url: 'https://www.temu.com/',
    image: porfolioImage5,
  },
  {
    title: 'PDD Activity project',
    description: 'The e-commerce activity system refers to a platform or system that facilitates various promotional activities and campaigns within an online store or e-commerce website. This system allows businesses to create and manage marketing campaigns, discounts, sales events, and other promotional activities to attract customers, drive sales, and enhance the overall shopping experience. By utilizing the e-commerce activity system, businesses can effectively engage with customers, increase brand visibility, and boost sales through targeted marketing initiatives.',
    url: 'https://www.temu.com/',
    image: porfolioImage6,
  },
  {
    title: 'Trip Air Ticket Booking Engine project',
    description: 'A Booking Engine System is a software application used by businesses in the hospitality and travel industry to manage and facilitate online reservations and bookings. This system allows customers to search for available services, such as hotel rooms, flights, rental cars, or activities, and make reservations directly through the company\'s website or app. The Booking Engine System streamlines the booking process, provides real-time availability information, and automates reservation confirmations, payments, and other related tasks to enhance the customer booking experience.',
    url: 'https://flights.ctrip.com',
    image: porfolioImage7,
  },
  {
    title: 'GE Valve Industry Control software',
    description: 'Industry control software, also known as industrial control software, is a type of software used in industrial automation and control systems to monitor and manage various processes within manufacturing plants, factories, and other industrial settings. This software is designed to control machinery, equipment, and production processes to ensure efficiency, safety, and consistency in industrial operations. Industry control software often includes features such as real-time monitoring, data collection, process optimization, and remote access capabilities to streamline industrial processes and improve overall productivity.',
    url: 'https://www.gevernova.com/',
    image: porfolioImage8,
  },
  // {
  //   title: 'Project title 8',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage8,
  // },
  // {
  //   title: 'Project title 9',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage9,
  // },
  // {
  //   title: 'Project title 10',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage10,
  // },
  // {
  //   title: 'Project title 11',
  //   description: 'Give a short description of your project here.',
  //   url: 'https://reactresume.com',
  //   image: porfolioImage11,
  // },
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
    date: 'January 2022 - Present',
    location: 'Temu',
    title: 'Senior Software Engineer',
    content: (
      <p>
        Be responsible for designing and developing some promotion and user growth backend microservice systems from scratch.
        Worked with product managers to provide an immersive shopping experience.
        Managed the daily scheduling of business requirements, technology evolution.
      </p>
    ),
  },
  {
    date: 'June 2020 - January 2022',
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
      text: 'will3602099@gmail.com',
      // href: 'will3602099@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Changning District Shanghai China',
      href: 'https://maps.app.goo.gl/V6hq2wJZ6Li3PRSQ8',
    },
    {
      type: ContactType.WeChat,
      text: 'liguangwei794887',
      // href: 'https://maps.app.goo.gl/V6hq2wJZ6Li3PRSQ8',
    },
    
    
    // {
    //   type: ContactType.Instagram,
    //   text: '@tbakerx',
    //   href: 'https://www.instagram.com/tbakerx/',
    // },
    // {
    //   type: ContactType.Github,
    //   text: 'tbakerx',
    //   href: 'https://github.com/tbakerx',
    // },
  ],
};

/**
 * Social items
 */
// export const socialLinks: Social[] = [
//   {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
//   {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
//   {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
//   {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
//   {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
// ];
