import React from 'react';
import Link from 'next/link';

interface BotBItemProps {
  name: string;
}

const BotBItem: React.FC<BotBItemProps> = ({ name }) => {
  return (
    <Link href="/BotPages/BotBPage">
    <div className=" font-padrao text-4xl flex items-center justify-center h-32 border border-black rounded-md max-w-sm hover:bg-gray-100">
      {name}
      
    </div>
    </Link>
  );
};

export default BotBItem;