import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [timeLeft, setTimeLeft] = useState(1500);
  const [active, setActive] = useState(false);
  const [breakTime, setBreakTime] = useState(false);
  const navigate = useNavigate();
  console.log(active)

  const startTimer = () => setActive(true);
  const pauseTimer = () => setActive(false);
  const resetTimer = () => {
    setActive(false);
    setTimeLeft(1500);
    setBreakTime(false);
  };

  useEffect(() => {
    let timer;
    if (active && timeLeft > 0) {
      timer = setTimeout(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else {
      clearTimeout(timer);
    }

    if (timeLeft === 0 && !breakTime) {
      setActive(false);
      setBreakTime(true);
      setTimeLeft(5);
      navigate('/break-time');
    }

    return () => clearTimeout(timer);
  }, [active, timeLeft, breakTime, navigate]);


  return (
    <div className='flex flex-col items-center justify-center overflow-hidden h-screen bg-indigo-100'>
      <div>
        <h1 className='text-4xl font-bold mb-4'>Pomodro Timer</h1>
        <div className='text-6xl mb-6'>{`${Math.floor(timeLeft / 60) < 10 ? `0${Math.floor(timeLeft / 60)}` : Math.floor(timeLeft / 60)}: ${timeLeft % 60 < 10 ? `0${timeLeft % 60}` : timeLeft % 60} `}</div>
        <div className='actions'>
          <button
            className={`mx-5 px-4 py-2 rounded ${active ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'} text-white`}
            onClick={active ? pauseTimer : startTimer}
          >
            {active ? 'Pause' : 'Start'}
          </button>
          <button
            className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white mx-5"
            onClick={resetTimer}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
