"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(onComplete, 500);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="absolute inset-0 overflow-hidden">
        {windowSize.width > 0 && [...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: Math.random() * windowSize.width,
              top: Math.random() * windowSize.height,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center">
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse opacity-75"></div>
            <Image
              src="/images/avatar-laptop.svg"
              alt="Yassin Hesham"
              width={128}
              height={128}
              className="relative z-10 rounded-full border-4 border-white shadow-2xl"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Yassin Hesham
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-8">
          AI Engineer & Data Scientist
        </p>

        <div className="w-64 h-1 bg-gray-700 rounded-full mx-auto overflow-hidden mb-4">
          <div className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse" />
        </div>

        <p className="text-gray-400 text-sm">
          {isLoading ? "Loading portfolio..." : "Welcome!"}
        </p>
      </div>

      <div className="absolute top-10 left-10 text-green-400 font-mono text-sm opacity-30 animate-pulse">
        <div>
          {">"} import portfolio
          <br />
          {">"} from yassin_hesham
          <br />
          {">"} loading...
        </div>
      </div>

      <div className="absolute bottom-10 right-10 text-blue-400 font-mono text-sm opacity-30 animate-pulse">
        <div>
          {"console.log('Hello, World!')"}
          <br />
          {"// Making machines smarter"}
          <br />
          {"// One model at a time 🤖"}
        </div>
      </div>
    </div>
  );
}