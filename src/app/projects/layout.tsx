import { ContentLayout } from "@/components/content-layout";

/**
 * The main layout wrapper for all project case studies
 * Provides consistent styling and structure across all project pages
 * Includes the navigation and footer that's shared between project pages
 */
export default function ProjectsLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <ContentLayout>{children}</ContentLayout>;
}
