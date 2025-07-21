"use client";

import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { portfolioData } from "../../data/portfolio";import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  const { personal, socialLinks } = portfolioData;
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden px-4 py-20"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-accent/5">
        <div className="absolute inset-0">
          {windowSize.width > 0 && [...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary/20 rounded-full animate-pulse"
              style={{
                left: Math.random() * windowSize.width,
                top: Math.random() * windowSize.height,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container max-w-4xl mx-auto flex flex-col items-center text-center relative z-10">
        <div className="flex justify-center mb-8">
          <div className="relative w-32 h-32 md:w-40 md:h-40">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-lg opacity-50"></div>
            <Image
              src={personal.avatarImages.wave}
              alt={personal.name}
              width={160}
              height={160}
              className="relative z-10 rounded-full border-4 border-background shadow-2xl"
              priority
            />
          </div>
        </div>

        <div className="flex flex-col items-center mb-8 space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold flex flex-wrap items-center justify-center gap-x-4">
            <span>Hey folks, I'm</span>
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {personal.name.split(" ")[0]}
            </span>
            <span>👨‍💻</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-muted-foreground max-w-3xl">
            <span className="bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              {personal.title}
            </span>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {personal.description}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            size="lg"
            className="rounded-full px-8 py-6 text-lg font-medium min-w-[200px]"
            onClick={() => window.open(personal.resumeUrl, "_blank")}
          >
            View My Resume
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full px-8 py-6 text-lg font-medium min-w-[200px]"
            onClick={scrollToAbout}
          >
            Learn More About Me
          </Button>
        </div>

        <div className="flex items-center justify-center gap-6 mb-12">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors hover:scale-110"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors hover:scale-110"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${socialLinks.email}`}
            className="flex items-center justify-center p-3 rounded-full bg-muted hover:bg-muted/80 transition-colors hover:scale-110"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        <div className="flex flex-col items-center">
          <p className="text-sm text-muted-foreground mb-2">Scroll to explore</p>
          <button
            onClick={scrollToAbout}
            className="flex items-center justify-center p-2 rounded-full border border-border hover:bg-muted/50 transition-colors animate-bounce"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="absolute top-20 left-10 text-primary/20 font-mono text-sm hidden lg:block animate-pulse">
        <div>
          const yassin = &#123;
          <br />
          &nbsp;&nbsp;passion: "AI & ML",
          <br />
          &nbsp;&nbsp;status: "building_future"
          <br />
          &#125;;
        </div>
      </div>

      <div className="absolute bottom-20 right-10 text-primary/20 font-mono text-sm hidden lg:block animate-pulse">
        <div>
          # Making machines smarter
          <br />
          # One model at a time 🤖
          <br />
          # Coffee.exe loading...
        </div>
      </div>
    </section>
  );
}