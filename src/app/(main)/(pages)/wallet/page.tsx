import WalletCard from "@/components/WalletCard";


export default function WalletPage() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center">
      

      <header className="min-h-screen w-full py-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex flex-col items-center justify-center">
        <div className="max-w-full mx-auto text-center">
          <h1 className="text-3xl font-bold"> My Wallet</h1>
          <p className="text-gray-400 mt-2">
            View youre wallet balance and recent transitions.
          </p>
        </div>
      </header>

     
      {/* <main className="flex-1 flex items-center justify-center w-full px-4 py-12">
        <div className="max-w-4xl w-full">
         
          <WalletCard />
        </div>
      </main> */}
      <main className="flex flex-1 items-center justify-center w-full px-4 py-12">
        <div className="max-w-4xl w-full">
          <WalletCard/>
        </div>
      </main>
     
    </div>
  );
}
