import { profile } from "../data/portfolio";


export default function Contact() {
  return (
    <section
      id="contact"
      className="
        max-w-6xl mx-auto
        px-6 py-20
      "
    >

      <div
        className="
          rounded-2xl
          bg-portfolio-color1
          text-portfolio-color4
          p-10
        "
      >

        <h2
          className="
            text-3xl
            font-bold
          "
        >
          Let's Connect
        </h2>


        <p
          className="
            mt-4
            text-portfolio-color3
          "
        >
          Open to Data Analyst, Business Intelligence,
          and Analytics opportunities.
        </p>


        <div
          className="
            mt-6
            space-y-3
          "
        >

          <p>
            📧 {profile.email}
          </p>


          <p>
            ☎ {profile.phone}
          </p>


          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="
              underline
              hover:text-portfolio-color3
            "
          >
            LinkedIn Profile
          </a>

        </div>

      </div>

    </section>
  );
}