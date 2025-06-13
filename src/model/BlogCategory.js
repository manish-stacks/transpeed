import mongoose, { Schema } from "mongoose";

const BlogCategorySchema = new Schema(
  {
    name: { type: String, required: true, trim: true, unique: true },
    slug: { type: String, required: true, unique: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const BlogCategory =
  mongoose.models.BlogCategory ||
  mongoose.model("BlogCategory", BlogCategorySchema);

export default BlogCategory;
