import SongCard from "./SongCard"

export default function FeaturedSongs() {
  // This would be fetched from your backend/blockchain
  const featuredSongs = [
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
  ]

  return (
    <section>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Featured Songs</h2>
        <button className="text-sm text-purple-400 hover:text-purple-300">View All</button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {featuredSongs.map((song) => (
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
    </section>
  )
}
