import { Linkedin, Github } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

/**
 * SocialLinks Component
 * Renders a collection of social media links based on the site configuration.
 * Each link opens in a new tab and includes hover effects for better UX.
 */
const SocialLinks = () => {
  return (
    <div className="flex flex-row justify-center space-x-2 mt-2">
      {/* WhatsApp Link - Business communication channel */}
      {siteConfig.links.whatsapp && (
        <Link
          href={siteConfig.links.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 text-zinc-500 text-sm relative"
        >
          <div className="relative z-10 px-2 py-2 inline-block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="lucide-icon"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
        </Link>
      )}

      {/* Professional LinkedIn Profile */}
      {siteConfig.links.linkedin && (
        <Link
          href={siteConfig.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 text-zinc-500 text-sm relative"
        >
          <div className="relative z-10 px-2 py-2 inline-block">
            <Linkedin />
          </div>
        </Link>
      )}

      {/* Twitter/X Social Presence */}
      {siteConfig.links.twitter && (
        <Link
          href={siteConfig.links.twitter}
          className="text-zinc-400 hover:text-cyan-500 transition-colors duration-200"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="relative z-10 px-2 py-2 inline-block">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="h-5 w-5"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
            </svg>
          </span>
        </Link>
      )}

      {/* GitHub Repository Access */}
      {siteConfig.links.github && (
        <Link
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400 text-zinc-500 text-sm relative"
        >
          <div className="relative z-10 px-2 py-2 inline-block">
            <Github />
          </div>
        </Link>
      )}
    </div>
  );
};

export default SocialLinks; 