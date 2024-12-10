import { getProjectById } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ShoppingBag, Shield, Sparkles } from "lucide-react";
import { Metadata } from "next";
import { siteConfig } from "@/lib/site-config";

type Props = {
  params: { id: string }
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectById(params.id);
  
  if (!project) return {};

  return {
    metadataBase: new URL(siteConfig.url),
    title: `${project.metadata.title} | ${siteConfig.name}`,
    description: project.metadata.description,
    keywords: [...siteConfig.keywords, ...project.seoKeywords],
    openGraph: {
      title: `${project.metadata.title} | ${siteConfig.name}`,
      description: project.metadata.description,
      url: `${siteConfig.url}${project.metadata.url}`,
      siteName: siteConfig.name,
      images: [{
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: project.metadata.imageAlt
      }],
      locale: "en_US",
      type: project.metadata.type,
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.metadata.title} | ${siteConfig.name}`,
      description: project.metadata.description,
      images: [siteConfig.ogImage],
    },
    alternates: {
      canonical: `${siteConfig.url}${project.metadata.url}`,
    }
  };
}

export default function ProjectPage({ params }: Props) {
  const project = getProjectById(params.id);

  if (!project) {
    notFound();
  }

  const IconComponent = {
    ShoppingBag,
    Shield,
    Sparkles
  };

  return (
    <div className="min-h-screen pt-28 bg-zinc-900 text-white">
      {/* Hero Section */}
      <section className="lg:pt-24 pt-11 pb-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold mb-6">
            {project.title}
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-2xl">
            {project.fullDescription}
          </p>
          <div className="flex flex-wrap gap-4">
            {project.links.live && (
              <Link
                href={project.links.live}
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-400 text-black font-semibold rounded-lg hover:bg-blue-300 transition-colors"
              >
                Live Link <ArrowUpRight className="ml-2" size={20} />
              </Link>
            )}
            {project.links.github && (
              <Link
                href={project.links.github}
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-400 text-white font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all"
              >
                Code Link <ArrowUpRight className="ml-2" size={20} />
              </Link>
            )}
            {project.links.userDemo && (
              <Link
                href={project.links.userDemo}
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-400 text-white font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all"
              >
                User Demo <ArrowUpRight className="ml-2" size={20} />
              </Link>
            )}
            {project.links.adminDemo && (
              <Link
                href={project.links.adminDemo}
                target="_blank"
                className="inline-flex items-center justify-center px-6 py-3 border border-blue-400 text-white font-semibold rounded-lg hover:bg-blue-400 hover:text-black transition-all"
              >
                Admin Demo <ArrowUpRight className="ml-2" size={20} />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Project Details Section */}
      <section className="py-12 px-4 overflow-hidden">
        <div className="mx-auto max-w-5xl">
          {/* Project screenshot */}
          <div className="mb-16 relative">
            <div className="relative aspect-[16/9] rounded-xl overflow-hidden bg-zinc-800">
              <Image
                src={project.image}
                alt={project.metadata.imageAlt}
                fill
                className="max-h-[90%] max-w-[90%] mx-auto my-auto rounded-lg"
              />
            </div>
            {/* Decorative elements */}
            <div className={`absolute -inset-x-4 -inset-y-4 z-0 bg-gradient-to-r from-${project.gradientColors.from} to-${project.gradientColors.to} opacity-50 blur-3xl`} />
            <div className={`absolute -inset-x-10 -inset-y-10 z-0 bg-${project.gradientColors.from.split('/')[0]}/10 opacity-30 blur-2xl`} />
          </div>

          <div className="space-y-16">
            {/* Project Overview */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-8">
                Project Overview
              </h2>
              <div className="space-y-6 text-gray-400">
                <p className="text-lg">{project.detailedDescription}</p>

                {/* Main Features with Icons - if available */}
                {project.mainFeatures && (
                  <div className="grid gap-6 md:grid-cols-3">
                    {project.mainFeatures.map((feature, index) => {
                      const Icon = IconComponent[feature.icon as keyof typeof IconComponent];
                      return (
                        <div
                          key={index}
                          className="p-6 rounded-lg bg-zinc-800/50 backdrop-blur-sm"
                        >
                          {Icon && <Icon className="w-8 h-8 text-purple-400" />}
                          <h3 className="text-white font-semibold mt-4 mb-2">
                            {feature.title}
                          </h3>
                          <p className="text-sm">{feature.description}</p>
                        </div>
                      );
                    })}
                  </div>
                )}

                {/* Key Features or Highlights */}
                {(project.keyFeatures || project.keyHighlights) && (
                  <>
                    <p className="font-semibold text-white text-xl mt-8">
                      Key Highlights:
                    </p>
                    <div className="grid gap-6 md:grid-cols-2">
                      {(project.keyFeatures || project.keyHighlights).map((feature, index) => (
                        <div
                          key={index}
                          className="p-4 rounded-lg bg-zinc-800/50 backdrop-blur-sm"
                        >
                          <h3 className="text-white font-semibold mb-2">
                            {feature.title}
                          </h3>
                          <p>{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>

            {/* Technical Details - if available */}
            {project.technicalDetails && (
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-8">
                  Technical Deep Dive
                </h2>
                <div className="space-y-6 text-gray-400">
                  <p className="text-lg">{project.technicalDetails.overview}</p>
                  <ul className="list-disc pl-6 space-y-2">
                    {project.technicalDetails.points.map((point, index) => (
                      <li key={index}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* Challenges & Solutions - if available */}
            {(project.challenges || project.technicalChallenges) && (
              <div className="space-y-16">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-8">
                    Challenges & Solutions
                  </h2>
                  <div className="space-y-8">
                    {(project.challenges || project.technicalChallenges).map((item, index) => (
                      <div
                        key={index}
                        className="bg-zinc-800/30 rounded-lg p-6 backdrop-blur-sm"
                      >
                        <h3 className={`text-xl font-semibold mb-4 ${
                          project.id === 'wellcrest-therapy' 
                            ? 'text-blue-400' 
                            : `text-${project.gradientColors.from.split('/')[0]}`
                        }`}>
                          {item.challenge}
                        </h3>
                        <div className="grid gap-4 md:grid-cols-3">
                          <div>
                            <h4 className="text-white font-medium mb-2">
                              Challenge:
                            </h4>
                            <p className="text-gray-400">{item.description}</p>
                          </div>
                          <div>
                            <h4 className="text-white font-medium mb-2">
                              Solution:
                            </h4>
                            <p className="text-gray-400">{item.solution}</p>
                          </div>
                          <div>
                            <h4 className="text-white font-medium mb-2">
                              Outcome:
                            </h4>
                            <p className="text-gray-400">{item.outcome}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Update the Tools Used section styling */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-8">Tools Used</h2>
                  <div className="flex flex-wrap gap-3">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className={`px-4 py-2 bg-zinc-800/50 border ${
                          project.id === 'wellcrest-therapy' 
                            ? 'border-blue-400/20' 
                            : `border-${project.gradientColors.from.split('/')[0]}/20`
                        } rounded-lg text-sm backdrop-blur-sm`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
} 