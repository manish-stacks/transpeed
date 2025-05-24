import { NextRequest, NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import { User } from '@/lib/models/user';
import { Blog } from '@/lib/models/blog';
import { createInitialAdminUser } from '@/lib/auth';

// Seed database
export async function GET(request) {
  try {
    // Connect to database
    await connectToDatabase();
    
    // Create admin user
    await createInitialAdminUser();
    
    // Find admin user
    const admin = await User.findOne({ role: 'admin' });
    
    if (!admin) {
      throw new Error('Admin user not found');
    }
    
    // Check if blogs already exist
    const blogsCount = await Blog.countDocuments();
    
    if (blogsCount > 0) {
      return NextResponse.json({
        message: 'Database already seeded',
        blogs: blogsCount,
      });
    }
    
    // Create sample blogs
    const blogs = [
      {
        title: 'Getting Started with Next.js',
        slug: 'getting-started-with-nextjs',
        content: `
# Getting Started with Next.js

Next.js is a React framework that enables server-side rendering and static site generation.

## Why Next.js?

Next.js provides a great developer experience with features like:

- Server-side rendering
- Static site generation
- API routes
- File-based routing
- Built-in CSS and Sass support
- Fast refresh
- Image optimization

## Installation

To create a new Next.js app, run:

\`\`\`bash
npx create-next-app@latest my-app
\`\`\`

## Pages

In Next.js, a page is a React Component exported from a file in the \`pages\` directory.

\`\`\`jsx
// pages/index.js
export default function Home() {
  return <h1>Hello, Next.js!</h1>
}
\`\`\`

## Routing

Next.js has a file-system based router built on the concept of pages.

When a file is added to the \`pages\` directory, it's automatically available as a route.

## Data Fetching

Next.js has two forms of pre-rendering: Static Generation and Server-side Rendering.

\`\`\`jsx
// Static Generation with getStaticProps
export async function getStaticProps() {
  const res = await fetch('https://api.example.com/data')
  const data = await res.json()

  return {
    props: { data }
  }
}
\`\`\`

## Conclusion

Next.js is a powerful framework for building React applications with server-side rendering and static site generation capabilities.
        `,
        excerpt: 'Learn how to get started with Next.js, a React framework for production-grade applications.',
        coverImage: 'https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        author: admin._id,
        tags: ['Next.js', 'React', 'JavaScript'],
        category: 'Development',
        status: 'published',
        featured: true,
        publishedAt: new Date(),
      },
      {
        title: 'Mastering CSS Grid Layout',
        slug: 'mastering-css-grid-layout',
        content: `
# Mastering CSS Grid Layout

CSS Grid Layout is a two-dimensional layout system designed for the web.

## Basic Concepts

Grid layout consists of a parent element (grid container) with one or more child elements (grid items).

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
\`\`\`

## Grid Container Properties

Some important grid container properties:

- \`display: grid\` - Defines the element as a grid container
- \`grid-template-columns\` - Defines the columns of the grid
- \`grid-template-rows\` - Defines the rows of the grid
- \`grid-gap\` - Defines the gap between grid items
- \`justify-items\` - Aligns grid items along the row axis
- \`align-items\` - Aligns grid items along the column axis

## Grid Item Properties

Grid items can be positioned and sized using these properties:

- \`grid-column\` - Specifies which column(s) the item will span
- \`grid-row\` - Specifies which row(s) the item will span
- \`justify-self\` - Aligns the item inside its cell along the row axis
- \`align-self\` - Aligns the item inside its cell along the column axis

## Example

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.item1 {
  grid-column: 1 / 3;
  grid-row: 1;
}

.item2 {
  grid-column: 3;
  grid-row: 1 / 3;
}
\`\`\`

## Conclusion

CSS Grid Layout is a powerful tool for creating complex web layouts with clean, readable CSS.
        `,
        excerpt: 'A comprehensive guide to CSS Grid Layout, a powerful system for creating flexible and responsive web designs.',
        coverImage: 'https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        author: admin._id,
        tags: ['CSS', 'Web Design', 'Layout'],
        category: 'Design',
        status: 'published',
        featured: false,
        publishedAt: new Date(),
      },
      {
        title: 'Introduction to TypeScript',
        slug: 'introduction-to-typescript',
        content: `
# Introduction to TypeScript

TypeScript is a strongly typed programming language that builds on JavaScript.

## Why TypeScript?

TypeScript offers several advantages over JavaScript:

- Static typing
- Better IDE support with autocompletion
- Earlier detection of errors
- Improved code organization through interfaces and types
- Better documentation of code

## Basic Types

TypeScript supports several basic types:

\`\`\`typescript
// Boolean
let isDone: boolean = false;

// Number
let decimal: number = 6;

// String
let color: string = "blue";

// Array
let list: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

// Tuple
let x: [string, number] = ["hello", 10];

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// Any
let notSure: any = 4;

// Void
function warnUser(): void {
  console.log("This is a warning message");
}
\`\`\`

## Interfaces

Interfaces define the structure that objects must follow:

\`\`\`typescript
interface User {
  name: string;
  id: number;
  email?: string; // Optional property
  readonly createdAt: Date; // Read-only property
}

function createUser(user: User): User {
  return user;
}
\`\`\`

## Classes

TypeScript supports class-based object-oriented programming:

\`\`\`typescript
class Person {
  private name: string;
  
  constructor(name: string) {
    this.name = name;
  }
  
  greet(): string {
    return \`Hello, my name is \${this.name}\`;
  }
}
\`\`\`

## Conclusion

TypeScript is a powerful extension of JavaScript that adds static typing and other features to help build more robust applications.
        `,
        excerpt: 'Learn the basics of TypeScript, a typed superset of JavaScript that compiles to plain JavaScript.',
        coverImage: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        author: admin._id,
        tags: ['TypeScript', 'JavaScript', 'Programming'],
        category: 'Development',
        status: 'published',
        featured: true,
        publishedAt: new Date(),
      },
      {
        title: 'The Future of Web Development',
        slug: 'the-future-of-web-development',
        content: `
# The Future of Web Development

Web development is constantly evolving with new technologies and approaches.

## Current Trends

Several trends are shaping the future of web development:

1. **Jamstack Architecture**
   - Static site generation
   - Headless CMS
   - Serverless functions

2. **Web Components**
   - Custom elements
   - Shadow DOM
   - HTML templates

3. **Progressive Web Apps (PWAs)**
   - Offline capabilities
   - App-like experience
   - Push notifications

4. **AI and Machine Learning**
   - Chatbots and virtual assistants
   - Personalized content
   - Predictive analytics

5. **WebAssembly**
   - Near-native performance
   - Language interoperability
   - Complex applications in the browser

## Emerging Technologies

Some emerging technologies to watch:

### Web3 and Blockchain

Decentralized applications (dApps) and blockchain integration are becoming more mainstream in web development.

### AR/VR on the Web

WebXR is enabling immersive experiences directly in the browser without plugins.

### Low-Code and No-Code Platforms

These platforms are making web development more accessible to non-developers.

## Skills for the Future

To stay relevant, web developers should focus on:

- JavaScript frameworks (React, Vue, Svelte)
- TypeScript
- GraphQL
- Serverless architecture
- Performance optimization
- Accessibility
- Security

## Conclusion

The future of web development is exciting and full of opportunities. Staying current with evolving technologies and approaches will be key to success.
        `,
        excerpt: 'Explore the latest trends and technologies shaping the future of web development.',
        coverImage: 'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        author: admin._id,
        tags: ['Web Development', 'Future Tech', 'Trends'],
        category: 'Technology',
        status: 'draft',
        featured: false,
      },
      {
        title: 'Building Accessible Web Applications',
        slug: 'building-accessible-web-applications',
        content: `
# Building Accessible Web Applications

Web accessibility ensures that websites and applications are usable by people with disabilities.

## Why Accessibility Matters

- **Ethical Considerations**: Everyone should have equal access to information and functionality
- **Legal Requirements**: Many countries have laws requiring digital accessibility
- **Business Benefits**: Reaching a wider audience and improving SEO
- **Better UX for Everyone**: Accessibility improvements often benefit all users

## WCAG Guidelines

The Web Content Accessibility Guidelines (WCAG) provide a framework for accessibility:

1. **Perceivable**
   - Provide text alternatives for non-text content
   - Provide captions and alternatives for multimedia
   - Make content adaptable and distinguishable

2. **Operable**
   - Make all functionality available from a keyboard
   - Give users enough time to read and use content
   - Don't use content that causes seizures
   - Help users navigate and find content

3. **Understandable**
   - Make text readable and understandable
   - Make content appear and operate in predictable ways
   - Help users avoid and correct mistakes

4. **Robust**
   - Maximize compatibility with current and future tools

## Practical Tips

### Semantic HTML

Use appropriate HTML elements for their intended purpose:

\`\`\`html
<!-- Bad -->
<div class="button" onclick="submit()">Submit</div>

<!-- Good -->
<button type="submit">Submit</button>
\`\`\`

### Focus Management

Ensure keyboard navigation works properly:

\`\`\`css
/* Make focus visible */
:focus {
  outline: 2px solid blue;
  outline-offset: 2px;
}
\`\`\`

### ARIA Attributes

Use ARIA when necessary to enhance accessibility:

\`\`\`html
<button 
  aria-expanded="false"
  aria-controls="menu-content"
>
  Menu
</button>
\`\`\`

### Testing

Regularly test your application for accessibility:

- Use keyboard navigation
- Try screen readers (VoiceOver, NVDA, JAWS)
- Use automated tools (Lighthouse, axe)
- Conduct user testing with people with disabilities

## Conclusion

Building accessible web applications is not just the right thing to do—it creates a better experience for all users and expands your audience.
        `,
        excerpt: 'Learn how to build web applications that are accessible to all users, including those with disabilities.',
        coverImage: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        author: admin._id,
        tags: ['Accessibility', 'Web Development', 'Inclusive Design'],
        category: 'Development',
        status: 'published',
        featured: false,
        publishedAt: new Date(),
      },
      {
        title: 'State Management in React Applications',
        slug: 'state-management-in-react-applications',
        content: `
# State Management in React Applications

Managing state effectively is one of the most important aspects of building React applications.

## Local State

React components can manage their own state using the \`useState\` hook:

\`\`\`jsx
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
\`\`\`

## Context API

For sharing state between components without prop drilling:

\`\`\`jsx
// Create a context
const ThemeContext = React.createContext('light');

// Provider
function App() {
  const [theme, setTheme] = useState('light');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <MainContent />
    </ThemeContext.Provider>
  );
}

// Consumer
function ThemedButton() {
  const { theme, setTheme } = useContext(ThemeContext);
  
  return (
    <button
      style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#333' : '#fff' }}
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      Toggle Theme
    </button>
  );
}
\`\`\`

## Redux

For complex applications with many components sharing state:

\`\`\`jsx
// Action Types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Reducer
function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

// Store
const store = createStore(counterReducer);

// Component
function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: INCREMENT })}>Increment</button>
      <button onClick={() => dispatch({ type: DECREMENT })}>Decrement</button>
    </div>
  );
}
\`\`\`

## Zustand

A minimalist state management solution:

\`\`\`jsx
import create from 'zustand';

const useStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 })),
}));

function Counter() {
  const { count, increment, decrement } = useStore();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
\`\`\`

## When to Use Each Approach

- **Local State**: For component-specific state
- **Context API**: For state shared among a few components
- **Redux**: For complex applications with many components sharing state
- **Zustand/Jotai/Recoil**: For simpler global state with less boilerplate

## Conclusion

Choose the right state management solution based on your application's complexity and needs. Start simple and add complexity only when necessary.
        `,
        excerpt: 'A comparison of different state management approaches in React applications, from local state to global solutions.',
        coverImage: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        author: admin._id,
        tags: ['React', 'State Management', 'JavaScript'],
        category: 'Development',
        status: 'published',
        featured: false,
        publishedAt: new Date(),
      },
    ];
    
    // Insert blogs
    await Blog.insertMany(blogs);
    
    return NextResponse.json({
      message: 'Database seeded successfully',
      blogs: blogs.length,
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || 'Failed to seed database' },
      { status: 500 }
    );
  }
}