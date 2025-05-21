import { Search, Heart, ShoppingBag } from 'lucide-react'

export default function Searchbar() {
  return (
    <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
      <div className="text-xl font-bold">LUV MY JEWELRY</div>

      <div className="flex items-center gap-4 w-full max-w-lg border border-gray-300 rounded px-2 py-1">
        <Search size={18} />
        <input
          type="text"
          placeholder="Search Site"
          className="w-full outline-none text-sm"
        />
      </div>

      <div className="flex items-center gap-6 text-sm">
        <Heart size={20} />
        <div className="relative">
          <ShoppingBag size={20} />
          <span className="absolute -top-2 -right-2 text-xs bg-black text-white rounded-full px-1">0</span>
        </div>
      </div>
    </div>
  );
}
