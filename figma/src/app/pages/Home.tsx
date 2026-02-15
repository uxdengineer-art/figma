import { useState } from 'react';
import PortfolioV1 from '../components/PortfolioV1';
import PortfolioV2 from '../components/PortfolioV2';
import { RefreshCw } from 'lucide-react';

export default function Home() {
  const [version, setVersion] = useState<'v1' | 'v2'>('v2');

  const toggleVersion = () => {
    setVersion(version === 'v1' ? 'v2' : 'v1');
  };

  return (
    <div className="relative">
      {/* Version Switcher Button */}
      <div className="fixed bottom-8 right-8 z-[100]">
        <button
          onClick={toggleVersion}
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-4 rounded-full shadow-2xl font-medium transition-all flex items-center gap-3 hover:scale-105"
        >
          <RefreshCw className="w-5 h-5" />
          Switch to {version === 'v1' ? 'Version 2' : 'Version 1'}
        </button>
      </div>

      {/* Render Selected Version */}
      {version === 'v1' ? <PortfolioV1 /> : <PortfolioV2 />}
    </div>
  );
}
