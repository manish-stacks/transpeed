const { Schema, default: mongoose } = require("mongoose");

const userSchema = new Schema(
  {
    username: String,
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    bio: String,
    password: String,
    role: String,
    isActive: Boolean,
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.models.User || mongoose.model("User", userSchema);
module.exports = UserModel;
