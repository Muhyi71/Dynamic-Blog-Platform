/*
  # Sample Blog Posts for ThoughtSphere

  This migration adds sample blog posts to showcase the platform's capabilities.
  These posts cover various topics and demonstrate different content types.
*/

-- Insert sample blog posts
INSERT INTO posts (title, slug, content, excerpt, tags, featured_image, is_published, published_at) VALUES
(
  'The Art of Minimalist Web Design: Less is More',
  'art-of-minimalist-web-design',
  '# The Art of Minimalist Web Design: Less is More

In today''s digital landscape, where users are bombarded with information and visual stimuli, minimalist web design has emerged as a powerful approach to creating meaningful and effective user experiences.

## What is Minimalist Web Design?

Minimalist web design is a design philosophy that emphasizes simplicity, functionality, and the strategic use of white space. It''s about removing unnecessary elements and focusing on what truly matters – the content and the user''s goals.

### Key Principles of Minimalist Design

**1. Simplicity Above All**
Every element on your page should serve a purpose. If it doesn''t contribute to the user experience or your business goals, consider removing it.

**2. Strategic Use of White Space**
White space isn''t empty space – it''s a powerful design tool that helps guide the user''s attention and creates visual hierarchy.

**3. Typography as a Design Element**
In minimalist design, typography often becomes the primary visual element. Choose fonts that are both beautiful and highly readable.

## Benefits of Minimalist Design

- **Faster Loading Times**: Fewer elements mean faster page loads
- **Better Mobile Experience**: Simplified layouts work better on smaller screens  
- **Improved Focus**: Users can focus on what''s important without distractions
- **Timeless Appeal**: Minimalist designs age better than trend-heavy designs

## Implementing Minimalist Design

Start by auditing your current design. Ask yourself:
- Does this element serve the user''s needs?
- Can I communicate the same message with fewer elements?
- Is the visual hierarchy clear and intuitive?

Remember, minimalism isn''t about having less – it''s about having just enough.',
  'Discover how minimalist web design principles can transform your digital presence and create more meaningful user experiences through strategic simplicity.',
  ARRAY['Web Design', 'UX/UI', 'Minimalism', 'User Experience'],
  'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  true,
  '2024-01-15T10:00:00Z'
),
(
  'Building Scalable React Applications: Architecture Patterns That Work',
  'building-scalable-react-applications',
  '# Building Scalable React Applications: Architecture Patterns That Work

As React applications grow in complexity, maintaining clean, scalable code becomes increasingly challenging. Here are proven architectural patterns that will help you build applications that can grow with your team and requirements.

## The Foundation: Project Structure

A well-organized project structure is the foundation of any scalable application. Here''s a structure that has worked well for large-scale React projects:

```
src/
├── components/
│   ├── common/
│   └── feature-specific/
├── hooks/
├── services/
├── utils/
├── types/
└── pages/
```

## Component Architecture Patterns

### 1. Container and Presentational Components

Separate your components into two categories:
- **Container Components**: Handle logic and state management
- **Presentational Components**: Focus purely on rendering UI

### 2. Custom Hooks for Logic Reuse

Custom hooks are perfect for extracting and reusing stateful logic:

```javascript
function useApi(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    fetchData(url).then(setData).finally(() => setLoading(false));
  }, [url]);
  
  return { data, loading };
}
```

## State Management Strategies

### When to Use Local State vs Global State

- **Local State**: Component-specific data that doesn''t need to be shared
- **Global State**: Data that multiple components need to access

### Context API vs External Libraries

The Context API is great for:
- Theme management
- User authentication state
- Simple global state

Consider external libraries like Zustand or Redux for:
- Complex state logic
- Time-travel debugging
- Middleware requirements

## Performance Optimization

### Code Splitting

Implement route-based code splitting to reduce initial bundle size:

```javascript
const LazyComponent = lazy(() => import(''./LazyComponent''));
```

### Memoization Strategies

Use `React.memo`, `useMemo`, and `useCallback` strategically:
- `React.memo` for expensive component renders
- `useMemo` for expensive calculations
- `useCallback` for stable function references

## Testing Architecture

A scalable application needs a robust testing strategy:

1. **Unit Tests**: Test individual components and functions
2. **Integration Tests**: Test component interactions
3. **E2E Tests**: Test complete user workflows

## Conclusion

Building scalable React applications is about making thoughtful architectural decisions early and consistently applying proven patterns. Focus on separation of concerns, reusability, and maintainability.',
  'Learn proven architectural patterns and best practices for building React applications that scale with your team and requirements.',
  ARRAY['React', 'JavaScript', 'Architecture', 'Frontend Development', 'Scalability'],
  'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  true,
  '2024-01-12T14:30:00Z'
),
(
  'The Psychology of Color in Digital Design: How Colors Influence User Behavior',
  'psychology-of-color-digital-design',
  '# The Psychology of Color in Digital Design: How Colors Influence User Behavior

Color is one of the most powerful tools in a designer''s arsenal. It can evoke emotions, guide user actions, and significantly impact the success of digital products. Understanding color psychology is essential for creating effective user experiences.

## The Science Behind Color Psychology

Colors trigger psychological and physiological responses that are both learned and innate. These responses can influence:
- **Mood and Emotions**: Colors can make users feel calm, excited, trustful, or anxious
- **Behavior**: Certain colors can encourage specific actions like clicking, buying, or sharing
- **Perception**: Colors affect how users perceive your brand and content

## Color Meanings and Associations

### Red: Energy and Urgency
- **Positive**: Passion, energy, excitement, power
- **Negative**: Danger, aggression, warning
- **Use Cases**: Call-to-action buttons, sale notifications, error messages

### Blue: Trust and Stability  
- **Positive**: Trust, reliability, professionalism, calm
- **Negative**: Coldness, sadness
- **Use Cases**: Corporate websites, financial services, healthcare

### Green: Growth and Harmony
- **Positive**: Nature, growth, harmony, freshness, money
- **Negative**: Envy, inexperience
- **Use Cases**: Environmental brands, financial success, health products

### Yellow: Optimism and Attention
- **Positive**: Happiness, optimism, creativity, energy
- **Negative**: Caution, anxiety, cowardice
- **Use Cases**: Highlighting important information, children''s products

### Purple: Luxury and Creativity
- **Positive**: Luxury, creativity, mystery, spirituality
- **Negative**: Arrogance, moodiness
- **Use Cases**: Premium brands, creative industries, beauty products

## Cultural Considerations

Color meanings can vary significantly across cultures:
- **White**: Purity in Western cultures, mourning in some Eastern cultures
- **Red**: Good luck in China, danger in Western contexts
- **Green**: Nature universally, but also jealousy in some cultures

## Practical Applications in UI Design

### 1. Call-to-Action Buttons
Use contrasting colors that stand out from your color scheme. Red and orange often perform well for conversion-focused buttons.

### 2. Navigation and Hierarchy
Use color to establish visual hierarchy:
- Primary actions: Bold, contrasting colors
- Secondary actions: Muted versions of primary colors
- Tertiary actions: Subtle, low-contrast colors

### 3. Feedback and Status
- **Success**: Green
- **Warning**: Yellow/Orange  
- **Error**: Red
- **Information**: Blue

## Color Accessibility

Always consider accessibility when choosing colors:
- Ensure sufficient contrast ratios (4.5:1 for normal text, 3:1 for large text)
- Don''t rely solely on color to convey information
- Test your designs with color blindness simulators

## Building a Color Palette

### The 60-30-10 Rule
- **60%**: Dominant color (usually neutral)
- **30%**: Secondary color (brand color)
- **10%**: Accent color (for highlights and CTAs)

### Tools for Color Selection
- Adobe Color
- Coolors.co
- Material Design Color Tool
- Contrast ratio checkers

## Testing and Optimization

Color choices should be tested and optimized:
- A/B test different color variations for CTAs
- Use heatmaps to see how color affects user attention
- Gather user feedback on color preferences
- Monitor conversion rates and user engagement

## Conclusion

Color psychology in digital design is both an art and a science. While general principles provide a foundation, the most effective approach combines psychological insights with user testing and data-driven optimization. Remember that context, culture, and your specific audience all play crucial roles in how colors are perceived and acted upon.',
  'Explore how color psychology influences user behavior and learn to make strategic color choices that enhance user experience and drive conversions.',
  ARRAY['Design Psychology', 'UX/UI', 'Color Theory', 'User Experience', 'Digital Design'],
  'https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  true,
  '2024-01-10T09:15:00Z'
),
(
  'Mastering TypeScript: Advanced Patterns for Better Code Quality',
  'mastering-typescript-advanced-patterns',
  '# Mastering TypeScript: Advanced Patterns for Better Code Quality

TypeScript has revolutionized JavaScript development by bringing static typing to the dynamic world of JavaScript. While basic TypeScript usage is straightforward, mastering advanced patterns can significantly improve your code quality, maintainability, and developer experience.

## Advanced Type Patterns

### 1. Conditional Types

Conditional types allow you to create types that depend on a condition:

```typescript
type ApiResponse<T> = T extends string 
  ? { message: T } 
  : { data: T };

// Usage
type StringResponse = ApiResponse<string>; // { message: string }
type UserResponse = ApiResponse<User>; // { data: User }
```

### 2. Mapped Types

Transform existing types by mapping over their properties:

```typescript
type Partial<T> = {
  [P in keyof T]?: T[P];
};

type Required<T> = {
  [P in keyof T]-?: T[P];
};

type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};
```

### 3. Template Literal Types

Create types based on string patterns:

```typescript
type EventName<T extends string> = `on${Capitalize<T>}`;
type ButtonEvents = EventName<"click" | "hover">; // "onClick" | "onHover"

type ApiEndpoint<T extends string> = `/api/${T}`;
type UserEndpoints = ApiEndpoint<"users" | "profile">; // "/api/users" | "/api/profile"
```

## Utility Types for Better APIs

### Creating Flexible Function Signatures

```typescript
// Overloaded function types
interface DatabaseQuery {
  <T>(query: string): Promise<T[]>;
  <T>(query: string, params: unknown[]): Promise<T[]>;
  <T>(query: string, params: unknown[], single: true): Promise<T>;
}

// Generic constraints
interface Repository<T extends { id: string }> {
  findById(id: string): Promise<T | null>;
  create(entity: Omit<T, 'id'>): Promise<T>;
  update(id: string, updates: Partial<T>): Promise<T>;
}
```

### Type Guards and Narrowing

```typescript
// Custom type guards
function isUser(obj: unknown): obj is User {
  return typeof obj === 'object' && 
         obj !== null && 
         'id' in obj && 
         'email' in obj;
}

// Discriminated unions
type ApiResult<T> = 
  | { success: true; data: T }
  | { success: false; error: string };

function handleResult<T>(result: ApiResult<T>) {
  if (result.success) {
    // TypeScript knows result.data exists
    console.log(result.data);
  } else {
    // TypeScript knows result.error exists
    console.error(result.error);
  }
}
```

## Advanced Generic Patterns

### Higher-Order Type Functions

```typescript
// Compose multiple type transformations
type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends object 
    ? DeepReadonly<T[P]> 
    : T[P];
};

// Extract function parameters
type Parameters<T extends (...args: any) => any> = 
  T extends (...args: infer P) => any ? P : never;

// Extract return type
type ReturnType<T extends (...args: any) => any> = 
  T extends (...args: any) => infer R ? R : any;
```

### Brand Types for Type Safety

```typescript
// Create distinct types from primitives
type UserId = string & { __brand: 'UserId' };
type Email = string & { __brand: 'Email' };

function createUserId(id: string): UserId {
  return id as UserId;
}

function sendEmail(to: Email, subject: string) {
  // Implementation
}

// This prevents mixing up different string types
const userId = createUserId("123");
const email = "user@example.com" as Email;

sendEmail(userId, "Hello"); // Error: Argument of type 'UserId' is not assignable to parameter of type 'Email'
```

## Error Handling Patterns

### Result Type Pattern

```typescript
type Result<T, E = Error> = 
  | { ok: true; value: T }
  | { ok: false; error: E };

async function safeApiCall<T>(url: string): Promise<Result<T>> {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return { ok: true, value: data };
  } catch (error) {
    return { ok: false, error: error as Error };
  }
}

// Usage
const result = await safeApiCall<User>('/api/user');
if (result.ok) {
  console.log(result.value.name); // Type-safe access
} else {
  console.error(result.error.message);
}
```

## Configuration and Environment Types

### Strongly Typed Configuration

```typescript
interface DatabaseConfig {
  host: string;
  port: number;
  database: string;
  ssl: boolean;
}

interface ApiConfig {
  baseUrl: string;
  timeout: number;
  retries: number;
}

type AppConfig = {
  database: DatabaseConfig;
  api: ApiConfig;
  environment: 'development' | 'staging' | 'production';
};

// Type-safe environment validation
function validateConfig(config: unknown): config is AppConfig {
  // Implementation with runtime validation
  return true; // Simplified
}
```

## Best Practices

### 1. Use Strict Mode
Always enable strict mode in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true
  }
}
```

### 2. Prefer Type Inference
Let TypeScript infer types when possible:

```typescript
// Good - let TypeScript infer
const users = await fetchUsers();

