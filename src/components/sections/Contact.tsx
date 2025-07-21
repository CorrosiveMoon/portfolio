"use client";

import { Button } from "../ui/button";
import { Card, CardContent } from "../ui/card";
import { portfolioData } from "../../data/portfolio";
import { Mail, MapPin, Coffee, Github, Linkedin } from "lucide-react";

export default function Contact() {
  const { personal, socialLinks } = portfolioData;

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: personal.email,
      action: () => window.open(`mailto:${personal.email}`, "_blank"),
    },
    {
      icon: Github,
      label: "GitHub",
      value: "@CorrosiveMoon",
      action: () => window.open(socialLinks.github, "_blank"),
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      action: () => window.open(socialLinks.linkedin, "_blank"),
    },
    {
      icon: MapPin,
      label: "Location",
      value: personal.location,
      action: () => {},
    },
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Connect! ☎️
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Got a project, a Python bug, or just a really good meme? My inbox is open — don't be shy.
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:flex-wrap gap-6 mb-12 justify-center">
            {contactMethods.map((method, index) => (
              <div
                key={method.label}
                className="flex-1 min-w-[250px] max-w-[300px] hover:transform hover:scale-105 hover:-translate-y-1 transition-transform"
              >
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-shadow h-full"
                  onClick={method.action}
                >
                  <CardContent className="p-6 text-center">
                    <method.icon className="w-8 h-8 mx-auto mb-4 text-primary" />
                    <h3 className="font-medium mb-2">{method.label}</h3>
                    <p className="text-muted-foreground">{method.value}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30 rounded-2xl p-8 border border-blue-200 dark:border-blue-800 mb-16">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Coffee className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold">Let's Grab a Virtual Coffee!</h3>
            </div>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you want to discuss AI, collaborate on a project, or just chat about the latest in tech, 
              I'm always excited to connect with fellow enthusiasts and professionals.
            </p>
            <Button
              size="lg"
              onClick={() => window.open(`mailto:${personal.email}`, "_blank")}
              className="rounded-full px-8"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send me an Email
            </Button>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-muted-foreground">
              © 2025 {personal.name}. Built with Next.js, shadcn/ui, and lots of ☕
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              Making machines smarter, one model at a time 🤖
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}