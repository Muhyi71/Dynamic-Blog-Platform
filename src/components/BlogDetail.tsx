import React from 'react';
import { ArrowLeft, Calendar, Clock, Tag, Share2 } from 'lucide-react';
import type { BlogPost } from '../types/blog';
import { formatDate, formatReadingTime } from '../utils/slug';
import { MarkdownRenderer } from './MarkdownRenderer';

interface BlogDetailProps {
  post: BlogPost;
  onBack: () => void;
}

export function BlogDetail({ post, onBack }: BlogDetailProps) {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        });
      } catch (error) {
        // Fallback to clipboard
        copyToClipboard();
      }
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    // You could add a toast notification here
  };

  return (
    <article className="max-w-5xl mx-auto">
      {/* Header */}
      <div className="mb-12">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-3 text-gray-600 hover:text-violet-600 transition-colors mb-8 group font-semibold text-lg"
        >
          <ArrowLeft className="w-6 h-6 group-hover:-translate-x-2 transition-transform duration-300" />
          Back to posts
        </button>

        {post.featured_image && (
          <div className="aspect-[16/9] rounded-3xl overflow-hidden mb-12 shadow-2xl shadow-purple-500/20 ring-1 ring-white/20">
            <img
              src={post.featured_image}
              alt={post.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </div>
        )}

        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-6 text-base text-gray-500">
            {post.published_at && (
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5 text-violet-500" />
                <time dateTime={post.published_at}>
                  {formatDate(post.published_at)}
                </time>
              </div>
            )}
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-purple-500" />
              <span>{formatReadingTime(post.content)}</span>
            </div>
          </div>

          <button
            onClick={handleShare}
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-100 to-purple-100 hover:from-violet-200 hover:to-purple-200 rounded-2xl transition-all duration-300 font-semibold text-violet-700 shadow-lg hover:shadow-xl hover:scale-105"
          >
            <Share2 className="w-5 h-5" />
            Share
          </button>
        </div>

        <h1 className="text-5xl md:text-6xl font-display font-bold text-gray-900 leading-tight mb-6 text-gradient">
          {post.title}
        </h1>

        <p className="text-2xl text-gray-600 leading-relaxed mb-10 font-medium">
          {post.excerpt}
        </p>

        {post.tags && post.tags.length > 0 && (
          <div className="flex items-center gap-3 flex-wrap">
            <Tag className="w-6 h-6 text-violet-400" />
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-6 py-3 rounded-full text-base font-semibold bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 border border-violet-200 hover:from-violet-200 hover:to-purple-200 transition-all duration-300"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="border-t border-gray-200 pt-12">
        <MarkdownRenderer 
          content={post.content}
          className="text-gray-800 leading-relaxed text-lg"
        />
      </div>

      {/* Footer */}
      <div className="border-t border-gray-200 pt-10 mt-16">
        <div className="flex items-center justify-between">
          <div className="text-base text-gray-500 font-medium">
            Last updated: {formatDate(post.updated_at)}
          </div>
          <button
            onClick={handleShare}
            className="text-violet-600 hover:text-violet-800 font-semibold transition-colors text-lg"
          >
            Share this post
          </button>
        </div>
      </div>
    </article>
  );
}