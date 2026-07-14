import { stats } from "../data/portfolio";


export default function Stats() {
  return (
    <div
      className="
        grid grid-cols-2
        gap-4
      "
    >

      {stats.map((item) => (
        <div
          key={item.label}
          className="
            bg-portfolio-color4
            border border-portfolio-color3
            rounded-xl
            p-5
          "
        >
          <h3
            className="
              text-3xl
              font-bold
              text-portfolio-color1
            "
          >
            {item.value}
          </h3>

          <p
            className="
              mt-2
              text-sm
              text-portfolio-color2
            "
          >
            {item.label}
          </p>

        </div>
      ))}

    </div>
  );
}