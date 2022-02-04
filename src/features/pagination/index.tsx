import { useEffect, useState } from 'react';
import styled from "@emotion/styled/macro";
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectPage, nextPage } from '../news/newsSlice';
import useMediaQuery from './useMediaQuery';

const Div = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 0 40px;
`
type ColorProp = {
  color: string,
}
const Box = styled.button<ColorProp>`
  width: 32px;
  height: 32px;
  margin: 0 8px 0 0;
  padding: 6px auto 4px;
  border-radius: 6px;
  border: solid 1px #d9d9d9;
  background-color: ${props => props.color};
  &:hover {
    cursor:pointer;
  }
`
const Number = styled.div<ColorProp>`
  height: 22px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: ${props => props.color};
`
const IconLeft = styled(BsChevronLeft)`
  margin: 3px 0 0 -3px;
`
const IconRight = styled(BsChevronRight)`
  margin: 3px 0 0 -3px;
`

function Pagination() {
  const currentPage = useAppSelector(selectPage);
  const dispatch = useAppDispatch();

  const mQuery = useMediaQuery('(min-width: 481px)');
  const [pageGroup, setPageGroup] = useState(1);

  let numbers;
  if (mQuery) {
    numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  } else {
    numbers = [0]
  }

  const pageModifier = (x: number) => {
    if (x > (pageGroup + 8)) {
      setPageGroup(x);
    } else if ((x > 8) && (x < pageGroup)) {
      setPageGroup(x - 8);
    }
    if (x > 0) {
      dispatch(nextPage(x))
    }
  }

  return (
    <Div>
      <Box color={'#fff'} onClick={() => pageModifier(currentPage - 1)}>
        <IconLeft color='rgba(0, 0, 0, 0.65)' />
      </Box>
      {
        mQuery ?
          numbers.map(x => {
            let colorB = '#fff'
            let colorN = 'rgba(0, 0, 0, 0.65)'
            if ((pageGroup + x) === currentPage) {
              colorB = '#1890ff'
              colorN = '#fff'
            }
            return  <Box color={colorB} key={x} onClick={() => pageModifier(pageGroup + x)}>
                      <Number color={colorN}>{pageGroup + x}</Number>
                    </Box>;
          }) :
          <Box color={'#1890ff'}>
            <Number color={'#fff'}>{currentPage}</Number>
          </Box>
      }
      <Box color={'#fff'} onClick={() => pageModifier(currentPage + 1)}>
        <IconRight color='rgba(0, 0, 0, 0.65)' />
      </Box>
    </Div>
  );
}

export default Pagination;