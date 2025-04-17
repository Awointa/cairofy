import Navigation from "@/components/Navigation"
import SongCard from "@/components/SongCard"
import { Filter, Search } from "lucide-react"

export default function MarketplacePage() {
  // This would be fetched from your backend/blockchain
  const marketplaceSongs = [
    {
      id: "1",
      title: "Cosmic Harmony",
      artist: "Stellar Beats",
      cover: "/placeholder.svg?height=300&width=300",
      price: "0.05",
      isOwned: false,
    },
    {
      id: "2",
      title: "Digital Dreams",
      artist: "Crypto Composer",
      cover: "/placeholder.svg?height=300&width=300",
      price: "0.08",
      isOwned: true,
    },
    {
      id: "3",
      title: "Blockchain Beats",
      artist: "NFT Noise",
      cover: "/placeholder.svg?height=300&width=300",
      price: "0.03",
      isOwned: false,
    },
    {
      id: "4",
      title: "Decentralized Melody",
      artist: "Web3 Waves",
      cover: "/placeholder.svg?height=300&width=300",
      price: "0.07",
      isOwned: false,
    },
    {
      id: "5",
      title: "Crypto Rhythm",
      artist: "Blockchain Beats",
      cover: "/placeholder.svg?height=300&width=300",
      price: "0.04",
      isOwned: false,
    },
    {
      id: "6",
      title: "NFT Soundscape",
      artist: "Digital Artist",
      cover: "/placeholder.svg?height=300&width=300",
      price: "0.09",
      isOwned: false,
    },
    {
      id: "7",
      title: "Web3 Anthem",
      artist: "Crypto Composer",
      cover: "/placeholder.svg?height=300&width=300",
      price: "0.06",
      isOwned: false,
    },
    {
      id: "8",
      title: "Metaverse Melody",
      artist: "NFT Noise",
      cover: "/placeholder.svg?height=300&width=300",
      price: "0.05",
      isOwned: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <h1 className="text-3xl font-bold mb-4 md:mb-0">NFT Marketplace</h1>

          <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-zinc-400" />
              </div>
              <input
                type="text"
                placeholder="Search songs, artists..."
                className="pl-10 pr-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-purple-600"
              />
            </div>

            <button className="flex items-center justify-center gap-2 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white hover:bg-zinc-700">
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {marketplaceSongs.map((song) => (
            <SongCard
              key={song.id}
              id={song.id}
              title={song.title}
              artist={song.artist}
              cover={song.cover}
              price={song.price}
              isOwned={song.isOwned}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
