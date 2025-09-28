import type { BlogPost, BlogSearchParams, PaginatedResponse } from '../types/blog';

// Sample blog posts data
const samplePosts: BlogPost[] = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    slug: 'getting-started-react-typescript',
    content: `# Getting Started with React and TypeScript

React and TypeScript make a powerful combination for building modern web applications. In this comprehensive guide, we'll explore how to set up and work with both technologies.

## Why Use TypeScript with React?

TypeScript brings static typing to JavaScript, which provides several benefits:

- **Better IDE Support**: Enhanced autocomplete, refactoring, and navigation
- **Catch Errors Early**: Type checking helps identify issues during development
- **Better Documentation**: Types serve as living documentation for your code
- **Improved Refactoring**: Safe and confident code refactoring

## Setting Up Your Environment

To get started with React and TypeScript, you can use Create React App with TypeScript template:

\`\`\`bash
npx create-react-app my-app --template typescript
cd my-app
npm start
\`\`\`

## Basic Component Patterns

Here's a simple functional component with TypeScript:

\`\`\`tsx
import React from 'react';

interface Props {
  name: string;
  age?: number;
}

const Greeting: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age && <p>You are {age} years old.</p>}
    </div>
  );
};

export default Greeting;
\`\`\`

## Conclusion

React and TypeScript together provide a robust foundation for building scalable web applications. Start with simple components and gradually adopt more advanced patterns as you become comfortable with the technology stack.`,
    excerpt: 'Learn how to combine React and TypeScript to build robust, type-safe web applications with better developer experience and fewer runtime errors.',
    published_at: '2024-01-15T10:00:00Z',
    created_at: '2024-01-15T10:00:00Z',
    updated_at: '2024-01-15T10:00:00Z',
    tags: ['React', 'TypeScript', 'JavaScript', 'Web Development'],
    featured_image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    is_published: true
  },
  {
    id: '2',
    title: 'Modern CSS: Grid vs Flexbox',
    slug: 'modern-css-grid-vs-flexbox',
    content: `# Modern CSS: Grid vs Flexbox

CSS Grid and Flexbox are two powerful layout systems that have revolutionized web design. Understanding when and how to use each one is crucial for modern web development.

## Understanding Flexbox

Flexbox is designed for one-dimensional layouts. It's perfect for:

- Navigation bars
- Button groups
- Centering content
- Distributing space between items

### Basic Flexbox Example

\`\`\`css
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}
\`\`\`

## Understanding CSS Grid

CSS Grid is designed for two-dimensional layouts. It excels at:

- Complex page layouts
- Card grids
- Magazine-style layouts
- Responsive design patterns

### Basic Grid Example

\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
\`\`\`

## When to Use Which?

**Use Flexbox when:**
- You need to align items in a single direction
- You're working with component-level layouts
- You need to distribute space dynamically

**Use Grid when:**
- You need to create complex two-dimensional layouts
- You want precise control over rows and columns
- You're designing the overall page structure

## Combining Both

The real power comes from combining both systems. Use Grid for the page layout and Flexbox for component layouts within grid items.

## Conclusion

Both Grid and Flexbox have their place in modern CSS. Understanding their strengths helps you choose the right tool for each layout challenge.`,
    excerpt: 'Explore the differences between CSS Grid and Flexbox, learn when to use each layout system, and discover how to combine them effectively.',
    published_at: '2024-01-20T14:30:00Z',
    created_at: '2024-01-20T14:30:00Z',
    updated_at: '2024-01-20T14:30:00Z',
    tags: ['CSS', 'Web Design', 'Layout', 'Frontend'],
    featured_image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    is_published: true
  },
  {
    id: '3',
    title: 'Building RESTful APIs with Node.js',
    slug: 'building-restful-apis-nodejs',
    content: `# Building RESTful APIs with Node.js

Node.js has become the go-to platform for building scalable web APIs. In this guide, we'll explore best practices for creating RESTful APIs using Node.js and Express.

## What is a RESTful API?

REST (Representational State Transfer) is an architectural style for designing networked applications. RESTful APIs follow specific principles:

- **Stateless**: Each request contains all necessary information
- **Client-Server**: Clear separation of concerns
- **Cacheable**: Responses should be cacheable when appropriate
- **Uniform Interface**: Consistent API design patterns

## Setting Up Express

Start by creating a new Node.js project and installing Express:

\`\`\`bash
npm init -y
npm install express cors helmet morgan
npm install -D nodemon @types/node
\`\`\`

## Basic Server Setup

\`\`\`javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

## API Design Patterns

### Resource-Based URLs
- GET /api/users - Get all users
- GET /api/users/:id - Get specific user
- POST /api/users - Create new user
- PUT /api/users/:id - Update user
- DELETE /api/users/:id - Delete user

### Error Handling

\`\`\`javascript
const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).json({
    success: false,
    error: {
      message: err.message,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
};

app.use(errorHandler);
\`\`\`

## Best Practices

1. **Use HTTP Status Codes Properly**
2. **Implement Proper Error Handling**
3. **Add Request Validation**
4. **Use Middleware for Common Functionality**
5. **Implement Rate Limiting**
6. **Add Authentication and Authorization**

## Conclusion

Building RESTful APIs with Node.js and Express provides a solid foundation for web applications. Focus on consistency, proper error handling, and following REST principles.`,
    excerpt: 'Learn how to build scalable and maintainable RESTful APIs using Node.js and Express, following industry best practices and design patterns.',
    published_at: '2024-01-25T09:15:00Z',
    created_at: '2024-01-25T09:15:00Z',
    updated_at: '2024-01-25T09:15:00Z',
    tags: ['Node.js', 'Express', 'API', 'Backend', 'JavaScript'],
    featured_image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2086&q=80',
    is_published: true
  },
  {
    id: '4',
    title: 'State Management in React: Redux vs Context API',
    slug: 'react-state-management-redux-context',
    content: `# State Management in React: Redux vs Context API

Managing state in React applications can become complex as your app grows. Let's compare two popular approaches: Redux and Context API.

## The State Management Problem

As React applications grow, you'll encounter challenges:

- **Prop Drilling**: Passing props through multiple component layers
- **Shared State**: Multiple components needing access to the same data
- **State Updates**: Managing complex state changes across components

## Context API: The Built-in Solution

React's Context API provides a way to share state without prop drilling.

### Creating a Context

\`\`\`jsx
import React, { createContext, useContext, useReducer } from 'react';

const AppContext = createContext();

const initialState = {
  user: null,
  theme: 'light',
  notifications: []
};

function appReducer(state, action) {
  switch (action.type) {
    case 'SET_USER':
      return { ...state, user: action.payload };
    case 'SET_THEME':
      return { ...state, theme: action.payload };
    default:
      return state;
  }
}

export function AppProvider({ children }) {
  const [state, dispatch] = useReducer(appReducer, initialState);
  
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};
\`\`\`

## Redux: The Predictable State Container

Redux provides a more structured approach to state management.

### Basic Redux Setup

\`\`\`javascript
import { createSlice, configureStore } from '@reduxjs/toolkit';

// Create a slice
const userSlice = createSlice({
  name: 'user',
  initialState: { value: null },
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload;
    },
    clearUser: (state) => {
      state.value = null;
    }
  }
});

export const { setUser, clearUser } = userSlice.actions;

// Configure store
export const store = configureStore({
  reducer: {
    user: userSlice.reducer
  }
});
\`\`\`

## When to Use Which?

### Use Context API when:
- Small to medium applications
- Simple state structure
- Limited global state needs
- You want to avoid additional dependencies

### Use Redux when:
- Large, complex applications
- Complex state interactions
- Need for time-travel debugging
- Team needs predictable state updates
- Extensive middleware requirements

## Performance Considerations

**Context API:**
- Can cause unnecessary re-renders
- Split contexts for better performance
- Use memo() to optimize components

**Redux:**
- Better optimization out of the box
- Selector-based subscriptions
- Middleware for async operations

## Conclusion

Both Context API and Redux have their place in React development. Choose based on your application's complexity, team preferences, and specific requirements.`,
    excerpt: 'Compare Redux and Context API for React state management, exploring when to use each approach and their respective advantages and trade-offs.',
    published_at: '2024-02-01T16:45:00Z',
    created_at: '2024-02-01T16:45:00Z',
    updated_at: '2024-02-01T16:45:00Z',
    tags: ['React', 'Redux', 'State Management', 'Context API', 'JavaScript'],
    featured_image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    is_published: true
  },
  {
    id: '5',
    title: 'Database Design Best Practices',
    slug: 'database-design-best-practices',
    content: `# Database Design Best Practices

Good database design is crucial for application performance, maintainability, and scalability. Let's explore key principles and best practices.

## Database Design Principles

### 1. Normalization

Normalization reduces data redundancy and improves data integrity:

**First Normal Form (1NF):**
- Each column contains atomic values
- No repeating groups

**Second Normal Form (2NF):**
- Must be in 1NF
- No partial dependencies on composite keys

**Third Normal Form (3NF):**
- Must be in 2NF
- No transitive dependencies

### 2. Choose Appropriate Data Types

\`\`\`sql
-- Good
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  age SMALLINT CHECK (age >= 0 AND age <= 150),
  is_active BOOLEAN DEFAULT true
);

-- Avoid
CREATE TABLE users (
  id TEXT,
  email TEXT,
  created_at TEXT,
  age TEXT,
  is_active TEXT
);
\`\`\`

## Indexing Strategies

### Primary Keys and Foreign Keys

Always define primary keys and use foreign keys to maintain referential integrity:

\`\`\`sql
CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index foreign keys
CREATE INDEX idx_posts_user_id ON posts(user_id);
CREATE INDEX idx_posts_created_at ON posts(created_at);
\`\`\`

### Query-Based Indexing

Create indexes based on your query patterns:

\`\`\`sql
-- For searches by email
CREATE INDEX idx_users_email ON users(email);

-- For composite searches
CREATE INDEX idx_posts_status_date ON posts(status, created_at);

-- For partial matches
CREATE INDEX idx_users_name_gin ON users USING gin(to_tsvector('english', name));
\`\`\`

## Relationships and Constraints

### One-to-Many Relationships

\`\`\`sql
CREATE TABLE categories (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) UNIQUE NOT NULL
);

CREATE TABLE posts (
  id SERIAL PRIMARY KEY,
  category_id INTEGER REFERENCES categories(id),
  title VARCHAR(255) NOT NULL
);
\`\`\`

### Many-to-Many Relationships

\`\`\`sql
CREATE TABLE posts_tags (
  post_id INTEGER REFERENCES posts(id) ON DELETE CASCADE,
  tag_id INTEGER REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);
\`\`\`

## Performance Considerations

### Query Optimization

1. **Use EXPLAIN to analyze queries**
2. **Avoid SELECT \***
3. **Use appropriate JOIN types**
4. **Limit result sets with pagination**

### Connection Pooling

\`\`\`javascript
// Example with node-postgres
const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'myapp',
  user: 'username',
  password: 'password',
  max: 20, // Maximum number of connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});
\`\`\`

## Security Best Practices

1. **Use parameterized queries** to prevent SQL injection
2. **Implement proper authentication and authorization**
3. **Encrypt sensitive data**
4. **Regular database backups**
5. **Monitor and audit database access**

## Conclusion

Good database design requires careful planning and consideration of your application's requirements. Focus on normalization, proper indexing, and security from the start.`,
    excerpt: 'Master the fundamentals of database design including normalization, indexing strategies, relationships, and performance optimization techniques.',
    published_at: '2024-02-05T11:20:00Z',
    created_at: '2024-02-05T11:20:00Z',
    updated_at: '2024-02-05T11:20:00Z',
    tags: ['Database', 'SQL', 'PostgreSQL', 'Backend', 'Performance'],
    featured_image: 'https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2121&q=80',
    is_published: true
  },
  {
    id: '6',
    title: 'Introduction to Machine Learning',
    slug: 'introduction-machine-learning',
    content: `# Introduction to Machine Learning

Machine Learning has revolutionized how we approach problem-solving in technology. This guide provides a comprehensive introduction to ML concepts and applications.

## What is Machine Learning?

Machine Learning is a subset of artificial intelligence that enables computers to learn and make decisions from data without being explicitly programmed for every scenario.

### Types of Machine Learning

**1. Supervised Learning**
- Uses labeled training data
- Examples: Classification, Regression
- Algorithms: Linear Regression, Random Forest, SVM

**2. Unsupervised Learning**
- Works with unlabeled data
- Examples: Clustering, Dimensionality Reduction
- Algorithms: K-Means, PCA, DBSCAN

**3. Reinforcement Learning**
- Learns through interaction and feedback
- Examples: Game AI, Robotics
- Algorithms: Q-Learning, Policy Gradient

## Key Concepts

### Features and Labels

\`\`\`python
# Example dataset structure
import pandas as pd

data = {
    'age': [25, 30, 35, 40],
    'income': [50000, 60000, 70000, 80000],
    'credit_score': [720, 750, 680, 800],
    'approved': [1, 1, 0, 1]  # Label (target variable)
}

df = pd.DataFrame(data)
print(df)
\`\`\`

### Training and Testing

\`\`\`python
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Prepare features and labels
X = df[['age', 'income', 'credit_score']]
y = df['approved']

# Split data
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

# Train model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Make predictions
predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
\`\`\`

## Common Algorithms

### Linear Regression

Perfect for predicting continuous values:

\`\`\`python
from sklearn.linear_model import LinearRegression
import numpy as np

# Sample data
X = np.array([[1], [2], [3], [4], [5]])
y = np.array([2, 4, 6, 8, 10])

# Create and train model
model = LinearRegression()
model.fit(X, y)

# Make prediction
prediction = model.predict([[6]])
print(f"Prediction for x=6: {prediction[0]}")
\`\`\`

### Decision Trees

Great for interpretable classification:

\`\`\`python
from sklearn.tree import DecisionTreeClassifier
from sklearn.datasets import load_iris

# Load sample data
iris = load_iris()
X, y = iris.data, iris.target

# Train model
model = DecisionTreeClassifier()
model.fit(X, y)

# Feature importance
importance = model.feature_importances_
for i, score in enumerate(importance):
    print(f"Feature {iris.feature_names[i]}: {score:.3f}")
\`\`\`

## Model Evaluation

### Classification Metrics

- **Accuracy**: Overall correctness
- **Precision**: True positives / (True positives + False positives)
- **Recall**: True positives / (True positives + False negatives)
- **F1-Score**: Harmonic mean of precision and recall

### Regression Metrics

- **Mean Absolute Error (MAE)**
- **Mean Squared Error (MSE)**
- **R-squared (R²)**

## Best Practices

1. **Data Quality**: Clean, relevant, and sufficient data
2. **Feature Engineering**: Create meaningful features
3. **Cross-Validation**: Avoid overfitting
4. **Model Selection**: Choose appropriate algorithms
5. **Hyperparameter Tuning**: Optimize model parameters

## Getting Started

### Essential Libraries

\`\`\`python
# Data manipulation
import pandas as pd
import numpy as np

# Machine learning
from sklearn import datasets, model_selection, metrics
from sklearn.ensemble import RandomForestClassifier
from sklearn.linear_model import LinearRegression

# Visualization
import matplotlib.pyplot as plt
import seaborn as sns
\`\`\`

## Conclusion

Machine Learning offers powerful tools for solving complex problems. Start with simple algorithms, focus on understanding your data, and gradually explore more advanced techniques.`,
    excerpt: 'Discover the fundamentals of Machine Learning, from basic concepts and algorithms to practical implementation tips for beginners.',
    published_at: '2024-02-10T13:00:00Z',
    created_at: '2024-02-10T13:00:00Z',
    updated_at: '2024-02-10T13:00:00Z',
    tags: ['Machine Learning', 'Python', 'Data Science', 'AI', 'Algorithms'],
    featured_image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2032&q=80',
    is_published: true
  }
];

