import { ScrollAnimation } from "./scroll-animation";
import { HoverEffect } from "./ui/card-hover-effect";
import { getImagePath } from '@/lib/utils';

export default function PortfolioGrid() {
  return (
    <div className="transform-gpu will-change-transform">
      
      <ScrollAnimation>
        <HoverEffect items={projects} />
      </ScrollAnimation>
    </div>
  );
}
export const projects = [
  {
    title: "Plumbreed Puzzle",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "/projects/plumbreed-puzzle",
    image: getImagePath("assets/images/plumbreedpuzzle.webp")
  },
  {
    title: "wellcrest therapy",
    description:
      "A web app that allows users to practice for front-end and UI interviews.",
    link: "/projects/wellcrest-therapy",
    image: getImagePath("assets/images/wellcrstherapy.webp")
  },
  {
    title: "denmark multibuz",
    description:
      "An e-commerce platform with advanced product management and optimized user experience.",
    link: "/projects/denmark-multibuz",
    image: getImagePath("assets/images/denmark.webp")
  },
  {
    title: "BlogVana",
    description:
      "A feature-rich blog platform with semantic search and personalized content recommendations.",
    link: "/projects/blogvana",
    image: getImagePath("assets/images/blogvana.webp")
  },
  {
    title: "Analytical Dashboard",
    description:
      "An interactive data visualization tool for real-time business analytics and insights.",
    link: "/projects/analytical-dashboard",
    image: getImagePath("assets/images/analyticaldashboard.webp")
  }
];

