"use client"
import React from "react";


import WorkExperience from "@/components/workExperience";
import Grid from "@/components/Grid";
import PortfolioGrid from "@/components/Portfolio";

import { ContentLayout } from "./content-layout";


const HomeContent = () => {
    return <ContentLayout>
        <div className="min-h-screen bg-zinc-900 text-white">

            <header className=" mx-auto max-w-5xl  py-6">
                <main className=" max-w-5xl mx-auto mt-32  md:mt-40 px-8  ">
                    <section className="max-w-3xl">
                        <h2 className="animate-fade-in-slow text-3xl md:text-4xl lg:text-[43px] font-bold mb-6">
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

                    <section className="mt-20 max-w-5xl mx-auto px-4">
                        <h3 className="text-2xl md:text-3xl text-white font-bold max-w-5xl mx-auto mt-20 md:mt-40">
                            Work Experience
                        </h3>
                        <p className="text-zinc-400 text-sm md:text-base max-w-2xl mt-4 leading-loose tracking-wide ">
                            I&apos;ve worked across diverse companies, growing my skills and embracing new challenges.
                        </p>
                        <WorkExperience />
                    </section>
                </main>
            </header>
            <div className="max-w-5xl mx-auto px-4 md:px-8 mt-20">
                <Grid />
                <section>
                    <h1 className="text-2xl mt-20 lg:mt-40 md:text-3xl text-white font-bold max-w-5xl mx-auto  ">
                        I&apos;ve been building a lot of things
                    </h1>
                    <div className="max-w-5xl mx-auto ">
                        <div className=" mt-10 ">
                            <PortfolioGrid />
                        </div>
                    </div>
                </section>
            </div>
           

        </div>
    </ContentLayout>
};

export default HomeContent;



