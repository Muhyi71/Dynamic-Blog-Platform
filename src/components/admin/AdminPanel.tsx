import { useState, useEffect } from 'react';
import { ArrowLeft, Plus, CreditCard as Edit3, Trash2, Eye, EyeOff } from 'lucide-react';
import type { BlogPost } from '../../types/blog';
import { BlogService } from '../../services/blogService';
import { LoadingSpinner } from '../LoadingSpinner';
import { PostEditor } from './PostEditor';
import { formatDate } from '../../utils/slug';

interface AdminPanelProps {
  onBack: () => void;
}

export function AdminPanel({ onBack }: AdminPanelProps) {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null);
  const [creatingPost, setCreatingPost] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    try {
      setLoading(true);
      const data = await BlogService.getAllPosts();
      setPosts(data);
    } catch (err) {
      setError('Failed to load posts');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleDeletePost = async (id: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      await BlogService.deletePost(id);
      setPosts(posts.filter(p => p.id !== id));
    } catch (err) {
      setError('Failed to delete post');
      console.error(err);
    }
  };

  const handleTogglePublish = async (post: BlogPost) => {
    try {
      const updatedPost = await BlogService.updatePost(post.id, {
        is_published: !post.is_published,
        published_at: !post.is_published ? new Date().toISOString() : null,
      });
      setPosts(posts.map(p => p.id === post.id ? updatedPost : p));
    } catch (err) {
      setError('Failed to update post');
      console.error(err);
    }
  };

  const handlePostSaved = () => {
    setEditingPost(null);
    setCreatingPost(false);
    loadPosts();
  };

  if (editingPost || creatingPost) {
    return (
      <PostEditor
        post={editingPost}
        onSave={handlePostSaved}
        onCancel={() => {
          setEditingPost(null);
          setCreatingPost(false);
        }}
      />
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-8">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors mb-4 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to blog
        </button>

        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
            <p className="text-gray-600 mt-2">Manage your blog posts</p>
          </div>

          <button
            onClick={() => setCreatingPost(true)}
            className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-violet-600 to-purple-600 text-white rounded-2xl hover:from-violet-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl font-semibold text-lg hover:scale-105"
          >
            <Plus className="w-6 h-6" />
            New Post
          </button>
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6">
          {error}
        </div>
      )}

      {loading ? (
        <LoadingSpinner className="py-12" />
      ) : (
        <div className="glass-card rounded-3xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-violet-50 to-purple-50 border-b border-white/20">
                <tr>
                  <th className="text-left py-6 px-8 font-bold text-gray-900 text-lg">Title</th>
                  <th className="text-left py-6 px-8 font-bold text-gray-900 text-lg">Status</th>
                  <th className="text-left py-6 px-8 font-bold text-gray-900 text-lg">Published</th>
                  <th className="text-left py-6 px-8 font-bold text-gray-900 text-lg">Updated</th>
                  <th className="text-right py-6 px-8 font-bold text-gray-900 text-lg">Actions</th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id} className="border-b border-white/10 hover:bg-violet-50/50 transition-all duration-300">
                    <td className="py-6 px-8">
                      <div>
                        <h3 className="font-bold text-gray-900 line-clamp-1 text-xl">{post.title}</h3>
                        <p className="text-base text-gray-600 line-clamp-1 mt-2 font-medium">{post.excerpt}</p>
                      </div>
                    </td>
                    <td className="py-6 px-8">
                      <span
                        className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold ${
                          post.is_published
                            ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200'
                            : 'bg-gradient-to-r from-yellow-100 to-orange-100 text-yellow-800 border border-yellow-200'
                        }`}
                      >
                        {post.is_published ? 'Published' : 'Draft'}
                      </span>
                    </td>
                    <td className="py-6 px-8 text-base text-gray-600 font-medium">
                      {post.published_at ? formatDate(post.published_at) : 'Not published'}
                    </td>
                    <td className="py-6 px-8 text-base text-gray-600 font-medium">
                      {formatDate(post.updated_at)}
                    </td>
                    <td className="py-6 px-8">
                      <div className="flex items-center justify-end gap-3">
                        <button
                          onClick={() => handleTogglePublish(post)}
                          className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                            post.is_published
                              ? 'text-yellow-600 hover:bg-yellow-50 shadow-lg'
                              : 'text-green-600 hover:bg-green-50 shadow-lg'
                          }`}
                          title={post.is_published ? 'Unpublish' : 'Publish'}
                        >
                          {post.is_published ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                        </button>
                        <button
                          onClick={() => setEditingPost(post)}
                          className="p-3 text-violet-600 hover:bg-violet-50 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg"
                          title="Edit"
                        >
                          <Edit3 className="w-5 h-5" />
                        </button>
                        <button
                          onClick={() => handleDeletePost(post.id)}
                          className="p-3 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-300 hover:scale-110 shadow-lg"
                          title="Delete"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {posts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-600 text-xl font-medium">No posts found. Create your first post to get started!</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}