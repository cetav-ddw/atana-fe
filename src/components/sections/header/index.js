import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import { Link } from 'gatsby';
import Menu from '../nav-menu';
import Button from '../../units/button';
import headerAnimations from './header-animation';
import './header.scss';

const Header = () => {
  const HeaderAnimation = headerAnimations();
  return (
    <StaticQuery
      query={graphql`
        {
          allFile(
            filter: {
              sourceInstanceName: { eq: "landing" }
              name: { eq: "head" }
            }
          ) {
            edges {
              node {
                childMarkdownRemark {
                  frontmatter {
                    intro
                    mid
                    outro
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { intro, mid, outro } = data.allFile.edges[
          '0'
        ].node.childMarkdownRemark.frontmatter;
        return (
          <div className="header">
            <div className="section__wrapper">
              <Menu />
              <h1 className="header__title">
                <span className="header__title-span">{intro}</span> {mid}
              </h1>
              <p className="header__text">{outro} </p>
              <Link to="" className="header__btn btn btn--primary">
                Suscribirse
              </Link>
              <div className="header__animation">
                <HeaderAnimation />
              </div>
            </div>
            <div className="header__arrow">
              <Button customStyle="arrow__btn" />
            </div>
          </div>
        );
      }}
    ></StaticQuery>
  );
};
export default Header;
