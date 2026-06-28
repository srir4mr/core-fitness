import React from "react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { Trophy, Users, Dumbbell, Sparkles } from "lucide-react";
import { ABOUT } from "@/constants/testIds";
import { STATS, BIZ } from "@/lib/constants";

const ICONS = {
  1: Trophy,
  2: Users,
  3: Dumbbell,
  4: Sparkles,
};

function StatCard({ stat, idx }) {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Icon = ICONS[stat.id] || Sparkles;

  return (
    <motion.div
      ref={ref}
      data-testid={ABOUT.card(idx)}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative p-7 md:p-8 cf-card"
    >
      <div className="absolute top-0 left-7 w-12 h-px bg-cf-gold opacity-80" />
      <Icon className="text-cf-gold mb-6" size={28} strokeWidth={1.5} />
      <div className="flex items-baseline gap-1 font-display text-5xl md:text-6xl text-white">
        {inView ? (
          <CountUp end={stat.value} duration={2} separator="," />
        ) : (
          0
        )}
        <span className="text-cf-gold">{stat.suffix}</span>
      </div>
      <div className="mt-3 text-white font-semibold uppercase tracking-wider text-sm">
        {stat.label}
      </div>
      <div className="mt-1 text-cf-mute text-sm">{stat.caption}</div>
    </motion.div>
  );
}

export default function About() {
  return (
    <section
      id="about"
      data-testid={ABOUT.root}
      className="relative bg-black py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-cf-gold" />
              <span className="text-cf-gold uppercase text-xs tracking-[0.35em]">
                Why Core Fitness
              </span>
            </div>
            <h2
              data-testid={ABOUT.title}
              className="font-display uppercase text-4xl md:text-6xl text-white leading-[0.95] tracking-tight"
            >
              Built different.
              <br />
              <span className="text-gold-gradient">Built for Dindigul.</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 lg:pl-8 lg:border-l lg:border-cf-border/60"
          >
            <p className="text-white/80 text-base md:text-lg leading-relaxed font-body">
              Founded in 2021 by <span className="text-cf-gold">{BIZ.founder}</span>,
              Core Fitness is more than a gym — it&apos;s the premium
              community-first fitness experience Dindigul deserves. From
              first-time members to seasoned athletes, every floor, every
              trainer, and every plate is chosen with one mission in mind:
              elevate how you live.
            </p>
            <p className="mt-4 text-cf-mute font-body">
              Unisex. Inclusive. Uncompromising on quality. Welcome home.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {STATS.map((s, i) => (
            <StatCard key={s.id} stat={s} idx={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