// Unnecessary - explicit typing when inference works
const users: User[] = await fetchUsers();
```

### 3. Use Const Assertions
For immutable data structures:

```typescript
const themes = ['light', 'dark'] as const;
type Theme = typeof themes[number]; // 'light' | 'dark'
```

## Conclusion

Advanced TypeScript patterns enable you to create more robust, maintainable, and expressive code. These patterns help catch errors at compile time, improve IDE support, and make your intentions clearer to other developers. Start incorporating these patterns gradually into your codebase to experience the full power of TypeScript.',
  'Dive deep into advanced TypeScript patterns and techniques that will elevate your code quality and developer experience to the next level.',
  ARRAY['TypeScript', 'JavaScript', 'Programming', 'Code Quality', 'Software Development'],
  'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  true,
  '2024-01-08T16:45:00Z'
),
(
  'The Future of Web Development: Trends Shaping 2024 and Beyond',
  'future-of-web-development-2024',
  '# The Future of Web Development: Trends Shaping 2024 and Beyond

The web development landscape is evolving at an unprecedented pace. As we move through 2024, several key trends are reshaping how we build, deploy, and interact with web applications. Let''s explore the technologies and methodologies that are defining the future of our industry.

## 1. The Rise of Edge Computing

Edge computing is transforming how we think about web application architecture. By processing data closer to users, we can achieve:

### Benefits of Edge Computing
- **Reduced Latency**: Faster response times for users worldwide
- **Improved Performance**: Better user experience through geographic distribution
- **Enhanced Security**: Data processing closer to the source
- **Cost Efficiency**: Reduced bandwidth and server costs

### Edge Platforms Leading the Way
- **Cloudflare Workers**: Serverless computing at the edge
- **Vercel Edge Functions**: Integrated with modern deployment workflows
- **AWS Lambda@Edge**: Enterprise-grade edge computing
- **Deno Deploy**: Modern runtime for edge applications

## 2. AI-Powered Development Tools

Artificial Intelligence is revolutionizing how we write and maintain code:

### Code Generation and Completion
- **GitHub Copilot**: AI pair programming assistant
- **Tabnine**: Intelligent code completion
- **Replit Ghostwriter**: AI-powered coding assistant
- **Amazon CodeWhisperer**: ML-powered code recommendations

### AI in Testing and Quality Assurance
- Automated test generation
- Bug detection and prevention
- Code review assistance
- Performance optimization suggestions

## 3. WebAssembly (WASM) Mainstream Adoption

WebAssembly is moving beyond experimental use cases:

### Current Applications
- **High-Performance Computing**: Scientific calculations in the browser
- **Gaming**: Near-native performance for web games
- **Image/Video Processing**: Real-time media manipulation
- **Legacy Code Migration**: Running existing C/C++/Rust code in browsers

### Languages Targeting WASM
- Rust
- C/C++
- Go
- AssemblyScript
- Blazor (C#)

## 4. Micro-Frontends Architecture

Large organizations are adopting micro-frontends for better scalability:

### Key Benefits
- **Team Independence**: Different teams can work on separate parts
- **Technology Diversity**: Mix different frameworks in one application
- **Incremental Updates**: Deploy parts of the application independently
- **Fault Isolation**: Issues in one micro-frontend don''t affect others

### Implementation Approaches
- **Module Federation**: Webpack 5''s built-in solution
- **Single-SPA**: Framework-agnostic micro-frontend orchestration
- **Bit**: Component-driven development platform
- **Nx**: Monorepo tools with micro-frontend support

## 5. Progressive Web Apps (PWAs) Evolution

PWAs continue to bridge the gap between web and native applications:

### New Capabilities
- **File System Access API**: Direct file manipulation
- **Web Share API**: Native sharing functionality
- **Background Sync**: Offline data synchronization
- **Push Notifications**: Real-time user engagement

### Platform Support Improvements
- Better iOS support
- Enhanced Android integration
- Desktop PWA installation
- App store distribution

## 6. Serverless and JAMstack Maturation

The serverless ecosystem is becoming more sophisticated:

### Advanced Serverless Patterns
- **Event-Driven Architecture**: Reactive serverless applications
- **Serverless Databases**: Edge-optimized data storage
- **Serverless ML**: AI/ML inference at scale
- **Multi-Cloud Serverless**: Vendor-agnostic deployments

### JAMstack Evolution
- **Dynamic JAMstack**: Server-side rendering with static generation
- **Incremental Static Regeneration**: On-demand static page updates
- **Edge-Side Includes**: Dynamic content injection at the edge

## 7. Web3 and Decentralized Applications

Blockchain technology is creating new web development paradigms:

### Key Technologies
- **Smart Contracts**: Self-executing contracts on blockchain
- **IPFS**: Decentralized file storage
- **Web3.js/Ethers.js**: Blockchain interaction libraries
- **MetaMask Integration**: Wallet connectivity

### Development Frameworks
- **Hardhat**: Ethereum development environment
- **Truffle**: Smart contract development suite
- **Remix**: Browser-based Solidity IDE
- **Moralis**: Web3 development platform

## 8. Enhanced Developer Experience

Developer tooling continues to improve dramatically:

### Modern Build Tools
- **Vite**: Lightning-fast build tool
- **esbuild**: Extremely fast JavaScript bundler
- **SWC**: Rust-based JavaScript/TypeScript compiler
- **Rome**: Unified toolchain for web projects

### Development Environments
- **GitHub Codespaces**: Cloud-based development environments
- **GitPod**: Automated dev environments
- **Replit**: Collaborative online IDE
- **StackBlitz**: Instant development environments

## 9. Sustainability in Web Development

Environmental consciousness is influencing development practices:

### Green Web Development
- **Carbon-Aware Computing**: Optimizing for low-carbon energy
- **Efficient Code Practices**: Reducing computational overhead
- **Sustainable Hosting**: Renewable energy-powered servers
- **Performance Optimization**: Faster sites use less energy

### Tools for Sustainable Development
- Website Carbon Calculator
- EcoGrader
- Green Web Foundation tools
- Lighthouse sustainability audits

## 10. Advanced CSS and Design Systems

CSS continues to evolve with powerful new features:

### Modern CSS Features
- **Container Queries**: Responsive design based on container size
- **CSS Grid Subgrid**: Advanced grid layouts
- **CSS Cascade Layers**: Better style organization
- **CSS Color Functions**: Advanced color manipulation

### Design System Evolution
- **Design Tokens**: Platform-agnostic design decisions
- **Component Libraries**: Reusable UI components
- **Automated Design Systems**: AI-generated design components
- **Cross-Platform Design**: Unified design across web, mobile, and desktop

## Preparing for the Future

To stay ahead in this rapidly evolving landscape:

### Continuous Learning
- Follow industry leaders and publications
- Experiment with new technologies
- Contribute to open-source projects
- Attend conferences and workshops

### Skill Development Focus Areas
- **Cloud-Native Development**: Understanding distributed systems
- **AI/ML Integration**: Incorporating AI into web applications
- **Performance Optimization**: Creating fast, efficient applications
- **Security Best Practices**: Building secure applications by default

### Building Adaptable Skills
- Focus on fundamental concepts over specific tools
- Develop problem-solving abilities
- Practice system design thinking
- Cultivate collaboration and communication skills

## Conclusion

The future of web development is exciting and full of opportunities. While the pace of change can feel overwhelming, focusing on core principles while staying curious about emerging technologies will serve you well. The key is to balance innovation with practicality, always keeping user experience and business value at the center of your decisions.

As we move forward, the most successful developers will be those who can adapt quickly, think systematically, and build applications that are not just technically impressive, but truly valuable to users and businesses alike.',
  'Explore the cutting-edge trends and technologies that are shaping the future of web development in 2024 and beyond.',
  ARRAY['Web Development', 'Technology Trends', 'Future Tech', 'AI', 'Edge Computing', 'WebAssembly'],
  'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  true,
  '2024-01-05T11:20:00Z'
),
(
  'Creating Accessible Web Applications: A Comprehensive Guide',
  'creating-accessible-web-applications',
  '# Creating Accessible Web Applications: A Comprehensive Guide

Web accessibility isn''t just a nice-to-have feature—it''s a fundamental requirement for creating inclusive digital experiences. With over 1 billion people worldwide living with disabilities, building accessible web applications is both a moral imperative and a business necessity.

## Understanding Web Accessibility

Web accessibility means ensuring that websites and applications can be used by everyone, including people with:
- **Visual impairments**: Blindness, low vision, color blindness
- **Hearing impairments**: Deafness, hard of hearing
- **Motor impairments**: Limited fine motor control, paralysis
- **Cognitive impairments**: Dyslexia, ADHD, autism spectrum disorders

## The WCAG Guidelines

The Web Content Accessibility Guidelines (WCAG) 2.1 provide the foundation for web accessibility. They''re organized around four principles:

### 1. Perceivable
Information must be presentable in ways users can perceive:

**Text Alternatives**
```html
<!-- Good: Descriptive alt text -->
<img src="chart.png" alt="Sales increased 25% from Q1 to Q2 2024">

