import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import posts from "../PostData/posts";
import "./PostPage.css";
import Footer from "../Components/Footer";

export default function PostPage() {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" />;
  }

  return (
    <>
      <div className="post-page container">
        <div className="post-title" dangerouslySetInnerHTML={{ __html: post.title }}/>
        <p><em>{post.date}</em></p>
        <div className="post-image-container">
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="post-image"
          />
        )}
        </div>
        <div className="post-content-wrapper">
          <p>{post.excerpt}</p>
          <div
            className="post-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          <Link to="/blog">← Vissza a bloghoz</Link>
        </div>
      </div>
      <Footer/>
    </>
  );
}
