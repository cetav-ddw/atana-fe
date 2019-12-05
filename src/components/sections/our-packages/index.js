import React from 'react';
import Package from '../../units/package';

import './our-packages.scss';

// ToDo debe venir del CMS
const packagesData = require('../../units/package/package-data.json');

export default () => {
  const bundle = packagesData.bundles.map((bundle, id) => {
    return <Package data={bundle} key={`bundle-${id}`} />;
  });

  return (
    <section className="section__wrapper">
      <h2 className="section__title">Nuestros servicios</h2>
      <div className="section__bundler">{bundle}</div>
    </section>
  );
};
