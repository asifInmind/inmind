export default function Button({ color, content, width, height, bg, icons }) {
  const hoverCircleBg = bg === "white" ? "bg-[#328476]" : "bg-[#08705f]";

  return (
    <button
      style={{
        "--btn-w": width,
        "--btn-h": height,
        "--btn-bg": bg,
        "--btn-color": color,
      }}
      className="group relative flex justify-around cursor-pointer items-center py-2.5 px-3.5 rounded-sm font-medium transition-all w-(--btn-w) h-(--btn-h) bg-(--btn-bg) text-(--btn-color) overflow-hidden hover:text-white"
    >
      <span className="relative z-10 flex justify-center items-center cursor-pointer">
        {content}
      </span>
      <span className="flex justify-center items-center z-10 cursor-pointer">
        {icons}
      </span>

      <span className="absolute inset-0 overflow-hidden rounded-sm pointer-events-none">
        <span
          className={`absolute left-0 aspect-square cursor-pointer w-full origin-center -translate-x-full rounded-full transition-all duration-500 group-hover:translate-x-0 group-hover:scale-150 ${hoverCircleBg}`}
        ></span>
      </span>
    </button>
  );
}
