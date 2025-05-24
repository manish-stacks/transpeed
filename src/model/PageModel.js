import mongoose from "mongoose";
import slugify from "slugify";

const pageSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please provide a page title"],
    trim: true,
  },
  slug: {
    type: String,
    unique: true,
  },
  content: {
    type: String,
    required: [true, "Please provide page content"],
  },
  status: {
    type: String,
    enum: ["draft", "published"],
    default: "draft",
  },
  featured: {
    type: Boolean,
    default: false,
  },
  image: String,
  // SEO Fields
  metaTitle: String,
  metaDescription: String,
  metaKeywords: String,
  ogTitle: String,
  ogDescription: String,
  ogImage: String,
  twitterTitle: String,
  twitterDescription: String,
  twitterImage: String,
  canonicalUrl: String,
  structuredData: String,
  updatedBy: {
    type: String,
    default: "Admin",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

// Create slug from title before saving
pageSchema.pre("save", function (next) {
  this.slug = slugify(this.title, { lower: true });
  this.updatedAt = Date.now();
  next();
});

const PageModel = mongoose.models.Page || mongoose.model("Page", pageSchema);
export default PageModel;
