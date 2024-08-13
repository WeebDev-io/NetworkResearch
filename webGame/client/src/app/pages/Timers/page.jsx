'use client';
import React from 'react';
import { useState, useEffect } from 'react';

const Timer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "January, 31, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`text-slate-300`}>
      <h1 className="h-[60px] leading-[60px] bg-slate-800 text-center text-2xl">
        Time to the <span className="text-sky-300 inline-block">Network<span className="text-amber-300 inline-block">Hub</span></span> Release</h1>
      <div className="bg-slate-800 w-[300px] mx-auto h-[60px] text-center leading-[60px] flex flex-row text-2xl">
        <span className="text-amber-400 inline-block w-[80px] text-center">{days} D</span>
        <span className="text-sky-400 inline-block w-[80px] text-center">{hours} H</span>
        <span className="text-slate-300 inline-block w-[80px] text-center">{minutes} m</span>
        <span className="text-slate-400 inline-block w-[80px] text-center">{seconds} s</span>
      </div>
      <div className="h-[60px] leading-[60px] bg-slate-800 text-center text-xl"> Our Website will be renamed to 
        <span className="text-emerald-500 ml-2 inline-block">R</span> 
        <span className="text-amber-500 inline-block">B</span> 
        <span className="text-sky-500 inline-block">C</span>
        <span className="text-rose-500 inline-block">Network</span>
        <div className="flex flex-col">
          <span className="text-slate-200 inline-block text-sm RBC mx-10">RiseBlendCraft</span>
        </div>
      </div>
      <div className="h-[60px] leading-[60px] bg-slate-800 text-center text-xl">
        <span className="h-[60px] leading-[60px] bg-slate-800 text-emerald-500 text-center text-xl">We Grow.</span>
        <span className="h-[60px] leading-[60px] bg-slate-800 text-amber-500 text-center text-xl">We Connect.</span>
        <span className="h-[60px] leading-[60px] bg-slate-800 text-sky-500 text-center text-xl">We Create.</span>
      </div>
    </div>
  );
};

export default Timer;

