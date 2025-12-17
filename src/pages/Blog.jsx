import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of Web Development: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the web development landscape, from AI integration to progressive web apps.",
      author: "Kavindu Praneeth",
      date: "2024-03-15",
      category: "Web Development",
      image: "/blog-1.jpg",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Mobile-First Design: Why It Matters More Than Ever",
      excerpt: "Understanding the importance of mobile-first approach in modern app development and user experience.",
      author: "Nalin Sandaruwan",
      date: "2024-03-10",
      category: "Mobile Development",
      image: "/blog-2.jpg",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "SEO Best Practices for 2024: A Complete Guide",
      excerpt: "Master the art of search engine optimization with our comprehensive guide to modern SEO techniques.",
      author: "Supun Kalhara",
      date: "2024-03-05",
      category: "Digital Marketing",
      image: "/blog-3.jpg",
      readTime: "10 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Blog Header */}
      <section className="py-24 px-6 text-center">
        <div className="container mx-auto max-w-4xl">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our <span className="hero-text">Blog</span>
          </motion.h1>
          <motion.p 
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Insights, tips, and stories from the world of technology and digital innovation
          </motion.p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                className="glass-card rounded-2xl overflow-hidden group cursor-pointer hover:scale-105 transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <span className="text-6xl opacity-20">{post.category.charAt(0)}</span>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="bg-primary/10 text-primary px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;