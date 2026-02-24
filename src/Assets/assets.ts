
import cross_icon from '@/src/Assets/cross_icon.svg'
import logo from '@/src/Assets/full_logo.png'
import menu_icon from '@/src/Assets/menu_icon.svg'

import about_img from '@/src/Assets/temilorun.jpeg' 
import project_1 from '@/src/Assets/project_1.png'
import project_2 from '@/src/Assets/project_2.png'
import project_3 from '@/src/Assets/project_3.png'

import project1_1 from '@/src/Assets/project1.1.png'
import project1_2 from '@/src/Assets/project1.2.png'
import project1_3 from '@/src/Assets/project1.3.png'
import project1_4 from '@/src/Assets/project1.4.png'
import project1_5 from '@/src/Assets/project1.5.png'
import project1_6 from '@/src/Assets/project1.6.png'
import project1_7 from '@/src/Assets/project1.7.png'

import project2_1 from '@/src/Assets/project2.1.png'
import project2_2 from '@/src/Assets/project2.2.png'
import project2_3 from '@/src/Assets/project2.3.png'
import project2_4 from '@/src/Assets/project2.4.png'
import project2_5 from '@/src/Assets/project2.5.png'
import project2_6 from '@/src/Assets/project2.6.png'

import project3_1 from '@/src/Assets/project3.1.png'
import project3_2 from '@/src/Assets/project3.2.png'
import project3_3 from '@/src/Assets/project3.3.png'
import project3_4 from '@/src/Assets/project3.4.png'
import project3_5 from '@/src/Assets/project3.5.png'


export const assets = {
    logo,
    menu_icon,
    cross_icon,
    about_img,
    project_1,
    project_2,
    project_3,
    project1_1,project1_2,project1_3,project1_4,project1_5,project1_6,project1_7,
    project2_1, project2_2, project2_3, project2_4, project2_5, project2_6,
    project3_1, project3_2, project3_3, project3_4, project3_5,
}



export const projectData = [
  {
    id: 1,
    slug: 'agency-ai',
    title: 'Agency.ai',
    description: 'Interactive Digital Agency Landing Page with Dark/Light Mode',
    shortDescription: 'A modern, single-page digital agency website that introduces your brand, team, and portfolio with sleek, animated precision. Features a custom cursor, dark/light mode toggle, and Framer Motion animations.',
    image: assets.project_1,
    techStack: ['React', 'Framer Motion', 'Tailwind CSS', 'Custom Cursor'],
    demoUrl: 'https://gency-ai.netlify.app/',
    githubUrl: 'https://github.com/devTemilorun/agency.ai',
    fullDescription: 'Agency.ai is a fully responsive, single-page brand portal designed to bridge the gap between imagination and digital impact. Built to showcase agency credibility, the site introduces visitors to the team\'s expertise, highlights recent case studies, and facilitates new business inquiries—all within a seamless, interactive environment. The design follows a minimalist yet bold aesthetic with a fully functional Dark Mode and Light Mode toggle. Custom cursor interactions paired with Framer Motion power smooth entrance animations and page transitions, ensuring the user journey feels fluid and dynamic. The modular layout includes a hero section with social proof, service grid, portfolio showcase, team introduction, and dual contact methods.',
    screenshots: [assets.project1_1, assets.project1_2, assets.project1_3, assets.project1_4, assets.project1_5, assets.project1_6, assets.project1_7],
  },
  {
    id: 2,
    slug: 'estate',
    title: 'Estate',
    description: 'Real Estate Landing Page with Credibility Metrics',
    shortDescription: 'A sophisticated, single-page real estate platform designed to bridge the gap between property seekers and their dream homes. Focuses on establishing instant credibility through statistical proof and smooth Framer Motion animations.',
    image: assets.project_2,
    techStack: ['React', 'Framer Motion', 'Tailwind CSS', 'Responsive Design'],
    demoUrl: 'https://eal-estate.netlify.app/',
    githubUrl: 'https://github.com/devTemilorun/Real-estate',
    fullDescription: 'Estate is a sleek, high-conversion real estate landing page that prioritizes trust and user experience. The design leans into warmth and stability, using clean typography and a structured layout to reflect the reliability expected in the real estate market. Key sections include an aspirational hero section ("Explore homes that fit your dreams"), prominent credibility stats (10+ Years of Excellence, 12+ Projects Completed, 20+ Mn Sq. Ft., 25+ Ongoing Projects), a portfolio showcase with property details, and a customer testimonials carousel. Leveraging Framer Motion, the page features subtle entrance animations and scroll-triggered reveals that keep users engaged without distracting from the content.',
    screenshots: [assets.project2_1, assets.project2_2, assets.project2_3, assets.project2_4, assets.project2_5, assets.project2_6],
  },
  {
    id: 3,
    slug: 'petworld',
    title: 'PETWORLD',
    description: 'Pet Store & Services Landing Page',
    shortDescription: 'A cheerful, brand-focused landing page for a modern pet supply company. Designed to connect pet lovers with quality products and care services, featuring smooth AOS scroll animations and brand trust badges.',
    image: assets.project_3,
    techStack: ['React', 'AOS', 'Tailwind CSS', 'Responsive Design'],
    demoUrl: 'https://petworl.netlify.app/',
    githubUrl: 'https://github.com/devTemilorun/petworld',
    fullDescription: 'PETWORLD is a warm, trustworthy digital storefront designed for a pet supply and care company. The design embraces a friendly approachable tone with a clean white background and pops of color to create warmth. The layout features a hero section with personal branding, a trust badges strip featuring partner logos (Nestlé, Amazon, Google, Walmart), a service grid showcasing product categories (toys, medical care, grooming, food), client testimonials, and dual contact methods. Built with React and animated using AOS (Animate on Scroll), elements fade and slide into view as users scroll, creating a dynamic experience while maintaining focus on content. The structured footer ensures easy navigation to FAQs, policies, and shop categories.',
    screenshots: [assets.project3_1, assets.project3_2, assets.project3_3, assets.project3_4, assets.project3_5],
  },
];