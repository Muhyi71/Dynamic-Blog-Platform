import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { BlogCard } from './components/BlogCard';
import { BlogDetail } from './components/BlogDetail';
import SearchFilters from './components/SearchFilters';
import { Pagination } from './components/Pagination';
import { LoadingSpinner } from './components/LoadingSpinner';
import { AdminPanel } from './components/admin/AdminPanel';
import { BlogService } from './services/blogService';
import type { BlogPost, BlogSearchParams } from './types/blog';

type AppView = 'home' | 'post' | 'admin';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [currentPost, setCurrentPost] = useState<BlogPost | null>(null);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [searchParams, setSearchParams] = useState<BlogSearchParams>({
    search: '',
    tag: '',
    page: 1,
    limit: 6,
  });
  const [pagination, setPagination] = useState({
    total: 0,
    totalPages: 0,
  });

  useEffect(() => {
    loadPosts();
  }, [searchParams]);

  const loadPosts = async () => {
    try {
      setLoading(true);
      setError('');
      const response = await BlogService.getPosts(searchParams);
      setPosts(response.data);
      setPagination({
        total: response.total,
        totalPages: response.totalPages,
      });
    } catch (err) {
      setError('Failed to load posts. Please try again later.');
      console.error('Error loading posts:', err);
    } finally {
      setLoading(false);
    }
  };

  const handlePostClick = async (post: BlogPost) => {
    try {
      // Fetch the full post content
      const fullPost = await BlogService.getPostBySlug(post.slug);
      if (fullPost) {
        setCurrentPost(fullPost);
        setCurrentView('post');
      }
    } catch (err) {
      setError('Failed to load post details.');
      console.error('Error loading post:', err);
    }
  };

  const handleSearch = (search: string) => {
    setSearchParams(prev => ({ ...prev, search, page: 1 }));
  };

  const handleTagFilter = (tag: string) => {
    setSearchParams(prev => ({ ...prev, tag, page: 1 }));
  };

  const handlePageChange = (page: number) => {
    setSearchParams(prev => ({ ...prev, page }));
  };

  const renderContent = () => {
    switch (currentView) {
      case 'post':
        return currentPost ? (
          <BlogDetail
            post={currentPost}
            onBack={() => setCurrentView('home')}
          />
        ) : null;

      case 'admin':
        return <AdminPanel onBack={() => setCurrentView('home')} />;

      default:
        return (
          <>
            <SearchFilters
              onSearch={handleSearch}
              onTagFilter={handleTagFilter}
              currentSearch={searchParams.search || ''}
              currentTag={searchParams.tag || ''}
            />

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-8">
                {error}
              </div>
            )}

            {loading ? (
              <LoadingSpinner className="py-12" />
            ) : (
              <>
                {posts.length > 0 ? (
                  <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                      {posts.map((post) => (
                        <BlogCard
                          key={post.id}
                          post={post}
                          onClick={() => handlePostClick(post)}
                        />
                      ))}
                    </div>

                    <Pagination
                      currentPage={searchParams.page || 1}
                      totalPages={pagination.totalPages}
                      onPageChange={handlePageChange}
                    />
                  </>
                ) : (
                  <div className="text-center py-12">
                    <p className="text-gray-600 text-lg mb-4">
                      {searchParams.search || searchParams.tag
                        ? 'No posts found matching your criteria.'
                        : 'No posts available yet.'}
                    </p>
                    {(searchParams.search || searchParams.tag) && (
                      <button
                        onClick={() => setSearchParams({ page: 1, limit: 6 })}
                        className="text-blue-600 hover:text-blue-800 font-medium"
                      >
                        Clear filters
                      </button>
                    )}
                  </div>
                )}
              </>
            )}
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-violet-400/20 to-purple-400/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <Header 
        onAdminClick={() => setCurrentView('admin')}
        showAdminButton={currentView !== 'admin'}
      />

      <main className="relative max-w-7xl mx-auto px-6 py-12">
        {renderContent()}
      </main>

      <footer className="relative bg-gradient-to-r from-violet-900 via-purple-900 to-indigo-900 border-t border-white/10 mt-20">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/10 via-purple-600/10 to-indigo-600/10 backdrop-blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="text-center text-white/90">
            <p className="text-lg font-medium">&copy; 2024 ThoughtSphere. Crafted with passion using React, TypeScript, and Supabase.</p>
            <p className="mt-3 text-base opacity-80">
              Empowering writers and readers through beautiful storytelling and seamless content management.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;