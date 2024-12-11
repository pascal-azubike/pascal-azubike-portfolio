/**
 * Project Data Configuration
 * Centralized data store for all project information.
 */

type MetadataType = "article" | "website" | "book" | "profile" | "music.song" | "music.album" | "music.playlist" | "music.radio_station" | "video.movie" | "video.episode" | "video.tv_show" | "video.other";

export const projectsConfig = {
    "denmark-multibuz": {
        id: "denmark-multibuz",
        title: "Denmark Multibuz Limited",
        shortTitle: "Denmarkmultibuzltd", // For portfolio grid
        shortDescription: "A sophisticated e-commerce platform featuring real-time data management, advanced search capabilities, and optimized user experience.",
        fullDescription: "This case study explores denmarkmultibuzltd, covering the Project Overview, Tools Used, and Live Links to the official product.",
        detailedDescription: "I led the development of DenmarkMultibuz, a comprehensive e-commerce platform built with Next.js for seamless and dynamic user experiences. The platform features advanced product management, user and admin interfaces, and optimized performance.",
        image: "./assets/images/denmark.png",
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
        ],
        seoKeywords: [
            "E-commerce Platform",
            "Online Store",
            "Real-time Data",
            "MongoDB Atlas",
            "Search Optimization",
            "Product Management",
            "Shopping Platform",
            "Digital Commerce",
            "Inventory Management",
            "Order Processing",
            "E-commerce Development",
            "Online Retail",
            "Shopping Cart",
            "Payment Integration",
            "Product Catalog"
        ],
        metadata: {
            title: `Denmark Multibuz - E-commerce Platform`,
            description: "A sophisticated e-commerce platform featuring real-time data management, advanced search capabilities, and optimized user experience.",
            type: "article" as MetadataType,
            url: "/projects/denmark-multibuz",
            imageAlt: "Denmark Multibuz E-commerce Platform"
        },
        gradientColors: {
            from: "blue-400/20",
            to: "purple-400/20"
        }
    },
    "analytical-dashboard": {
        id: "analytical-dashboard",
        title: "Analytical Dashboard",
        shortTitle: "Analytics Dashboard",
        shortDescription: "A comprehensive analytics dashboard project showcasing data visualization, real-time analytics, and interactive reporting capabilities.",
        fullDescription: "This case study explores the Analytical Dashboard Project, covering the Project Overview, Tools Used, and Live Links to the official product.",
        detailedDescription: "I led the development of a feature-rich analytical dashboard utilizing Flask for the backend and React.js for the frontend. The dashboard incorporates real-time charting, dynamic filtering, and axis toggling capabilities.",
        image: "./assets/images/analyticaldashboard.png",
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
                title: "Stylish UI with Tailwind CSS",
                description: "Tailwind CSS was utilized for a modern and responsive user interface design."
            },
            {
                title: "Advanced Charting",
                description: "Leveraging React Chart.js and Chart.js libraries for powerful and customizable charting capabilities."
            },
            {
                title: "Form Validation",
                description: "Formik and Yup were integrated to ensure robust form validation, enhancing data accuracy and user experience."
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
        ],
        seoKeywords: [
            "Analytics Dashboard",
            "Data Visualization",
            "Chart.js",
            "React Dashboard",
            "Business Analytics",
            "Interactive Charts",
            "Data Analysis",
            "Real-time Analytics",
            "Dashboard Development",
            "Performance Metrics",
            "Business Intelligence",
            "Data Reporting",
            "Analytics Platform",
            "Metrics Dashboard",
            "Data Management"
        ],
        metadata: {
            title: "Analytics Dashboard Project",
            description: "A comprehensive analytics dashboard project showcasing data visualization, real-time analytics, and interactive reporting capabilities.",
            type: "article" as MetadataType,
            url: "/projects/analytical-dashboard",
            imageAlt: "Analytics Dashboard Project"
        },
        gradientColors: {
            from: "blue-400/20",
            to: "green-400/20"
        }
    },
    "blogvana": {
        id: "blogvana",
        title: "Blogvana",
        shortTitle: "Blogvana",
        shortDescription: "A modern blogging platform built with semantic search capabilities, comprehensive authentication, and dynamic user experience.",
        fullDescription: "This case study explores Blogvana Blog Project, covering the Project Overview, Tools Used, and Live Links to the official product.",
        detailedDescription: "I spearheaded the creation of a feature-rich and user-centric medium-like blog application, leveraging a robust tech stack including Node.js, MongoDB, Express.js, React.js, and Redux Toolkit. This project encompassed full-scale authentication, empowering users to manage their profiles, create posts and messages seamlessly. I also included semantic searching and post recommendation with gte-small machine learning algorithm and mongodb vector search.",
        image: "./assets/images/blogvana.png",
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
            },
            {
                title: "Robust Error Handling",
                description: "Utilizing Express.js and async handlers for reliable and efficient error catching, guaranteeing a smooth user experience."
            },
            {
                title: "Form Validation Excellence",
                description: "Incorporated Yup and Formik for form validation to ensure data accuracy and enhance overall usability."
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
        ],
        seoKeywords: [
            "Blogging Platform",
            "Content Management System",
            "CMS Development",
            "Semantic Search",
            "User Authentication",
            "Blog Development",
            "Content Creation",
            "Machine Learning",
            "MongoDB Vector",
            "User Management",
            "Content Platform",
            "Blog Engine",
            "Publishing Platform",
            "Content Analytics",
            "Editorial System"
        ],
        metadata: {
            title: "Blogvana - Blogging Platform",
            description: "A modern blogging platform built with semantic search capabilities, comprehensive authentication, and dynamic user experience.",
            type: "article" as MetadataType,
            url: "/projects/blogvana",
            imageAlt: "Blogvana Project"
        },
        gradientColors: {
            from: "blue-400/20",
            to: "purple-400/20"
        }
    },
    "plumbreed-puzzle": {
        id: "plumbreed-puzzle",
        title: "Plumbreed Puzzles",
        shortTitle: "PlumbreedPuzzle",
        shortDescription: "A premier e-commerce platform for faith-based puzzles and games.",
        fullDescription: "A premier e-commerce platform for faith-based puzzles and games, featuring a dynamic product catalog, content management system, and seamless integration with Jumia for secure transactions.",
        detailedDescription: "Led the development of a comprehensive e-commerce platform for faith-based puzzles and games. The project features a dynamic product catalog, robust admin panel, and seamless integration with Jumia for order fulfillment.",
        image: "./assets/images/plumbreedpuzzle.png",
        links: {
            live: "https://www.plumbreedboardgames.com/"
        },
        mainFeatures: [
            {
                icon: "ShoppingBag",
                title: "E-commerce Integration",
                description: "Seamless product linking with Jumia, supporting both individual and bulk orders."
            },
            {
                icon: "Shield",
                title: "Secure Admin Panel",
                description: "Advanced authentication with refresh/access tokens and password hashing."
            },
            {
                icon: "Sparkles",
                title: "Optimized Performance",
                description: "Image optimization, infinite scroll, and custom loading animations."
            }
        ],
        keyFeatures: [
            {
                title: "Dynamic Product Management",
                description: "Admin panel for real-time product creation and updates, with seamless Jumia integration for order fulfillment."
            },
            {
                title: "Content Management System",
                description: "Rich text editor for creating and managing faith-based articles and product descriptions."
            },
            {
                title: "Advanced Security",
                description: "Implemented JWT with refresh/access tokens in HTTP-only cookies, along with password hashing for robust security."
            },
            {
                title: "Performance Optimization",
                description: "Cloudinary integration for image/video optimization, custom loading skeletons, and infinite scroll for smooth UX."
            },
            {
                title: "Responsive Design",
                description: "Tailored, mobile-first design with beautiful animations and transitions for an engaging user experience."
            },
            {
                title: "Bulk Order System",
                description: "Specialized interface for handling bulk orders, catering to institutional and large-scale customers."
            }
        ],
        technicalChallenges: [
            {
                challenge: "E-commerce Integration Complexity",
                description: "Needed to seamlessly connect with Jumia while maintaining site autonomy.",
                solution: "Developed a custom integration layer that syncs product data and redirects to Jumia for checkout while retaining user engagement on the platform.",
                outcome: "Achieved a 90% successful redirect rate and maintained average session duration despite external checkout."
            },
            {
                challenge: "Content Performance vs Quality",
                description: "Required high-quality images and videos without compromising load times.",
                solution: "Implemented dynamic image loading with blur placeholders, lazy loading, and Cloudinary's automatic format optimization.",
                outcome: "Reduced initial page load time by 50% while maintaining high-quality visual content."
            },
            {
                challenge: "Secure Admin Access",
                description: "Needed robust security for admin functions without impacting user experience.",
                solution: "Implemented JWT refresh/access token strategy with HTTP-only cookies and MongoDB change streams for real-time updates.",
                outcome: "Zero security incidents while maintaining sub-second admin action response times."
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
        ],
        seoKeywords: [
            "Plumbreed Puzzles",
            "faith-based games",
            "Christian puzzles",
            "e-commerce platform",
            "game development",
            "puzzle games",
            "religious games",
            "board games",
            "educational games"
        ],
        metadata: {
            title: "Plumbreed Puzzles",
            description: "Case study of Plumbreed Puzzles, an innovative faith-based gaming platform featuring dynamic product management, secure authentication, and optimized performance.",
            type: "article" as MetadataType,
            url: "/projects/plumbreed-puzzle",
            imageAlt: "Plumbreed Puzzles Project Preview"
        },
        gradientColors: {
            from: "purple-400/20",
            to: "pink-400/20"
        }
    },
    "wellcrest-therapy": {
        id: "wellcrest-therapy",
        title: "Wellcrest Therapy",
        shortTitle: "Wellcresttherapy",
        shortDescription: "A comprehensive mental health clinic website serving Georgia and Arizona.",
        fullDescription: "A comprehensive mental health clinic website serving Georgia and Arizona, offering accessible and affordable treatment for patients aged 16 and above. This case study explores the development of a full-stack Next.js application with both client and server-side optimization.",
        detailedDescription: "Developed a comprehensive mental health clinic website utilizing Next.js for both frontend and backend, emphasizing SEO optimization, responsive design, and a calming color palette tailored for mental health services. The project features separate user and admin interfaces, with robust content management capabilities and seamless communication channels.",
        image: "./assets/images/wellcrstherapy.png",
        links: {
            live: "https://www.wellcresttherapy.com/"
        },
        technicalDetails: {
            overview: "The project leverages several key technologies and approaches:",
            points: [
                "Server-Side Rendering (SSR) for improved SEO and initial page load",
                "MongoDB integration for efficient data management and retrieval",
                "Responsive design principles ensuring accessibility across devices",
                "Content optimization strategies for healthcare-specific needs"
            ]
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
                title: "Optimized Media Handling",
                description: "Integrated Cloudinary for efficient image and video storage and optimization, ensuring fast loading times without compromising quality."
            },
            {
                title: "Secure Communication Channel",
                description: "Implemented Nodemailer for secure messaging between patients and administrators, facilitating efficient communication."
            },
            {
                title: "Modern UI Components",
                description: "Leveraged shadcn/ui for consistent, accessible, and visually appealing interface components throughout the application."
            }
        ],
        challenges: [
            {
                challenge: "Performance Optimization with Rich Content",
                description: "The site needed to handle multiple rich media elements while maintaining fast load times, crucial for user retention in healthcare.",
                solution: "Implemented dynamic imports and image optimization through Cloudinary, reducing initial load time by 40%. Utilized Next.js 13's server components to minimize client-side JavaScript.",
                outcome: "Achieved a Lighthouse performance score of 90+, ensuring a smooth experience for potentially anxious patients."
            },
            {
                challenge: "SEO for Healthcare Compliance",
                description: "Required robust SEO while adhering to healthcare marketing guidelines and regulations.",
                solution: "Developed a custom SEO strategy using Next.js's built-in Head components and dynamic meta tags. Implemented schema markup specific to healthcare providers.",
                outcome: "Improved organic search visibility by 60% while maintaining full compliance with healthcare marketing regulations."
            },
            {
                challenge: "Secure Content Management",
                description: "Needed to provide easy content updates for non-technical staff while ensuring data security and HIPAA compliance.",
                solution: "Created a custom admin dashboard with role-based access control. Integrated Quill editor with custom sanitization rules and MongoDB change streams for real-time updates.",
                outcome: "Enabled staff to safely manage content while maintaining security standards, resulting in a 70% reduction in content update turnaround time."
            },
            {
                challenge: "Responsive Design for Accessibility",
                description: "The site needed to be fully accessible across devices while maintaining a calming, professional aesthetic.",
                solution: "Implemented a mobile-first design approach using Tailwind CSS and shadcn/ui components. Created custom hooks for responsive behaviors and used semantic HTML.",
                outcome: "Achieved WCAG 2.1 AA compliance and improved mobile engagement by 45%."
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
        ],
        seoKeywords: [
            "Wellcrest Therapy",
            "mental health platform",
            "telehealth solutions",
            "therapy management",
            "HIPAA-compliant",
            "patient scheduling",
            "healthcare software",
            "therapy sessions",
            "mental wellness",
            "healthcare technology"
        ],
        metadata: {
            title: "Wellcrest Therapy",
            description: "Case study of Wellcrest Therapy, a comprehensive mental health platform featuring secure patient management, HIPAA-compliant scheduling, and integrated telehealth solutions.",
            type: "article" as MetadataType,
            url: "/projects/wellcrest-therapy",
            imageAlt: "Wellcrest Therapy Project Preview"
        },
        gradientColors: {
            from: "green-400/20",
            to: "blue-400/20"
        }
    }
};

