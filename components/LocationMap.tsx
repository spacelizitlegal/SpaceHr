"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ExternalLink, Phone } from "lucide-react";
import { contactByCountry } from "@/lib/contactNumbers";

interface Location {
  id: number;
  name: string;
  description: string;
  coordinates: { lat: number; lng: number };
  flag: string;
  svg: string;
  mapQuery?: string;
  mapUrl?: string;
}

const locations: Location[] = [
  {
    id: 1,
    name: "USA",
    description: "2500 Marconi Ave, Ste 101,\nSacramento, CA 95821 USA",
    coordinates: { lat: 38.61512, lng: -121.38384 },
    flag: "🇺🇸",
    svg: "https://cdnjs.cloudflare.com/ajax/libs/flag-icons/7.2.3/flags/4x3/us.svg",
  },
  {
    id: 2,
    name: "Singapore",
    description: "PMSPACE AI, #04-39,\n7 Soon Lee Street,\nSingapore 627608",
    coordinates: { lat: 1.32151, lng: 103.73999 },
    flag: "🇸🇬",
    svg: "https://cdnjs.cloudflare.com/ajax/libs/flag-icons/7.2.3/flags/4x3/sg.svg",
    mapQuery: "PMSPACE AI, 7 Soon Lee Street, Singapore 627608",
  },
  {
    id: 3,
    name: "Dubai",
    description: "Dubai, United Arab Emirates",
    coordinates: { lat: 25.2048, lng: 55.2708 },
    flag: "🇦🇪",
    svg: "https://cdnjs.cloudflare.com/ajax/libs/flag-icons/7.2.3/flags/4x3/ae.svg",
  },
  {
    id: 4,
    name: "India",
    description: "New Delhi, India",
    coordinates: { lat: 28.6139, lng: 77.209 },
    flag: "🇮🇳",
    svg: "https://cdnjs.cloudflare.com/ajax/libs/flag-icons/7.2.3/flags/4x3/in.svg",
  },
  {
    id: 5,
    name: "Kuwait",
    description: "Kuwait City, Kuwait",
    coordinates: { lat: 29.3759, lng: 47.9774 },
    flag: "🇰🇼",
    svg: "https://cdnjs.cloudflare.com/ajax/libs/flag-icons/7.2.3/flags/4x3/kw.svg",
  },
  {
    id: 6,
    name: "Canada",
    description: "Toronto, Ontario, Canada",
    coordinates: { lat: 43.6532, lng: -79.3832 },
    flag: "🇨🇦",
    svg: "https://cdnjs.cloudflare.com/ajax/libs/flag-icons/7.2.3/flags/4x3/ca.svg",
  },
  {
    id: 7,
    name: "Hong Kong",
    description: "Hong Kong",
    coordinates: { lat: 22.3193, lng: 114.1694 },
    flag: "🇭🇰",
    svg: "https://cdnjs.cloudflare.com/ajax/libs/flag-icons/7.2.3/flags/4x3/hk.svg",
  },
];

function getEmbedUrl(location: Location): string {
  const query = encodeURIComponent(
    location.mapQuery ?? location.description.replace(/\n/g, ", ")
  );
  return `https://www.google.com/maps?q=${query}&z=14&output=embed`;
}

function getMapsUrl(location: Location): string {
  return (
    location.mapUrl ??
    `https://www.google.com/maps?q=${location.coordinates.lat},${location.coordinates.lng}`
  );
}

export default function LocationMap() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = locations[activeIndex];
  const contact = contactByCountry[active.name];

  return (
    <section id="locations" className="relative py-16 sm:py-20 md:py-24">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
            Always Within Reach
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            Connect with our HR specialists through our headquarters and regional offices around the world.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex gap-3 items-stretch"
        >
          <div className="flex-1 relative border border-white/10 shadow-2xl shadow-blue-950/20" style={{ height: "580px" }}>
            <iframe
              key={active.id}
              src={getEmbedUrl(active)}
              loading="lazy"
              allowFullScreen
              title={`${active.name} office location`}
              className="w-full h-full border-0"
              style={{ height: "100%", width: "100%", display: "block" }}
            />

            <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              initial={{ x: 80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 80, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
              className="absolute top-3 right-3 z-20"
            >
              <div className="w-72 bg-black/70 backdrop-blur-2xl rounded-xl border border-white/10 p-4 shadow-2xl">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <img src={active.svg} alt={`${active.name} flag`} className="w-8 h-6 rounded-sm object-cover" />
                    <div>
                      <h3 className="text-white font-semibold text-sm">{active.name}</h3>
                      {contact && (
                        <p className="text-white/40 text-[11px]">{contact.number}</p>
                      )}
                    </div>
                  </div>
                  <a
                    href={getMapsUrl(active)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/10 hover:bg-white/20 text-white/70 hover:text-white text-[11px] transition-all"
                  >
                    <ExternalLink className="w-2.5 h-2.5" />
                    Maps
                  </a>
                </div>
                <div className="flex items-start gap-2 text-white/60 text-xs">
                  <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-blue-400" />
                  <span className="leading-relaxed whitespace-pre-line">
                    {active.description}
                  </span>
                </div>
                {contact && (
                  <a
                    href={contact.href}
                    className="inline-flex items-center gap-1 mt-2 text-blue-300 hover:text-blue-200 text-xs transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    {contact.number}
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
          </div>

          <div className="flex flex-col gap-2">
            {locations.map((loc, idx) => (
              <button
                key={loc.id}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl backdrop-blur-xl border text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  idx === activeIndex
                    ? "bg-blue-600/80 border-blue-400/50 text-white shadow-lg shadow-blue-500/20"
                    : "bg-black/50 border-white/10 text-white/70 hover:bg-black/70 hover:text-white hover:border-white/30"
                }`}
              >
                <img src={loc.svg} alt={`${loc.name} flag`} className="w-6 h-4.5 rounded-sm object-cover" />
                <span>{loc.name}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
