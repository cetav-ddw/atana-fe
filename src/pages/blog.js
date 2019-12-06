import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import SEO from '../components/seo';
import Menu from '../components/sections/nav-menu';
import FooterContact from '../components/sections/footer-contact';
import '../styles/blog.scss';

const BlogIndex = () => (
  <StaticQuery
    query={graphql`
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
    `}
    render={data => {
      const posts = data.allMarkdownRemark.edges;

      const post = posts.map(({ node }) => {
        const title = node.frontmatter.title;
        const path = node.fields.slug.replace(/\/$/gm, '');
        return (
          <div className="section__wrapper">
            <div key={node.fields.slug} className="post__wrapper">
              <Link to={path} className="post">
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
        );
      });
      return (
        <React.Fragment>
          <SEO title="Blog" />
          <div className="menu">
            <Menu />
          </div>
          <div className="section__wrapper">
            <h2 className="blog__title">Átana blog</h2>
          </div>
          {post}
          <FooterContact />
        </React.Fragment>
      );
    }}
  ></StaticQuery>
);

export default BlogIndex;
