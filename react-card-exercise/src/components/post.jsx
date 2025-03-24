function Post ({ post }) {
  return (
    <div className="post">
        <img src={post.image} alt={post.title} className="post-image"></img>
        <h3  className="post-time">{post.relativetime}</h3>
        <h2 className="post-title">{post.title}</h2>
        <p className="post-content">{post.content}</p>
        <div>
        <span>{post.read} Read</span>
            <span>{post.views} Views</span>
            <span >{post.comments} Comments</span>
        </div>

      
    </div>
  );
}

export { Post }; 