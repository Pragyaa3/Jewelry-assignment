const sizes = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'V'];

export default function SizeSelector({ selectedInitial, onSelect }) {
  return (
    <div className="grid grid-cols-6 gap-2">
      {sizes.map((size) => (
        <button
          key={size}
          onClick={() => onSelect(size)}
          className={`border rounded-full px-3 py-1 text-sm transition ${
            selectedInitial === size
              ? 'bg-black text-white border-black'
              : 'border-black text-black hover:bg-black hover:text-white'
          }`}
        >
          {size}
        </button>
      ))}
    </div>
  );
}
