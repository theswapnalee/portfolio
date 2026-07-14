import { skills } from "../data/portfolio";


export default function Skills() {
  return (
    <section
      id="skills"
      className="
        max-w-6xl mx-auto
        px-6 py-20
      "
    >

      <h2
        className="
          mb-10
          text-3xl
          font-bold
          text-portfolio-color1
        "
      >
        Technical Skills
      </h2>


      <div
        className="
          grid
          md:grid-cols-3
          gap-6
        "
      >

        {skills.map((group) => (
          <div
            key={group.category}
            className="
              bg-portfolio-color4
              border border-portfolio-color3
              rounded-xl
              p-6
            "
          >

            <h3
              className="
                mb-4
                font-semibold
                text-portfolio-color1
              "
            >
              {group.category}
            </h3>


            <div
              className="
                flex
                flex-wrap
                gap-2
              "
            >

              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="
                    rounded-full
                    px-3 py-1
                    text-sm
                    border
                    border-portfolio-color2
                    text-portfolio-color2
                    transition
                    hover:bg-portfolio-color2
                    hover:text-portfolio-color4
                  "
                >
                  {skill}
                </span>
              ))}

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}