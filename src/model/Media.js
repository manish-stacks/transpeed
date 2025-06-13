import mongoose from 'mongoose';

const mediaSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a file name'],
    trim: true,
  },
  url: {
    type: String,
    required: [true, 'Please provide a file URL'],
  },
  type: {
    type: String,
    required: [true, 'Please provide a file type'],
  },
  size: {
    type: String,
    required: [true, 'Please provide file size'],
  },
  dimensions: String,
  uploadedBy: {
    type: String,
    default: 'Admin',
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

mediaSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

const Media = mongoose.models.Media || mongoose.model('Media', mediaSchema);
export default Media;
