'use client';
import React from 'react';
import { useState, useEffect } from 'react';

const Timer = () => {
  const TextArr = ['text', 'text1', 'text2', 'text3', 'D', 'H', 'm', 's', 'text4', 'text5', 'text6', 'text7', 'text8', 'text9', 'text10', 'text11']
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "January, 31, 2025";

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
    <div className={``}>
      <h1 className={``}>
        {TextArr[0]} <span className={``}>{TextArr[1]}<span className={``}>{TextArr[2]}</span></span> {TextArr[3]}</h1>
      <div className={``}>
        <span className={``}>{days} {TextArr[4]}</span>
        <span className={``}>{hours} {TextArr[5]}</span>
        <span className={``}>{minutes} {TextArr[6]}</span>
        <span className={``}>{seconds} {TextArr[7]}</span>
      </div>
      <div className={``}> {TextArr[8]}
        <span className={``}>{TextArr[9]}</span>
        <span className={``}>{TextArr[10]}</span>
        <span className={``}>{TextArr[11]}</span>
        <span className={``}>{TextArr[12]}</span>
        <div className={``}> <span className={``}>{TextArr[13]}</span> </div>
      </div>
      <div className={``}>
        <span className={``}>{TextArr[14]}</span>
        <span className={``}>{TextArr[15]}</span>
        <span className={``}>{TextArr[16]}</span>
      </div>
    </div>
  );
};

export default Timer;

