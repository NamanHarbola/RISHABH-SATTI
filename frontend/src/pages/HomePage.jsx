import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Sparkles, TrendingUp, Award } from 'lucide-react';
import { Button } from '../components/ui/button';
import HeroMedia from '../components/HeroMedia';
import ProductCard from '../components/ProductCard';
import ScrollReveal from '../components/ScrollReveal';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const [selectedColor, setSelectedColor] = useState('#1a202c');
  
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8]);

  const colorOptions = [
    { name: 'Navy', value: '#1a202c' },
    { name: 'Burgundy', value: '#9b2c2c' },
    { name: 'Forest', value: '#276749' },
    { name: 'Charcoal', value: '#2d3748' },
  ];

  const featuredProducts = [
    {
      id: 1,
      name: 'Premium Leather Jacket',
      category: 'Outerwear',
      price: 299,
      originalPrice: 399,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=800&q=80',
      badge: 'New',
      colors: ['#1a202c', '#4a5568', '#2d3748'],
    },
    {
      id: 2,
      name: 'Silk Evening Dress',
      category: 'Women',
      price: 459,
      image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=800&q=80',
      badge: 'Trending',
      colors: ['#742a2a', '#1a202c', '#2c5282'],
    },
    {
      id: 3,
      name: 'Designer Sneakers',
      category: 'Footwear',
      price: 189,
      originalPrice: 249,
      image: 'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&q=80',
      colors: ['#ffffff', '#1a202c', '#9b2c2c'],
    },
    {
      id: 4,
      name: 'Cashmere Sweater',
      category: 'Knitwear',
      price: 279,
      image: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=800&q=80',
      badge: 'Bestseller',
      colors: ['#c6977f', '#744210', '#1a202c'],
    },
  ];

  const features = [
    {
      icon: Sparkles,
      title: 'Premium Quality',
      description: 'Handcrafted with finest materials',
    },
    {
      icon: TrendingUp,
      title: 'Latest Trends',
      description: 'Stay ahead with fashion-forward designs',
    },
    {
      icon: Award,
      title: 'Award Winning',
      description: 'Recognized excellence in fashion',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              style={{ opacity, scale }}
              className="text-center lg:text-left space-y-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-2 bg-muted/50 rounded-full text-sm font-medium"
              >
                ✨ Experience 3D Fashion
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              >
                Redefining
                <br />
                <span className="gradient-text-green">Luxury Fashion</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-muted-foreground max-w-xl"
              >
                Immerse yourself in our revolutionary 3D shopping experience.
                Explore every detail, every texture, every angle before you buy.
              </motion.p>
              
              {/* Color Selection */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-4"
              >
                <p className="text-sm font-medium text-foreground/70">Choose Your Color</p>
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {colorOptions.map((color) => (
                    <button
                      key={color.value}
                      onClick={() => setSelectedColor(color.value)}
                      className={`group relative w-14 h-14 rounded-full transition-all ${
                        selectedColor === color.value
                          ? 'ring-4 ring-primary ring-offset-2 ring-offset-background scale-110'
                          : 'hover:scale-105'
                      }`}
                      style={{ backgroundColor: color.value }}
                    >
                      <span className="sr-only">{color.name}</span>
                      {selectedColor === color.value && (
                        <motion.div
                          layoutId="selected-color"
                          className="absolute inset-0 rounded-full border-2 border-primary"
                        />
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 group"
                  onClick={() => navigate('/collection/new')}
                >
                  Explore Collection
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2"
                >
                  Watch Video
                </Button>
              </motion.div>
            </motion.div>
            
            {/* Right Content - Hero Media */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative h-[500px] md:h-[700px]"
            >
              <HeroMedia />
            </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="flex flex-col items-center space-y-2">
            <span className="text-xs text-muted-foreground">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2"
            >
              <motion.div
                animate={{ opacity: [0, 1, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="w-1 h-2 bg-foreground/40 rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="flex flex-col items-center text-center space-y-4 p-8 rounded-2xl bg-card hover:shadow-lg transition-shadow">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl sm:text-5xl font-bold">
                                Featured <span className="gradient-text-green">Collection</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our handpicked selection of premium garments, crafted with
                precision and designed for the modern connoisseur.
              </p>
            </div>
          </ScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          
          <ScrollReveal>
            <div className="text-center mt-12">
              <Button
                size="lg"
                variant="outline"
                className="border-2"
                onClick={() => navigate('/collection/new')}
              >
                View All Products
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white to-transparent" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <ScrollReveal>
              <h2 className="text-4xl sm:text-5xl font-bold">
                Join Our Exclusive Community
              </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">
              Subscribe to receive early access to new collections, exclusive offers,
              and style inspiration.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-6 py-3 rounded-full bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}