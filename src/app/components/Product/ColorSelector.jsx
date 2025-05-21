const colors = ['Gold', 'Silver'];

export default function ColorSelector({ selectedColor, onSelect }) {
  return (
    <div className="flex gap-2">
      {colors.map((color) => (
        <button
          key={color}
          onClick={() => onSelect(color)}
          className={`border rounded-full px-3 py-1 text-sm transition ${
            selectedColor === color
              ? 'bg-black text-white border-black'
              : 'border-black text-black hover:bg-black hover:text-white'
          }`}
        >
          {color}
        </button>
      ))}
    </div>
  );
}
