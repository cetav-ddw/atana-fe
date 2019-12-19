import React, { useEffect } from 'react';
import { StaticQuery, graphql } from 'gatsby';
import ourMissionCanvas from '../../../utils/our-mission-canvas';

import './our-mission.scss';

const OurMission = () => {
  useEffect(ourMissionCanvas);

  return (
    <StaticQuery
      query={graphql`
        {
          allFile(
            filter: {
              sourceInstanceName: { eq: "landing" }
              name: { eq: "footer" }
            }
          ) {
            edges {
              node {
                childMarkdownRemark {
                  frontmatter {
                    topSection {
                      topSectionTitle
                      topSectionSlogan
                    }
                    bottomSection {
                      bottomSectionTitle
                      bottomSectionSlogan
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const { topSection, bottomSection } = data.allFile.edges[
          '0'
        ].node.childMarkdownRemark.frontmatter;

        return (
          <section className="our-mission">
            <canvas className="our-mission__canvas"></canvas>
            <div className="section__wrapper">
              <h2 className="our-mission__title">
                {topSection.topSectionTitle}
              </h2>
              <p className="our-mission__paragraph">
                {topSection.topSectionSlogan}
              </p>
              <div className="our-mission__svg-group svg-group--spacing">
                <div className="our-mission__svg light-bulb" />
                <div className="our-mission__svg light-bulb" />
                <div className="our-mission__svg paper-plane" />
                <div className="our-mission__svg planet" />
              </div>
              <h2 className="our-mission__title">
                {bottomSection.bottomSectionTitle}
              </h2>
              <p className="our-mission__paragraph">
                {bottomSection.bottomSectionSlogan}
              </p>
              <div className="our-mission__svg-group">
                <div className="our-mission__svg check" />
                <div className="our-mission__svg check" />
                <div className="our-mission__svg check" />
                <div className="our-mission__svg check" />
                <div className="our-mission__svg check" />
                <div className="our-mission__svg check" />
              </div>
              <div className="our-mission__logo" />
              <div className="cta">
                <div className="our-mission__svg cta__paper-plane--dark" />
                <div className="our-mission__svg cta__paper-plane" />
                <button className="cta__btn">Crea tu comunicado</button>
              </div>
            </div>
          </section>
        );
      }}
    ></StaticQuery>
  );
};

export default OurMission;
