import React from "react"
import { Link, graphql } from "gatsby"
import SEO from "../components/seo"
import Menu from "../components/nav-menu/nav-menu"
import Footer from "../components/footer/footer"
import "../styles/blog/section-blog.scss"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges

    return posts.map(({ node }) => {
      const title = node.frontmatter.title || node.fields.slug

      return (
        <React.Fragment>
          <SEO title="Home" />
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
          <Footer />
        </React.Fragment>
      )
    })
  }
}

export default BlogIndex

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
`
