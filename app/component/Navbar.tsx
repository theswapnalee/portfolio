export default function Navbar() {
  return (
    <header
      className="
        sticky top-0 z-20
        bg-portfolio-color4/90
        backdrop-blur
        border-b border-portfolio-color3
      "
    >
      <div
        className="
          max-w-6xl mx-auto
          px-6 py-4
          flex items-center justify-between
        "
      >
        <h1
          className="
            text-xl
            font-bold
            tracking-tight
            text-portfolio-color1
          "
        >
          <span className="text-portfolio-color2 pr-[5px]">
            Swapnali
          </span>
        
          <span className="text-portfolio-color2">
            Bhide
          </span>
        </h1>

        <nav
          className="
            hidden md:flex
            gap-8
            text-sm
            text-portfolio-color2
          "
        >
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}