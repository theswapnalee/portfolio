export default function Footer() {
  return (
    <footer
      className="
        border-t
        border-portfolio-color3
        py-8
        text-center
        text-sm
        text-portfolio-color2
      "
    >
      © {new Date().getFullYear()} Swapnali Bhide
      {" · "}
      Built with Next.js + Tailwind
    </footer>
  );
}