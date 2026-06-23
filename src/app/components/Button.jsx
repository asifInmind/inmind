export default function Button({
  color,
  content,
  width,
  height,
  bg,
  icons,
  small,
}) {
  const hoverCircleBg = bg === "white" ? "bg-[#328476]" : "bg-[#08705f]";

  // 1. Detect if we are on a mobile screen using a media query in JS
  // Alternatively, we can handle the style block carefully:
  return (
    <button
      style={{
        // If small is true, we ONLY want to clear the inline width on desktop.
        // But since CSS variables or media queries in inline styles are tricky,
        // we can use a CSS custom property (variable) to elegantly bridge the gap:
        "--custom-width": width,
        width: "var(--custom-width)",
        height: height,
        backgroundColor: bg,
        color: color,
      }}
      className={`group relative flex ${
        icons ? "justify-around" : "justify-center"
      } cursor-pointer items-center py-2.5 px-3.5 rounded-sm font-medium transition-all ${
        // 2. On desktop (md:), if small is true, override the inline width with your custom width class.
        // We use !md:w-55.75 (the "!" makes it important) so it successfully overrides the inline style on desktop.
        small ? "md:!w-55.75" : ""
      } overflow-hidden hover:text-white`}
    >
      <span className="relative z-10 flex justify-center items-center cursor-pointer">
        {content}
      </span>
      {icons && (
        <span className="flex justify-center items-center z-10 cursor-pointer -translate-x-6 group-hover:translate-x-0 transition-transform duration-300">
          {icons}
        </span>
      )}

      {/* Hover background circle effect */}
      <span className="absolute inset-0 overflow-hidden rounded-sm pointer-events-none">
        <span
          className={`absolute left-0 aspect-square cursor-pointer w-full origin-center -translate-x-full rounded-full transition-all duration-500 group-hover:translate-x-0 group-hover:scale-150 ${hoverCircleBg}`}
        ></span>
      </span>
    </button>
  );
}