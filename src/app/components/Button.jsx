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

  return (
    <button
      style={{
        // Apply the values directly here instead of using Tailwind brackets
        width: small ? undefined : width,
        height: height,
        backgroundColor: bg,
        color: color,
      }}
      className={`group relative flex ${
        icons ? "justify-around" : "justify-center"
      } cursor-pointer items-center py-2.5 px-3.5 rounded-sm font-medium transition-all ${
        small ? "w-55.75" : ""
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
