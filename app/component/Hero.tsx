import Image from "next/image";

import { profile } from "../data/portfolio";
import Stats from "./Stats";

export default function Hero() {
  return (
    <section
      className="
        max-w-6xl mx-auto
        px-6 py-24
        grid
        lg:grid-cols-2
        gap-16
        items-center
      "
    >
      {/* Profile Section */}
      <div className="flex flex-col items-center space-y-8">
        <div
          className="
            relative
            w-[280px]
            h-[280px]
            rounded-full
            overflow-hidden
            border-4
            border-portfolio-color3
            shadow-2xl
            bg-portfolio-color4
          "
        >
          <Image
            src="/profile-004.jpg"
            alt={profile.name}
            fill
            priority
            className="
              object-cover
              object-center
            "
          />
        </div>

        <Stats />
      </div>


      {/* Content Section */}
      <div>
        <p
          className="
            text-sm
            font-semibold
            tracking-[0.2em]
            text-portfolio-color2
            mb-5
          "
        >
          DATA ANALYST • BUSINESS INTELLIGENCE • DATA VISUALIZATION
        </p>

        <h1
          className="
            text-5xl
            md:text-6xl
            font-bold
            leading-tight
            text-portfolio-color1
          "
        >
          Transforming
          <span className="text-portfolio-color2"> data </span>
          into business decisions.
        </h1>

        <p
          className="
            mt-6
            text-lg
            text-portfolio-color2
            max-w-xl
            leading-relaxed
          "
        >
          I'm {profile.name}, a Data Analyst specializing in SQL, Power BI,
          Python, and analytics solutions. I transform complex datasets into
          dashboards and actionable insights.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="
              bg-portfolio-color1
              text-portfolio-color4
              px-6
              py-3
              rounded-xl
              font-medium
              transition-all
              hover:-translate-y-1
              hover:bg-portfolio-color2
            "
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="
              border
              border-portfolio-color1
              text-portfolio-color1
              px-6
              py-3
              rounded-xl
              font-medium
              transition-all
              hover:-translate-y-1
              hover:bg-portfolio-color3
            "
          >
            Download Resume
          </a>
        </div>

        <p
          className="
            mt-8
            text-sm
            text-portfolio-color2
          "
        >
          📍 {profile.location}
        </p>
      </div>
    </section>
  );
}