const baseUrl =  'https://www.pascal-azubike.dev'

export const siteConfig = {
    url: baseUrl,
    name: "Azubike Pascal",
    title: "Azubike Pascal - Full Stack Developer",
    description: "Meet Azubike Pascal, a software engineer specializing in beautiful, responsive websites that drive business results. I Create engaging digital experiences that help businesses grow.",
    author: "Azubike Pascal",
    ogImage: `https://res.cloudinary.com/dztt3ldiy/image/upload/v1731870090/opengraphImageFull_wq08ie.png`,
    links: {
        github: "https://github.com/pascal-azubike",
        linkedin: "https://www.linkedin.com/in/pascal-azubike",
        twitter: "https://x.com/pascal_azubike",
        email: "mailto:hello@pascal-azubike.dev",
        whatsapp: "https://wa.me/+2349046779214"
    },
    social: {
        twitter: {
            handle: "@pascal_azubike",
            site: "@pascal_azubike",
            cardType: "summary_large_image"
        },
        // facebook: {
        //     appId: "your-facebook-app-id"
        // }
    },
    metadata: {
        themeColor: "#ffffff",
        manifestPath: "/favicon/site.webmanifest",
        alternateLocales: [{
            lang: "en",
            href: "https://www.pascal-azubike.dev"
        }]
    },
    keywords: [
        "Azubike Pascal",
        "Full Stack Developer",
        "Software Engineer",
        "Web Development",
        "React Developer",
        "Next.js Developer",
        "Node.js Developer",
        "JavaScript Developer",
        "TypeScript Expert",
        "Frontend Development",
        "Backend Development",
        "MongoDB",
        "Express.js",
        "API Development",
        "Responsive Web Design",
        "UI/UX Development",
        "Cloud Computing",
        "AWS",
        "DevOps",
        "Performance Optimization",
        "SEO Optimization",
        "Technical Writing",
        "Software Architecture",
        "Database Design",
        "System Design",
        "Web Security"
    ],
    additionalLinkTags: [
        {
            rel: "icon",
            href: "/favicon/favicon.ico"
        },
        {
            rel: "apple-touch-icon",
            href: "/favicon/apple-touch-icon.png",
            sizes: "180x180"
        },
        {
            rel: "manifest",
            href: "/favicon/site.webmanifest"
        },
        {
            rel: "canonical",
            href: "https://www.pascal-azubike.dev"
        }
    ],
    
} as const;

export type SiteConfig = typeof siteConfig; 