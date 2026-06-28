import React from "react";
import { motion } from "framer-motion";
import { Instagram, ArrowUpRight, Award, Sparkles, Quote } from "lucide-react";
import { FOUNDER as TID } from "@/constants/testIds";
import { FOUNDER } from "@/lib/constants";

export default function Founder() {
  return (
    <section
      id="founder"
      data-testid={TID.root}
      className="relative bg-black py-24 md:py-32 overflow-hidden"
    >
      <div className="cf-divider absolute top-0 inset-x-0" />
      {/* Decorative gold blob */}
      <div className="absolute -left-32 top-1/3 w-[420px] h-[420px] rounded-full bg-cf-gold/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Portrait */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] border border-cf-border group">
              <img
                src={FOUNDER.photo}
                alt={`${FOUNDER.name} – founder of Core Fitness Dindigul`}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

              {/* Floating brand chip */}
              <div
                data-testid={TID.brandTag}
                className="absolute top-5 left-5 inline-flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/70 backdrop-blur-md border border-cf-gold/60"
              >
                <Award size={14} className="text-cf-gold" />
                <span className="text-cf-gold text-[10px] uppercase tracking-[0.3em] font-semibold">
                  Founder · Coach
                </span>
              </div>

              {/* Name on photo */}
              <div className="absolute bottom-5 left-5 right-5">
                <div className="text-cf-gold text-[10px] uppercase tracking-[0.35em] mb-1">
                  {FOUNDER.role}
                </div>
                <div className="font-display text-white text-2xl md:text-3xl uppercase leading-tight">
                  {FOUNDER.name}
                </div>
              </div>
            </div>

            {/* Gold accent block */}
            <div className="hidden md:block absolute -bottom-5 -right-5 w-32 h-32 border border-cf-gold/60 rounded-2xl -z-0" />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-cf-gold" />
              <span className="text-cf-gold uppercase text-xs tracking-[0.35em]">
                Meet the founder
              </span>
            </div>
            <h2
              data-testid={TID.title}
              className="font-display uppercase text-4xl md:text-6xl text-white leading-[0.95]"
            >
              The man behind <br />
              <span className="text-gold-gradient">Core Fitness.</span>
            </h2>

            <Quote className="text-cf-gold/40 mt-8" size={28} />

            <div className="mt-4 space-y-4 text-white/80 text-base md:text-lg leading-relaxed font-body">
              {FOUNDER.bio.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* TAWAT brand callout */}
            <div className="mt-8 p-5 md:p-6 rounded-2xl bg-gradient-to-r from-cf-gold/12 via-cf-gold/5 to-transparent border border-cf-gold/40 flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl grid place-items-center bg-black border border-cf-gold/60 shrink-0">
                <Sparkles className="text-cf-gold" size={20} />
              </div>
              <div className="min-w-0">
                <div className="text-cf-mute text-[10px] uppercase tracking-[0.3em] mb-1">
                  Activewear Brand
                </div>
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-gold-gradient text-2xl md:text-3xl uppercase tracking-tight leading-none">
                    {FOUNDER.brand}
                  </span>
                  <span className="text-white/70 text-xs md:text-sm hidden sm:inline">
                    {FOUNDER.brandTagline}
                  </span>
                </div>
                <span className="block sm:hidden text-white/70 text-xs mt-1">
                  {FOUNDER.brandTagline}
                </span>
              </div>
            </div>

            {/* Instagram CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={FOUNDER.igUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={TID.igLink}
                className="btn-gold inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full font-semibold text-sm tracking-wider uppercase"
              >
                <Instagram size={18} />
                Follow {FOUNDER.handle}
                <ArrowUpRight size={16} />
              </a>
              <a
                href="#contact"
                className="btn-outline-gold inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold text-sm tracking-wider uppercase"
              >
                Train with Sathish
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
