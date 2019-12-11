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
          <div className="post__wrapper">
            <h1 className="post__title">{post.frontmatter.title}</h1>
            <p className="post__date post__preview">{post.frontmatter.date}</p>
            {post.frontmatter.postImage !== '' && (
              <img
                src={post.frontmatter.postImage}
                className="post__image"
                alt=""
              />
            )}
            <p dangerouslySetInnerHTML={{ __html: post.html }} />
          </div>
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
      }
    }
  }
`;
