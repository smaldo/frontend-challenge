import styled from '@emotion/styled'

import Navbar from '../../features/navbar';
import Favs from '../../features/favs';
import SelectQuery from '../../features/selectQuery';
import News from '../../features/news';
import Pagination from '../../features/pagination';

const HomeView = styled.div`
  min-height: 100%;
  width: 100%;
  padding: 70px 0 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media (min-width: 481px) {
    padding: 90px 0 0;
  }
  @media (min-width: 769px) {
    width: 769px;
    padding: 90px 0 0;
  }
  @media (min-width: 1025px) {
    width: 1025px;
  }
  @media (min-width: 1440px) {
    width: 1440px;
    padding: 114px 0 0;
  }
`

function HomePage() {
  return (
    <HomeView>
      <Navbar />
      <Favs />
      <SelectQuery />
      <News />
      <Pagination />
    </HomeView>
  );
}

export default HomePage;
