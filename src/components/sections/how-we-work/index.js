import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import InfoCard from '../info-card';
import Comunicado from '../../../animations/comunicado/comunicado';
import Media from '../../../animations/media/media';
import Graphic from '../../../animations/graphic/graphic';

import './how-we-work.scss';

const ContainerHWW = () => {
  return (
    <StaticQuery
      query={graphql`
        {
          allFile(
            filter: {
              sourceInstanceName: { eq: "landing" }
              name: { eq: "howWeWork" }
            }
          ) {
            edges {
              node {
                childMarkdownRemark {
                  frontmatter {
                    sectionTitle
                    firstFeature {
                      firstFeatureDescription
                      firstFeatureTitle
                    }
                    secondFeature {
                      secondFeatureDescription
                      secondFeatureTitle
                    }
                    thirdFeature {
                      thirdFeatureDescription
                      thirdFeatureTitle
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={data => {
        const {
          sectionTitle,
          firstFeature,
          secondFeature,
          thirdFeature,
        } = data.allFile.edges['0'].node.childMarkdownRemark.frontmatter;
        const cards = [
          {
            title: firstFeature.firstFeatureTitle,
            paragraph: firstFeature.firstFeatureDescription,
            id: 'comunicado',
            link: 'Crea un comunicado >',
            src: 'comunicado.svg',
            Animation: Comunicado(),
          },
          {
            modifier: 'container--reverse',
            title: secondFeature.secondFeatureTitle,
            paragraph: secondFeature.secondFeatureDescription,
            id: 'media',
            link: 'Crea un comunicado >',
            src: 'media.svg',
            Animation: Media(),
          },
          {
            title: thirdFeature.thirdFeatureTitle,
            paragraph: thirdFeature.thirdFeatureDescription,
            id: 'grafica',
            link: 'Crea un comunicado >',
            src: 'grafica.svg',
            Animation: Graphic(),
          },
        ];

        return (
          <section className="section__wrapper">
            <h2 className="wrapper__title">{sectionTitle}</h2>
            {cards.map((card, i) => (
              <InfoCard key={i} {...card} />
            ))}
          </section>
        );
      }}
    ></StaticQuery>
  );
};

export default ContainerHWW;
