import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { GALLERY as TID } from "@/constants/testIds";
import { GALLERY } from "@/lib/constants";

const spanClass = {
  tall: "md:row-span-2 aspect-[3/4]",
  wide: "md:col-span-2 aspect-[16/10]",
  square: "aspect-square",
};

export default function Gallery() {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      id="gallery"
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
                Our Facilities
              </span>
            </div>
            <h2
              data-testid={TID.title}
              className="font-display uppercase text-4xl md:text-6xl text-white leading-[0.95]"
            >
              Step <span className="text-gold-gradient">inside.</span>
            </h2>
          </div>
          <p className="text-cf-mute max-w-md font-body">
            Real shots from our Dindigul floor — premium equipment,
            uncompromising atmosphere.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[180px] md:auto-rows-[220px] gap-3 md:gap-4">
          {GALLERY.map((g, i) => (
            <motion.button
              key={i}
              type="button"
              data-testid={TID.item(i)}
              onClick={() => setActive(i)}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative overflow-hidden rounded-xl border border-cf-border hover:border-cf-gold transition-colors text-left ${
                spanClass[g.span] || "aspect-square"
              }`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-3 left-4 right-4 flex items-end justify-between">
                <span className="font-display uppercase text-white text-sm md:text-base group-hover:text-cf-gold transition-colors">
                  {g.caption}
                </span>
                <span className="opacity-0 group-hover:opacity-100 text-cf-gold text-[10px] uppercase tracking-[0.25em] transition-opacity">
                  View
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox — plain conditional render so close is instant & DOM unmounts immediately */}
      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 animate-fade-up"
          onClick={() => setActive(null)}
        >
          <button
            type="button"
            data-testid={TID.lightboxClose}
            onClick={(e) => {
              e.stopPropagation();
              setActive(null);
            }}
            className="absolute top-6 right-6 w-11 h-11 rounded-full grid place-items-center bg-cf-gold text-black hover:scale-105 transition z-[61]"
            aria-label="Close gallery image"
          >
            <X size={20} />
          </button>
          <motion.img
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.35 }}
            src={GALLERY[active].src}
            alt={GALLERY[active].alt}
            className="max-h-[85vh] max-w-[92vw] rounded-xl object-contain border border-cf-gold/40"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
