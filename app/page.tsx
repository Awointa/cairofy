import MusicPlayer from "@/components/MusicPlayer"
import Navigation from "@/components/Navigation"
import FeaturedSongs from "@/components/FeaturedSongs"
import TrendingArtists from "@/components/TrendingArtists"
import RecentlyPlayed from "@/components/RecentlyPlayed"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
    <Navigation />
    <div className="container mx-auto px-4 py-8">
      <section className="mb-12">
        <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
          Discover, Collect & Own Music
        </h1>
        <p className="text-zinc-400 max-w-2xl mb-8">
          The first decentralized music platform on Starknet. Listen, buy, sell, and earn rewards.
        </p>
        <div className="flex gap-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition">
            Explore Music
          </button>
          <button className="border border-purple-600 text-purple-400 hover:bg-purple-600/10 font-medium py-2 px-6 rounded-full transition">
            Upload Song
          </button>
        </div>
      </section>

      <FeaturedSongs />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
        <div className="lg:col-span-2">
          <TrendingArtists />
        </div>
        <div>
          <RecentlyPlayed />
        </div>
      </div>
    </div>
    <MusicPlayer />
  </main>
  );
}
