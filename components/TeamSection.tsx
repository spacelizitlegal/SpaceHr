import Image from "next/image";
import { Users } from "lucide-react";

const teamCards = [
  {
    label: "LEADERSHIP & VISION",
    title: "Building the Future of HR",
    description:
      "Guiding Space HR with a focus on intelligent automation, better employee experiences, and practical HR technology.",
    image: "/team/leadership.webp",
    alt: "Space HR leadership team",
    large: true,
    textLayout: "bottom-left" as const,
    objectPosition: "center top" as const,
  },
  {
    label: "PRODUCT & ENGINEERING",
    title: "Engineering the HR Experience",
    description:
      "Building reliable AI-powered tools that simplify everyday HR operations.",
    image: "/team/engineering.webp",
    alt: "Space HR product and engineering team",
    large: false,
    textLayout: "split" as const,
    objectPosition: "center 60%" as const,
  },
  {
    label: "PEOPLE & CULTURE",
    title: "People First, Always",
    description:
      "A collaborative team focused on solving real HR challenges and creating technology people enjoy using.",
    image: "/team/culture.webp",
    alt: "Space HR team collaborating",
    large: false,
    textLayout: "split" as const,
    objectPosition: "center 30%" as const,
  },
];

function TeamCard({
  card,
  className = "",
}: {
  card: (typeof teamCards)[number];
  className?: string;
}) {
  const isSplit = card.textLayout === "split";

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl hover:border-primary/50 transition-all duration-300 ${className}`}
    >
      <Image
        src={card.image}
        alt={card.alt}
        fill
        sizes={
          card.large
            ? "(max-width: 1024px) 100vw, 60vw"
            : "(max-width: 1024px) 50vw, 40vw"
        }
                className="object-cover transition-transform duration-500 motion-safe:group-hover:scale-105"
        style={{ objectPosition: card.objectPosition }}
      />

      {isSplit ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/10 to-black/70" />
          <div className="absolute top-0 left-0 right-0 p-4 sm:p-5">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 drop-shadow-lg">
              {card.title}
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed max-w-md drop-shadow-md">
              {card.description}
            </p>
          </div>
          <div className="absolute bottom-0 right-0 p-4 sm:p-5">
            <p className="text-xs font-bold tracking-wider uppercase text-white/90 drop-shadow-md">
              {card.label}
            </p>
          </div>
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
            <p className="text-xs font-bold tracking-wider uppercase text-white/80 mb-2">
              {card.label}
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              {card.title}
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed max-w-md">
              {card.description}
            </p>
          </div>
        </>
      )}
    </div>
  );
}

export function TeamSection() {
  return (
    <section className="py-24 bg-gray-50 dark:bg-[#0f172a] relative overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-cyan-500/10 border border-primary/20 text-primary dark:text-cyan-400 text-sm font-medium mb-6">
            <Users className="w-4 h-4" />
            OUR TEAM
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            The People Behind{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-500">
              Space HR
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A team of engineers, HR experts, and problem-solvers building
            smarter ways to manage people and work.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 h-auto lg:h-[520px]">
          {/* Large Card - Left */}
          <TeamCard card={teamCards[0]} className="lg:col-span-3 h-[320px] lg:h-full" />

          {/* Two Smaller Cards - Right */}
          <div className="lg:col-span-2 grid grid-rows-2 gap-6 h-[480px] lg:h-full">
            <TeamCard card={teamCards[1]} className="h-full" />
            <TeamCard card={teamCards[2]} className="h-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
