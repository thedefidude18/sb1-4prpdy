import React from 'react';
import { ChevronDown, Filter, RefreshCw } from 'lucide-react';

const TradingControls = () => {
  const [activeTab, setActiveTab] = React.useState('buy');
  const [showFilters, setShowFilters] = React.useState(false);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
      <div className="flex flex-col space-y-6">
        {/* Buy/Sell Toggle */}
        <div className="flex rounded-lg bg-gray-100 p-1 w-fit">
          {['buy', 'sell'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-md text-sm font-medium capitalize ${
                activeTab === tab
                  ? 'bg-white text-[#00C087] shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Controls */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Cryptocurrency
            </label>
            <button className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md bg-white text-sm">
              <div className="flex items-center">
                <span className="font-medium">USDT</span>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </button>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Fiat Currency
            </label>
            <button className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md bg-white text-sm">
              <div className="flex items-center">
                <span className="font-medium">NGN</span>
              </div>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </button>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <input
              type="text"
              placeholder="Enter amount"
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-white text-sm focus:ring-[#00C087] focus:border-[#00C087]"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Payment Method
            </label>
            <button className="w-full flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md bg-white text-sm">
              <span className="font-medium">All Payment Methods</span>
              <ChevronDown className="h-4 w-4 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Advanced Controls */}
        <div className="flex items-center justify-between">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center text-sm text-gray-600 hover:text-gray-900"
          >
            <Filter className="h-4 w-4 mr-2" />
            Advanced Filter
          </button>
          <button className="flex items-center text-sm text-gray-600 hover:text-gray-900">
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </button>
        </div>

        {/* Advanced Filters Panel */}
        {showFilters && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Completion Rate
              </label>
              <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#00C087] focus:ring-[#00C087]">
                <option>All</option>
                <option>Above 90%</option>
                <option>Above 95%</option>
                <option>Above 98%</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Response Time
              </label>
              <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#00C087] focus:ring-[#00C087]">
                <option>All</option>
                <option>Within 15 minutes</option>
                <option>Within 30 minutes</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Merchant Type
              </label>
              <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-[#00C087] focus:ring-[#00C087]">
                <option>All</option>
                <option>Verified Merchants</option>
                <option>Individual Traders</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TradingControls;