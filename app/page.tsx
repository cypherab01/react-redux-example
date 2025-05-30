"use client";

import { useAppDispatch, useAppSelector } from "./store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./store/reducers/counterSlice";

const Homepage = () => {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 sm:p-8 shadow-2xl w-full max-w-sm">
        <h1 className="text-3xl sm:text-4xl font-bold text-white text-center mb-6 sm:mb-8">
          Counter
        </h1>
        <div className="bg-white/20 rounded-xl p-4 sm:p-6 mb-4 sm:mb-6">
          <p className="text-5xl sm:text-6xl font-bold text-white text-center">
            {count}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
          <button
            onClick={() => dispatch(increment())}
            className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
          >
            Increment
          </button>
          <button
            onClick={() => dispatch(decrement())}
            className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl transition-all duration-200 transform hover:scale-105 text-sm sm:text-base"
          >
            Decrement
          </button>
          <button
            onClick={() => dispatch(incrementByAmount(10))}
            className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-2.5 sm:py-3 px-4 sm:px-6 rounded-xl transition-all duration-200 transform hover:scale-105 text-sm sm:text-base sm:col-span-2"
          >
            Increment by 10
          </button>
        </div>
      </div>
    </div>
  );
};
export default Homepage;
