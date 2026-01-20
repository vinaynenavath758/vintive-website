import React from 'react';
import { useNavigate } from 'react-router-dom';
import { blogPosts } from '../mock';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { Clock } from 'lucide-react';

const Blog = () => {
  const navigate = useNavigate();

  return (
    <section id="blog" className="py-24 bg-neutral-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Insights & Articles
          </h2>
          <p className="text-gray-400 text-lg">
            Stay updated with the latest trends in creative industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.slice(0, 3).map((post) => (
            <Card
              key={post.id}
              onClick={() => navigate(`/blog/${post.id}`)}
              className="bg-neutral-800 border-neutral-700 overflow-hidden group cursor-pointer hover:border-primary transition-all duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-white">
                  {post.category}
                </Badge>
              </div>
              <CardHeader>
                <h3 className="text-white text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;