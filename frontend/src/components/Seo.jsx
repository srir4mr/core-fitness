import { useEffect } from "react";
import { BIZ, FAQS } from "@/lib/constants";

// SEO + JSON-LD schema injector (since this is a CRA SPA without SSR).
// Sets <title>, meta tags and structured-data <script> tags in <head>.
export default function Seo() {
  useEffect(() => {
    const head = document.head;
    const title = `${BIZ.name} | Best Unisex Gym in ${BIZ.city}`;
    document.title = title;

    const upsertMeta = (selector, attrs) => {
      let el = head.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
        head.appendChild(el);
        return el;
      }
      Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
      return el;
    };

    const description = `${BIZ.name} – the best unisex gym in ${BIZ.city} with certified trainers, premium equipment, and flexible memberships from ₹3,000. Founded ${BIZ.founded} by ${BIZ.founder}. Join Dindigul's premium fitness community today.`;
    const keywords =
      "best gym in Dindigul, unisex gym Dindigul, fitness studio Dindigul, gym membership Dindigul, personal trainer Dindigul, CrossFit Dindigul, yoga class Dindigul, Core Fitness Dindigul";
    const ogImage =
      "https://customer-assets.emergentagent.com/job_282709a2-22d5-44bd-a76a-0adab3855c8e/artifacts/ngt93md0_DSC03545.JPG";

    const created = [
      upsertMeta('meta[name="description"]', { name: "description", content: description }),
      upsertMeta('meta[name="keywords"]', { name: "keywords", content: keywords }),
      upsertMeta('meta[name="author"]', { name: "author", content: BIZ.founder }),
      upsertMeta('meta[name="robots"]', { name: "robots", content: "index, follow" }),
      upsertMeta('meta[property="og:title"]', { property: "og:title", content: title }),
      upsertMeta('meta[property="og:description"]', {
        property: "og:description",
        content: description,
      }),
      upsertMeta('meta[property="og:type"]', { property: "og:type", content: "website" }),
      upsertMeta('meta[property="og:image"]', { property: "og:image", content: ogImage }),
      upsertMeta('meta[property="og:locale"]', { property: "og:locale", content: "en_IN" }),
      upsertMeta('meta[name="twitter:card"]', { name: "twitter:card", content: "summary_large_image" }),
      upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: title }),
      upsertMeta('meta[name="twitter:description"]', {
        name: "twitter:description",
        content: description,
      }),
      upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: ogImage }),
      upsertMeta('meta[name="theme-color"]', { name: "theme-color", content: "#000000" }),
    ];

    // Structured Data
    const localBusiness = {
      "@context": "https://schema.org",
      "@type": "HealthAndBeautyBusiness",
      name: BIZ.name,
      image: [ogImage],
      description,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Near Achutha School, Pushpamal Nagar",
        addressLocality: BIZ.city,
        addressRegion: "Tamil Nadu",
        postalCode: "624001",
        addressCountry: "IN",
      },
      telephone: BIZ.phone,
      url: typeof window !== "undefined" ? window.location.origin : "",
      priceRange: "₹₹",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: BIZ.openTime,
        closes: BIZ.closeTime,
      },
      sameAs: [BIZ.instagramUrl, BIZ.mapsLink],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.9",
        reviewCount: "120",
      },
      founder: { "@type": "Person", name: BIZ.founder },
      foundingDate: BIZ.founded,
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };

    const ldScripts = [
      Object.assign(document.createElement("script"), {
        type: "application/ld+json",
        text: JSON.stringify(localBusiness),
        id: "ld-localbusiness",
      }),
      Object.assign(document.createElement("script"), {
        type: "application/ld+json",
        text: JSON.stringify(faqSchema),
        id: "ld-faqpage",
      }),
    ];

    // remove any prior
    ["ld-localbusiness", "ld-faqpage"].forEach((id) => {
      const ex = document.getElementById(id);
      if (ex) ex.remove();
    });
    ldScripts.forEach((s) => head.appendChild(s));

    // canonical
    let canonical = head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      head.appendChild(canonical);
    }
    canonical.href = typeof window !== "undefined" ? window.location.href : "";

    return () => {
      ldScripts.forEach((s) => s.remove());
      // keep meta tags (they belong to the document); no removal needed
      created.forEach(() => {});
    };
  }, []);
  return null;
}
