import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Star } from "lucide-react";
import { HERO } from "@/constants/testIds";
import { BIZ, whatsappLink } from "@/lib/constants";

const HERO_IMG =
  "https://customer-assets.emergentagent.com/job_282709a2-22d5-44bd-a76a-0adab3855c8e/artifacts/ngt93md0_DSC03545.JPG";

export default function Hero() {
  return (
    <section
      id="home"
      data-testid={HERO.root}
      className="relative min-h-[100svh] w-full overflow-hidden bg-black grain"
    >
      {/* Background image with ken-burns */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Core Fitness Dindigul trainer in black uniform with gold lettering"
          className="w-full h-full object-cover object-center kenburns will-change-transform"
          loading="eager"
          decoding="async"
        />
        {/* Cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/85 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60" />
        {/* Gold vignette */}
        <div className="absolute -inset-32 bg-[radial-gradient(circle_at_80%_30%,rgba(212,175,55,0.18),transparent_60%)]" />
      </div>

      {/* Side rule */}
      <div className="hidden md:block absolute left-10 top-1/3 bottom-1/4 w-px bg-gradient-to-b from-transparent via-cf-gold/60 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-44 pb-24 min-h-[100svh] flex items-center">
        <div className="w-full md:max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex items-center gap-3 mb-7"
          >
            <span className="h-px w-10 bg-cf-gold" />
            <span className="text-cf-gold/90 uppercase text-xs tracking-[0.35em] font-medium">
              EST. {BIZ.founded} · Dindigul
            </span>
          </motion.div>

          <motion.h1
            data-testid={HERO.headline}
            initial={{ opacity: 0, y: 18, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-white text-[clamp(2.5rem,7vw,5.5rem)] leading-[0.95] uppercase tracking-tighter"
          >
            Transform <br className="hidden sm:block" />
            <span className="text-gold-gradient">your body.</span>
            <br />
            Elevate your mind.
          </motion.h1>

          <motion.p
            data-testid={HERO.subheadline}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mt-7 max-w-xl text-white/75 text-base md:text-lg font-body"
          >
            The best unisex gym in Dindigul. Premium equipment, certified
            trainers and a community-driven fitness floor — built by
            {" "}
            <span className="text-white">{BIZ.founder}</span>, refined every day
            since 2021.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
          >
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={HERO.joinBtn}
              className="btn-gold inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-sm tracking-wider uppercase"
            >
              Join Now
              <ArrowRight size={18} />
            </a>
            <a
              href="#contact"
              data-testid={HERO.tourBtn}
              className="btn-outline-gold inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full font-semibold text-sm tracking-wider uppercase"
            >
              Book a Tour
            </a>
          </motion.div>

          {/* Floating proof badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.85 }}
            className="mt-12 inline-flex items-center gap-4 px-5 py-3 rounded-full bg-white/5 border border-cf-border backdrop-blur-md"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map((i) => (
                <span
                  key={i}
                  className="w-7 h-7 rounded-full border-2 border-black bg-gradient-to-br from-cf-goldHi to-[#7a5e18]"
                />
              ))}
            </div>
            <div className="flex items-center gap-1.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star
                  key={i}
                  size={13}
                  className="fill-cf-gold text-cf-gold"
                />
              ))}
            </div>
            <span className="text-xs text-white/80">
              <span className="text-white font-semibold">500+ members</span>{" "}
              transformed
            </span>
          </motion.div>
        </div>
      </div>

      {/* Bottom marquee strip */}
      <div
        data-testid={HERO.scrollIndicator}
        className="absolute bottom-0 left-0 right-0 z-10 border-t border-cf-border/70 bg-black/60 backdrop-blur-md"
      >
        <div className="relative overflow-hidden py-3">
          <div className="animate-marquee flex whitespace-nowrap gap-12 text-white/40 uppercase text-xs tracking-[0.35em] font-medium">
            {Array.from({ length: 2 }).map((_, dup) => (
              <React.Fragment key={dup}>
                <span>Strength</span>
                <span className="text-cf-gold">●</span>
                <span>CrossFit</span>
                <span className="text-cf-gold">●</span>
                <span>Personal Training</span>
                <span className="text-cf-gold">●</span>
                <span>Yoga</span>
                <span className="text-cf-gold">●</span>
                <span>Conditioning</span>
                <span className="text-cf-gold">●</span>
                <span>Diet Coaching</span>
                <span className="text-cf-gold">●</span>
                <span>Unisex Gym</span>
                <span className="text-cf-gold">●</span>
                <span>Best in Dindigul</span>
                <span className="text-cf-gold">●</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute z-10 bottom-16 right-6 md:right-12 text-white/60 hover:text-cf-gold transition-colors flex flex-col items-center gap-2"
        aria-label="Scroll down"
      >
        <span className="text-[10px] tracking-[0.4em] uppercase">Scroll</span>
        <ChevronDown className="animate-bounce" size={18} />
      </a>
    </section>
  );
}
