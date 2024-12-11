import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { cn } from "@/lib/utils";

import { GeistSans } from "geist/font/sans";

export function TimelineDemo() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="font-bold mb-8">
            Building Complex E-commerce & Analytics Solutions
          </p>
          <div className="space-y-4 mb-12">
            <div className="text-neutral-300">
              Built Plumbreed Puzzles - A full-stack e-commerce platform with Jumia integration
            </div>
            <div className="text-neutral-300">
              Developed an Analytical Dashboard with real-time charting using Flask & React
            </div>
            <div className="text-neutral-300">
              Implemented MongoDB Atlas Search for advanced product filtering and search
            </div>
            <div className="text-neutral-300">
              Created Denmark Multibuz - An optimized e-commerce platform with admin dashboard
            </div>
          </div>
        </div>
      )
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="font-bold mb-8">
            Advanced Full-Stack Development & AI Integration
          </p>
          <div className="space-y-4 mb-12">
            <div className="text-neutral-300">
              Built Blogvana with semantic search using ML algorithms & MongoDB vector search
            </div>
            <div className="text-neutral-300">
              Implemented real-time updates with WebSockets and Redux Toolkit
            </div>
            <div className="text-neutral-300">
              Developed robust authentication systems with JWT and refresh tokens
            </div>
            <div className="text-neutral-300">
              Created responsive, mobile-first interfaces with Tailwind CSS
            </div>
          </div>
        </div>
      )
    },
    {
      title: "2020-2022",
      content: (
        <div>
          <p className="font-bold mb-8">
            Foundation Years: Learning & Growth
          </p>
          <div className="space-y-4 mb-12">
            <div className="text-neutral-300">
              Mastered core web technologies: HTML, CSS, JavaScript, React
            </div>
            <div className="text-neutral-300">
              Learned backend development with Node.js and Express
            </div>
            <div className="text-neutral-300">
              Gained expertise in MongoDB and database optimization
            </div>
            <div className="text-neutral-300">
              Built foundational projects to develop full-stack capabilities
            </div>
          </div>
        </div>
      )
    }
  ];
  return (
    <div className={cn("max-w-5xl mx-auto px-4 md:px-8 py-12", GeistSans.className)}>
      <Timeline data={data} />
    </div>
  );
}