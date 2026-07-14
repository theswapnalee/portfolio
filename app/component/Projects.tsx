import { projects } from "../data/portfolio";


export default function Projects() {
  return (
    <section
      id="projects"
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
        Featured Analytics Projects
      </h2>


      <div
        className="
          grid
          md:grid-cols-2
          gap-6
        "
      >

        {projects.map((project) => (
          <article
            key={project.title}
            className="
              bg-portfolio-color4
              border border-portfolio-color3
              rounded-xl
              p-6
              transition
              hover:shadow-lg
            "
          >

            <div
              className="
                flex
                justify-between
                items-start
                gap-4
              "
            >

              <h3
                className="
                  text-xl
                  font-semibold
                  text-portfolio-color1
                "
              >
                {project.title}
              </h3>


              <span
                className="
                  text-sm
                  text-portfolio-color2
                "
              >
                {project.year}
              </span>

            </div>


            <p
              className="
                mt-2
                text-sm
                text-portfolio-color2
              "
            >
              {project.company}
            </p>


            <p
              className="
                mt-4
                leading-relaxed
                text-portfolio-color2
              "
            >
              {project.description}
            </p>


            <div
              className="
                flex
                flex-wrap
                gap-2
                mt-5
              "
            >

              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="
                    rounded-full
                    px-3 py-1
                    text-sm
                    bg-portfolio-color3/50
                    text-portfolio-color1
                  "
                >
                  {tool}
                </span>
              ))}

            </div>

          </article>
        ))}

      </div>

    </section>
  );
}