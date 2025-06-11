import LinkedinIcon from "@/assets/linkedinIcon.svg";
import GithubIcon from "@/assets/githubIcon.svg";
import CvIcon from "@/assets/cvIcon.svg";
import type { LinkType } from "./types";
import SocialLinksNavigation from "./SocialLinksNavigation";

const links: LinkType[] = [
  {
    title: "Linkedin",
    url: "https://www.linkedin.com/in/fabien-taupin/",
    src: LinkedinIcon,
    isExternal: true,
  },
  {
    title: "Github",
    url: "https://github.com/sifer75",
    src: GithubIcon,
    isExternal: true,
  },
  { title: "Cv", url: "/cv", src: CvIcon, isExternal: false },
];

function SocialLinks() {
  return (
    <nav id="SocialLinks__container" aria-label="Social links">
      <ul className="flex gap-5 border-2 border-black rounded-xl w-fit p-2">
        {links.map((link: LinkType) => (
          <SocialLinksNavigation id="SocialLinks__button" link={link} />
        ))}
      </ul>
    </nav>
  );
}

export default SocialLinks;
