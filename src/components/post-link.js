import React from "react"
import { Link } from "gatsby"

const PostLink = ({ post }) => (
  <article className="card ">
  <Link to={post.frontmatter.path} className="post-link">

    <div className="post-title-container">
          <h2 className="post-title">
          {post.frontmatter.title}

      </h2>
    </div>
  </Link>
    <Link to={post.frontmatter.path}>
      {!!post.frontmatter.thumbnail && (
        <img src={post.frontmatter.thumbnail} alt={post.frontmatter.title + "- Featured Shot"} />
      )}
    </Link>
    {/* <header> */}

      {/* <div className="post-meta">{post.frontmatter.date}</div> */}
    {/* </header> */}
  </article>
)
export default PostLink
