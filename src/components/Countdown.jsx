import React, { useEffect, useState } from 'react';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-09-26") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <>
      <div className="text-center font-spaceGrotesk p-4 sm:p-10">
        <h1 className="text-xl sm:text-2xl text-colorGreen font-bold">
          1st International Conference On <br /> Sustainability of Sciences for the Future
        </h1>
        <p className="text-lg sm:text-xl font-bold mb-2 mt-2 text-white">September 26-27th, 2024</p>
        <div className="flex justify-center items-center mt-10">
          <div className="bg-black text-white p-4 sm:p-10 font-bold font-spaceGrotesk rounded-md flex space-x-4 sm:space-x-8">
            <div className="text-center">
              <div className="text-2xl sm:text-4xl">{timeLeft.days || '0'}</div>
              <div className='ml-20'>:</div>
              <div className="text-sm">Days</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl">{timeLeft.hours || '0'}</div>
              <div className='ml-20'>:</div>
              <div className="text-sm">Hours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl">{timeLeft.minutes || '0'}</div>
              <div className='ml-20'>:</div>
              <div className="text-sm">Minutes</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-4xl">{timeLeft.seconds || '0'}</div>
              <div className="text-sm mt-6 md:mt-5">Seconds</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountdownTimer;