<!-- Bad: Generic or missing alt text -->
<img src="chart.png" alt="chart">
<img src="chart.png">
```

**Color and Contrast**
- Ensure sufficient color contrast (4.5:1 for normal text, 3:1 for large text)
- Don''t rely solely on color to convey information
- Test with color blindness simulators

### 2. Operable
Interface components must be operable by all users:

**Keyboard Navigation**
```css
/* Ensure focus indicators are visible */
button:focus {
  outline: 2px solid #0066cc;
  outline-offset: 2px;
}

/* Skip links for keyboard users */
.skip-link {
  position: absolute;
  top: -40px;
  left: 6px;
  background: #000;
  color: #fff;
  padding: 8px;
  text-decoration: none;
  transition: top 0.3s;
}

.skip-link:focus {
  top: 6px;
}
```

**Timing and Motion**
- Provide controls for auto-playing content
- Allow users to pause, stop, or hide moving content
- Avoid content that flashes more than 3 times per second

### 3. Understandable
Information and UI operation must be understandable:

**Clear Language**
- Use simple, clear language
- Define jargon and abbreviations
- Provide instructions for complex interactions

**Predictable Navigation**
- Consistent navigation across pages
- Clear page titles and headings
- Logical tab order

### 4. Robust
Content must be robust enough for various assistive technologies:

**Semantic HTML**
```html
<!-- Good: Semantic structure -->
<main>
  <article>
    <header>
      <h1>Article Title</h1>
      <time datetime="2024-01-15">January 15, 2024</time>
    </header>
    <section>
      <h2>Section Heading</h2>
      <p>Content...</p>
    </section>
  </article>
