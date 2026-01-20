import React, { useState } from 'react';
import { portfolioProjects } from '../mock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState('graphic');

  return (
    <section id="portfolio" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Work
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore our portfolio of creative projects across different disciplines
          </p>
        </div>

        <Tabs defaultValue="graphic" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 bg-neutral-800 p-1">
            <TabsTrigger
              value="graphic"
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Graphic Design
            </TabsTrigger>
            <TabsTrigger
              value="video"
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              Video Editing
            </TabsTrigger>
            <TabsTrigger
              value="uiux"
              className="data-[state=active]:bg-primary data-[state=active]:text-white"
            >
              UI/UX Design
            </TabsTrigger>
          </TabsList>

          <TabsContent value="graphic" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioProjects.graphicDesign.map((project) => (
                <Card
                  key={project.id}
                  className="bg-neutral-800 border-neutral-700 overflow-hidden group cursor-pointer hover:border-primary transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">View Project</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-neutral-700 text-gray-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="video" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioProjects.videoEditing.map((project) => (
                <Card
                  key={project.id}
                  className="bg-neutral-800 border-neutral-700 overflow-hidden group cursor-pointer hover:border-primary transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">View Project</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-neutral-700 text-gray-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="uiux" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {portfolioProjects.uiUxDesign.map((project) => (
                <Card
                  key={project.id}
                  className="bg-neutral-800 border-neutral-700 overflow-hidden group cursor-pointer hover:border-primary transition-all duration-300"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white text-lg font-semibold">View Project</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-neutral-700 text-gray-300">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default Portfolio;
