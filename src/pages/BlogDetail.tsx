import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Twitter, Linkedin, Copy, Check } from 'lucide-react';
import { BLOG_POSTS } from '../constants';
import Badge from '../components/Badge';
import Button from '../components/Button';

export const BlogDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = React.useState(false);

  const post = BLOG_POSTS.find((p) => p.slug === slug);

  // Reset scroll to top upon loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h2 className="font-display font-extrabold text-3xl text-gray-900 dark:text-white mb-4">
          Publication Not Found
        </h2>
        <p className="text-gray-400 text-sm mb-6">
          The requested article does not exist or has been removed from our index.
        </p>
        <Button to="/blog" variant="secondary">
          Return to Publications
        </Button>
      </div>
    );
  }

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col gap-12 text-left">
      {/* 1. Back link */}
      <div>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-accent-blue transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Insights Blog</span>
        </Link>
      </div>

      {/* 2. Headline & Metadata */}
      <section className="flex flex-col gap-5">
        <Badge variant="blue" className="w-fit">{post.category}</Badge>
        <h1 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-gray-900 dark:text-white tracking-tight leading-tight">
          {post.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 dark:text-gray-400 font-semibold border-b border-black/5 dark:border-white/5 pb-6">
          {/* Author profile card info */}
          <div className="flex items-center gap-2.5">
            <img
              src={post.author.avatarUrl}
              alt={post.author.name}
              className="w-9 h-9 rounded-full object-cover border border-black/10 dark:border-white/10"
            />
            <div>
              <div className="font-bold text-gray-900 dark:text-white">{post.author.name}</div>
              <div className="text-[10px] text-gray-400 mt-0.5">{post.author.role}</div>
            </div>
          </div>
          <span className="hidden sm:inline">&middot;</span>
          <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" /> {post.publishedAt}</span>
          <span>&middot;</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readTime}</span>
        </div>
      </section>

      {/* 3. Hero post image */}
      <div className="w-full aspect-[21/10] rounded-3xl overflow-hidden bg-gray-900 shadow-xl">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* 4. Article Layout with floating sharing tools */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Sharing tools column */}
        <div className="lg:col-span-1 flex lg:flex-col gap-3 justify-start items-center">
          <button
            onClick={handleCopyLink}
            className="p-2.5 rounded-xl border border-black/5 dark:border-white/10 hover:border-accent-blue text-gray-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Copy link to clipboard"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
          </button>
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-black/5 dark:border-white/10 hover:border-accent-cyan text-gray-400 hover:text-white transition-colors"
            aria-label="Share on Twitter"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-xl border border-black/5 dark:border-white/10 hover:border-accent-purple text-gray-400 hover:text-white transition-colors"
            aria-label="Share on LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Content body layout */}
        <div className="lg:col-span-11 flex flex-col gap-6 text-gray-600 dark:text-gray-300 text-sm md:text-base leading-relaxed font-sans">
          <p className="font-semibold text-gray-800 dark:text-white text-base md:text-lg">
            {post.excerpt}
          </p>
          <p>
            {post.content}
          </p>
          <p>
            At Antview Technologies, our development workflow enforces strict code review phases, where senior React architects audit render trees and component side effects before deploy steps. By integrating preloader setups and optimizing layout shifts, we score perfect 100 ratings in SEO, best practices, and performance audit lists.
          </p>
          <p>
            For organizations deploying customized vectors or high-volume API endpoints, we recommend wrapping endpoints with event-driven message brokers like Kafka and caching responses on Redis clusters. This mitigates database latency overheads, keeping application load speeds consistently under 100ms globally.
          </p>
        </div>
      </section>

      {/* 5. Return and Newsletter footer CTA */}
      <section className="border-t border-black/5 dark:border-white/5 pt-12 mt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold text-accent-blue hover:text-accent-cyan transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to publications list</span>
        </Link>

        <div className="flex gap-4">
          <Button to="/contact" variant="primary">
            Schedule Scoping Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default BlogDetail;