// Type for individual project
export type Project = {
    id: string;
    title: string;
    shortTitle?: string;
    shortDescription: string;
    fullDescription: string;
    detailedDescription: string;
    image: string;
    links: {
        live: string;
        userDemo?: string;
        adminDemo?: string;
        github?: string;
    };
    keyHighlights?: {
        title: string;
        description: string;
    }[];
    tools: string[];
    seoKeywords: string[];
    metadata: {
        title: string;
        description: string;
        type: MetadataType;
        url: string;
        imageAlt: string;
    };
    gradientColors: {
        from: string;
        to: string;
    };
    mainFeatures?: {
        icon: string;
        title: string;
        description: string;
    }[];
    keyFeatures?: {
        title: string;
        description: string;
    }[];
    technicalDetails?: {
        overview: string;
        points: string[];
    };
    challenges?: {
        challenge: string;
        description: string;
        solution: string;
        outcome: string;
    }[];
    technicalChallenges?: {
        challenge: string;
        description: string;
        solution: string;
        outcome: string;
    }[];
};

// For the Portfolio grid view
export const portfolioItems = Object.values(projectsConfig).map(project => ({
    title: project.shortTitle || project.title,
    description: project.shortDescription,
    link: `/projects/${project.id}`,
    image: project.image
}));

// Helper function to get project by ID
export const getProjectById = (id: string): Project | undefined => {
    return projectsConfig[id as keyof typeof projectsConfig];
}; 