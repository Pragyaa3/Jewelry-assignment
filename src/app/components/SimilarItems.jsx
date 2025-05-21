import similarItems from '../data/similarItems'

export default function SimilarItems() {
  return (
    <div className="mt-12">
      <h2 className="text-lg font-semibold mb-4">Similar Items</h2>
      <div className="flex overflow-x-auto gap-6 no-scrollbar">
        {similarItems.map((item) => (
          <div key={item.id} className="min-w-[160px] flex-shrink-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover rounded-lg border"
            />
            <p className="mt-2 text-sm font-medium">{item.name}</p>
            <p className="text-sm text-gray-600">{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
