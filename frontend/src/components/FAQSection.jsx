import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { FAQ as TID } from "@/constants/testIds";
import { FAQS } from "@/lib/constants";

export default function FAQSection() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      data-testid={TID.root}
      className="relative bg-black py-24 md:py-32"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-12">
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-cf-gold" />
            <span className="text-cf-gold uppercase text-xs tracking-[0.35em]">
              Frequently Asked
            </span>
            <span className="h-px w-8 bg-cf-gold" />
          </div>
          <h2
            data-testid={TID.title}
            className="font-display uppercase text-4xl md:text-6xl text-white leading-[0.95]"
          >
            Everything you need to <span className="text-gold-gradient">know.</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                data-testid={TID.item(i)}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.03 }}
                className={`rounded-xl border transition-colors ${
                  isOpen
                    ? "bg-cf-surface border-cf-gold"
                    : "bg-cf-surface border-cf-border hover:border-cf-gold/50"
                }`}
              >
                <button
                  data-testid={TID.trigger(i)}
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full px-6 py-5 flex items-center justify-between gap-5 text-left"
                >
                  <span
                    className={`text-base md:text-lg font-semibold ${
                      isOpen ? "text-cf-gold" : "text-white"
                    }`}
                  >
                    {item.q}
                  </span>
                  <span
                    className={`shrink-0 w-9 h-9 rounded-full grid place-items-center border transition-transform duration-300 ${
                      isOpen
                        ? "bg-cf-gold border-cf-gold text-black rotate-45"
                        : "border-cf-border text-cf-gold"
                    }`}
                  >
                    <Plus size={18} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-cf-mute text-sm md:text-base leading-relaxed">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
