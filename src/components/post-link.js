import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <article className="card ">
  <Link to={post.frontmatter.path} className="post-link">

    <div className="post-title-container">
          <h2 className="post-title">
            {post.frontmatter.title}
          </h2>
          <div className="post-sub">{post.frontmatter.role}</div>
          <div className="italic">{post.frontmatter.type}</div>
          
    </div>
  </Link>

      {!!post.frontmatter.thumbnail && (
        <img className="post-link-img" src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
      )}
    {/* <header>

      <div className="post-meta">{post.frontmatter.date}</div>
    </header> */}
  </article>
)
export default PostLink