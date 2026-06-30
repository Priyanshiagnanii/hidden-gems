import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Clock, X, ChevronRight, Share2, CornerDownRight } from 'lucide-react';
import { blogPosts } from '../data/blog';
import type { BlogPost } from '../data/blog';

export const Blog: React.FC = () => {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  // First post is featured
  const featuredPost = blogPosts[0];
  const listPosts = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-32 pb-24 px-6 md:px-12 relative">
      {/* Background Soft Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-blue-900/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-accent-blue-950/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="flex flex-col gap-3 mb-16">
          <span className="text-[10px] tracking-[0.4em] uppercase text-accent-blue-400 font-semibold">
            Travel Stories
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold leading-tight">
            The Explorer <span className="blue-gradient-text">Blog</span>
          </h1>
          <p className="text-gray-400 font-light text-sm max-w-xl leading-relaxed">
            Read articles, travel tips, and stories written by our expedition guides.
          </p>
        </div>

        {/* FEATURED PUBLICATION */}
        {featuredPost && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            onClick={() => setActivePost(featuredPost)}
            className="glass-panel rounded-3xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 border border-accent-blue-500/10 cursor-pointer group mb-12 shadow-2xl"
          >
            {/* Cover image */}
            <div className="lg:col-span-7 relative h-[300px] lg:h-auto min-h-[300px] overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 brightness-[0.7] group-hover:brightness-[0.6]"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-dark-bg via-transparent to-transparent" />
              <span className="absolute top-6 left-6 px-3.5 py-1 text-[9px] uppercase tracking-wider text-accent-blue-300 font-bold bg-accent-blue-950/70 border border-accent-blue-500/30 rounded-full backdrop-blur-md">
                Featured Story
              </span>
            </div>

            {/* Description details */}
            <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center gap-4 relative z-10 font-sans">
              <div className="flex items-center gap-4 text-[10px] text-gray-500 font-light font-sans">
                <span className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-accent-blue-500/40" />
                  {featuredPost.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-accent-blue-500/40" />
                  {featuredPost.readTime}
                </span>
              </div>

              <h2 className="font-serif text-2xl md:text-3xl text-white group-hover:text-accent-blue-300 transition-colors leading-tight">
                {featuredPost.title}
              </h2>
              <p className="text-gray-400 font-light text-sm leading-relaxed line-clamp-3">
                {featuredPost.excerpt}
              </p>

              {/* Author details */}
              <div className="flex items-center justify-between pt-6 border-t border-accent-blue-500/10 mt-2">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-accent-blue-500/20"
                  />
                  <div className="text-left font-sans">
                    <h4 className="text-xs font-semibold text-white leading-none">{featuredPost.author.name}</h4>
                    <span className="text-[9px] text-gray-500 font-light font-sans block mt-0.5">{featuredPost.author.role}</span>
                  </div>
                </div>
                
                <div className="text-xs font-semibold uppercase tracking-wider text-accent-blue-400 group-hover:text-accent-blue-300 transition-colors flex items-center gap-1">
                  Explore Dispatch
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* SECONDARY LISTING GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {listPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setActivePost(post)}
              className="glass-panel rounded-3xl overflow-hidden flex flex-col h-full border border-accent-blue-500/10 cursor-pointer group shadow-lg"
            >
              {/* Cover Image */}
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700 brightness-[0.75] group-hover:brightness-[0.65]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-transparent to-transparent" />
                
                {/* Tag pill */}
                <div className="absolute top-4 left-4 flex gap-1.5">
                  {post.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="px-2.5 py-0.5 text-[9px] uppercase tracking-wider text-accent-blue-300 font-bold bg-black/60 backdrop-blur-sm border border-accent-blue-500/10 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description Content */}
              <div className="p-6 md:p-8 flex flex-col justify-between flex-grow gap-4 font-sans">
                <div className="flex flex-col gap-2.5">
                  <div className="flex items-center gap-4 text-[10px] text-gray-500 font-light">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-accent-blue-500/30" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-accent-blue-500/30" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl text-white group-hover:text-accent-blue-300 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 font-light text-xs md:text-sm leading-relaxed mt-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center justify-between pt-6 border-t border-accent-blue-500/10 mt-auto">
                  <div className="flex items-center gap-2.5">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-accent-blue-500/20"
                    />
                    <div className="text-left font-sans leading-none">
                      <h4 className="text-[11px] font-semibold text-white leading-none">{post.author.name}</h4>
                      <span className="text-[8px] text-gray-500 font-light block mt-0.5">{post.author.role}</span>
                    </div>
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-wider text-accent-blue-400 group-hover:text-accent-blue-200 transition-colors flex items-center gap-0.5">
                    Explore Dispatch
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* DETAILED ARTICLE READING VIEW */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8 overflow-y-auto"
          >
            <motion.article
              initial={{ scale: 0.95, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="bg-[#040914] border border-accent-blue-500/20 max-w-3xl w-full rounded-3xl overflow-hidden shadow-2xl relative max-h-[90vh] flex flex-col font-sans"
            >
              {/* Close Button */}
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/10 text-white hover:text-accent-blue-400 flex items-center justify-center backdrop-blur-md transition-colors cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable text container */}
              <div className="overflow-y-auto flex-grow p-6 md:p-12">
                {/* Tag badge & Read time indicators */}
                <div className="flex flex-wrap gap-2 mb-4 mt-4 text-[10px] font-sans">
                  {activePost.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-0.5 rounded bg-accent-blue-950/40 border border-accent-blue-500/20 text-accent-blue-300 uppercase font-semibold">
                      {tag}
                    </span>
                  ))}
                  <span className="text-gray-500 px-1 py-0.5 flex items-center gap-1 font-light ml-auto">
                    <Clock className="w-3.5 h-3.5 text-accent-blue-500/40" />
                    {activePost.readTime}
                  </span>
                </div>

                {/* Main Article Title */}
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                  {activePost.title}
                </h1>

                {/* Author card row */}
                <div className="flex items-center gap-3 border-y border-accent-blue-500/10 py-4 mb-8 text-xs font-sans text-gray-400">
                  <img
                    src={activePost.author.avatar}
                    alt={activePost.author.name}
                    className="w-10 h-10 rounded-full object-cover border border-accent-blue-500/20"
                  />
                  <div className="flex flex-col">
                    <span className="font-semibold text-white">{activePost.author.name}</span>
                    <span className="text-[10px] font-light">{activePost.author.role}</span>
                  </div>
                  <span className="ml-auto text-gray-500 font-light flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-accent-blue-500/40" />
                    {activePost.date}
                  </span>
                </div>

                {/* Visual Banner cover */}
                <div className="rounded-2xl overflow-hidden border border-white/5 aspect-[16/9] mb-8">
                  <img
                    src={activePost.image}
                    alt={activePost.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Body Content */}
                <div className="font-sans text-gray-300 font-light text-sm md:text-base leading-relaxed space-y-6">
                  <p className="font-serif text-lg text-accent-blue-200 italic pl-4 border-l-2 border-accent-blue-500/30 mb-8 py-1 leading-relaxed">
                    "{activePost.excerpt}"
                  </p>
                  
                  {/* Split paragraphs manually for beautiful editorial spacing */}
                  {activePost.content.split('\n\n').map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                  
                  <p>
                    All our trips are planned to protect the environment. We encourage travelers to read the destination guides and pack the right gear before going.
                  </p>
                </div>

                {/* Subfooter */}
                <div className="flex justify-between items-center pt-8 border-t border-accent-blue-500/10 mt-12">
                  <span className="text-[10px] tracking-wider text-gray-500 uppercase flex items-center gap-1 font-sans">
                    <CornerDownRight className="w-3.5 h-3.5 text-accent-blue-500/40" />
                    End of Dispatch
                  </span>
                  <button className="flex items-center gap-1.5 text-xs font-semibold text-accent-blue-400 hover:text-accent-blue-300 font-sans cursor-pointer">
                    <Share2 className="w-4 h-4" />
                    Share Dispatch
                  </button>
                </div>
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
