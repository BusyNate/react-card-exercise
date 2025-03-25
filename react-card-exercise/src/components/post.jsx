import React from 'react';
import '../style.css';

function Post({ post }) {
  return (
    <div className="card">
      <img className="image" src={post.image} alt={post.title} />
      <div className="content">
        <h3 className="date">{post.relativetime}</h3>
        <h2 className="title">{post.title}</h2>
        <p className="description">{post.content}</p>
      </div>
      <div className="footer">
        <div className="footerItem">
          <p className="footerValue">{post.read}</p>
          <p className="footerLabel">Read</p>
        </div>
        <div className="footerItem">
          <p className="footerValue">{post.views}</p>
          <p className="footerLabel">Views</p>
        </div>
        <div className="footerItem">
          <p className="footerValue">{post.comments}</p>
          <p className="footerLabel">Comments</p>
        </div>
      </div>
    </div>
  );
}

export default Post;