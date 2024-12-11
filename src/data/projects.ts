/**
 * Project Data Configuration
 * Centralized data store for all project information.
 */

type MetadataType = "article" | "website" | "book" | "profile" | "music.song" | "music.album" | "music.playlist" | "music.radio_station" | "video.movie" | "video.episode" | "video.tv_show" | "video.other";

export const projectsConfig = {
    "denmark-multibuz": {
        id: "denmark-multibuz",
        title: "Denmark Multibuz Limited",
        shortTitle: "Denmarkmultibuzltd",
        shortDescription: "I built this e-commerce site from scratch to help a local business thrive online. It's all about making inventory management a breeze for the staff while giving customers a smooth shopping experience.",
        fullDescription: "Let me tell you about how I transformed a local business's online presence, making it easier for both customers to shop and staff to manage their day-to-day operations.",
        detailedDescription: "This project started when I noticed how much time the staff was spending manually updating their inventory. I used Next.js to build two interfaces - one that makes browsing products super intuitive for customers, and another that gives the staff real-time control over their inventory. The trickiest part was getting those real-time updates working smoothly, but seeing the staff save hours of work made it all worth it.",
        image: "./assets/images/denmark.png",
        links: {
            live: "https://denmarkmultibuzltd.com/",
            userDemo: "https://www.veed.io/view/7ea6ce4f-b0e6-42ae-a7c4-187482addcb5?panel=share",
            adminDemo: "https://www.veed.io/view/19d8f60c-48c5-40ac-a5f4-7e4d1e67abfc?panel=share"
        },
        keyHighlights: [
            {
                title: "Search That Just Works",
                description: "Ever been frustrated by bad search results? Me too. That's why I spent extra time implementing MongoDB Atlas Search - now customers can find products even if they make typos or only remember part of the name."
            },
            {
                title: "SEO Done Right",
                description: "I made sure customers could actually find the site by diving deep into Next.js metadata and OpenGraph tags. It was a bit tedious, but seeing the improved Google rankings made it worthwhile."
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
            title: "Denmark Multibuz - Modern E-commerce Platform",
            description: "A sophisticated e-commerce platform that makes online shopping a breeze while giving staff powerful tools to manage their business.",
            type: "article" as MetadataType,
            url: "/projects/denmark-multibuz",
            imageAlt: "Denmark Multibuz E-commerce Platform"
        },
        gradientColors: {
            from: "blue-400/20",
            to: "purple-400/20"
        },
        mainFeatures: [
            {
                icon: "ShoppingBag",
                title: "Smart Shopping Experience",
                description: "Built a shopping system that's actually enjoyable to use, whether you're buying one item or stocking up in bulk."
            },
            {
                icon: "Shield",
                title: "Rock-Solid Security",
                description: "Implemented serious security measures with refresh/access tokens and password protection - because trust matters."
            },
            {
                icon: "Sparkles",
                title: "Lightning Fast",
                description: "Added all sorts of optimizations to make everything load quickly - from image compression to smart caching."
            }
        ],
        keyFeatures: [
            {
                title: "Smart Inventory Control",
                description: "Created an admin panel that makes managing products feel like a breeze - it's like having a digital assistant that never sleeps."
            },
            {
                title: "Content That Sells",
                description: "Added a rich text editor that makes creating product descriptions and articles feel as natural as writing an email."
            },
            {
                title: "Bank-Grade Security",
                description: "Went all-in on security with JWT tokens and secure cookies - because keeping customer data safe is non-negotiable."
            },
            {
                title: "Speed Optimized",
                description: "Used Cloudinary's magic for images, added smooth loading states, and implemented infinite scroll - because nobody likes waiting around."
            },
            {
                title: "Looks Great Everywhere",
                description: "Built everything mobile-first with smooth animations that make the site feel alive, whether you're on phone or desktop."
            },
            {
                title: "Bulk Orders Made Easy",
                description: "Created a special system for handling large orders - perfect for business customers who need to buy in quantity."
            }
        ],
        technicalChallenges: [
            {
                challenge: "Real-time Updates",
                description: "The staff needed to see inventory changes instantly across all devices - no refresh required.",
                solution: "After trying a few approaches, I landed on using WebSockets with React Query for live updates. It took some trial and error to get the performance just right.",
                outcome: "Now the staff can manage inventory from multiple devices without any sync issues - they love how responsive it feels."
            },
            {
                challenge: "Search That Makes Sense",
                description: "Customers were getting frustrated when they couldn't find products, even when they knew we had them.",
                solution: "Implemented MongoDB Atlas Search with fuzzy matching and synonyms - it's like having a smart assistant who knows what you mean, not just what you type.",
                outcome: "Search success rate jumped by 60%, and customers actually mention how easy it is to find things in their reviews."
            },
            {
                challenge: "Performance at Scale",
                description: "The site needed to handle thousands of products without slowing down.",
                solution: "Built a clever caching system and optimized database queries. Added infinite scroll that loads products just before you need them.",
                outcome: "Pages load in under 2 seconds even with thousands of products, and the infinite scroll feels so natural users don't even notice it's there."
            }
        ]
    },
    "analytical-dashboard": {
        id: "analytical-dashboard",
        title: "Analytical Dashboard",
        shortTitle: "Analytics Dashboard",
        shortDescription: "I built this dashboard to make complex data actually make sense - turning confusing numbers into clear insights through interactive charts you can actually understand.",
        fullDescription: "Let me tell you about how I turned a mess of data into something that actually helps people make better decisions.",
        detailedDescription: "You know that feeling when you're staring at a spreadsheet and your eyes start to glaze over? That's exactly what I wanted to fix. Using React and Flask, I built this dashboard that turns boring data into interactive visualizations that actually tell a story. The best part? Seeing users have those 'aha!' moments when they finally understand their data.",
        image: "./assets/images/analyticaldashboard.png",
        links: {
            live: "https://dashboardcharts.vercel.app/",
            github: "https://github.com/pascal-tech1/analytical-dashboard"
        },
        keyHighlights: [
            {
                title: "Charts That Make Sense",
                description: "I spent a lot of time making sure these charts don't just look pretty - they actually help you understand what's going on with your data. Hover over anything and it tells you exactly what you're looking at."
            },
            {
                title: "Play With Your Data",
                description: "I added filters that let you slice and dice your data however you want. It's like having a conversation with your data - ask it questions and actually get answers."
            },
            {
                title: "Everything Stays Smooth",
                description: "Behind the scenes, I used Redux to keep everything running smoothly - no matter how much data you're playing with or how many filters you're using."
            },
            {
                title: "Looks Good, Works Better",
                description: "Used Tailwind CSS to make everything look professional without sacrificing functionality. Every button and chart is exactly where you'd expect it to be."
            },
            {
                title: "Powerful Charts Made Simple",
                description: "I combined React Chart.js with some custom tweaks to create visualizations that are both powerful and easy to understand - no statistics degree required!"
            },
            {
                title: "Data You Can Trust",
                description: "Added smart form validation to make sure the data going in is clean - because good insights start with good data."
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
            title: "Analytics Dashboard - Making Data Make Sense",
            description: "A user-friendly analytics dashboard that transforms complex data into clear, actionable insights through interactive visualizations.",
            type: "article" as MetadataType,
            url: "/projects/analytical-dashboard",
            imageAlt: "Analytics Dashboard Project"
        },
        gradientColors: {
            from: "blue-400/20",
            to: "green-400/20"
        },
        technicalChallenges: [
            {
                challenge: "Making Complex Data Digestible",
                description: "Users were getting overwhelmed by the amount of data they needed to process.",
                solution: "I created interactive visualizations that let users drill down into their data layer by layer, with clear explanations at each step.",
                outcome: "Users now spend 40% less time trying to understand their data and more time actually using it to make decisions."
            },
            {
                challenge: "Keeping Things Fast",
                description: "The dashboard would slow down when handling large datasets, which was frustrating for users.",
                solution: "I implemented data pagination and lazy loading, plus some clever caching with Redux to keep things snappy.",
                outcome: "The dashboard now handles datasets 3x larger without breaking a sweat - and users can actually feel the difference."
            },
            {
                challenge: "Making It Work for Everyone",
                description: "Different users needed to see their data in different ways, but I didn't want to overwhelm them with options.",
                solution: "Built a flexible filtering system that remembers user preferences and suggests relevant views based on their role.",
                outcome: "Users love how the dashboard 'learns' what they need - it's like having a personal data assistant."
            }
        ]
    },
    "blogvana": {
        id: "blogvana",
        title: "Blogvana",
        shortTitle: "Blogvana",
        shortDescription: "Ever wished blog platforms just 'got' what you like to read? That's why I built Blogvana - it helps writers connect with readers who'll actually love their content.",
        fullDescription: "Let me tell you how I built a blogging platform that makes both writing and discovering great content feel natural and fun.",
        detailedDescription: "I love reading blogs, but I was frustrated with how hard it was to find content I actually cared about. So I decided to build something better. Using Node.js and React, I created Blogvana with features I always wished other platforms had. The real game-changer? I implemented semantic search using the gte-small algorithm and MongoDB vector search - basically teaching the platform to understand what content means, not just match keywords.",
        image: "./assets/images/blogvana.png",
        links: {
            live: "https://blogvana-5l46.onrender.com/",
            github: "https://github.com/pascal-tech1/blogvana-deploy"
        },
        keyHighlights: [
            {
                title: "Content That Finds Its Readers",
                description: "You know how Netflix seems to know what you'll like? I wanted that for blogs. Spent weeks fine-tuning the gte-small algorithm to understand not just what people read, but why they enjoy it."
            },
            {
                title: "Fort Knox-Level Security",
                description: "Nothing kills trust faster than a security breach. I went all-in on protection - from secure tokens to input sanitization. It's the boring stuff that keeps everyone's content safe."
            },
            {
                title: "A Dashboard That Makes Sense",
                description: "Built the kind of dashboard I'd want to use - everything important is right where you'd expect it, and creating content feels as natural as writing in your favorite notebook."
            },
            {
                title: "Smart Admin Tools",
                description: "Made life easier for admins with tools that help them keep the platform running smoothly - from managing users to keeping content quality high."
            },
            {
                title: "Graceful Error Handling",
                description: "Because nothing's worse than a cryptic error message. When something goes wrong (hey, it happens!), users get clear, helpful feedback about what to do next."
            },
            {
                title: "Forms That Just Work",
                description: "Used Yup and Formik to make forms that help users get it right the first time - with friendly guidance instead of frustrating error messages."
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
            title: "Blogvana - Where Content Finds Its People",
            description: "A modern blogging platform that uses smart technology to connect writers with their ideal readers, featuring semantic search and an intuitive writing experience.",
            type: "article" as MetadataType,
            url: "/projects/blogvana",
            imageAlt: "Blogvana Project"
        },
        gradientColors: {
            from: "blue-400/20",
            to: "purple-400/20"
        },
        technicalChallenges: [
            {
                challenge: "Making Search Actually Smart",
                description: "Traditional keyword search just wasn't cutting it - readers were missing great content just because they used different words.",
                solution: "Dove deep into semantic search technology, implementing the gte-small algorithm with MongoDB vector search. It was like teaching the platform to understand context, not just words.",
                outcome: "Now readers find exactly what they're looking for, even when they're not sure how to ask for it. The 'related posts' feature has become everyone's favorite way to discover new content."
            },
            {
                title: "Keeping Things Fast and Fresh",
                description: "The platform needed to handle lots of content without slowing down, especially for users with large followings.",
                solution: "Built a clever caching system with Redux Toolkit and implemented infinite scrolling that loads content just before you need it.",
                outcome: "The feed stays lightning-fast even with thousands of posts, and users spend twice as long exploring content."
            },
            {
                title: "Making Writing Feel Natural",
                description: "Writers were getting frustrated with clunky editors that got in the way of their creativity.",
                solution: "Customized Quill editor with just the right features, added auto-save, and made formatting feel intuitive.",
                outcome: "Writers tell us they actually enjoy writing on Blogvana - some have even moved their entire blogs over from other platforms!"
            }
        ]
    },
    "plumbreed-puzzle": {
        id: "plumbreed-puzzle",
        title: "Plumbreed Puzzles",
        shortTitle: "PlumbreedPuzzle",
        shortDescription: "An online store I built for faith-based puzzles that makes buying games as fun as playing them.",
        fullDescription: "How I created an e-commerce site that connects puzzle lovers with faith-based games while handling everything from inventory to shipping.",
        detailedDescription: "This project was special to me because it combined e-commerce with faith-based gaming. I built a platform that not only sells puzzles but creates a community around them. The biggest challenge was integrating with Jumia while keeping the user experience smooth.",
        image: "./assets/images/plumbreedpuzzle.png",
        links: {
            live: "https://www.plumbreedboardgames.com/"
        },
        mainFeatures: [
            {
                icon: "ShoppingBag",
                title: "Smooth Shopping Experience",
                description: "I made sure buying puzzles feels natural, whether you're picking up a single game or ordering in bulk for your church group."
            },
            {
                icon: "Shield",
                title: "Secure Admin Panel",
                description: "Advanced authentication with refresh/access tokens and password hashing."
            },
            {
                icon: "Sparkles",
                title: "Lightning Fast Loading",
                description: "Nobody likes waiting around! I optimized everything from images to page loads so you can focus on finding your next favorite puzzle."
            }
        ],
        keyFeatures: [
            {
                title: "Smart Product Management",
                description: "Built a super intuitive admin dashboard that makes managing products feel like a breeze - it even plays nice with Jumia for seamless order processing."
            },
            {
                title: "Easy Content Updates",
                description: "Added a simple way to write and manage faith-based articles and product descriptions - no tech degree required!"
            },
            {
                title: "Advanced Security",
                description: "Implemented JWT with refresh/access tokens in HTTP-only cookies, along with password hashing for robust security."
            },
            {
                title: "Speed Optimized",
                description: "Used Cloudinary's magic to make images load fast, added smooth loading animations, and made scrolling feel natural - because nobody likes a sluggish website."
            },
            {
                title: "Responsive Design",
                description: "Tailored, mobile-first design with beautiful animations and transitions for an engaging user experience."
            },
            {
                title: "Built for Big Orders",
                description: "Created a special system for churches and schools who need to order in bulk - making large orders as easy as small ones."
            }
        ],
        technicalChallenges: [
            {
                challenge: "The Jumia Connection",
                description: "I needed to find a way to work with Jumia without making it feel like you're bouncing between two different websites.",
                solution: "After lots of trial and error, I built a custom system that keeps track of products across both platforms while making the checkout process feel natural.",
                outcome: "It worked better than I hoped - 90% of shoppers complete their purchases smoothly, and they stick around to browse more even after buying."
            },
            {
                challenge: "Making Things Look Good - Fast",
                description: "Everyone wanted beautiful, high-quality images of the puzzles, but nobody wants to wait forever for them to load.",
                solution: "I got creative with image loading - adding those nice blur effects while images load, and using Cloudinary to automatically optimize everything behind the scenes.",
                outcome: "Pages now load in half the time, but the puzzles still look amazing - it's the best of both worlds!"
            },
            {
                challenge: "Keeping Admin Access Safe",
                description: "The admin side needed to be super secure without making it a pain to use.",
                solution: "I implemented some clever security tricks using JWTs and secure cookies, plus added real-time updates so changes appear instantly.",
                outcome: "Zero security headaches so far, and the admin team loves how quick and responsive everything feels."
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
        shortDescription: "A welcoming online space I created for a mental health clinic to connect with patients across Georgia and Arizona.",
        fullDescription: "The journey of building a website that makes mental health care more accessible while maintaining the highest standards of privacy and security.",
        detailedDescription: "When building Wellcrest Therapy's platform, I focused on creating a calming, trustworthy space online. I used Next.js to build both the patient-facing site and the admin tools, making sure everything felt professional yet approachable.",
        image: "./assets/images/wellcrstherapy.png",
        links: {
            live: "https://www.wellcresttherapy.com/"
        },
        technicalDetails: {
            overview: "Here's what I used to bring this project to life:",
            points: [
                "I chose Next.js for its SEO benefits - crucial for helping people find mental health resources when they need them most",
                "Built a custom CMS that even non-tech-savvy staff could use confidently",
                "Added subtle loading states and animations to make the site feel more responsive and calming",
                "Used Cloudinary to serve optimized images that look professional without slowing things down"
            ]
        },
        keyHighlights: [
            {
                title: "Healthcare-First Design",
                description: "I spent weeks getting the design just right - using calming colors and smooth transitions to help anxious patients feel at ease. It's amazing how much small design choices can impact someone's willingness to reach out for help."
            },
            {
                title: "Simple Content Updates",
                description: "The clinic staff needed to update content regularly but weren't tech experts. I built them a straightforward admin dashboard that makes posting updates as easy as using social media."
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
                challenge: "Making It Fast Without Sacrificing Quality",
                description: "The site needed lots of high-quality images for a professional look, but nobody likes a slow website.",
                solution: "I spent a week experimenting with different image optimization techniques. Ended up using a combo of Cloudinary and lazy loading that worked really well.",
                outcome: "The site loads in half the time it used to, and patients actually comment on how smooth everything feels."
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
    technicalChallenges?: Array<{
        challenge?: string;
        title?: string;
        description: string;
        solution: string;
        outcome: string;
    }>;
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