</main>

<!-- Bad: Non-semantic structure -->
<div class="main">
  <div class="article">
    <div class="title">Article Title</div>
    <div class="date">January 15, 2024</div>
    <div class="content">Content...</div>
  </div>
</div>
```

## ARIA (Accessible Rich Internet Applications)

ARIA attributes enhance semantic HTML for complex interactions:

### Common ARIA Attributes

**aria-label and aria-labelledby**
```html
<!-- aria-label for elements without visible text -->
<button aria-label="Close dialog">×</button>

<!-- aria-labelledby to reference other elements -->
<h2 id="settings-title">Account Settings</h2>
<div role="group" aria-labelledby="settings-title">
  <!-- form controls -->
</div>
```

**aria-describedby**
```html
<input type="password" 
       aria-describedby="pwd-help"
       required>
<div id="pwd-help">
  Password must be at least 8 characters long
</div>
```

**Live Regions**
```html
<!-- Announce dynamic content changes -->
<div aria-live="polite" id="status"></div>
<div aria-live="assertive" id="errors"></div>

<script>
// Announce status updates
document.getElementById(''status'').textContent = ''Form saved successfully'';
</script>
```

## Form Accessibility

Forms are critical interaction points that must be fully accessible:

### Proper Labeling
```html
<!-- Explicit labels -->
<label for="email">Email Address</label>
<input type="email" id="email" required>

