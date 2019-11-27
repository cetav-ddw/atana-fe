import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Blog = () => (
  <StaticQuery
    query={
      graphql`{
        allMarkdownRemark {
          edges {
            node {
              html
              frontmatter {
                date (formatString: "YYYY-MM-DD")
                description
                title
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const parsedPosts = data.allMarkdownRemark.edges.map((post) => {
        const {title, date, description} = post.node.frontmatter;
        return (
          <div key={`${title}-${date}`}>
            <h2>{title}</h2>
            <p>{description}</p>
            <p>{date}</p>
            <div dangerouslySetInnerHTML={{__html: post.node.html}}/>
          </div>
        )
      })
      return (
        <div>
          <h2>Ultimas noticias en Átana.</h2>
          {parsedPosts}
        </div>
      )
    }}
  ></StaticQuery>
)

export default Blog