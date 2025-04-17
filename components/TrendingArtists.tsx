import Link from "next/link"
import { Play } from "lucide-react"

export default function TrendingArtists() {
  // This would be fetched from your backend/blockchain
  const trendingArtists = [
    {
      id: "1",
      name: "Stellar Beats",
      image: "/placeholder.svg?height=60&width=60",
      followers: "12.5K",
      genre: "Electronic",
    },
    {
      id: "2",
      name: "Crypto Composer",
      image: "/placeholder.svg?height=60&width=60",
      followers: "8.3K",
      genre: "Ambient",
    },
    {
      id: "3",
      name: "NFT Noise",
      image: "/placeholder.svg?height=60&width=60",
      followers: "5.7K",
      genre: "Hip Hop",
    },
    {
      id: "4",
      name: "Web3 Waves",
      image: "/placeholder.svg?height=60&width=60",
      followers: "9.2K",
      genre: "Pop",
    },
  ]

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Trending Artists</h2>
        <button className="text-sm text-purple-400 hover:text-purple-300">View All</button>
      </div>
      <div className="bg-zinc-800/50 rounded-xl p-4">
        {trendingArtists.map((artist, index) => (
          <div
            key={artist.id}
            className={`flex items-center justify-between py-3 ${
              index < trendingArtists.length - 1 ? "border-b border-zinc-700/50" : ""
            }`}
          >
            <div className="flex items-center">
              <div className="relative group">
                <img
                  src={artist.image || "/placeholder.svg"}
                  alt={artist.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div className="absolute inset-0 bg-black/40 rounded-full opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Play className="h-4 w-4 text-white" fill="white" />
                </div>
              </div>
              <div>
                <Link href={`/artist/${artist.id}`} className="font-medium text-white hover:text-purple-400">
                  {artist.name}
                </Link>
                <div className="flex items-center text-xs text-zinc-400">
                  <span className="mr-2">{artist.genre}</span>
                  <span>•</span>
                  <span className="ml-2">{artist.followers} followers</span>
                </div>
              </div>
            </div>
            <button className="text-xs bg-zinc-700 hover:bg-zinc-600 text-white px-3 py-1 rounded-full">Follow</button>
          </div>
        ))}
      </div>
    </section>
  )
}
