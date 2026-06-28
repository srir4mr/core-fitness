import React from "react";
import { motion } from "framer-motion";
import { MessageCircle, Phone, ArrowRight } from "lucide-react";
import { CTA as TID } from "@/constants/testIds";
import { BIZ, telLink, whatsappLink } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section
      id="cta"
      data-testid={TID.root}
      className="relative bg-cf-surface py-24 md:py-32 overflow-hidden"
    >
      <div className="cf-divider absolute top-0 inset-x-0" />
      {/* gold radial */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full bg-cf-gold/10 blur-[160px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-cf-gold" />
            <span className="text-cf-gold uppercase text-xs tracking-[0.35em]">
              Your move
            </span>
            <span className="h-px w-8 bg-cf-gold" />
          </div>
          <h2
            data-testid={TID.title}
            className="font-display uppercase text-5xl md:text-7xl text-white leading-[0.95]"
          >
            Ready to <span className="text-gold-gradient">level up?</span>
          </h2>
          <p className="mt-6 text-cf-mute text-base md:text-lg max-w-2xl mx-auto">
            Start your fitness journey today. The first consultation is{" "}
            <span className="text-cf-gold font-semibold">absolutely free</span>.
            Walk in, message, or call — we&apos;re ready when you are.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={TID.whatsappBtn}
            className="btn-gold inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase"
          >
            <MessageCircle size={18} />
            WhatsApp Us Now
            <ArrowRight size={16} />
          </a>
          <a
            href={telLink}
            data-testid={TID.callBtn}
            className="btn-outline-gold inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-sm tracking-wider uppercase"
          >
            <Phone size={18} />
            Call {BIZ.phoneDisplay}
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-7 text-cf-mute text-sm"
        >
          Questions? DM us on{" "}
          <a
            href={BIZ.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cf-gold hover:underline"
          >
            {BIZ.instagramHandle}
          </a>
        </motion.p>
      </div>
    </section>
  );
}