// Storage for new posts (in a real app, this would be a database)
let posts = [...samplePosts];
let nextId = posts.length + 1;

export class MockBlogService {
  static async getPosts(params: BlogSearchParams = {}): Promise<PaginatedResponse<BlogPost>> {
    const { search = '', tag = '', page = 1, limit = 6 } = params;
    
    // Filter posts
    let filteredPosts = posts.filter(post => post.is_published);
    
    // Apply search filter
    if (search) {
      const searchLower = search.toLowerCase();
      filteredPosts = filteredPosts.filter(post =>
        post.title.toLowerCase().includes(searchLower) ||
        post.content.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower)
      );
    }
    
    // Apply tag filter
    if (tag) {
      filteredPosts = filteredPosts.filter(post =>
        post.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
      );
    }
    
    // Sort by published date (newest first)
    filteredPosts.sort((a, b) => 
      new Date(b.published_at || b.created_at).getTime() - 
      new Date(a.published_at || a.created_at).getTime()
    );
    
    // Apply pagination
    const total = filteredPosts.length;
    const totalPages = Math.ceil(total / limit);
    const offset = (page - 1) * limit;
    const paginatedPosts = filteredPosts.slice(offset, offset + limit);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 300));
    
    return {
      data: paginatedPosts,
      total,
      page,
      limit,
      totalPages,
    };
  }

  static async getPostBySlug(slug: string): Promise<BlogPost | null> {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const post = posts.find(p => p.slug === slug && p.is_published);
    return post || null;
  }

  static async getAllTags(): Promise<string[]> {
    await new Promise(resolve => setTimeout(resolve, 100));
    
    const allTags = posts
      .filter(post => post.is_published)
      .flatMap(post => post.tags || []);
    
    return Array.from(new Set(allTags)).sort();
  }

  // Admin methods
  static async createPost(postData: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>): Promise<BlogPost> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const newPost: BlogPost = {
      ...postData,
      id: String(nextId++),
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    
    posts.unshift(newPost); // Add to beginning of array
    return newPost;
  }

  static async updatePost(id: string, updates: Partial<BlogPost>): Promise<BlogPost> {
    await new Promise(resolve => setTimeout(resolve, 300));
    
    const index = posts.findIndex(p => p.id === id);
    if (index === -1) {
      throw new Error('Post not found');
    }
    
    const updatedPost = {
      ...posts[index],
      ...updates,
      updated_at: new Date().toISOString(),
    };
    
    posts[index] = updatedPost;
    return updatedPost;
  }

  static async deletePost(id: string): Promise<void> {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const index = posts.findIndex(p => p.id === id);
    if (index === -1) {
      throw new Error('Post not found');
    }
    
    posts.splice(index, 1);
  }

  static async getAllPosts(): Promise<BlogPost[]> {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    return [...posts].sort((a, b) => 
      new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
    );
  }
}