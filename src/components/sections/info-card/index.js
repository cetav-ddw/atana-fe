import React from 'react';
import { Link } from 'gatsby';

import './info-card.scss';

const InfoCard = ({
  title,
  paragraph,
  id,
  href,
  src,
  link,
  modifier,
  Animation,
}) => {
  return (
    <div className={`container__card ${modifier}`}>
      <div className="container__info">
        <h3 className="info__tile">{title}</h3>
        <p className="info__paragraph">{paragraph}</p>
        <Link className="info__link" to="/registro">
          {link}
        </Link>
      </div>

      <div className="container__animation" id={id}>
        {Animation ? <Animation /> : <img className={id} src={src} alt="" />}
      </div>
    </div>
  );
};

InfoCard.defaultProps = {
  modifier: '',
};

export default InfoCard;
