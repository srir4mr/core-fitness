import React from "react";
import {
  Instagram,
  MessageCircle,
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { FOOTER as TID, NAV } from "@/constants/testIds";
import { BIZ, telLink, whatsappLink } from "@/lib/constants";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Programs" },
  { id: "pricing", label: "Pricing" },
  { id: "gallery", label: "Gallery" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Contact" },
];

export default function Footer() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      data-testid={TID.root}
      className="relative bg-black border-t border-cf-border pt-20 pb-8"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 pb-14 border-b border-cf-border/70">
          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="w-11 h-11 rounded-md grid place-items-center bg-gradient-to-br from-cf-goldHi via-cf-gold to-[#8a701f] text-black font-display text-xl shadow-[0_10px_30px_-10px_rgba(212,175,55,0.6)]">
                C
              </span>
              <span className="font-display text-white text-xl tracking-tight">
                CORE<span className="text-cf-gold">.</span>FITNESS
              </span>
            </div>
            <p className="mt-5 text-white/70 text-sm max-w-md leading-relaxed">
              {BIZ.tagline}
              <br />
              The best unisex gym in {BIZ.city} — premium equipment, certified
              trainers, community-driven results since {BIZ.founded}.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href={BIZ.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={TID.instagram}
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-cf-border hover:border-cf-gold hover:text-cf-gold text-white/80 grid place-items-center transition"
              >
                <Instagram size={16} />
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={TID.whatsapp}
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full border border-cf-border hover:border-cf-gold hover:text-cf-gold text-white/80 grid place-items-center transition"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href={telLink}
                data-testid={TID.phone}
                aria-label="Phone"
                className="w-10 h-10 rounded-full border border-cf-border hover:border-cf-gold hover:text-cf-gold text-white/80 grid place-items-center transition"
              >
                <Phone size={16} />
              </a>
              <a
                href={`mailto:${BIZ.email}`}
                data-testid={TID.email}
                aria-label="Email"
                className="w-10 h-10 rounded-full border border-cf-border hover:border-cf-gold hover:text-cf-gold text-white/80 grid place-items-center transition"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="lg:col-span-3">
            <div className="text-cf-gold uppercase text-xs tracking-[0.3em] mb-5">
              Quick Links
            </div>
            <ul className="space-y-3">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => scrollTo(l.id)}
                    data-testid={`${NAV.linkHome.replace("home", l.id)}-footer`}
                    className="text-white/75 hover:text-cf-gold text-sm transition"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <div className="text-cf-gold uppercase text-xs tracking-[0.3em] mb-5">
              Visit
            </div>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3 text-white/80">
                <MapPin size={16} className="text-cf-gold mt-0.5 shrink-0" />
                <span>{BIZ.address}</span>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <Phone size={16} className="text-cf-gold mt-0.5 shrink-0" />
                <a href={telLink} className="hover:text-cf-gold">
                  {BIZ.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <MessageCircle size={16} className="text-cf-gold mt-0.5 shrink-0" />
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cf-gold"
                >
                  WhatsApp · {BIZ.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/80">
                <Mail size={16} className="text-cf-gold mt-0.5 shrink-0" />
                <a href={`mailto:${BIZ.email}`} className="hover:text-cf-gold">
                  {BIZ.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs">
          <p className="text-cf-mute">
            Crafted &amp; maintained by{" "}
            <a
              href={BIZ.ravexUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={TID.ravexLink}
              className="text-cf-gold hover:text-cf-goldHi inline-flex items-center gap-1 transition hover:[text-shadow:0_0_8px_rgba(212,175,55,0.7)]"
            >
              Ravex Solutions
              <ArrowUpRight size={12} />
            </a>
          </p>
          <p className="text-cf-mute">
            © {BIZ.founded}–2026 {BIZ.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
