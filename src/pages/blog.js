import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import SEO from '../components/seo';
import Menu from '../components/sections/nav-menu';
import FooterContact from '../components/sections/footer-contact';

import '../styles/blog.scss';

const Blog = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allFile(filter: { sourceInstanceName: { eq: "posts" } }) {
            edges {
              node {
                childMarkdownRemark {
                  frontmatter {
                    title
                    date(formatString: "MMMM DD, YYYY")
                    description
                    postImage
                  }
                  fields {
                    slug
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        console.log(data);
        const postsList = data.allFile.edges.map(({ node }) => {
          const { fields, frontmatter } = node.childMarkdownRemark;
          const title = frontmatter.title;
          const path = fields.slug.replace(/\/$/gm, '');
          return (
            <div className="section__wrapper" key={path}>
              <div className="post__wrapper">
                <Link to={path} className="post__link">
                  <h4 className="post__title">{title}</h4>
                </Link>
                {frontmatter.postImage !== '' && (
                  <img
                    src={frontmatter.postImage}
                    className="post__image"
                    alt=""
                  />
                )}
                <small className="post__date post__preview">
                  {frontmatter.date}
                </small>
                <p
                  dangerouslySetInnerHTML={{
                    __html: frontmatter.description,
                  }}
                  className="post__preview"
                />
              </div>
            </div>
          );
        });
        return (
          <>
            <SEO title="Blog" />
            <div className="menu">
              <Menu />
            </div>
            <div className="section__wrapper">
              <h2 className="blog__title">Átana blog</h2>
            </div>
            {postsList}
            <FooterContact />
          </>
        );
      }}
    ></StaticQuery>
  );
};

export default Blog;
