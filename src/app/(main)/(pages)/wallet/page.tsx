import WalletCard from "@/components/WalletCard";


export default function WalletPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center">
      {/* Header Section */}
      <header className="w-full py-6 bg-gray-800 shadow-lg">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold">My Wallet</h1>
          <p className="text-gray-400 mt-2">
            View your wallet balance and recent transactions.
          </p>
        </div>
      </header>

      {/* Main Content Section */}
      <main className="flex-1 flex items-center justify-center w-full px-4 py-12">
        <div className="max-w-4xl w-full">
          {/* WalletCWalletCardard Component */}
          <WalletCard />
        </div>
      </main>

     
    </div>
  );
}
