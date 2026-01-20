import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Badge } from '../components/ui/badge';
import { Card, CardContent, CardHeader } from '../components/ui/card';
import { Clock, ArrowLeft } from 'lucide-react';
import { blogPosts } from '../mock';
import { Button } from '../components/ui/button';
import useScrollAnimation from '../hooks/useScrollAnimation';

const BlogDetail = () => {
  const { blogId } = useParams();
  const navigate = useNavigate();
  const blog = blogPosts.find(post => post.id === parseInt(blogId));

  useScrollAnimation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blogId]);

  if (!blog) {
    return <div className="min-h-screen flex items-center justify-center text-white">Blog not found</div>;
  }

  const relatedBlogs = blogPosts.filter(post => post.id !== blog.id).slice(0, 3);

  return (
    <div className="bg-black min-h-screen">
      <Header />
      
      <section className="relative h-[50vh] md:h-[60vh] mt-16">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      </section>

      <section className="py-16 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="reveal-on-scroll">
            <div className="flex items-center gap-4 mb-6">
              <Badge className="bg-primary text-white">{blog.category}</Badge>
              <div className="flex items-center gap-2 text-gray-400">
                <Clock size={16} />
                <span>{blog.readTime}</span>
              </div>
              <span className="text-gray-400">
                {new Date(blog.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {blog.title}
            </h1>
            
            <p className="text-xl text-gray-400 mb-12 leading-relaxed">
              {blog.excerpt}
            </p>
          </div>

          <div className="prose prose-invert max-w-none">
            <div className="reveal-on-scroll">
              <h2 className="text-3xl font-bold text-white mb-4">Introduction</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                In today's digital landscape, the importance of {blog.category.toLowerCase()} cannot be overstated. 
                This comprehensive guide explores the key concepts, strategies, and best practices that will help you 
                stay ahead of the curve and achieve exceptional results.
              </p>
            </div>

            <div className="reveal-on-scroll">
              <h2 className="text-3xl font-bold text-white mb-4">Key Insights</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Through our extensive experience working with diverse clients across multiple industries, we've identified 
                several critical factors that contribute to success in {blog.category.toLowerCase()}. Let's dive deep into 
                each of these elements and understand how they can transform your approach.
              </p>
              <ul className="list-disc list-inside text-gray-400 text-lg space-y-3 mb-8">
                <li>Understanding your target audience and their needs</li>
                <li>Leveraging the latest tools and technologies</li>
                <li>Creating compelling and authentic content</li>
                <li>Measuring and optimizing performance metrics</li>
                <li>Building long-term sustainable strategies</li>
              </ul>
            </div>

            <div className="reveal-on-scroll">
              <h2 className="text-3xl font-bold text-white mb-4">Best Practices</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Implementing these best practices will ensure you're on the right path to achieving your goals. 
                Remember, consistency and authenticity are key to building trust with your audience and creating 
                lasting impact in your industry.
              </p>
            </div>

            <div className="reveal-on-scroll">
              <h2 className="text-3xl font-bold text-white mb-4">Conclusion</h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                As we move forward, staying informed and adaptable will be crucial for success. We hope this guide 
                has provided valuable insights that you can apply to your own projects. If you have any questions or 
                would like to discuss how we can help you achieve your goals, don't hesitate to reach out.
              </p>
            </div>
          </div>

          <div className="mt-12 reveal-on-scroll">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <ArrowLeft className="mr-2" size={20} />
              Back to Home
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 bg-neutral-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12 reveal-on-scroll">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Most Read Articles
            </h2>
            <p className="text-gray-400 text-lg">
              Continue exploring our insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {relatedBlogs.map((post) => (
              <Card
                key={post.id}
                onClick={() => navigate(`/blog/${post.id}`)}
                className="bg-neutral-800 border-neutral-700 overflow-hidden group cursor-pointer hover:border-primary transition-all duration-300 reveal-on-scroll"
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

      <Footer />
    </div>
  );
};

export default BlogDetail;