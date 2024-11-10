import React from 'react';
import { 
  Bell, 
  ChevronDown,
  Menu, 
  Settings, 
  Wallet
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="bg-[#191B1F] border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img 
                src="https://raw.githubusercontent.com/Uniswap/interface/main/src/assets/svg/logo.svg" 
                alt="Logo" 
                className="h-8 w-8"
              />
            </div>
            
            <nav className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {['Swap', 'Tokens', 'NFTs', 'Pools'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                    item === 'Swap'
                      ? 'border-pink-500 text-white'
                      : 'border-transparent text-gray-300 hover:text-white'
                  }`}
                >
                  {item}
                </a>
              ))}
              <button className="text-gray-300 hover:text-white flex items-center">
                <span>More</span>
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </nav>
          </div>

          <div className="hidden sm:ml-6 sm:flex sm:items-center sm:space-x-4">
            <button className="flex items-center space-x-1 bg-[#293249] text-gray-300 hover:text-white px-4 py-2 rounded-xl">
              <img 
                src="https://raw.githubusercontent.com/Uniswap/interface/main/src/assets/svg/eth.svg"
                alt="Ethereum"
                className="h-5 w-5"
              />
              <span>Ethereum</span>
              <ChevronDown className="h-4 w-4" />
            </button>

            <button className="flex items-center space-x-2 bg-[#293249] hover:bg-[#222b42] text-white px-4 py-2 rounded-xl">
              <Wallet className="h-5 w-5" />
              <span>Connect Wallet</span>
            </button>

            <button className="p-2 text-gray-300 hover:text-white bg-[#293249] rounded-xl">
              <Settings className="h-5 w-5" />
            </button>
            
            <button className="p-2 text-gray-300 hover:text-white bg-[#293249] rounded-xl">
              <Bell className="h-5 w-5" />
            </button>
          </div>

          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="sm:hidden bg-[#191B1F]">
          <div className="pt-2 pb-3 space-y-1">
            {['Swap', 'Tokens', 'NFTs', 'Pools'].map((item) => (
              <a
                key={item}
                href="#"
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  item === 'Swap'
                    ? 'border-pink-500 text-white bg-[#232631]'
                    : 'border-transparent text-gray-300 hover:bg-[#232631] hover:text-white'
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;