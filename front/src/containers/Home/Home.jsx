import React from 'react';

import WeAreManufacturers from './../../components/WeAreManufacturers';
import Help from '../../components/Help/Help';
import Photo from './../../components/Photo';
import Catalogs from './../../components/Catalogs';
import HelpModal from '../../components/Help/HelpModal';

function Home() {

  return (
    <>
      <div className="container">
      </div>
      <Catalogs />
      <WeAreManufacturers />
      <Photo />
      <Help />
      <Photo />

    </>
  );
}

export default Home;
