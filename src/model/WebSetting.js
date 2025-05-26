const { Schema, default: mongoose } = require("mongoose");

const settingSchema = new Schema(
  {
    siteName: {
      type: String,
      required: [true, "Please provide a site name"],
      trim: true,
    },
    siteDescription: {
      type: String,
      required: [true, "Please provide a site description"],
    },
    siteLogo: {
      url: String,
      public_id: String,
      fileType: String,
    },
    siteFavicon: {
      url: String,
      public_id: String,
      fileType: String,
    },
    contactEmail: {
      type: String,
      required: [true, "Please provide a contact email"],
    },
    socialLinks: {
      facebook: String,
      twitter: String,
      instagram: String,
      linkedin: String,
    },
    siteDescription:String,
    siteKeywords: String,
    ogTitle: String,
    ogDescription: String,
    ogImage: {
      url: String,
      public_id: String,
      fileType: String,
    },
    headScript: String,
    bodyScript: String,
    footerScript: String,
  },
  { timestamps: true }
);

const WebSetting = mongoose.models.WebSetting || mongoose.model("WebSetting", settingSchema);
export default WebSetting;
