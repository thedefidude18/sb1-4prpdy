import React from 'react';
import { ArrowDown, ChevronDown, Settings, Info } from 'lucide-react';

const SwapInterface = () => {
  const [swapDetails, setSwapDetails] = React.useState({
    from: '',
    to: '',
  });

  return (
    <div className="w-full max-w-[480px] rounded-2xl bg-[#191B1F] border border-gray-800">
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-xl font-medium">Swap</h2>
          <button className="p-1.5 hover:bg-[#293249] rounded-lg text-gray-400 hover:text-white transition-colors">
            <Settings className="h-5 w-5" />
          </button>
        </div>

        {/* From Token Input */}
        <div className="p-4 bg-[#212429] rounded-2xl mb-1">
          <div className="flex justify-between mb-2">
            <input
              type="text"
              placeholder="0"
              value={swapDetails.from}
              onChange={(e) => setSwapDetails({ ...swapDetails, from: e.target.value })}
              className="bg-transparent text-2xl font-medium focus:outline-none w-full"
            />
            <button className="flex items-center bg-[#293249] hover:bg-[#222b42] rounded-2xl px-3 py-1.5">
              <img 
                src="https://raw.githubusercontent.com/Uniswap/interface/main/src/assets/svg/eth.svg"
                alt="ETH"
                className="h-5 w-5 mr-1"
              />
              <span className="font-medium mr-1">ETH</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
          <div className="text-sm text-gray-400">$1,866.71</div>
        </div>

        {/* Swap Direction Button */}
        <div className="flex justify-center -my-2.5 relative z-10">
          <button className="bg-[#293249] p-2 rounded-xl hover:bg-[#222b42] border-4 border-[#191B1F]">
            <ArrowDown className="h-4 w-4" />
          </button>
        </div>

        {/* To Token Input */}
        <div className="p-4 bg-[#212429] rounded-2xl mt-1">
          <div className="flex justify-between mb-2">
            <input
              type="text"
              placeholder="0"
              value={swapDetails.to}
              onChange={(e) => setSwapDetails({ ...swapDetails, to: e.target.value })}
              className="bg-transparent text-2xl font-medium focus:outline-none w-full"
            />
            <button className="flex items-center bg-[#293249] hover:bg-[#222b42] rounded-2xl px-3 py-1.5">
              <span className="font-medium mr-1">Select token</span>
              <ChevronDown className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Connect Wallet Button */}
        <button className="w-full mt-4 bg-[#5D6785] hover:bg-[#505A78] text-white font-medium py-4 px-6 rounded-2xl">
          Connect Wallet
        </button>
      </div>

      {/* Trade Details */}
      <div className="px-4 py-3 bg-[#212429] rounded-b-2xl">
        <div className="flex items-center justify-between text-sm text-gray-400">
          <span className="flex items-center">
            <span>1 ETH = 1,866.71 USDC</span>
            <Info className="h-4 w-4 ml-1" />
          </span>
          <button className="flex items-center hover:text-white">
            <Settings className="h-4 w-4 mr-1" />
            <span>Auto</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SwapInterface;