"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * The home page's scroll story, ported from the approved mockup:
 * pinned hero -> skylines part, red smoke wipes up with the chapter card -> sideways comic strip.
 * Content is fully readable without it; reduced-motion visitors get the static page.
 */
export default function HomeMotion() {
  useEffect(() => {
    const root = document.documentElement;
    const raf = requestAnimationFrame(() => root.classList.add("loaded"));
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return () => cancelAnimationFrame(raf);

    gsap.registerPlugin(ScrollTrigger);
    const flash = gsap.to(".hero-flash", { opacity: 0.55, duration: 0.06, repeat: -1, repeatDelay: 6.9, yoyo: true, delay: 6.2 });
    const mm = gsap.matchMedia();

    mm.add("(min-width: 0px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ".hero", start: "top top", end: "+=110%", scrub: 0.6, pin: true, anticipatePin: 1 },
      });
      tl.to(".sky-l", { xPercent: -18, yPercent: 10, ease: "none" }, 0)
        .to(".sky-r", { xPercent: 18, yPercent: 10, ease: "none" }, 0)
        .to(".storm", { xPercent: -10, yPercent: -8, ease: "none" }, 0)
        .to(".bolt", { yPercent: -30, ease: "none" }, 0)
        .to(".hero-copy", { yPercent: -10, scale: 0.96, transformOrigin: "left center", ease: "none" }, 0)
        .to(".smoke-wipe", { yPercent: -102, ease: "power1.in" }, 0.35)
        .from(".chapter > div", { scale: 0.8, opacity: 0, ease: "back.out(2)", duration: 0.25 }, 0.75);

      ScrollTrigger.create({
        trigger: ".story", start: "top 70px", end: "max",
        onToggle: (self) => document.querySelector(".nav")?.classList.toggle("solid", self.isActive),
      });
    });

    // desktop reads sideways like a strip; phones keep a vertical comic page
    mm.add("(min-width: 761px)", () => {
      const track = document.querySelector<HTMLElement>(".track");
      if (!track) return;
      const dist = () => track.scrollWidth - window.innerWidth;
      gsap.from(".panel", { y: 50, opacity: 0, duration: 0.55, ease: "back.out(1.5)", stagger: 0.07,
        scrollTrigger: { trigger: ".story", start: "top 75%" } });
      const slide = gsap.to(track, {
        x: () => -dist(), ease: "none",
        scrollTrigger: { trigger: ".story", start: "top top", end: () => "+=" + dist(), pin: true, scrub: 0.6, invalidateOnRefresh: true },
      });
      gsap.utils.toArray<SVGElement>(".panel-art svg").forEach((svg) => {
        gsap.fromTo(svg, { xPercent: -6 }, { xPercent: 6, ease: "none",
          scrollTrigger: { trigger: svg.parentNode as Element, containerAnimation: slide, start: "left right", end: "right left", scrub: true } });
      });
    });
    mm.add("(max-width: 760px)", () => {
      gsap.utils.toArray<HTMLElement>(".panel").forEach((p) => {
        gsap.from(p, { y: 30, opacity: 0, duration: 0.45, ease: "back.out(1.6)", scrollTrigger: { trigger: p, start: "top 88%" } });
      });
    });

    // calm sections: rows ink in once, quickly, no drama
    const rows = gsap.utils.toArray<HTMLElement>(".ledger-row").map((r, i) =>
      gsap.from(r, { opacity: 0, x: -12, duration: 0.4, ease: "power3.out", delay: i * 0.05, scrollTrigger: { trigger: r, start: "top 90%" } }));

    // Arriving at /#contact etc.: the browser jumped before the pins added their scroll space,
    // so jump again once ScrollTrigger has laid the page out.
    let hashRaf = 0;
    if (location.hash) {
      hashRaf = requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        const target = document.getElementById(decodeURIComponent(location.hash.slice(1)));
        if (target) window.scrollTo(0, target.getBoundingClientRect().top + window.scrollY - 76);
      });
    }

    return () => { cancelAnimationFrame(raf); cancelAnimationFrame(hashRaf); flash.kill(); rows.forEach((t) => t.kill()); mm.revert(); };
  }, []);

  return null;
}
