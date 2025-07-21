"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Progress } from "../ui/progress";
import { Badge } from "../ui/badge";
import { portfolioData } from "../../data/portfolio";
import { Brain, Database, Code, Zap, Palette } from "lucide-react";

const categoryIcons = {
  "AI & Machine Learning": Brain,
  "Data Engineering & Analysis": Database,
  "Backend Development": Code,
  "AI Systems": Zap,
  "Frontend & Dashboards": Palette,
};

export default function Skills() {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              What I Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
              {skills.description}
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:flex-wrap gap-6 mb-16 w-full max-w-4xl">
            {skills.highlights.map((highlight, index) => (
              <div
                key={index}
                className="flex items-start space-x-4 p-6 bg-background rounded-lg border border-border flex-1 min-w-[300px] hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-full flex-shrink-0 mt-1">
                  <span className="text-lg">{highlight.split(" ")[0]}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed flex-1">
                  {highlight.substring(2)}
                </p>
              </div>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-8 w-full max-w-6xl">
            {skills.categories.map((category, index) => {
              const IconComponent = categoryIcons[category.title as keyof typeof categoryIcons];
              
              return (
                <div
                  key={category.title}
                  className="flex-1 min-w-[300px] hover:transform hover:-translate-y-2 transition-transform"
                >
                  <Card className="h-full flex flex-col">
                    <CardHeader className="flex-shrink-0">
                      <CardTitle className="flex items-center space-x-3">
                        {IconComponent && (
                          <div className="flex items-center justify-center p-2 bg-primary/10 rounded-lg">
                            <IconComponent className="w-5 h-5 text-primary" />
                          </div>
                        )}
                        <span>{category.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-1 space-y-6">
                      <div className="flex flex-col space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Proficiency</span>
                          <span className="font-medium">{category.progress}%</span>
                        </div>
                        <Progress 
                          value={category.progress} 
                          className="h-2"
                        />
                      </div>

                      <div className="flex flex-wrap gap-2 flex-1">
                        {category.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skill}
                            variant="secondary" 
                            className="hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center mt-16">
            <div className="flex flex-col items-center p-6 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl border border-blue-200 dark:border-blue-800 max-w-2xl">
              <p className="text-lg text-muted-foreground mb-2">
                ☕ Fun Fact
              </p>
              <p className="text-xl font-medium text-center">
                I've trained more models than I can count, but I still debug with{" "}
                <code className="bg-muted px-2 py-1 rounded text-sm">print()</code>{" "}
                statements 😅
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}