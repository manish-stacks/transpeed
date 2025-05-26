
import BlogPostPageClient from "./BlogPostPageClient";

export async function generateMetadata({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_URL}/api/blogs/${params.slug}`,
    {
      cache: "no-store", 
    }
  );

  const data = await res.json();
  const post = data.blog;

  return {
    title: post?.metaTitle || post?.title,
    description: post?.metaDescription,
    keywords: post?.metaKeywords,
    openGraph: {
      title: post?.metaTitle,
      description: post?.metaDescription,
    },
    twitter: {
      title: post?.twitterTitle,
      description: post?.twitterDescription,
    },
  };
}

export default function BlogDetailPage({ params }) {
  return <BlogPostPageClient slug={params.slug} />;
}
