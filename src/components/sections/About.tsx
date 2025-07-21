"use client";

import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import { portfolioData } from "../../data/portfolio";
import Image from "next/image";
import { Coffee, Code, Brain, Heart } from "lucide-react";

export default function About() {
  const { personal } = portfolioData;

  const stats = [
    { icon: Code, label: "Projects Completed", value: "15+" },
    { icon: Brain, label: "ML Models Trained", value: "50+" },
    { icon: Coffee, label: "Cups of Coffee", value: "∞" },
    { icon: Heart, label: "Years of Passion", value: "3+" },
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl blur-2xl opacity-20"></div>
                <Image
                  src={personal.avatarImages.laptop}
                  alt={personal.name}
                  width={400}
                  height={400}
                  className="relative z-10 rounded-2xl shadow-2xl w-full max-w-md mx-auto"
                />
              </div>
            </div>

            <div className="flex-1 space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Hey there! I'm a passionate AI Engineer and Data Scientist currently pursuing my BSc in Artificial Intelligence and Data Science at New Giza University. 
                </p>
                <p>
                  My journey in the world of AI began with curiosity about how machines can learn and make decisions. Since then, I've been deeply involved in building intelligent systems, training deep learning models, and creating data-driven solutions that solve real-world problems.
                </p>
                <p>
                  When I'm not training models or debugging code, you'll find me exploring the latest in AI research, contributing to open-source projects, or mentoring fellow students. I believe in the power of technology to make a positive impact on the world.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {["Problem Solver", "Team Player", "Fast Learner", "AI Enthusiast", "Coffee Addict"].map((trait) => (
                  <Badge key={trait} variant="secondary" className="text-sm py-1">
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 mt-16 justify-center">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="text-center flex-1 min-w-[200px] max-w-[250px]">
                <CardContent className="p-6">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                  <div className="text-2xl font-bold mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}