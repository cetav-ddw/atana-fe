import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';
import Menu from '../components/sections/nav-menu';
import FooterContact from '../components/sections/footer-contact';

import '../styles/blog.scss';

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark;
    const siteTitle = this.props.data.site.siteMetadata.title;
    const { previous, next } = this.props.pageContext;
    return (
      <React.Fragment>
        <SEO title={post.frontmatter.title} />
        <div className="menu">
          <Menu />
        </div>
        <div className="section__wrapper">
          <h1 className="post__main-title">{post.frontmatter.title}</h1>
          <p className="post__description post__main-description">
            {post.frontmatter.description}
          </p>
          <p className="post__date post__main-date">{post.frontmatter.date}</p>
          {post.frontmatter.postImage !== null && (
            <img
              src={post.frontmatter.postImage}
              className="post__image post__main-mage"
              alt=""
            />
          )}
          <div
            dangerouslySetInnerHTML={{ __html: post.html }}
            className="post__main-content"
          />
          {post.frontmatter.postVideo !== null && (
            <div className="post__video-wrap">
              <iframe
                title="video"
                src={`https://www.youtube.com/embed/${post.frontmatter.postVideo}`}
              ></iframe>
            </div>
          )}
        </div>
        <FooterContact />
      </React.Fragment>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        postImage
        postVideo
      }
    }
  }
`;
