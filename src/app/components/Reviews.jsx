export default function Reviews() {
  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      {/* Summary Block */}
      <div className="border p-6 rounded-md mb-10">
        <h2 className="text-3xl font-bold mb-2">5</h2>
        <p className="text-gray-700">Based on 4 reviews</p>
        <p className="text-gray-600 mb-4">Product Quality: <span className="font-medium">average</span></p>
        <button className="px-4 py-2 border border-black text-black hover:bg-black hover:text-white transition">
          Write A Review
        </button>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-8">
        {/* Review 1 */}
        <div>
          <p className="font-semibold">Would you recommend this item? <span className="text-green-600">yes</span></p>
          <p className="mt-2">Love this necklace! Perfect size initial and adjustable length. Adorable & obsessed — looks great alone or stacked!</p>
          <p className="mt-2">Product Quality: <span className="font-medium">excellent</span></p>
          <p className="text-sm text-gray-500 mt-1">Published date: 03/14/25</p>
          <hr className="mt-4 border-gray-300" />
        </div>

        {/* Review 2 */}
        <div>
          <p className="font-semibold">Would you recommend this item? <span className="text-green-600">yes</span></p>
          <p className="mt-2">Obsessed with this necklace! It's my go-to gift for everyone! Looks so cute in any stack!</p>
          <p className="mt-2">Product Quality: <span className="font-medium">average</span></p>
          <p className="text-sm text-gray-500 mt-1">Published date: 09/04/24</p>
          <hr className="mt-4 border-gray-300" />
        </div>

        {/* Review 3 */}
        <div>
          <p className="font-semibold">Would you recommend this item? <span className="text-green-600">yes</span></p>
          <p className="mt-2">Absolutely love it! Big but super cute.</p>
          <p className="mt-2">Product Quality: <span className="font-medium">average</span></p>
          <p className="text-sm text-gray-500 mt-1">Published date: 06/14/24</p>
          <hr className="mt-4 border-gray-300" />
        </div>

        {/* Review 4 */}
        <div>
          <p className="font-semibold">Would you recommend this item? <span className="text-green-600">yes</span></p>
          <p className="mt-2">These are cute. Granted I can’t comment on the durability just yet.</p>
          <p className="mt-2">Product Quality: <span className="font-medium">fair</span></p>
          <p className="text-sm text-gray-500 mt-1">Published date: 05/14/24</p>
        </div>
      </div>
    </section>
  );
}
