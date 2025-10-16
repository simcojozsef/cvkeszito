import React from "react";
import { useNavigate } from "react-router-dom";
import posts from "../PostData/posts"; // Import the posts array from posts.js
import "./Blog.css";
import Footer from "../Components/Footer";

export default function Blog() {
  const navigate = useNavigate();

  const handleCardClick = (slug) => {
    navigate(`/blog/${slug}`);
  };

  return (
    <>
      <section className="blog-section">
        <h1>Blog</h1>
        <p className="subtitle">Álláskereséssel kapcsolatos cikkeink</p>

        <div className="blog-container">
          {posts.map((post) => (
            <div
              key={post.id}
              className="blog-card"
              onClick={() => handleCardClick(post.slug)}
              style={{ cursor: "pointer" }}
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="blog-card-image"
                />
              )}
              <div
                className="post-title-listing-item"
                dangerouslySetInnerHTML={{ __html: post.title }}
              />
              <p className="date">{post.date}</p>
              <p className="excerpt">{post.excerpt}</p>
              <button
                className="read-more-btn"
                onClick={(e) => {
                  e.stopPropagation(); 
                  handleCardClick(post.slug);
                }}
              >
                Elolvasom
              </button>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