<!-- Implicit labels -->
<label>
  Phone Number
  <input type="tel" required>
</label>

<!-- Fieldsets for grouped controls -->
<fieldset>
  <legend>Preferred Contact Method</legend>
  <label><input type="radio" name="contact" value="email"> Email</label>
  <label><input type="radio" name="contact" value="phone"> Phone</label>
</fieldset>
```

### Error Handling
```html
<form novalidate>
  <div class="field">
    <label for="username">Username</label>
    <input type="text" 
           id="username" 
           aria-describedby="username-error"
           aria-invalid="true"
           required>
    <div id="username-error" role="alert">
      Username is required
    </div>
  </div>
</form>
```

## Focus Management

Proper focus management is crucial for keyboard users:

### Focus Trapping in Modals
```javascript
class Modal {
  constructor(element) {
    this.modal = element;
    this.focusableElements = this.modal.querySelectorAll(
      ''button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])''
    );
    this.firstFocusable = this.focusableElements[0];
    this.lastFocusable = this.focusableElements[this.focusableElements.length - 1];
  }

  open() {
    this.modal.style.display = ''block'';
    this.firstFocusable.focus();
    document.addEventListener(''keydown'', this.handleKeydown.bind(this));
  }

  handleKeydown(e) {
    if (e.key === ''Tab'') {
      if (e.shiftKey) {
        if (document.activeElement === this.firstFocusable) {
          e.preventDefault();
          this.lastFocusable.focus();
        }
      } else {
        if (document.activeElement === this.lastFocusable) {
          e.preventDefault();
          this.firstFocusable.focus();
        }
      }
    }
    
    if (e.key === ''Escape'') {
      this.close();
    }
  }
}
```

## Testing for Accessibility

### Automated Testing Tools
- **axe-core**: Comprehensive accessibility testing library
- **Lighthouse**: Built-in Chrome accessibility audit
- **WAVE**: Web accessibility evaluation tool
- **Pa11y**: Command-line accessibility testing

### Manual Testing Checklist
1. **Keyboard Navigation**: Can you navigate the entire site using only the keyboard?
2. **Screen Reader**: Test with NVDA (Windows), JAWS (Windows), or VoiceOver (Mac)
3. **Color Contrast**: Use tools like WebAIM''s contrast checker
4. **Zoom Testing**: Test at 200% zoom level
5. **Focus Indicators**: Are focus states clearly visible?

### Testing with Real Users
- Include users with disabilities in your testing process
- Conduct usability testing with assistive technologies
- Gather feedback from accessibility consultants

## Common Accessibility Mistakes

### 1. Poor Color Contrast
```css
/* Bad: Insufficient contrast */
.text {
  color: #999;
  background: #fff;
}

