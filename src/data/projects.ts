/**
 * Project Data Configuration
 * Centralized data store for all project information.
 * Makes it easy to maintain and update project details.
 */

export const projects = [
  {
    id: "plumbreed-puzzle",
    title: "Plumbreed Puzzles",
    shortDescription: "A premier e-commerce platform for faith-based puzzles and games.",
    fullDescription: "A premier e-commerce platform for faith-based puzzles and games, featuring a dynamic product catalog, content management system, and seamless integration with Jumia for secure transactions.",
    image: "/assets/images/plumbreedpuzzle.png",
    links: {
      live: "https://www.plumbreedboardgames.com/"
    },
    keyHighlights: [
      {
        title: "E-commerce Integration",
        description: "Seamless product linking with Jumia, supporting both individual and bulk orders."
      },
      {
        title: "Secure Admin Panel",
        description: "Advanced authentication with refresh/access tokens and password hashing."
      },
      {
        title: "Rich Media Management",
        description: "Integrated Cloudinary for efficient media optimization and management."
      },
      {
        title: "Dynamic Content Creation",
        description: "Utilized Quill Rich Text Editor for seamless content management."
      }
    ],
    tools: [
      "Next.js 13+",
      "MongoDB",
      "Tailwind CSS",
      "shadcn/ui",
      "Cloudinary",
      "JWT",
      "Quill Editor",
      "TypeScript",
      "Framer Motion",
      "React Query"
    ]
  },
  {
    id: "wellcrest-therapy",
    title: "Wellcrest Therapy",
    shortDescription: "A comprehensive mental health clinic website serving Georgia and Arizona.",
    fullDescription: "A comprehensive mental health clinic website serving Georgia and Arizona, offering accessible and affordable treatment for patients aged 16 and above. This case study explores the development of a full-stack Next.js application with both client and server-side optimization.",
    image: "/assets/images/wellcrstherapy.png",
    links: {
      live: "https://www.wellcresttherapy.com/"
    },
    keyHighlights: [
      {
        title: "Full-Stack Next.js Implementation",
        description: "Utilized Next.js 13+ for both client and server components, ensuring optimal performance and SEO capabilities."
      },
      {
        title: "Healthcare-Focused Design",
        description: "Implemented a carefully selected color palette and responsive design to create a calming, accessible user experience for mental health patients."
      },
      {
        title: "Admin Content Management",
        description: "Developed a separate admin dashboard for content management, featuring Quill editor integration for rich article creation and editing."
      },
      {
        title: "Secure Communication Channel",
        description: "Implemented Nodemailer for secure messaging between patients and administrators, facilitating efficient communication."
      }
    ],
    tools: [
      "Next.js 13+",
      "MongoDB",
      "Tailwind CSS",
      "shadcn/ui",
      "Cloudinary",
      "Quill Editor",
      "Nodemailer",
      "TypeScript",
      "Git",
      "Vercel"
    ]
  },
  {
    id: "denmark-multibuz",
    title: "Denmark Multibuz Limited",
    shortDescription: "A sophisticated e-commerce platform featuring real-time data management, advanced search capabilities, and optimized user experience.",
    fullDescription: "I led the development of DenmarkMultibuz, a comprehensive e-commerce platform built with Next.js for seamless and dynamic user experiences. The platform features advanced product management, user and admin interfaces, and optimized performance.",
    image: "/assets/images/denmark.png",
    links: {
      live: "https://denmarkmultibuzltd.com/",
      userDemo: "https://www.veed.io/view/7ea6ce4f-b0e6-42ae-a7c4-187482addcb5?panel=share",
      adminDemo: "https://www.veed.io/view/19d8f60c-48c5-40ac-a5f4-7e4d1e67abfc?panel=share"
    },
    keyHighlights: [
      {
        title: "Real-Time Data Management",
        description: "The platform features advanced sorting, filtering, and searching of products using MongoDB Atlas Search."
      },
      {
        title: "Optimized for SEO",
        description: "Utilized Next.js metadata and OpenGraph meta tags for improved SEO and beautiful link previews."
      },
      {
        title: "Enhanced User Experience",
        description: "Implemented advanced sorting and filtering using Tanstack Table, with real-time updates via React Query and Zustand."
      },
      {
        title: "Stylish UI with Tailwind CSS",
        description: "Modern, responsive, and sleek user interface design using Tailwind CSS."
      }
    ],
    tools: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Tanstack Table",
      "React Query",
      "Shadcn UI",
      "ChatGPT",
      "Cloudinary",
      "Quill Rich Text Editor",
      "React Quill",
      "Lucide React Icons",
      "React Slick",
      "Zod",
      "Zustand",
      "Sharp"
    ]
  },
  {
    id: "blogvana",
    title: "Blogvana",
    shortDescription: "A modern blogging platform built with semantic search capabilities, comprehensive authentication, and dynamic user experience.",
    fullDescription: "I spearheaded the creation of a feature-rich and user-centric medium-like blog application, leveraging a robust tech stack including Node.js, MongoDB, Express.js, React.js, and Redux Toolkit.",
    image: "/assets/images/blogvana.png",
    links: {
      live: "https://blogvana-5l46.onrender.com/",
      github: "https://github.com/pascal-tech1/blogvana-deploy"
    },
    keyHighlights: [
      {
        title: "Semantic Searching",
        description: "Used gte-small machine learning algorithm and MongoDB vector to elevate and personalize user experience."
      },
      {
        title: "Authentication Excellence",
        description: "Comprehensive authentication system ensuring user security and data privacy. Users can create, edit, and personalize their profiles."
      },
      {
        title: "Engaging User Experience",
        description: "Crafted an intuitive and dynamic user dashboard using React Router and Redux Toolkit, facilitating content creation and management."
      },
      {
        title: "Administrative Prowess",
        description: "Empowers administrators to oversee user activity, maintain system integrity, and assign user ranks."
      }
    ],
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "GIT",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "gte-small algorithm",
      "Quill"
    ]
  },
  {
    id: "analytical-dashboard",
    title: "Analytical Dashboard",
    shortDescription: "A comprehensive analytics dashboard project showcasing data visualization, real-time analytics, and interactive reporting capabilities.",
    fullDescription: "I led the development of a feature-rich analytical dashboard utilizing Flask for the backend and React.js for the frontend. The dashboard incorporates real-time charting, dynamic filtering, and axis toggling capabilities.",
    image: "/assets/images/analyticaldashboard.png",
    links: {
      live: "https://dashboardcharts.vercel.app/",
      github: "https://github.com/pascal-tech1/analytical-dashboard"
    },
    keyHighlights: [
      {
        title: "Real-Time Data Visualization",
        description: "The dashboard features dynamic and interactive charts that update in real-time based on user interactions."
      },
      {
        title: "Flexible Filtering",
        description: "Users can apply filters to manipulate data visualization, enhancing the dashboard's usability and flexibility."
      },
      {
        title: "State Management with Redux",
        description: "Redux facilitates efficient state management, ensuring seamless updates across components."
      },
      {
        title: "Advanced Charting",
        description: "Leveraging React Chart.js and Chart.js libraries for powerful and customizable charting capabilities."
      }
    ],
    tools: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "GIT",
      "Redux Toolkit",
      "Flask",
      "MongoDB",
      "Chart.js",
      "react-chartjs-2"
    ]
  }
] as const;

export type Project = (typeof projects)[number];