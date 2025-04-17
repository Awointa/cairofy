import { Play, Heart, MoreHorizontal, ShoppingCart } from "lucide-react"
import Link from "next/link"

interface SongCardProps {
  id: string
  title: string
  artist: string
  cover: string
  price: string
  isOwned?: boolean
}

export default function SongCard({ id, title, artist, cover, price, isOwned = false }: SongCardProps) {
  return (
    <div className="group bg-zinc-800/50 rounded-lg overflow-hidden hover:bg-zinc-800 transition duration-300">
      <div className="relative">
        <img src={cover || "/placeholder.svg"} alt={title} className="w-full aspect-square object-cover" />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <button className="bg-purple-600 rounded-full p-3 transform scale-90 group-hover:scale-100 transition-transform">
            <Play className="h-6 w-6 text-white" fill="white" />
          </button>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-white truncate">{title}</h3>
            <Link
              href={`/artist/${artist.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-sm text-zinc-400 hover:text-purple-400"
            >
              {artist}
            </Link>
          </div>
          <button className="text-zinc-400 hover:text-white">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
        <div className="flex justify-between items-center mt-3">
          <div className="flex items-center space-x-2">
            <button className="text-zinc-400 hover:text-pink-500">
              <Heart className="h-4 w-4" />
            </button>
            {isOwned ? (
              <span className="text-xs bg-purple-600/20 text-purple-400 px-2 py-0.5 rounded-full">Owned</span>
            ) : (
              <button className="flex items-center space-x-1 text-zinc-400 hover:text-white">
                <ShoppingCart className="h-4 w-4" />
              </button>
            )}
          </div>
          {!isOwned && <div className="text-sm font-medium text-white">{price} ETH</div>}
        </div>
      </div>
    </div>
  )
}
