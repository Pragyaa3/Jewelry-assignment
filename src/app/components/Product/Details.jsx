'use client';

import SizeSelector from './SizeSelector';
import ColorSelector from './ColorSelector';
import DeliveryInfo from './DeliveryInfo';

export default function Details({
  selectedInitial,
  setSelectedInitial,
  selectedColor,
  setSelectedColor
}) {
  return (
    <div className="flex flex-col gap-4 text-sm text-gray-700">
      <h1 className="text-2xl font-semibold text-black">{selectedInitial} Pendant Necklace</h1>
      <p className="text-sm text-gray-600">petit moments</p>
      <p className="text-lg font-medium text-black mt-1">$28</p>
      <p className="text-xs text-gray-500">Pay with Affirm on orders over $50. See if you qualify</p>

      <div className="mt-4">
        <h3 className="font-semibold mb-1">Please select Initial</h3>
        <SizeSelector selectedInitial={selectedInitial} onSelect={setSelectedInitial} />
      </div>

      <div className="mt-4">
        <h3 className="font-semibold mb-1">Select a Color</h3>
        <ColorSelector selectedColor={selectedColor} onSelect={setSelectedColor} />
      </div>

      <button className="mt-6 w-fit border border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition">
        + Add to My Lists
      </button>

      <DeliveryInfo />

      <div className="mt-6 border-t pt-4 text-xs leading-relaxed text-gray-600">
        <p>Gold-tone initial necklace</p>
        <p>Made in China</p>
        <p>Lobster clasp closure</p>
        <p>Measures approx 44 cm in length</p>
        <p>Revolve Style No. PETM-WL639</p>
        <p>Manufacturer Style No. MS14450</p>
      </div>
    </div>
  );
}
