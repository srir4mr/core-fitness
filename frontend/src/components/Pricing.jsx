import React from "react";
import { motion } from "framer-motion";
import { Check, Sparkles, GraduationCap } from "lucide-react";
import { PRICING as TID } from "@/constants/testIds";
import { PLANS, whatsappLink } from "@/lib/constants";

function PriceTag({ value }) {
  return (
    <div className="flex items-end gap-2">
      <span className="font-display text-5xl md:text-6xl text-white">
        ₹{value.toLocaleString("en-IN")}
      </span>
    </div>
  );
}

export default function Pricing() {
  return (
    <section
      id="pricing"
      data-testid={TID.root}
      className="relative bg-black py-24 md:py-32 overflow-hidden"
    >
      {/* Decorative gold dotted line */}
      <div className="absolute top-0 inset-x-0 cf-divider" />
      <div className="absolute right-0 top-32 w-72 h-72 rounded-full bg-cf-gold/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-cf-gold" />
            <span className="text-cf-gold uppercase text-xs tracking-[0.35em]">
              Membership Plans
            </span>
            <span className="h-px w-8 bg-cf-gold" />
          </div>
          <h2
            data-testid={TID.title}
            className="font-display uppercase text-4xl md:text-6xl text-white leading-[0.95]"
          >
            Affordable fitness.
            <br />
            <span className="text-gold-gradient">Premium experience.</span>
          </h2>
          <p className="mt-5 text-cf-mute font-body">
            Pick a plan. Show up. We&apos;ll handle the rest.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {PLANS.map((plan, i) => (
            <motion.div
              key={plan.id}
              data-testid={TID.card(i)}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl p-7 md:p-8 flex flex-col ${
                plan.highlight
                  ? "bg-gradient-to-b from-[#171206] to-[#0A0A0A] border border-cf-gold gold-glow"
                  : "bg-cf-surface border border-cf-border hover:border-cf-gold/70 transition-colors"
              }`}
            >
              {plan.badge ? (
                <span
                  className={`absolute -top-3 left-7 inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.25em] font-semibold ${
                    plan.highlight
                      ? "bg-cf-gold text-black"
                      : "bg-black text-cf-gold border border-cf-gold/60"
                  }`}
                >
                  <Sparkles size={11} />
                  {plan.badge}
                </span>
              ) : null}

              <div>
                <h3 className="font-display uppercase text-2xl text-white tracking-tight">
                  {plan.name}
                </h3>
                <p className="text-cf-mute text-sm mt-1">{plan.duration}</p>
              </div>

              <div className="mt-6">
                <PriceTag value={plan.price} />
                <p className="text-cf-mute text-xs mt-1">
                  ₹
                  {Math.round(
                    plan.price /
                      (plan.duration === "Monthly"
                        ? 1
                        : plan.duration === "3 Months"
                        ? 3
                        : plan.duration === "6 Months"
                        ? 6
                        : 12)
                  ).toLocaleString("en-IN")}
                  /mo equivalent
                </p>
              </div>

              <ul className="mt-7 space-y-3 text-sm flex-1">
                {plan.perks.map((p, j) => (
                  <li key={j} className="flex items-start gap-3 text-white/85">
                    <span
                      className={`mt-0.5 w-5 h-5 rounded-full grid place-items-center shrink-0 ${
                        plan.highlight
                          ? "bg-cf-gold text-black"
                          : "bg-cf-charcoal text-cf-gold border border-cf-border"
                      }`}
                    >
                      <Check size={12} strokeWidth={3} />
                    </span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>

              <a
                href={whatsappLink(
                  `Hi! I'd like to join the ${plan.name} plan (${plan.duration}) at Core Fitness Dindigul.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                data-testid={TID.joinBtn(i)}
                className={`mt-8 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold tracking-wider uppercase transition ${
                  plan.highlight
                    ? "btn-gold"
                    : "btn-outline-gold"
                }`}
              >
                Join {plan.name}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          data-testid={TID.studentCta}
          className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 p-6 md:p-7 rounded-2xl bg-gradient-to-r from-cf-gold/15 via-cf-gold/5 to-transparent border border-cf-gold/40"
        >
          <div className="flex items-center gap-4">
            <span className="w-11 h-11 rounded-full grid place-items-center bg-cf-gold text-black">
              <GraduationCap size={20} />
            </span>
            <div>
              <h4 className="text-white font-semibold uppercase tracking-wide text-sm">
                Exclusive Offers · Students & Couples
              </h4>
              <p className="text-cf-mute text-sm mt-1">
                Contact us for special rates designed just for you.
              </p>
            </div>
          </div>
          <a
            href={whatsappLink(
              "Hi! I'd like details on student / couple offers at Core Fitness Dindigul."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-6 py-3 rounded-full text-sm font-semibold tracking-wider uppercase whitespace-nowrap"
          >
            Get Special Rate
          </a>
        </motion.div>
      </div>
    </section>
  );
}
