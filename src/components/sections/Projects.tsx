"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { portfolioData } from "../../data/portfolio";
import { Github, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function Projects() {
  const { projects } = portfolioData;

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          <div className="flex flex-col items-center text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Lines of code and some personal projects that showcase my passion for AI, data science, and building intelligent systems.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:flex-wrap gap-8 w-full">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="flex-1 min-w-[300px] lg:max-w-[calc(50%-1rem)] hover:transform hover:-translate-y-2 transition-transform"
              >
                <Card className="h-full overflow-hidden group cursor-pointer flex flex-col">
                  <div className="relative h-48 overflow-hidden flex-shrink-0">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.github && (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="rounded-full"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.github, "_blank");
                          }}
                        >
                          <Github className="w-4 h-4" />
                        </Button>
                      )}
                      {project.demo && (
                        <Button
                          size="sm"
                          className="rounded-full"
                          onClick={(e) => {
                            e.stopPropagation();
                            window.open(project.demo, "_blank");
                          }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                    </div>

                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                          Featured
                        </Badge>
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col flex-1">
                    <CardHeader className="flex-shrink-0">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                    </CardHeader>

                    <CardContent className="flex flex-col flex-1 space-y-4">
                      <p className="text-muted-foreground leading-relaxed flex-1">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      <div className="flex space-x-3 pt-4">
                        {project.github && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                            onClick={() => window.open(project.github, "_blank")}
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Code
                          </Button>
                        )}
                        {project.demo && (
                          <Button
                            size="sm"
                            className="flex-1"
                            onClick={() => window.open(project.demo, "_blank")}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        )}
                        {!project.github && !project.demo && (
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1"
                            disabled
                          >
                            Coming Soon
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-16">
            <div className="flex flex-col items-center p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl border border-blue-200 dark:border-blue-800 max-w-md">
              <h3 className="text-2xl font-bold mb-4">
                Interested in More Projects?
              </h3>
              <p className="text-muted-foreground mb-6 text-center">
                Check out my GitHub for more experiments, contributions, and ongoing work in AI and data science.
              </p>
              <Button
                size="lg"
                onClick={() => window.open(portfolioData.socialLinks.github, "_blank")}
                className="rounded-full"
              >
                <Github className="w-5 h-5 mr-2" />
                View All Projects
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}