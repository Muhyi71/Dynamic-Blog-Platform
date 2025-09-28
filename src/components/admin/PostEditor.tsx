import { useState, useEffect } from 'react';
import { Save, X, Upload, Eye, EyeOff } from 'lucide-react';
import type { BlogPost } from '../../types/blog';
import { BlogService } from '../../services/blogService';
import { generateSlug } from '../../utils/slug';
import { MarkdownRenderer } from '../MarkdownRenderer';

interface PostEditorProps {
  post?: BlogPost | null;
  onSave: () => void;
  onCancel: () => void;
}

export function PostEditor({ post, onSave, onCancel }: PostEditorProps) {
  const [title, setTitle] = useState(post?.title || '');
  const [slug, setSlug] = useState(post?.slug || '');
  const [content, setContent] = useState(post?.content || '');
  const [excerpt, setExcerpt] = useState(post?.excerpt || '');
  const [tags, setTags] = useState(post?.tags?.join(', ') || '');
  const [featuredImage, setFeaturedImage] = useState(post?.featured_image || '');
  const [isPublished, setIsPublished] = useState(post?.is_published || false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [showPreview, setShowPreview] = useState(false);

  const isEditing = !!post;

  useEffect(() => {
    if (!isEditing && title && !slug) {
      setSlug(generateSlug(title));
    }
  }, [title, isEditing, slug]);

  const handleSave = async () => {
    try {
      setSaving(true);
      setError('');

      if (!title.trim() || !content.trim() || !excerpt.trim()) {
        setError('Title, content, and excerpt are required');
        return;
      }

      const postData = {
        title: title.trim(),
        slug: slug.trim() || generateSlug(title),
        content: content.trim(),
        excerpt: excerpt.trim(),
        tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag),
        featured_image: featuredImage.trim() || null,
        is_published: isPublished,
        published_at: isPublished ? new Date().toISOString() : null,
      };

      if (isEditing) {
        await BlogService.updatePost(post.id, postData);
      } else {
        await BlogService.createPost(postData);
      }

      onSave();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save post');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-3xl font-bold text-gray-900">
            {isEditing ? 'Edit Post' : 'Create New Post'}
          </h1>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="flex items-center gap-2 px-6 py-3 glass-button rounded-2xl hover:bg-white/30 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
            >
              {showPreview ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              {showPreview ? 'Hide Preview' : 'Show Preview'}
            </button>

            <button
              onClick={onCancel}
              className="flex items-center gap-2 px-6 py-3 glass-button rounded-2xl hover:bg-white/30 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
            >
              <X className="w-5 h-5" />
              Cancel
            </button>

            <button
              onClick={handleSave}
              disabled={saving}
              className="flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl hover:from-violet-700 hover:to-purple-700 disabled:opacity-50 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl hover:scale-105"
            >
              <Save className="w-5 h-5" />
              {saving ? 'Saving...' : 'Save Post'}
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
            {error}
          </div>
        )}
      </div>

      <div className={`grid gap-8 ${showPreview ? 'lg:grid-cols-2' : 'grid-cols-1'}`}>
        {/* Editor */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title *
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-6 py-4 border border-white/30 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white/60 backdrop-blur-sm font-semibold text-lg"
              placeholder="Enter post title"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Slug
            </label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full px-6 py-4 border border-white/30 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white/60 backdrop-blur-sm font-medium"
              placeholder="post-url-slug"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Excerpt *
            </label>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              rows={3}
              className="w-full px-6 py-4 border border-white/30 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent resize-none bg-white/60 backdrop-blur-sm font-medium"
              placeholder="Brief description of the post"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Featured Image URL
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                value={featuredImage}
                onChange={(e) => setFeaturedImage(e.target.value)}
                className="flex-1 px-6 py-4 border border-white/30 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white/60 backdrop-blur-sm font-medium"
                placeholder="https://example.com/image.jpg"
              />
              <button className="flex items-center gap-2 px-6 py-4 glass-button rounded-2xl hover:bg-white/30 transition-all duration-300 font-semibold shadow-lg">
                <Upload className="w-5 h-5" />
                Upload
              </button>
            </div>
            {featuredImage && (
              <div className="mt-3">
                <img
                  src={featuredImage}
                  alt="Featured image preview"
                  className="w-full max-w-sm h-40 object-cover rounded-2xl shadow-lg"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Tags
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-6 py-4 border border-white/30 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent bg-white/60 backdrop-blur-sm font-medium"
              placeholder="tag1, tag2, tag3"
            />
            <p className="text-base text-gray-500 mt-2 font-medium">Separate tags with commas</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Content * (Markdown supported)
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={20}
              className="w-full px-6 py-4 border border-white/30 rounded-2xl focus:ring-2 focus:ring-violet-500 focus:border-transparent font-mono text-base bg-white/60 backdrop-blur-sm"
              placeholder="Write your post content in Markdown..."
            />
          </div>

          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="is-published"
              checked={isPublished}
              onChange={(e) => setIsPublished(e.target.checked)}
              className="w-5 h-5 text-violet-600 rounded focus:ring-violet-500"
            />
            <label htmlFor="is-published" className="text-base font-semibold text-gray-700">
              Publish immediately
            </label>
          </div>
        </div>

        {/* Preview */}
        {showPreview && (
          <div className="glass-card rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Preview</h3>
            
            {featuredImage && (
              <div className="aspect-video overflow-hidden rounded-2xl mb-8 shadow-lg">
                <img
                  src={featuredImage}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <h1 className="text-4xl font-display font-bold text-gradient mb-6">{title || 'Untitled Post'}</h1>
            
            {excerpt && (
              <p className="text-2xl text-gray-600 mb-8 font-medium">{excerpt}</p>
            )}

            {tags && (
              <div className="flex items-center gap-3 flex-wrap mb-8">
                {tags.split(',').map((tag, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-violet-100 to-purple-100 text-violet-700 rounded-full text-base font-semibold border border-violet-200"
                  >
                    {tag.trim()}
                  </span>
                ))}
              </div>
            )}

            <div className="border-t border-gray-200 pt-8">
              <MarkdownRenderer content={content || 'No content yet...'} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}