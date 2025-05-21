import similarItems from '../data/similarItems'

export default function DiscoverMore() {
  return (
    <section className="px-4 py-10">
      <h2 className="text-2xl font-bold mb-6">Discover More</h2>
      <div className="flex overflow-x-auto gap-6 no-scrollbar">
        {similarItems.map((item) => (
          <div
            key={item.id}
            className="min-w-[200px] flex-shrink-0 border rounded-lg p-4 text-center shadow-md hover:shadow-xl transition"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover mb-4 rounded-md"
            />
            <h3 className="text-lg font-medium">{item.name}</h3>
            <p className="text-gray-600">{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
