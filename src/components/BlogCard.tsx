import React from 'react';
import { Clock, Calendar, Tag } from 'lucide-react';
import type { BlogPost } from '../types/blog';
import { formatDate, formatReadingTime } from '../utils/slug';

interface BlogCardProps {
  post: BlogPost;
  onClick: () => void;
}

export function BlogCard({ post, onClick }: BlogCardProps) {
  return (
    <article 
      onClick={onClick}
      className="group glass-card rounded-3xl hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-700 cursor-pointer overflow-hidden hover:-translate-y-3 hover:scale-[1.03] animate-glow"
    >
      {post.featured_image && (
        <div className="aspect-[16/10] overflow-hidden relative">
          <img
            src={post.featured_image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-violet-900/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      )}
      
      <div className="p-8 relative">
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          {post.published_at && (
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-violet-500" />
              <time dateTime={post.published_at}>
                {formatDate(post.published_at)}
              </time>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-purple-500" />
            <span>{formatReadingTime(post.content)}</span>
          </div>
        </div>

        <h2 className="text-2xl font-display font-bold text-gray-900 group-hover:text-gradient transition-all duration-500 mb-4 line-clamp-2 leading-tight">
          {post.title}
        </h2>

        <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed text-base font-medium">
          {post.excerpt}
        </p>

        {post.tags && post.tags.length > 0 && (
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="w-4 h-4 text-violet-400" />
            {post.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-4 py-2 rounded-full text-xs font-semibold bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 hover:from-violet-200 hover:to-purple-200 transition-all duration-300 border border-violet-200/50"
              >
                {tag}
              </span>
            ))}
            {post.tags.length > 3 && (
              <span className="text-xs text-gray-400 font-medium">
                +{post.tags.length - 3} more
              </span>
            )}
          </div>
        )}
      </div>
    </article>
  );
}