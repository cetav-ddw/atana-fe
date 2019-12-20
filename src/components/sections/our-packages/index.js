import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Package from '../../units/package';

import './our-packages.scss';

export default () => {
  return (
    <StaticQuery
      query={graphql`
        {
          first: allFile(
            filter: {
              sourceInstanceName: { eq: "packages" }
              name: { eq: "firstPackage" }
            }
          ) {
            edges {
              node {
                childMarkdownRemark {
                  frontmatter {
                    packageTitle
                    packagePrice
                    packageStyle
                    packageBenefits {
                      firstBenefit
                      secondBenefit
                      thirdBenefit
                      fourthBenefit
                      fifthBenefit
                    }
                  }
                }
              }
            }
          }
          second: allFile(
            filter: {
              sourceInstanceName: { eq: "packages" }
              name: { eq: "secondPackage" }
            }
          ) {
            edges {
              node {
                childMarkdownRemark {
                  frontmatter {
                    packageTitle
                    packagePrice
                    packageStyle
                    packageBenefits {
                      firstBenefit
                      secondBenefit
                      thirdBenefit
                      fourthBenefit
                      fifthBenefit
                    }
                  }
                }
              }
            }
          }
          third: allFile(
            filter: {
              sourceInstanceName: { eq: "packages" }
              name: { eq: "thirdPackage" }
            }
          ) {
            edges {
              node {
                childMarkdownRemark {
                  frontmatter {
                    packageTitle
                    packagePrice
                    packageStyle
                    packageBenefits {
                      firstBenefit
                      secondBenefit
                      thirdBenefit
                      fourthBenefit
                      fifthBenefit
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={packageData => {
        const firstPackage = packageData.first.edges['0'].node.childMarkdownRemark.frontmatter;
        const secondPackage = packageData.second.edges['0'].node.childMarkdownRemark.frontmatter;
        const thirdPackage = packageData.third.edges['0'].node.childMarkdownRemark.frontmatter;
        const bundlerPackage = [firstPackage, secondPackage, thirdPackage];
        const bundle = bundlerPackage.map((bundle, id) => {
          return <Package data={bundle} key={`bundle-${id}`} />;
        });
        return (
          <section className="section__wrapper">
            <h2 className="section__title">Nuestros servicios</h2>
            <div className="section__bundler">{bundle}</div>
          </section>
        );
      }}
    ></StaticQuery>
  );
};
