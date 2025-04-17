"use client"

import { useState } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2, Heart, Repeat, Shuffle } from "lucide-react"

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(80)
  const [liked, setLiked] = useState(false)

  // This would be replaced with actual song data
  const currentSong = {
    title: "Cosmic Harmony",
    artist: "Stellar Beats",
    cover: "/placeholder.svg?height=60&width=60",
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-900/90 backdrop-blur-lg border-t border-zinc-800 py-3 px-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 w-1/4">
            <img
              src={currentSong.cover || "/placeholder.svg"}
              alt={currentSong.title}
              className="w-12 h-12 rounded-md object-cover"
            />
            <div>
              <h4 className="text-white font-medium text-sm">{currentSong.title}</h4>
              <p className="text-zinc-400 text-xs">{currentSong.artist}</p>
            </div>
            <button
              onClick={() => setLiked(!liked)}
              className={`p-1 rounded-full ${liked ? "text-pink-500" : "text-zinc-400 hover:text-white"}`}
            >
              <Heart className="h-5 w-5" fill={liked ? "#ec4899" : "none"} />
            </button>
          </div>

          <div className="flex flex-col items-center w-2/4">
            <div className="flex items-center space-x-4">
              <button className="text-zinc-400 hover:text-white p-1">
                <Shuffle className="h-4 w-4" />
              </button>
              <button className="text-zinc-400 hover:text-white p-1">
                <SkipBack className="h-5 w-5" />
              </button>
              <button onClick={togglePlay} className="bg-white text-black p-2 rounded-full hover:bg-zinc-200">
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </button>
              <button className="text-zinc-400 hover:text-white p-1">
                <SkipForward className="h-5 w-5" />
              </button>
              <button className="text-zinc-400 hover:text-white p-1">
                <Repeat className="h-4 w-4" />
              </button>
            </div>

            <div className="w-full flex items-center space-x-2 mt-2">
              <span className="text-xs text-zinc-400">{formatTime(currentTime)}</span>
              <div className="flex-1 h-1 bg-zinc-700 rounded-full">
                <div
                  className="h-full bg-purple-600 rounded-full"
                  style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                ></div>
              </div>
              <span className="text-xs text-zinc-400">{formatTime(duration)}</span>
            </div>
          </div>

          <div className="flex items-center justify-end space-x-3 w-1/4">
            <Volume2 className="h-4 w-4 text-zinc-400" />
            <div className="w-24 h-1 bg-zinc-700 rounded-full">
              <div className="h-full bg-zinc-400 rounded-full" style={{ width: `${volume}%` }}></div>
            </div>
            <button className="text-xs text-purple-400 border border-purple-600 px-2 py-1 rounded-full hover:bg-purple-600/10">
              Buy NFT
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
