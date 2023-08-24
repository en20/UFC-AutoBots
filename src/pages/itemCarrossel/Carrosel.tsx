import React, { useState } from 'react';
import BotAItem from './BotAItem';
import BotBItem from './BotBItem';
import BotCItem from './BotCItem';

const Carousel: React.FC = () => {
  const items = ['Bot A', 'Bot B', 'Bot C'];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goToPrevItem = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const botComponents = [BotAItem, BotBItem, BotCItem];
  const CurrentBotComponent = botComponents[currentIndex];

  return (
    <section className="relative mt-32 font-padrao">
      <div className="flex items-center justify-center w-full h-64 overflow-hidden">
        <div
          className="w-full h-full absolute transition-transform ease-in-out duration-300"
          style={{
            transform: `translateX(-${currentIndex * (100 / items.length)}%)`,
            display: 'flex',
            gap: '16px',
          }}
        >
          {[...items, ...items, ...items].map((itemName, index) => (
            <div
              key={index}
              className="w-full h-full flex-shrink-0"
              style={{ width: `${100 / items.length}%` }}
            >
              {React.createElement(botComponents[index % items.length], {
                name: items[index % items.length],
              })}
            </div>
          ))}
        </div>
      </div>
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2">
        <button
          onClick={goToPrevItem}
          className="bg-gray-200 px-3 py-1 rounded-full mb-28"
        >
          &#x2190;
        </button>
      </div>
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
        <button
          onClick={goToNextItem}
          className="bg-gray-200 px-3 py-1 rounded-full mb-28"
        >
          &#x2192;
        </button>
      </div>
    </section>
  );
};

export default Carousel;
