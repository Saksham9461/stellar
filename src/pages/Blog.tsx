import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Calendar, Clock } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import SectionTitle from '../components/SectionTitle';
import AnimatedCard from '../components/AnimatedCard';
import Badge from '../components/Badge';
import Button from '../components/Button';

export const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Engineering', 'Artificial Intelligence', 'Architecture'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesCategory =
      selectedCategory === 'All' || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const featuredPost = BLOG_POSTS[0];
  const regularPosts = filteredPosts.filter(p => p.slug !== featuredPost.slug);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-16 text-left">
      {/* 1. Header */}
      <section className="relative pt-6 flex flex-col gap-8">
        <div className="absolute -top-10 left-1/4 w-80 h-80 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />
        <SectionTitle
          badge="Antview Insights"
          title="Engineering & Architecture Publications"
          description="Read logs compiled by our frontend architects and backend engineers detailing scaling pipelines and coding guidelines."
          align="left"
        />

        {/* Search & Category Filter Row */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center border-b border-black/5 dark:border-white/5 pb-6">
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold font-display transition-colors cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-accent-blue/10 text-accent-blue dark:text-accent-cyan border border-accent-blue/30 dark:border-accent-cyan/30'
                    : 'text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-80">
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white/40 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:border-accent-blue transition-colors shadow-sm"
            />
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-3 top-2.5" />
          </div>
        </div>
      </section>

      {/* 2. Featured Post Banner */}
      {selectedCategory === 'All' && searchQuery === '' && featuredPost && (
        <section className="w-full">
          <Link to={`/blog/${featuredPost.slug}`} className="group block">
            <AnimatedCard className="flex flex-col lg:flex-row gap-8 items-stretch p-0 overflow-hidden bg-transparent dark:bg-transparent">
              <div className="w-full lg:w-6/12 min-h-[300px] relative overflow-hidden bg-gray-900">
                <img
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-750 group-hover:scale-102"
                />
                <div className="absolute top-4 left-4 z-20">
                  <Badge variant="blue">Featured Article</Badge>
                </div>
              </div>
              <div className="w-full lg:w-6/12 p-8 flex flex-col justify-between">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 text-xs text-gray-500 dark:text-gray-400 font-semibold font-display">
                    <span className="text-accent-purple">{featuredPost.category}</span>
                    <span>&middot;</span>
                    <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {featuredPost.publishedAt}</span>
                    <span>&middot;</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {featuredPost.readTime}</span>
                  </div>
                  <h3 className="font-display font-extrabold text-2xl md:text-3xl text-gray-900 dark:text-white tracking-tight leading-tight group-hover:text-accent-blue transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-black/5 dark:border-white/5 mt-6">
                  {/* Author profile */}
                  <div className="flex items-center gap-2.5">
                    <img
                      src={featuredPost.author.avatarUrl}
                      alt={featuredPost.author.name}
                      className="w-8 h-8 rounded-full object-cover border border-black/10 dark:border-white/10"
                    />
                    <div>
                      <div className="text-xs font-bold text-gray-900 dark:text-white leading-none">{featuredPost.author.name}</div>
                      <div className="text-[10px] text-gray-400 mt-0.5">{featuredPost.author.role}</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-accent-blue group-hover:text-accent-cyan transition-colors">
                    <span>Read Article</span>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </AnimatedCard>
          </Link>
        </section>
      )}

      {/* 3. Regular Posts Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {regularPosts.length > 0 ? (
          regularPosts.map((post, i) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group block h-full">
              <AnimatedCard delay={i * 0.05} className="flex flex-col justify-between h-full p-0 overflow-hidden text-left bg-transparent dark:bg-transparent">
                <div className="w-full aspect-[16/10] relative overflow-hidden bg-gray-900">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <Badge variant="gray" className="py-0.5 px-2 bg-black/50 text-white border-white/20">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between gap-5">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2.5 text-[10px] text-gray-400 font-semibold font-display">
                      <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.publishedAt}</span>
                      <span>&middot;</span>
                      <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
                    </div>
                    <h4 className="font-display font-bold text-lg text-gray-900 dark:text-white leading-tight group-hover:text-accent-blue transition-colors">
                      {post.title}
                    </h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-black/5 dark:border-white/5 mt-auto">
                    <div className="flex items-center gap-2">
                      <img
                        src={post.author.avatarUrl}
                        alt={post.author.name}
                        className="w-7 h-7 rounded-full object-cover border border-black/10 dark:border-white/10"
                      />
                      <span className="text-[10px] font-bold text-gray-900 dark:text-white leading-none">{post.author.name}</span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-accent-blue group-hover:text-accent-cyan transition-colors">
                      <span>Read Post</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </AnimatedCard>
            </Link>
          ))
        ) : (
          <div className="col-span-full text-center py-20 border border-dashed border-black/10 dark:border-white/10 rounded-2xl p-6">
            <p className="text-gray-400 text-sm">No articles found matching your criteria.</p>
            <Button onClick={() => { setSearchQuery(''); setSelectedCategory('All'); }} variant="secondary" className="mt-4">
              Clear Filters
            </Button>
          </div>
        )}
      </section>
    </div>
  );
};

export default Blog;
