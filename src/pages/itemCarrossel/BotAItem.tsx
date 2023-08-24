import React from 'react';
import Link from 'next/link';

interface BotAItemProps {
  name: string;
}

const BotAItem: React.FC<BotAItemProps> = ({ name }) => {
  return (
    <Link href="/BotPages/BotAPage">
    <div className=" font-padrao text-4xl flex items-center justify-center h-32 border border-black rounded-md max-w-sm hover:bg-gray-100">
      
      {name}
      
    </div>
    </Link>
  );
};

export default BotAItem;