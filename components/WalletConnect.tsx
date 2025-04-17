"use client"

import { useState } from "react"
import { Wallet } from "lucide-react"

interface WalletConnectProps {
  isMobile?: boolean
}

export default function WalletConnect({ isMobile = false }: WalletConnectProps) {
  const [isConnected, setIsConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")

  const connectWallet = async () => {
    // This would be replaced with actual Starknet wallet connection logic
    try {
      // Simulate wallet connection
      setIsConnected(true)
      setWalletAddress("0x1234...5678")
    } catch (error) {
      console.error("Error connecting wallet:", error)
    }
  }

  const disconnectWallet = () => {
    setIsConnected(false)
    setWalletAddress("")
  }

  if (isMobile) {
    return (
      <button
        onClick={isConnected ? disconnectWallet : connectWallet}
        className={`w-full py-2 px-4 rounded-full font-medium ${
          isConnected
            ? "bg-purple-600/20 text-purple-400 border border-purple-600"
            : "bg-purple-600 text-white hover:bg-purple-700"
        }`}
      >
        <div className="flex items-center justify-center">
          <Wallet className="h-4 w-4 mr-2" />
          {isConnected ? `${walletAddress}` : "Connect Wallet"}
        </div>
      </button>
    )
  }

  return (
    <button
      onClick={isConnected ? disconnectWallet : connectWallet}
      className={`py-2 px-4 rounded-full font-medium ${
        isConnected
          ? "bg-purple-600/20 text-purple-400 border border-purple-600"
          : "bg-purple-600 text-white hover:bg-purple-700"
      }`}
    >
      <div className="flex items-center">
        <Wallet className="h-4 w-4 mr-2" />
        {isConnected ? `${walletAddress}` : "Connect Wallet"}
      </div>
    </button>
  )
}
