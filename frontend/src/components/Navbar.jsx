import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV } from "@/constants/testIds";
import { whatsappLink } from "@/lib/constants";

const LINKS = [
  { id: "home", label: "Home", tid: NAV.linkHome },
  { id: "about", label: "About", tid: NAV.linkAbout },
  { id: "services", label: "Programs", tid: NAV.linkServices },
  { id: "pricing", label: "Pricing", tid: NAV.linkPricing },
  { id: "gallery", label: "Gallery", tid: NAV.linkGallery },
  { id: "faq", label: "FAQ", tid: NAV.linkFaq },
  { id: "contact", label: "Contact", tid: NAV.linkContact },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      data-testid={NAV.root}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/80 backdrop-blur-xl border-b border-cf-border/70"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10 h-16 md:h-20 flex items-center justify-between">
        <button
          data-testid={NAV.logo}
          onClick={() => handleClick("home")}
          className="flex items-center gap-2 group"
          aria-label="Core Fitness Dindigul home"
        >
          <span className="w-9 h-9 rounded-md grid place-items-center bg-gradient-to-br from-cf-goldHi via-cf-gold to-[#8a701f] text-black font-display text-lg shadow-[0_8px_30px_-10px_rgba(212,175,55,0.7)]">
            C
          </span>
          <span className="font-display tracking-tight text-white text-base md:text-lg">
            CORE<span className="text-cf-gold">.</span>FITNESS
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-7">
          {LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={l.tid}
              onClick={() => handleClick(l.id)}
              className="text-sm text-white/80 hover:text-cf-gold uppercase tracking-widest transition-colors"
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={NAV.joinCta}
            className="hidden md:inline-flex btn-gold px-5 py-2.5 rounded-full text-sm font-semibold tracking-wide"
          >
            Join Now
          </a>
          <button
            data-testid={NAV.mobileToggle}
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-white p-2 -mr-2"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            data-testid={NAV.mobileMenu}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-cf-border"
          >
            <div className="px-6 py-6 space-y-4">
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  data-testid={`${l.tid}-mobile`}
                  onClick={() => handleClick(l.id)}
                  className="block w-full text-left text-white/90 hover:text-cf-gold uppercase tracking-widest text-sm py-2 border-b border-cf-border/60"
                >
                  {l.label}
                </button>
              ))}
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold w-full justify-center"
              >
                <Phone size={16} /> Join Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
