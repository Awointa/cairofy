"use client"

import { useState } from "react"
import Navigation from "@/components/Navigation"
import SongCard from "@/components/SongCard"
import { Wallet, Music, Heart, Clock, Award } from "lucide-react"

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState("collection")

  // This would be fetched from your backend/blockchain
  const userProfile = {
    name: "Music Collector",
    avatar: "/placeholder.svg?height=100&width=100",
    walletAddress: "0x1234...5678",
    joinedDate: "April 2023",
    rewardsEarned: "250",
    collection: [
      {
        id: "1",
        title: "Cosmic Harmony",
        artist: "Stellar Beats",
        cover: "/placeholder.svg?height=300&width=300",
        price: "0.05",
        isOwned: true,
      },
      {
        id: "2",
        title: "Digital Dreams",
        artist: "Crypto Composer",
        cover: "/placeholder.svg?height=300&width=300",
        price: "0.08",
        isOwned: true,
      },
    ],
    favorites: [
      {
        id: "3",
        title: "Blockchain Beats",
        artist: "NFT Noise",
        cover: "/placeholder.svg?height=300&width=300",
        price: "0.03",
        isOwned: false,
      },
    ],
    listeningHistory: [
      {
        id: "1",
        title: "Cosmic Harmony",
        artist: "Stellar Beats",
        cover: "/placeholder.svg?height=40&width=40",
        lastPlayed: "2 hours ago",
      },
      {
        id: "2",
        title: "Digital Dreams",
        artist: "Crypto Composer",
        cover: "/placeholder.svg?height=40&width=40",
        lastPlayed: "Yesterday",
      },
      {
        id: "3",
        title: "Blockchain Beats",
        artist: "NFT Noise",
        cover: "/placeholder.svg?height=40&width=40",
        lastPlayed: "3 days ago",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
          <div className="w-full md:w-1/3 lg:w-1/4">
            <div className="bg-zinc-800/50 rounded-xl p-6 text-center">
              <div className="mb-4 relative inline-block">
                <img
                  src={userProfile.avatar || "/placeholder.svg"}
                  alt={userProfile.name}
                  className="w-24 h-24 rounded-full object-cover mx-auto border-4 border-purple-600"
                />
                <div className="absolute bottom-0 right-0 bg-purple-600 rounded-full p-1">
                  <Award className="h-4 w-4 text-white" />
                </div>
              </div>
              <h2 className="text-xl font-bold mb-1">{userProfile.name}</h2>
              <div className="flex items-center justify-center text-sm text-zinc-400 mb-4">
                <Wallet className="h-3 w-3 mr-1" />
                {userProfile.walletAddress}
              </div>
              <div className="text-sm text-zinc-400 mb-6">Member since {userProfile.joinedDate}</div>
              <div className="bg-zinc-700/50 rounded-lg p-4 mb-4">
                <div className="flex items-center justify-center gap-2 text-purple-400 mb-1">
                  <Award className="h-5 w-5" />
                  <span className="font-bold text-lg">{userProfile.rewardsEarned}</span>
                </div>
                <p className="text-xs text-zinc-400">Rewards earned from listening</p>
              </div>
              <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition mb-2">
                Edit Profile
              </button>
              <button className="w-full bg-zinc-700 hover:bg-zinc-600 text-white font-medium py-2 px-4 rounded-lg transition">
                Withdraw Rewards
              </button>
            </div>
          </div>

          <div className="w-full md:w-2/3 lg:w-3/4">
            <div className="border-b border-zinc-700 mb-6">
              <nav className="flex space-x-8">
                <button
                  onClick={() => setActiveTab("collection")}
                  className={`py-4 px-1 relative font-medium text-sm ${
                    activeTab === "collection" ? "text-white" : "text-zinc-400 hover:text-zinc-300"
                  }`}
                >
                  <div className="flex items-center">
                    <Music className="h-4 w-4 mr-2" />
                    My Collection
                  </div>
                  {activeTab === "collection" && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600"></span>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("favorites")}
                  className={`py-4 px-1 relative font-medium text-sm ${
                    activeTab === "favorites" ? "text-white" : "text-zinc-400 hover:text-zinc-300"
                  }`}
                >
                  <div className="flex items-center">
                    <Heart className="h-4 w-4 mr-2" />
                    Favorites
                  </div>
                  {activeTab === "favorites" && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600"></span>
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("history")}
                  className={`py-4 px-1 relative font-medium text-sm ${
                    activeTab === "history" ? "text-white" : "text-zinc-400 hover:text-zinc-300"
                  }`}
                >
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2" />
                    Listening History
                  </div>
                  {activeTab === "history" && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-purple-600"></span>
                  )}
                </button>
              </nav>
            </div>

            {activeTab === "collection" && (
              <div>
                <h3 className="text-xl font-bold mb-6">My NFT Collection</h3>
                {userProfile.collection.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {userProfile.collection.map((song) => (
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
                ) : (
                  <div className="text-center py-12 bg-zinc-800/30 rounded-xl">
                    <Music className="h-12 w-12 text-zinc-600 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-zinc-400 mb-2">Your collection is empty</h3>
                    <p className="text-zinc-500 mb-4">Start collecting music NFTs from the marketplace</p>
                    <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition">
                      Browse Marketplace
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === "favorites" && (
              <div>
                <h3 className="text-xl font-bold mb-6">Favorite Songs</h3>
                {userProfile.favorites.length > 0 ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {userProfile.favorites.map((song) => (
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
                ) : (
                  <div className="text-center py-12 bg-zinc-800/30 rounded-xl">
                    <Heart className="h-12 w-12 text-zinc-600 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-zinc-400 mb-2">No favorites yet</h3>
                    <p className="text-zinc-500 mb-4">Like songs to add them to your favorites</p>
                  </div>
                )}
              </div>
            )}

            {activeTab === "history" && (
              <div>
                <h3 className="text-xl font-bold mb-6">Listening History</h3>
                <div className="bg-zinc-800/50 rounded-xl p-4">
                  {userProfile.listeningHistory.map((song, index) => (
                    <div
                      key={song.id}
                      className={`flex items-center justify-between py-3 ${
                        index < userProfile.listeningHistory.length - 1 ? "border-b border-zinc-700/50" : ""
                      }`}
                    >
                      <div className="flex items-center">
                        <img
                          src={song.cover || "/placeholder.svg"}
                          alt={song.title}
                          className="w-10 h-10 rounded object-cover mr-4"
                        />
                        <div>
                          <h4 className="font-medium text-white">{song.title}</h4>
                          <p className="text-sm text-zinc-400">{song.artist}</p>
                        </div>
                      </div>
                      <div className="text-xs text-zinc-400">{song.lastPlayed}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
