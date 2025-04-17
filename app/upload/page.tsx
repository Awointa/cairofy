"use client"

import type React from "react"

import { useState } from "react"
import { Upload, Music, ImageIcon, X } from "lucide-react"
import Navigation from "@/components/Navigation"

export default function UploadPage() {
  const [songFile, setSongFile] = useState<File | null>(null)
  const [coverImage, setCoverImage] = useState<File | null>(null)
  const [songTitle, setSongTitle] = useState("")
  const [genre, setGenre] = useState("")
  const [price, setPrice] = useState("")
  const [description, setDescription] = useState("")
  const [coverPreview, setCoverPreview] = useState("")

  const handleSongUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSongFile(e.target.files[0])
    }
  }

  const handleCoverUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0]
      setCoverImage(file)

      // Create preview URL
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target?.result) {
          setCoverPreview(e.target.result as string)
        }
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This would be replaced with actual upload and minting logic
    console.log({
      songFile,
      coverImage,
      songTitle,
      genre,
      price,
      description,
    })

    // Reset form after submission
    alert("Song uploaded successfully! It will be minted as an NFT.")
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Upload Your Music</h1>

        <div className="max-w-2xl mx-auto bg-zinc-800/50 rounded-xl p-6">
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-zinc-300 mb-2">Song File (MP3, WAV)</label>
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center ${
                    songFile ? "border-purple-500 bg-purple-500/10" : "border-zinc-600 hover:border-purple-500"
                  }`}
                >
                  <input type="file" accept="audio/*" onChange={handleSongUpload} className="hidden" id="song-upload" />
                  <label htmlFor="song-upload" className="cursor-pointer">
                    {songFile ? (
                      <div className="flex items-center justify-center">
                        <Music className="h-6 w-6 text-purple-400 mr-2" />
                        <span className="text-purple-400">{songFile.name}</span>
                      </div>
                    ) : (
                      <div>
                        <Upload className="h-8 w-8 mx-auto text-zinc-400 mb-2" />
                        <p className="text-zinc-400">
                          Drag and drop your audio file here, or <span className="text-purple-400">browse</span>
                        </p>
                        <p className="text-xs text-zinc-500 mt-1">Supported formats: MP3, WAV (max 50MB)</p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Cover Image</label>
                <div
                  className={`border-2 border-dashed rounded-lg p-4 text-center ${
                    coverImage ? "border-purple-500 bg-purple-500/10" : "border-zinc-600 hover:border-purple-500"
                  }`}
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleCoverUpload}
                    className="hidden"
                    id="cover-upload"
                  />
                  <label htmlFor="cover-upload" className="cursor-pointer">
                    {coverPreview ? (
                      <div className="relative">
                        <img
                          src={coverPreview || "/placeholder.svg"}
                          alt="Cover preview"
                          className="w-full aspect-square object-cover rounded-lg"
                        />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault()
                            setCoverImage(null)
                            setCoverPreview("")
                          }}
                          className="absolute top-2 right-2 bg-black/70 rounded-full p-1"
                        >
                          <X className="h-4 w-4 text-white" />
                        </button>
                      </div>
                    ) : (
                      <div>
                        <ImageIcon className="h-8 w-8 mx-auto text-zinc-400 mb-2" />
                        <p className="text-zinc-400">Upload cover art</p>
                        <p className="text-xs text-zinc-500 mt-1">JPG, PNG, GIF (1:1 ratio)</p>
                      </div>
                    )}
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-300 mb-2">Song Details</label>
                <div className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Song Title"
                      value={songTitle}
                      onChange={(e) => setSongTitle(e.target.value)}
                      className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                      required
                    />
                  </div>
                  <div>
                    <select
                      value={genre}
                      onChange={(e) => setGenre(e.target.value)}
                      className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                      required
                    >
                      <option value="">Select Genre</option>
                      <option value="electronic">Electronic</option>
                      <option value="hiphop">Hip Hop</option>
                      <option value="rock">Rock</option>
                      <option value="pop">Pop</option>
                      <option value="ambient">Ambient</option>
                      <option value="jazz">Jazz</option>
                      <option value="classical">Classical</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Price in ETH"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                        required
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                        <span className="text-zinc-400">ETH</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-zinc-300 mb-2">Description</label>
                <textarea
                  placeholder="Tell us about your song..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 bg-zinc-700 border border-zinc-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <div className="bg-zinc-700/50 rounded-lg p-4 mb-6">
                  <h3 className="font-medium text-white mb-2">NFT Minting Details</h3>
                  <p className="text-sm text-zinc-400">
                    Your song will be minted as an NFT on the Starknet blockchain. You'll earn rewards when users listen
                    to your music and receive royalties when your NFT is resold.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-4 rounded-lg transition"
                >
                  Upload & Mint NFT
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