/* Good: Sufficient contrast */
.text {
  color: #333;
  background: #fff;
}
```

### 2. Missing Form Labels
```html
<!-- Bad: No label -->
<input type="text" placeholder="Enter your name">

<!-- Good: Proper label -->
<label for="name">Name</label>
<input type="text" id="name" placeholder="Enter your name">
```

### 3. Inaccessible Custom Components
```javascript
// Bad: Custom button without accessibility
<div className="button" onClick={handleClick}>
  Click me
</div>

// Good: Accessible custom button
<div 
  role="button"
  tabIndex={0}
  onClick={handleClick}
  onKeyDown={(e) => {
    if (e.key === ''Enter'' || e.key === '' '') {
      handleClick();
    }
  }}
  aria-label="Submit form"
>
  Click me
</div>
```

## Accessibility in Modern Frameworks

### React Accessibility
```jsx
import { useRef, useEffect } from ''react'';

function AccessibleModal({ isOpen, onClose, title, children }) {
  const modalRef = useRef();
  const previousFocus = useRef();

  useEffect(() => {
    if (isOpen) {
      previousFocus.current = document.activeElement;
      modalRef.current.focus();
    } else if (previousFocus.current) {
      previousFocus.current.focus();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div 
      className="modal-overlay"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="modal-content"
        ref={modalRef}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="modal-title">{title}</h2>
        {children}
        <button onClick={onClose} aria-label="Close modal">
          ×
        </button>
      </div>
    </div>
  );
}
```

### Vue.js Accessibility
```vue
<template>
  <div class="dropdown" @keydown="handleKeydown">
    <button 
      ref="trigger"
      @click="toggle"
      :aria-expanded="isOpen"
      aria-haspopup="true"
      :aria-controls="dropdownId"
    >
      {{ selectedOption || ''Select an option'' }}
    </button>
    
    <ul 
      v-if="isOpen"
      :id="dropdownId"
      role="listbox"
      :aria-activedescendant="activeOptionId"
    >
      <li 
        v-for="(option, index) in options"
        :key="option.value"
        :id="`option-${index}`"
        role="option"
        :aria-selected="option.value === selectedOption"
        @click="selectOption(option)"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
</template>
```

## Legal and Business Considerations

### Legal Requirements
- **ADA (Americans with Disabilities Act)**: US federal law
- **Section 508**: US federal agency requirements
- **EN 301 549**: European accessibility standard
- **AODA**: Accessibility for Ontarians with Disabilities Act

### Business Benefits
- **Larger Market Reach**: Access to users with disabilities
- **Better SEO**: Semantic HTML improves search rankings
- **Improved Usability**: Benefits all users, not just those with disabilities
- **Risk Mitigation**: Reduces legal liability

## Building an Accessibility Culture

### Team Education
- Provide accessibility training for all team members
- Include accessibility in design reviews
- Make accessibility part of the definition of done
- Share success stories and user feedback

### Process Integration
- Include accessibility requirements in user stories
- Conduct accessibility reviews during development
- Automate accessibility testing in CI/CD pipelines
- Regular accessibility audits

## Conclusion

Creating accessible web applications is an ongoing journey, not a one-time task. It requires commitment from the entire team and should be considered from the earliest stages of design and development. By following WCAG guidelines, using semantic HTML, implementing proper ARIA attributes, and conducting regular testing, we can create digital experiences that truly serve everyone.

Remember: accessibility is not about compliance—it''s about creating inclusive experiences that allow all users to accomplish their goals effectively and independently.',
  'Learn how to build truly accessible web applications that serve all users, including those with disabilities, through practical techniques and best practices.',
  ARRAY['Accessibility', 'Web Development', 'Inclusive Design', 'WCAG', 'UX/UI', 'Frontend'],
  'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  true,
  '2024-01-03T13:30:00Z'
);