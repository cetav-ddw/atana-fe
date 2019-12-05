import React from 'react';
import { Link, graphql } from 'gatsby';
import SEO from '../components/seo';
import Menu from '../components/sections/nav-menu';
import FooterContact from '../components/sections/footer-contact';

import '../styles/blog.scss';

class BlogPage extends React.Component {
  render() {
    const { data } = this.props;
    const posts = data.allMarkdownRemark.edges;

    return posts.map(({ node }) => {
      // ToDo porque el OR? el slug es algo como mi-post, como eso
      // va a ser el title?
      const title = node.frontmatter.title || node.fields.slug;

      return (
        <>
          <SEO title="Blog" />
          <div className="menu">
            <Menu />
          </div>
          <div className="section__wrapper">
            <h2 className="blog__title">Átana blog</h2>
            <div key={node.fields.slug} className="post__wrapper">
              <Link to={node.fields.slug} className="post">
                <h4 className="post__title">{title}</h4>
                <small className="post__date post__preview">
                  {node.frontmatter.date}
                </small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                  className="post__preview"
                />
              </Link>
            </div>
          </div>
          <FooterContact />
        </>
      );
    });
  }
}

export default BlogPage;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
          }
        }
      }
    }
  }
`;
