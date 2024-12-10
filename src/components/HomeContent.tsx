"use client"
import React from "react";
import WorkExperience from "@/components/workExperience";
import PortfolioGrid from "@/components/Portfolio";
import { ContentLayout } from "./content-layout";
import { ScrollAnimation } from "./scroll-animation";
export default function HomeContent() {
    return <ContentLayout>
        <div className="min-h-screen bg-zinc-900 text-white">
            <header className="mx-auto max-w-5xl pt-32 md:pt-40 px-8">
                {/* Hero Section */}
                <ScrollAnimation>
                    <section className="max-w-3xl">
                        <h2 className=" animate-fade-in-slow text-3xl md:text-4xl lg:text-[43px] font-bold mb-6">
                            I&apos;m a software engineer who builds{" "}
                            <span className="text-blue-400">solutions that drive results</span>
                        </h2>
                        <p className="text-gray-400 mb-8">
                            Meet Azubike Pascal, a software engineer specializing in beautiful, responsive websites
                            that drive business results. I create engaging digital experiences that help businesses
                            grow their online presence with clean design and exceptional user experience.
                        </p>
                        <p className="text-zinc-400 mb-8">
                            Creating <span className="font-semibold">Blog posts</span> and{" "}
                            <span className="font-semibold">YouTube videos</span> when I&apos;m
                            not working on my day job.
                        </p>
                    </section>
                </ScrollAnimation>
            </header>
            <main className="max-w-5xl mx-auto mt-32 md:mt-40 px-8">
                <WorkExperience />
                <div className="mt-10">
                    <ScrollAnimation>

                        <h1 className="text-2xl mt-20 lg:mt-40 md:text-3xl text-white font-bold">
                            I&apos;ve been building a lot of things
                        </h1>
                    </ScrollAnimation>
                    <PortfolioGrid />
                </div>
            </main>

        </div>
    </ContentLayout >
};



