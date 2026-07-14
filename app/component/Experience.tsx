import { experience } from "../data/portfolio";


export default function Experience() {
  return (
    <section
      id="experience"
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
        Professional Experience
      </h2>


      <div className="space-y-8">

        {experience.map((job) => (
          <div
            key={job.company}
            className="
              bg-portfolio-color4
              border border-portfolio-color3
              rounded-xl
              p-6
              transition
              hover:shadow-md
            "
          >

            <div
              className="
                flex
                flex-wrap
                justify-between
                gap-4
              "
            >

              <div>

                <h3
                  className="
                    text-xl
                    font-semibold
                    text-portfolio-color1
                  "
                >
                  {job.role}
                </h3>


                <p className="text-portfolio-color2">
                  {job.company} · {job.location}
                </p>

              </div>


              <p
                className="
                  text-sm
                  text-portfolio-color2
                "
              >
                {job.duration}
              </p>

            </div>


            <ul
              className="
                mt-5
                space-y-3
                text-portfolio-color2
              "
            >

              {job.points.map((point) => (
                <li key={point}>
                  <span className="text-portfolio-color2">
                    ▹
                  </span>

                  {" "}

                  {point}
                </li>
              ))}

            </ul>

          </div>
        ))}

      </div>

    </section>
  );
}