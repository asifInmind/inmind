export default function Button({color, content, width, height, bg }) {
  return (
    <button 
   
      style={{
        '--btn-w': width,   
        '--btn-h': height,  
        '--btn-bg': bg,  
        '--btn-color':color,   
      }}
      
      className="flex justify-center cursor-pointer  items-center py-2.5 px-3.5 rounded-sm font-medium transition-all w-(--btn-w) h-(--btn-h) bg-(--btn-bg) text-(--btn-color)"
    >
      {content}
    </button>
  );
}
