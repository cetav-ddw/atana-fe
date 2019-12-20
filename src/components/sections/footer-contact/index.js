import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';

const FooterContact = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allFile(
            filter: {
              sourceInstanceName: { eq: "landing" }
              name: { eq: "social" }
            }
          ) {
            edges {
              node {
                childMarkdownRemark {
                  frontmatter {
                    socialFacebook
                    socialInstagram
                    socialWhatsapp
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { frontmatter } = data.allFile.edges[
          '0'
        ].node.childMarkdownRemark;

        return (
          <div className="footer__gradient">
            <div className="contact__social">
              <Link to="/">
                <img
                  src="../atana-logo.svg"
                  alt="Átana"
                  className="footer__logo"
                />
              </Link>
              <div className="social__container">
                <p>Síguenos en nuestras redes sociales:</p>
                {frontmatter.socialFacebook !== '-' && (
                  <Link
                    to={frontmatter.socialFacebook}
                    className="social social--facebook"
                  />
                )}
                {frontmatter.socialInstagram !== '-' && (
                  <Link
                    to={frontmatter.socialInstagram}
                    className="social social--instagram"
                  />
                )}
                {frontmatter.socialWhatsapp !== '-' && (
                  <Link
                    to={frontmatter.socialWhatsapp}
                    className="social social--whatsapp"
                  />
                )}
              </div>
            </div>
          </div>
        );
      }}
    ></StaticQuery>
  );
};

export default FooterContact;
