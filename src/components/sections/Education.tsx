"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { portfolioData } from "../../data/portfolio";
import Image from "next/image";
import { Calendar, GraduationCap, Award } from "lucide-react";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Education
            </h2>
            <p className="text-xl text-muted-foreground">
              Building a strong foundation in AI and computer science
            </p>
          </div>

          <div className="hover:transform hover:scale-[1.02] transition-transform">
            <Card className="overflow-hidden">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                  <div className="flex items-center space-x-6">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden bg-muted">
                      <Image
                        src={education.logo}
                        alt={education.school}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{education.school}</CardTitle>
                      <p className="text-lg font-medium text-primary flex items-center gap-2">
                        <GraduationCap className="w-5 h-5" />
                        {education.degree}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{education.duration}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {education.description}
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-medium text-lg flex items-center gap-2">
                    <Award className="w-5 h-5 text-primary" />
                    Academic & Leadership Achievements
                  </h4>
                  <div className="flex flex-col gap-3">
                    {education.achievements.map((achievement: string, index: number) => (
                      <div
                        key={index}
                        className="flex items-start space-x-3 p-4 bg-background rounded-lg border border-border"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}