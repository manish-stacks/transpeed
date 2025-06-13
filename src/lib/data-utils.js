// Mock data to simulate API responses
// This would be replaced with actual API calls in a real application

// Blogs Categories
export const getBlogsCategories = async () => {
  return [
    { id: 1, name: "Technology", slug: "technology", count: 15 },
    { id: 2, name: "Business", slug: "business", count: 8 },
    { id: 3, name: "Marketing", slug: "marketing", count: 12 },
    { id: 4, name: "Design", slug: "design", count: 7 },
    { id: 5, name: "Development", slug: "development", count: 19 },
  ];
};

export const getBlogsCategoryById = async (id) => {
  const categories = await getBlogsCategories();
  return categories.find(category => category.id === parseInt(id)) || null;
};

// Blogs
export const getBlogs = async () => {
  return [
    { 
      id: 1, 
      title: "Introduction to Next.js 13", 
      slug: "introduction-to-nextjs-13", 
      excerpt: "Learn about the new features in Next.js 13 and how to use them.",
      category: "Technology",
      status: "published",
      author: "John Doe",
      date: "2023-12-15",
      image: "https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg"
    },
    { 
      id: 2, 
      title: "Marketing Strategies for 2023", 
      slug: "marketing-strategies-2023", 
      excerpt: "Discover the top marketing strategies that will dominate in 2023.",
      category: "Marketing",
      status: "published",
      author: "Jane Smith",
      date: "2023-12-10",
      image: "https://images.pexels.com/photos/6476582/pexels-photo-6476582.jpeg"
    },
    { 
      id: 3, 
      title: "UX Design Principles", 
      slug: "ux-design-principles", 
      excerpt: "A comprehensive guide to user experience design principles.",
      category: "Design",
      status: "draft",
      author: "Alice Johnson",
      date: "2023-12-05",
      image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
    },
    { 
      id: 4, 
      title: "React vs Vue in 2023", 
      slug: "react-vs-vue-2023", 
      excerpt: "A comparison of React and Vue frameworks in 2023.",
      category: "Development",
      status: "published",
      author: "Bob Williams",
      date: "2023-11-28",
      image: "https://images.pexels.com/photos/4974912/pexels-photo-4974912.jpeg"
    },
    { 
      id: 5, 
      title: "Business Growth Tactics", 
      slug: "business-growth-tactics", 
      excerpt: "Proven tactics to grow your business in a competitive market.",
      category: "Business",
      status: "published",
      author: "Michael Brown",
      date: "2023-11-20",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
    },
  ];
};

export const getBlogById = async (id) => {
  const blogs = await getBlogs();
  return blogs.find(blog => blog.id === parseInt(id)) || null;
};

// Pages
export const getPages = async () => {
  return [
    { 
      id: 1, 
      title: "About Us", 
      slug: "about-us", 
      status: "published",
      lastUpdated: "2023-12-10",
      updatedBy: "Admin"
    },
    { 
      id: 2, 
      title: "Contact Us", 
      slug: "contact-us", 
      status: "published",
      lastUpdated: "2023-12-08",
      updatedBy: "Admin"
    },
    { 
      id: 3, 
      title: "Services", 
      slug: "services", 
      status: "published",
      lastUpdated: "2023-12-05",
      updatedBy: "John Doe"
    },
    { 
      id: 4, 
      title: "Privacy Policy", 
      slug: "privacy-policy", 
      status: "published",
      lastUpdated: "2023-11-30",
      updatedBy: "Admin"
    },
    { 
      id: 5, 
      title: "Terms and Conditions", 
      slug: "terms-and-conditions", 
      status: "published",
      lastUpdated: "2023-11-30",
      updatedBy: "Admin"
    },
  ];
};

export const getPageById = async (id) => {
  const pages = await getPages();
  return pages.find(page => page.id === parseInt(id)) || null;
};

// Enquiries
export const getEnquiries = async () => {
  return [
    { 
      id: 1, 
      name: "John Smith", 
      email: "john@example.com",
      phone: "123-456-7890",
      subject: "Product Inquiry",
      message: "I'm interested in your services. Could you provide more information?",
      status: "new",
      date: "2023-12-15"
    },
    { 
      id: 2, 
      name: "Sarah Johnson", 
      email: "sarah@example.com",
      phone: "234-567-8901",
      subject: "Support Request",
      message: "I'm having issues with my account. Please help.",
      status: "in-progress",
      date: "2023-12-14"
    },
    { 
      id: 3, 
      name: "Michael Brown", 
      email: "michael@example.com",
      phone: "345-678-9012",
      subject: "Partnership Opportunity",
      message: "I'd like to discuss a potential partnership with your company.",
      status: "completed",
      date: "2023-12-12"
    },
    { 
      id: 4, 
      name: "Emily Davis", 
      email: "emily@example.com",
      phone: "456-789-0123",
      subject: "Quote Request",
      message: "Could you provide a quote for your premium services?",
      status: "new",
      date: "2023-12-10"
    },
    { 
      id: 5, 
      name: "James Wilson", 
      email: "james@example.com",
      phone: "567-890-1234",
      subject: "Feedback",
      message: "I wanted to share some feedback about my recent experience with your company.",
      status: "completed",
      date: "2023-12-05"
    },
  ];
};

export const getEnquiryById = async (id) => {
  const enquiries = await getEnquiries();
  return enquiries.find(enquiry => enquiry.id === parseInt(id)) || null;
};

// Media
export const getMedia = async () => {
  return [
    { 
      id: 1, 
      name: "hero-banner.jpg", 
      url: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
      type: "image/jpeg",
      size: "1.2 MB",
      dimensions: "1920x1080",
      uploadedBy: "Admin",
      uploadedOn: "2023-12-15"
    },
    { 
      id: 2, 
      name: "product-demo.mp4", 
      url: "https://example.com/product-demo.mp4",
      type: "video/mp4",
      size: "15.8 MB",
      dimensions: "1280x720",
      uploadedBy: "John Doe",
      uploadedOn: "2023-12-12"
    },
    { 
      id: 3, 
      name: "team-photo.jpg", 
      url: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg",
      type: "image/jpeg",
      size: "2.5 MB",
      dimensions: "2048x1365",
      uploadedBy: "Admin",
      uploadedOn: "2023-12-10"
    },
    { 
      id: 4, 
      name: "company-logo.png", 
      url: "https://images.pexels.com/photos/5825562/pexels-photo-5825562.jpeg",
      type: "image/png",
      size: "0.5 MB",
      dimensions: "500x500",
      uploadedBy: "Admin",
      uploadedOn: "2023-12-05"
    },
    { 
      id: 5, 
      name: "brochure.pdf", 
      url: "https://example.com/brochure.pdf",
      type: "application/pdf",
      size: "3.7 MB",
      dimensions: "N/A",
      uploadedBy: "Jane Smith",
      uploadedOn: "2023-12-01"
    },
  ];
};