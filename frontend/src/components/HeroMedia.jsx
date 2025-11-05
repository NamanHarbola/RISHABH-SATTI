import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { Button } from './ui/button';

export default function HeroMedia() {
  const [heroContent, setHeroContent] = useState(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    // Load hero content from localStorage (admin-controlled)
    const savedHero = localStorage.getItem('heroContent');
    if (savedHero) {
      setHeroContent(JSON.parse(savedHero));
    } else {
      // Default hero content
      setHeroContent({
        type: 'image',
        url: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&q=80',
        alt: 'Fashion Model'
      });
    }
  }, []);

  const handleVideoToggle = () => {
    const video = document.getElementById('hero-video');
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  if (!heroContent) {
    return (
      <div className="w-full h-full bg-muted animate-pulse rounded-2xl" />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
    >
      {heroContent.type === 'video' ? (
        <>
          <video
            id="hero-video"
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={heroContent.url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Button
            variant="ghost"
            size="icon"
            className="absolute bottom-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background"
            onClick={handleVideoToggle}
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5" />
            )}
          </Button>
        </>
      ) : (
        <motion.img
          src={heroContent.url}
          alt={heroContent.alt || 'Hero'}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.6 }}
        />
      )}
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />
    </motion.div>
  );
}
