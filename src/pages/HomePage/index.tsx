import React from 'react';

import Navbar from '../../features/navbar';
import Favs from '../../features/favs';
import SelectQuery from '../../features/selectQuery';
import News from '../../features/news';
import Pagination from '../../features/pagination';

function HomePage() {
  return (
    <React.Fragment>
        <Navbar/>
        <Favs/>
        <SelectQuery/>
        <Pagination/>
        <News/>
    </React.Fragment>
  );
}

export default HomePage;
