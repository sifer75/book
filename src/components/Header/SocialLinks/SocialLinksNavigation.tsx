import type { LinkType } from "./types";

interface SocialLinksNavigationProps {
  id: string;
  link: LinkType;
}

function SocialLinksNavigation({ link, id }: SocialLinksNavigationProps) {
  return (
    <li
      id={`SocialLinksNavigation__list__${id}`}
      key={link.title}
      className="border-2 border-black rounded-xl w-fit p-2 hover:scale-110 transition-all hover:bg-yellow-200"
    >
      <a
        id={`SocialLinksNavigation__link__${id}`}
        href={link.url}
        target={link.isExternal ? "_blank" : "_self"}
        rel={link.isExternal ? "noopener noreferrer" : undefined}
        aria-label={`Lien vers ${link.title}`}
      >
        <img
          id={`SocialLinksNavigation__image__${id}`}
          src={link.src}
          alt={`Logo ${link.title}`}
          className="w-8 h-8"
          aria-hidden="true"
        />
      </a>
    </li>
  );
}

export default SocialLinksNavigation;
