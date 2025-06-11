import type { LinkType } from "./types";

interface SocialLinksNavigationProps {
  link: LinkType;
}

function SocialLinksNavigation({ link }: SocialLinksNavigationProps) {
  return (
    <li key={link.title} className="border-2 border-black rounded-xl w-fit p-2 hover:scale-110 transition-all hover:bg-yellow-200">
      <a
        href={link.url}

        target={link.isExternal ? "_blank" : "_self"}
        rel={link.isExternal ? "noopener noreferrer" : undefined}
        aria-label={`Lien vers ${link.title}`}
      >
          <img
            src={link.src}
            alt={`Logo ${link.title}`}
            className="w-14 h-14"
            aria-hidden="true"
          />
      </a>
    </li>
  );
}

export default SocialLinksNavigation;
