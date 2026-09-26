import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { CV_PATH } from "@/lib/site";

/** On the home page the bar floats over the hero and turns solid once the story starts; elsewhere it is solid. */
export default function Nav({ home = false }: { home?: boolean }) {
  return (
    <header className={home ? "nav" : "nav solid"}>
      <Link className="nav-brand" href={home ? "#top" : "/"} aria-label="Min Htet Aung (Nicholas), home">
        <img className="nav-head" src="/nav-head.webp" width={84} height={120} alt="" />
        <span className="nav-mark">mha</span>
      </Link>
      <nav className="nav-links" aria-label="Primary">
        <Link className="hide-sm" href={home ? "#work" : "/#work"}>Work</Link>
        <Link className="hide-sm" href={home ? "#experience" : "/#experience"}>Experience</Link>
        <Link className="hide-sm" href={home ? "#contact" : "/#contact"}>Contact</Link>
        <a className="btn btn--red" href={CV_PATH} download>CV ↓</a>
        <ThemeToggle />
      </nav>
    </header>
  );
}
