"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Search, Home, Library, Upload, ShoppingCart, User } from "lucide-react"
import WalletConnect from "./WalletConnect"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-zinc-900/80 backdrop-blur-md sticky top-0 z-50 border-b border-zinc-800">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 flex items-center justify-center mr-2">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="text-white font-bold text-xl">CAIRO_5</span>
            </Link>
          </div>

          <div className="hidden md:block flex-1 max-w-md mx-8">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-zinc-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                placeholder="Search artists, songs, albums..."
              />
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link href="/" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              <Home className="h-5 w-5" />
            </Link>
            <Link href="/library" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              <Library className="h-5 w-5" />
            </Link>
            <Link href="/upload" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              <Upload className="h-5 w-5" />
            </Link>
            <Link
              href="/marketplace"
              className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              <ShoppingCart className="h-5 w-5" />
            </Link>
            <Link href="/profile" className="text-zinc-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
              <User className="h-5 w-5" />
            </Link>
            <WalletConnect />
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-zinc-300 hover:text-white focus:outline-none">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="px-3 py-2">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-zinc-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 rounded-full bg-zinc-800 border border-zinc-700 text-zinc-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                  placeholder="Search..."
                />
              </div>
            </div>

            <Link href="/" className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
              <div className="flex items-center">
                <Home className="h-5 w-5 mr-2" />
                Home
              </div>
            </Link>
            <Link
              href="/library"
              className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              <div className="flex items-center">
                <Library className="h-5 w-5 mr-2" />
                Library
              </div>
            </Link>
            <Link
              href="/upload"
              className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              <div className="flex items-center">
                <Upload className="h-5 w-5 mr-2" />
                Upload
              </div>
            </Link>
            <Link
              href="/marketplace"
              className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              <div className="flex items-center">
                <ShoppingCart className="h-5 w-5 mr-2" />
                Marketplace
              </div>
            </Link>
            <Link
              href="/profile"
              className="text-zinc-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              <div className="flex items-center">
                <User className="h-5 w-5 mr-2" />
                Profile
              </div>
            </Link>
            <div className="px-3 py-2">
              <WalletConnect isMobile={true} />
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
