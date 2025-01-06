export default function Wallet() {
  return (
    <section className="wrapper relative flex min-h-screen items-center justify-center bg-gray-100 antialiased">
      {/* Background */}
      <div className="absolute -bottom-[16rem] -z-[20] size-[24rem] overflow-hidden rounded-full bg-gradient-to-t from-blue-400 to-blue-700 blur-[16em]" />

      <div className="relative w-full max-w-lg p-6 bg-white rounded-lg shadow-xl overflow-hidden">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">My Wallet</h2>

        {/* Balance Section */}
        <div className="mb-6">
          <h3 className="text-lg text-gray-600">Balance</h3>
          <div className="text-3xl font-bold text-green-600">₹10,500</div>
        </div>

        {/* Recent Transactions Section */}
        <div className="mb-6">
          <h3 className="text-lg text-gray-600">Recent Transactions</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-sm text-gray-600">Payment for books</span>
              <span className="text-sm text-gray-400">-₹500</span>
            </li>
            <li className="flex justify-between">
              <span className="text-sm text-gray-600">Course Fee Payment</span>
              <span className="text-sm text-gray-400">-₹4,000</span>
            </li>
            <li className="flex justify-between">
              <span className="text-sm text-gray-600">Refund from library</span>
              <span className="text-sm text-gray-400">+₹1,000</span>
            </li>
          </ul>
        </div>

        {/* Pending Fees Section */}
        <div className="space-y-4">
          <h3 className="text-lg text-gray-600">Pending Fees</h3>
          <ul className="space-y-3">
            <li className="flex justify-between">
              <span className="text-sm text-gray-600">Late Fee</span>
              <span className="text-sm text-red-500">₹300</span>
            </li>
            <li className="flex justify-between">
              <span className="text-sm text-gray-600">ATKT Fee</span>
              <span className="text-sm text-red-500">₹1,200</span>
            </li>
            <li className="flex justify-between">
              <span className="text-sm text-gray-600">Journal Fee</span>
              <span className="text-sm text-red-500">₹150</span>
            </li>
            <li className="flex justify-between">
              <span className="text-sm text-gray-600">Fine</span>
              <span className="text-sm text-red-500">₹500</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
