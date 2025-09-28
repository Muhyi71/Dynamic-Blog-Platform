import { marked } from 'marked';
import DOMPurify from 'dompurify';

interface MarkdownRendererProps {
  content: string;
  className?: string;
}

// Configure marked options
marked.setOptions({
  breaks: true,
  gfm: true,
});

export function MarkdownRenderer({ content, className = '' }: MarkdownRendererProps) {
  const renderMarkdown = (markdown: string): string => {
    // Convert markdown to HTML
    const rawHtml = marked(markdown) as string;
    
    // Sanitize HTML to prevent XSS attacks
    const cleanHtml = DOMPurify.sanitize(rawHtml);
    
    // Add custom classes to HTML elements
    let styledHtml = cleanHtml;
    
    // Headers
    styledHtml = styledHtml.replace(/<h1>/g, '<h1 class="text-4xl font-display font-bold text-gray-900 mb-10 mt-16">');
    styledHtml = styledHtml.replace(/<h2>/g, '<h2 class="text-3xl font-display font-bold text-gray-900 mb-8 mt-12">');
    styledHtml = styledHtml.replace(/<h3>/g, '<h3 class="text-2xl font-display font-semibold text-gray-900 mb-6 mt-10">');
    styledHtml = styledHtml.replace(/<h4>/g, '<h4 class="text-xl font-display font-semibold text-gray-900 mb-4 mt-8">');
    
    // Paragraphs
    styledHtml = styledHtml.replace(/<p>/g, '<p class="mb-8 leading-relaxed text-gray-700 text-lg">');
    
    // Links
    styledHtml = styledHtml.replace(/<a href/g, '<a class="text-violet-600 hover:text-violet-800 underline font-semibold" target="_blank" rel="noopener noreferrer" href');
    
    // Code blocks
    styledHtml = styledHtml.replace(/<pre>/g, '<pre class="bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl p-6 my-8 overflow-x-auto shadow-lg border border-gray-200">');
    styledHtml = styledHtml.replace(/<code>/g, '<code class="text-base font-mono text-gray-800">');
    
    // Inline code (not in pre blocks)
    styledHtml = styledHtml.replace(/<p([^>]*)><code class="text-base font-mono text-gray-800">/g, '<p$1><code class="bg-violet-100 px-3 py-1 rounded-lg text-base font-mono text-violet-800 font-semibold">');
    
    // Lists
    styledHtml = styledHtml.replace(/<ul>/g, '<ul class="mb-8">');
    styledHtml = styledHtml.replace(/<ol>/g, '<ol class="mb-8">');
    styledHtml = styledHtml.replace(/<li>/g, '<li class="ml-6 mb-3 text-lg list-disc">');
    
    // Blockquotes
    styledHtml = styledHtml.replace(/<blockquote>/g, '<blockquote class="border-l-4 border-violet-500 pl-6 my-8 italic text-gray-700 text-xl bg-violet-50/50 py-4 rounded-r-lg">');
    
    // Strong/Bold
    styledHtml = styledHtml.replace(/<strong>/g, '<strong class="font-bold text-gray-900">');
    
    // Emphasis/Italic
    styledHtml = styledHtml.replace(/<em>/g, '<em class="italic text-gray-700">');
    
    return styledHtml;
  };

  return (
    <div 
      className={`prose prose-xl max-w-none ${className}`}
      dangerouslySetInnerHTML={{ __html: renderMarkdown(content) }}
    />
  );
}