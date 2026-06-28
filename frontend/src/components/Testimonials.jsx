import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, Instagram } from "lucide-react";
import { TESTIMONIALS as TID } from "@/constants/testIds";
import { TESTIMONIALS, BIZ } from "@/lib/constants";

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      data-testid={TID.root}
      className="relative bg-black py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-cf-gold" />
              <span className="text-cf-gold uppercase text-xs tracking-[0.35em]">
                Member Love
              </span>
            </div>
            <h2
              data-testid={TID.title}
              className="font-display uppercase text-4xl md:text-6xl text-white leading-[0.95]"
            >
              Real members.
              <br />
              <span className="text-gold-gradient">Real results.</span>
            </h2>
          </div>
          <a
            href={BIZ.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={TID.igLink}
            className="btn-outline-gold inline-flex items-center gap-2 px-5 py-3 rounded-full text-xs uppercase tracking-[0.25em]"
          >
            <Instagram size={16} /> {BIZ.instagramHandle}
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.article
              key={t.id}
              data-testid={TID.card(i)}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative p-7 cf-card flex flex-col"
            >
              <span className="absolute top-0 left-0 h-full w-[3px] bg-gradient-to-b from-cf-gold to-transparent" />
              <Quote className="text-cf-gold/60" size={28} />
              <p className="mt-5 text-white/90 text-sm leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-1.5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="fill-cf-gold text-cf-gold"
                  />
                ))}
              </div>
              <div className="mt-4 pt-4 border-t border-cf-border/70">
                <div className="text-white font-semibold text-sm">{t.name}</div>
                <div className="text-cf-mute text-xs">{t.role}</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
