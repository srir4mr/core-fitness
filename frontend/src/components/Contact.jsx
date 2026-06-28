import React from "react";
import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Instagram,
  MessageCircle,
  Clock,
  Star,
  ExternalLink,
} from "lucide-react";
import { CONTACT as TID } from "@/constants/testIds";
import { BIZ, telLink, whatsappLink } from "@/lib/constants";

export default function Contact() {
  return (
    <section
      id="contact"
      data-testid={TID.root}
      className="relative bg-cf-surface py-24 md:py-32"
    >
      <div className="cf-divider absolute top-0 inset-x-0" />
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="mb-12 max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-cf-gold" />
            <span className="text-cf-gold uppercase text-xs tracking-[0.35em]">
              Find Us
            </span>
          </div>
          <h2
            data-testid={TID.title}
            className="font-display uppercase text-4xl md:text-6xl text-white leading-[0.95]"
          >
            Come visit the <span className="text-gold-gradient">floor.</span>
          </h2>
          <p className="mt-5 text-cf-mute font-body">
            We&apos;re in the heart of Pushpamal Nagar. Walk in for a free tour
            — no appointment needed.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          {/* Map */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-cf-border min-h-[360px] md:min-h-[480px]"
          >
            <iframe
              data-testid={TID.map}
              title="Core Fitness Dindigul location map"
              src={BIZ.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 w-full h-full grayscale-[0.4] contrast-[1.1] brightness-[0.85]"
              allowFullScreen=""
            />
            <a
              href={BIZ.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute bottom-4 left-4 inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-black/85 backdrop-blur-md border border-cf-gold text-cf-gold text-xs uppercase tracking-[0.2em]"
            >
              <MapPin size={14} /> Open in Google Maps
            </a>
          </motion.div>

          {/* Contact details */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-5 grid gap-4"
          >
            <div
              data-testid={TID.address}
              className="cf-card p-6 flex items-start gap-4"
            >
              <MapPin className="text-cf-gold mt-1 shrink-0" size={20} />
              <div>
                <div className="text-cf-mute text-[11px] uppercase tracking-[0.25em]">
                  Address
                </div>
                <div className="text-white mt-1 leading-relaxed text-sm">
                  {BIZ.address}
                </div>
              </div>
            </div>

            <a
              href={telLink}
              data-testid={TID.phone}
              className="cf-card p-6 flex items-center gap-4 hover:!border-cf-gold"
            >
              <Phone className="text-cf-gold shrink-0" size={20} />
              <div>
                <div className="text-cf-mute text-[11px] uppercase tracking-[0.25em]">
                  Phone
                </div>
                <div className="text-white mt-1 text-sm font-medium">
                  {BIZ.phoneDisplay}
                </div>
              </div>
            </a>

            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={TID.whatsapp}
              className="cf-card p-6 flex items-center gap-4 hover:!border-cf-gold"
            >
              <MessageCircle className="text-cf-gold shrink-0" size={20} />
              <div>
                <div className="text-cf-mute text-[11px] uppercase tracking-[0.25em]">
                  WhatsApp
                </div>
                <div className="text-white mt-1 text-sm font-medium">
                  {BIZ.whatsappDisplay}
                </div>
              </div>
            </a>

            <a
              href={BIZ.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={TID.instagram}
              className="cf-card p-6 flex items-center gap-4 hover:!border-cf-gold"
            >
              <Instagram className="text-cf-gold shrink-0" size={20} />
              <div>
                <div className="text-cf-mute text-[11px] uppercase tracking-[0.25em]">
                  Instagram
                </div>
                <div className="text-white mt-1 text-sm font-medium">
                  {BIZ.instagramHandle}
                </div>
              </div>
            </a>

            <div className="cf-card p-6 flex items-center gap-4">
              <Clock className="text-cf-gold shrink-0" size={20} />
              <div>
                <div className="text-cf-mute text-[11px] uppercase tracking-[0.25em]">
                  Hours
                </div>
                <div className="text-white mt-1 text-sm font-medium">
                  {BIZ.hoursDisplay}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Google Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-10 p-7 rounded-2xl border border-cf-border bg-black flex flex-col md:flex-row items-start md:items-center justify-between gap-5"
        >
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} className="fill-cf-gold text-cf-gold" />
              ))}
            </div>
            <div>
              <div className="text-white font-semibold text-sm">
                Loved by Dindigul
              </div>
              <div className="text-cf-mute text-xs">
                See what our members are saying on Google
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {BIZ.googleReviews.map((url, i) => (
              <a
                key={url}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={TID.reviewLink(i)}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full bg-cf-charcoal border border-cf-border hover:border-cf-gold text-white/85 hover:text-cf-gold text-xs uppercase tracking-wider transition"
              >
                Review {i + 1}
                <ExternalLink size={11} />
              </a>
            ))}
            <a
              href={BIZ.mapsLink}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={TID.reviewsBtn}
              className="btn-gold inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs uppercase tracking-wider font-semibold"
            >
              See All Reviews
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
