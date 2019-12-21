import React, { useState } from 'react';
import { Link } from 'gatsby';
import Button from '../button';

import './package.scss';
import '../button/button.scss';

const Package = ({ data }) => {
  const [toggleState, setToggleState] = useState(false);

  const toggleHandler = () => {
    setToggleState(!toggleState);
  };

  const bundleFeatures = processFeature => {
    const featuresArray = [];
    for (let key in processFeature) {
      if (processFeature.hasOwnProperty(key)) {
        {
          processFeature[key] !== '-' &&
            featuresArray.push(
              <li key={`${key}:${processFeature}`}>{processFeature[key]}</li>
            );
        }
      }
    }
    return <ul className="package__features">{featuresArray}</ul>;
  };

  return (
    <div className={`package package--${data.packageStyle}`}>
      <div className="package__head">
        <p className="package__type">{data.packageTitle}</p>
      </div>
      <p className="package__price">{data.packagePrice}</p>
      <div
        className={`package__body ${toggleState ? 'package__body--open' : ''}`}
      >
        {bundleFeatures(data.packageBenefits)}
        <Link to="" className="btn btn--secondary package__btn">
          Obtener {data.packageTitle}
        </Link>
      </div>
      <Button
        customStyle="btn--seemore package__btn--seemore"
        action={toggleHandler}
      >
        {`${toggleState ? 'Ver menos' : 'Ver más'}`}
      </Button>
    </div>
  );
};

export default Package;
