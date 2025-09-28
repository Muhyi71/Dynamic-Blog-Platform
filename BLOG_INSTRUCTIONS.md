# ThoughtSphere Blog Application

A fully functional blog application built with React, TypeScript, and Tailwind CSS. Features sample blog posts and a complete admin panel for content management.

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   - Navigate to `http://localhost:5174/` (or the port shown in terminal)

## ✨ Features

### Public Features
- **Browse Articles**: View all published blog posts
- **Search & Filter**: Search by title/content and filter by tags
- **Responsive Design**: Beautiful UI that works on all devices
- **Markdown Support**: Rich content rendering with syntax highlighting
- **Sample Content**: 6 pre-loaded sample blog posts covering:
  - React & TypeScript
  - CSS Grid vs Flexbox
  - Node.js APIs
  - React State Management
  - Database Design
  - Machine Learning

### Admin Features
- **Admin Panel**: Access via the "Admin" button in the header
- **Create Posts**: Add new blog articles with full markdown support
- **Edit Posts**: Modify existing posts
- **Publish/Unpublish**: Control post visibility
- **Delete Posts**: Remove posts (with confirmation)
- **Live Preview**: See how posts will look while editing
- **Image Support**: Add featured images to posts
- **Tag Management**: Organize posts with tags

## 📝 How to Use

### Viewing Posts
1. Browse the homepage to see all published posts
2. Click on any post card to read the full article
3. Use the search bar to find specific content
4. Filter by tags using the tag input field
5. Navigate between pages using pagination

### Creating New Posts
1. Click the "Admin" button in the header
2. Click "New Post" in the admin panel
3. Fill in the post details:
   - **Title**: The post headline
   - **Slug**: URL-friendly version (auto-generated from title)
   - **Excerpt**: Brief description for post cards
   - **Content**: Full article in Markdown format
   - **Tags**: Comma-separated tags for organization
   - **Featured Image**: URL to header image
   - **Publish**: Toggle to make post visible immediately
4. Use "Show Preview" to see how the post will look
5. Click "Save Post" to create the article

### Managing Existing Posts
1. In the admin panel, you'll see all posts (published and drafts)
2. Use the action buttons for each post:
   - **Eye/Eye-off**: Publish or unpublish posts
   - **Edit**: Modify post content
   - **Trash**: Delete posts (with confirmation)

## 📋 Markdown Support

The blog supports full Markdown syntax including:

- **Headers**: `# ## ###` for different heading levels
- **Bold**: `**bold text**`
- **Italic**: `*italic text*`
- **Links**: `[text](url)`
- **Images**: `![alt text](url)`
- **Code**: `` `inline code` `` and ``` for code blocks
- **Lists**: `- item` for bullets, `1. item` for numbers
- **Blockquotes**: `> quoted text`

## 🎨 Sample Content

The application comes with 6 sample blog posts:
1. Getting Started with React and TypeScript
2. Modern CSS: Grid vs Flexbox
3. Building RESTful APIs with Node.js
4. State Management in React: Redux vs Context API
5. Database Design Best Practices
6. Introduction to Machine Learning

## 🔧 Technical Details

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom components
- **Markdown**: Marked.js for parsing, DOMPurify for sanitization
- **Icons**: Lucide React
- **Fonts**: Inter (body) + Playfair Display (headings)
- **Build Tool**: Vite

## 📦 Data Storage

Currently uses in-memory storage with sample data. To connect to a real database:
1. Update `src/services/blogService.ts`
2. Replace `MockBlogService` with your preferred backend
3. The existing Supabase setup can be uncommented and configured

## 🎯 Next Steps

- Connect to a real database (Supabase setup already included)
- Add user authentication for admin access
- Implement file upload for images
- Add comments system
- Include analytics and SEO optimization

---

**Happy Blogging!** 🎉