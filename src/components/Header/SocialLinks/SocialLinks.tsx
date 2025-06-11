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
    // <div className="flex bg-blue-800 h-fit justify-start gap-5 text-yellow-100 border-2 border-black rounded-xl w-fit p-2 ">
    //   {links.map((link: LinkType) => {
    //     return (
    //       <a href={link.url} key={link.title}>
    //         <>
    //           <button className="border group rounded-xl p-2 h-fit text-xl hover:scale-110 transition-all hover:bg-yellow-200 border-black">
    //             <img src={link.src} alt="logo" className="w-10" />
    //           </button>
    //           <p className="hidden group-hover:block absolute top-5 bg-red-500">
    //             {link.title}
    //           </p>
    //         </>
    //       </a>
    //     );
    //   })}
    // </div>
    <nav aria-label="Social links">
      <ul className="flex gap-5 border-2 border-black rounded-xl w-fit p-2">
        {links.map((link: LinkType) => (
          <SocialLinksNavigation link={link} />
        ))}
      </ul>
    </nav>
  );
}

export default SocialLinks;
