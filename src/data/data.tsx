import {
  AcademicCapIcon, BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

import heroImage from '../images/header-background.webp';
import porfolioImage2 from '../images/portfolio/22222.png';
import porfolioImage4 from '../images/portfolio/44444.jpg';
import porfolioImage8 from '../images/portfolio/88888.jpg';
import porfolioImage7 from '../images/portfolio/ctrip.jpg';
import porfolioImage6 from '../images/portfolio/pdd-activity.jpg';
import porfolioImage1 from '../images/portfolio/short-video.jpg';
import porfolioImage5 from '../images/portfolio/temu-activity.jpg';

import testimonialImage from '../images/testimonial.webp';
import profilepic from '../images/willprofilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup, Social, TestimonialSection,
  TimelineItem
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: "Will's Profile",
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
      The Backend Wizard Who Makes Servers Dance (Without Crashing During Black Friday).  
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      Thank you for your attention. If you'd like to learn more...
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      <strong className="text-stone-100">Keep scrolling to explore more.</strong>
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
    // {
    //   href: `#${SectionId.Contact}`,
    //   text: 'Contact',
    //   primary: false,
    // },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Backend Engineer with 6+ years of specialized experience in internet technologies, particularly focused on e-commerce marketing and growth solutions. Expertise in architecting and implementing high-concurrency, highly available microservice systems that deliver exceptional performance. Demonstrated success in leading end-to-end microservice architecture design and implementation from initial concept to production deployment. Adept at applying Agile methodologies to streamline development processes and enhance software delivery efficiency. Committed to addressing complex technical challenges and enhancing user experiences through robust, scalable solutions.`,
  aboutItems: [
    {label: 'Location', text: 'Shanghai', Icon: MapIcon},
    {label: 'Nationality', text: 'China', Icon: FlagIcon},
    {label: 'Work start year', text: '2019', Icon: CalendarIcon},
    {label: 'Employments', text: '[Temu, Trip]', Icon: BuildingOffice2Icon},
    {label: 'Study', text: 'Tongji University', Icon: AcademicCapIcon},
    {label: 'Interests', text: '[Basketball, Computer Game]', Icon: SparklesIcon},
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
    description: 'Temu\'s short video system empowers merchants to create product videos through dynamic visual storytelling. For shoopers, it provides the instant "display-it, want-it, buy-it" purchasing capability.',
    url: 'https://www.temu.com/',
    image: porfolioImage1,
  },
  {
    title: 'Temu Planting Tree project',
    description: 'The Planting Tree system is an environmental initiative by Temu. It encourages users to take part in virtual watering activities to plant a real trees.',
    url: 'https://www.temu.com/',
    image: porfolioImage2,
  },
  {
    title: 'Temu Homepage project',
    description: 'Temu\'s homepage system is the first page that users see when they visit the website and showcases featured products, promotions, dan navigation options to guide visitors to different sections of the online store.',
    url: 'https://www.temu.com/',
    image: porfolioImage4,
  },
  {
    title: 'Temu Activity project',
    description: 'Temu\'s activity system provides all kind of promotional activity, such as Flash Sale, Lighting deal, Black Friday, Cyber Monday. It offers a competitive price.',
    url: 'https://www.temu.com/',
    image: porfolioImage5,
  },
  {
    title: 'PDD Activity project',
    description: 'PDD\'s activity system provides all kind of promotional activity, such as 618 Shopping Festival, Double Eleven Day. It offers a competitive price.',
    url: 'https://m.pinduoduo.com/',
    image: porfolioImage6,
  },
  {
    title: 'Trip Air Ticket Booking Engine project',
    description: 'The Air Ticket Booking Engine System allows customers to book flights. This system provides real-time flight information and automates reservation confirmations, payments, and other related tasks to enhance the customer flight booking experience.',
    url: 'https://flights.ctrip.com',
    image: porfolioImage7,
  },
  // {
  //   title: 'Temu User Profiling project',
  //   description: 'User Profiling System, is a technology used in marketing and analytics to create detailed profiles of individual users or customer segments. It involves collecting and analyzing data such as demographics, behavior patterns, preferences, and interactions with a product or service to understand and predict user behavior. This information helps businesses tailor their marketing strategies, personalized recommendations, and product offerings to meet the specific needs and interests of their target audience.',
  //   url: 'https://www.temu.com/',
  //   image: porfolioImage3,
  // },
  {
    title: 'GE Valve Industry Control software',
    description: 'Valve Control software is mainly to control the pipeline flow and monitor water flow in pipes.',
    url: 'https://www.ge.com/',
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
    date: 'September 2016 - Match 2019',
    location: 'Master of Software Engineering',
    title: 'Tongji University',
    content: <p></p>,
  },
  {
    date: 'September 2011 - June 2015',
    location: 'Bachelor of Vehicle Engineering',
    title: 'Nanjing Institute of Technology',
    content: <p></p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'May 2024 - Present',
    title: 'Temu : C-End Growth Business',
    location: 'Senior Software Engineer',
    content: (
      <div>
        <p>• Designed and developed the growth's core products, like Plant Tree & Points & Short Video.</p>
        <p>• Maintained the steady growth of GMV and ROI.</p>
        <p>• Be responsible for developing and maintaining the cornerstone services for growth.</p>
      </div>
    ),
  },
  {
    date: 'May 2022 - April 2024',
    title: 'Temu : Marketing Business',
    location: 'Software Engineer',
    content: (
      <div>
        <p>• Developed several core marketing products from scratch: activity system and homepage system</p>
        <p>• Managed the daily scheduling of business requirements, technology evolution.</p>
        <p>• Handled various high-QPS and high-concurrency scenes, such as Super Bowl Time, Black Friday.</p>
      </div>
    ),
  },
  {
    date: 'November 2020 - April 2022',
    title: 'PDD : Marketing Business',
    location: 'Software Engineer',
    content: (
      <div>
        <p>• Participated in developing and maintaining this system.</p>
        <p>• Handled various big promotions, such as 618 Shopping Festival, Double Eleven Day.</p>
      </div>
    ),
  },
  {
    date: 'July 2019 - October 2020',
    title: 'Trip.com',
    location: 'Software Engineer',
    content: (
      <div>
        <p>• Maintained the booking engine system for international air ticket.</p>
        <p>• Converted booking engine systems from C# to Java and TypeScript.</p>
        <p>• Migrated the database from SQLSever to MySQL within schedule and budget constraints.</p>
      </div>
    ),
  },
  {
    date: 'Match 2018 - December 2018',
    title: 'General Electric',
    location: 'C++ Software Engineer Intern',
    content: (
      <p>
        • Participated in industry control software maintenance and development as a software engineer intern.
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
      name: 'Shuang Liang',
      text: 'Will is a dedicated and talented Software Engineering student with a strong grasp of programming languages and problem-solving skills. His enthusiasm for learning and innovative approach to software development make them a valuable asset to any team.',
      // image: porfolioImage2,
    },
    {
      name: 'Jane Doe',
      text: 'Will is an exceptional software development engineer with a strong technical acumen and a passion for innovation. His dedication to quality code, problem-solving skills, and collaborative spirit have significantly contributed to the success of our projects. I highly recommend Will for his outstanding contributions to software engineering and his commitment to excellence in their work.',
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Jixi',
      text: 'I have had the privilege of collaborating with Will on multiple projects, and I am continually impressed by his technical expertise and creativity. His passion for coding and ability to think outside the box have resulted in innovative solutions that have positively impacted our projects. I wholeheartedly endorse Will for their outstanding contributions to software development.',
      //image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to contact me through following ways. I look forward to hearing from you!',
  items: [
    {
      type: ContactType.WeChat,
      text: 'WeChat: will3602099',
      // href: 'https://maps.app.goo.gl/V6hq2wJZ6Li3PRSQ8',
    },
    {
      type: ContactType.Email,
      text: 'iliguangwei@sina.com',
      // href: 'will3602099@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Changning District Shanghai China',
      href: 'https://maps.app.goo.gl/V6hq2wJZ6Li3PRSQ8',
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
export const socialLinks: Social[] = [
  // {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  // {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
  // {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
  // {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
];
