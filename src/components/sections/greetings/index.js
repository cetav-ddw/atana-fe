import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

import './greetings.scss';

const Greetings = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allFile(
            filter: {
              sourceInstanceName: { eq: "landing" }
              name: { eq: "greetings" }
            }
          ) {
            edges {
              node {
                childMarkdownRemark {
                  frontmatter {
                    sectionGreetings
                    sectionMessage
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { sectionGreetings, sectionMessage } = data.allFile.edges[
          '0'
        ].node.childMarkdownRemark.frontmatter;
        return (
          <div className="contact__greetings">
            <div className="greetings__avatar" />
            <div className="greetings__text">
              <p>{sectionGreetings}</p>
              <p>{sectionMessage}</p>
            </div>
          </div>
        );
      }}
    ></StaticQuery>
  );
};

export default Greetings;
