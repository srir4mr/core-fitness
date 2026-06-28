import React from "react";
import { motion } from "framer-motion";
import {
  Dumbbell,
  HeartPulse,
  Activity,
  Flame,
  UserCheck,
  Wind,
  ArrowUpRight,
} from "lucide-react";
import { SERVICES as TID } from "@/constants/testIds";
import { SERVICES } from "@/lib/constants";

const ICON_MAP = {
  Dumbbell,
  HeartPulse,
  Activity,
  Flame,
  UserCheck,
  Wind,
};

export default function Services() {
  return (
    <section
      id="services"
      data-testid={TID.root}
      className="relative bg-cf-surface py-24 md:py-32"
    >
      <div className="cf-divider absolute top-0 inset-x-0" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-cf-gold" />
              <span className="text-cf-gold uppercase text-xs tracking-[0.35em]">
                Our Programs
              </span>
            </div>
            <h2
              data-testid={TID.title}
              className="font-display uppercase text-4xl md:text-6xl text-white leading-[0.95]"
            >
              Train like a <span className="text-gold-gradient">pro.</span>
            </h2>
          </div>
          <p className="text-cf-mute max-w-md font-body">
            Six disciplines. One roof. Whether you&apos;re chasing your first
            pull-up or your hundredth PR — there&apos;s a floor and a coach for
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SERVICES.map((s, i) => {
            const Icon = ICON_MAP[s.icon];
            return (
              <motion.article
                key={s.id}
                data-testid={TID.card(i)}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative p-7 md:p-8 cf-card overflow-hidden"
              >
                <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-cf-gold/0 group-hover:bg-cf-gold/10 blur-3xl transition-all duration-500" />
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl grid place-items-center bg-black border border-cf-border group-hover:border-cf-gold transition-colors">
                    {Icon ? (
                      <Icon className="text-cf-gold" size={22} strokeWidth={1.6} />
                    ) : null}
                  </div>
                  <ArrowUpRight
                    className="text-cf-mute group-hover:text-cf-gold group-hover:rotate-12 transition-all"
                    size={20}
                  />
                </div>
                <h3 className="mt-6 font-display uppercase text-2xl text-white tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-3 text-cf-mute text-sm leading-relaxed">
                  {s.desc}
                </p>
                <div className="mt-7 h-px w-full bg-cf-border group-hover:bg-cf-gold/60 transition-colors" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
