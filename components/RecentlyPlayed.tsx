import { Clock, Play } from "lucide-react"

export default function RecentlyPlayed() {
  // This would be fetched from your backend/local storage
  const recentlyPlayed = [
    {
      id: "1",
      title: "Cosmic Harmony",
      artist: "Stellar Beats",
      cover: "/placeholder.svg?height=40&width=40",
      duration: "3:45",
    },
    {
      id: "2",
      title: "Digital Dreams",
      artist: "Crypto Composer",
      cover: "/placeholder.svg?height=40&width=40",
      duration: "4:12",
    },
    {
      id: "3",
      title: "Blockchain Beats",
      artist: "NFT Noise",
      cover: "/placeholder.svg?height=40&width=40",
      duration: "2:58",
    },
    {
      id: "4",
      title: "Decentralized Melody",
      artist: "Web3 Waves",
      cover: "/placeholder.svg?height=40&width=40",
      duration: "3:22",
    },
  ]

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Recently Played</h2>
      </div>
      <div className="bg-zinc-800/50 rounded-xl p-4">
        {recentlyPlayed.map((song, index) => (
          <div
            key={song.id}
            className={`flex items-center py-2 ${
              index < recentlyPlayed.length - 1 ? "border-b border-zinc-700/50" : ""
            }`}
          >
            <div className="relative group mr-3 flex-shrink-0">
              <img src={song.cover || "/placeholder.svg"} alt={song.title} className="w-10 h-10 rounded object-cover" />
              <div className="absolute inset-0 bg-black/40 rounded opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                <Play className="h-4 w-4 text-white" fill="white" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm text-white truncate">{song.title}</h4>
              <p className="text-xs text-zinc-400 truncate">{song.artist}</p>
            </div>
            <div className="flex items-center text-xs text-zinc-400 ml-2">
              <Clock className="h-3 w-3 mr-1" />
              {song.duration}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
