import { useState } from 'react';
import { BsChevronDown } from 'react-icons/bs';
import styled from "@emotion/styled/macro";

import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectQuery, changeQuery } from '../news/newsSlice';
import vue from './vue/image-141@3x.png';
import reactjs from './react/image-140@3x.png';
import angular from './angular/image-138@3x.png';

const Dropdown = styled.div`
  margin: 0 0 20px;
  position: relative;
  display: inline-block;
  @media (min-width: 769px) {
    width: 100%;
    margin: 0 0 38px;
    padding: 0 20px;
  }
  @media (min-width: 1440px) {
    margin: 0 0 38px;
    padding: 0 150px;
  }
`
const DropdownButton = styled.button`
  width: 240px;
  height: 32px;
  padding: 5px 12px 5px 12px;
  border-radius: 4px;
  border: solid 1px #2e2e2e;
  background-color: #fff;
  display: flex;
  text-align: initial;
`
const DropdownContent = styled.div`
  width: 240px;
  height: 139px;
  position: absolute;
  z-index: 1;
  box-shadow: 0 2px 2px 0 #dad8d8;
  background-color: #fff;
`
type ElementProp = {
  color: string,
}
const Element = styled.button<ElementProp>`
  width: 240px;
  height: 46px;
  padding: 10px 0 10px 10px;
  display: flex;
  flex-direction: row;
  text-align: initial;
  border: 0;
  color: black;
  background-color: ${props => props.color};
  &:hover {
    background-color: #fbfbfb;
  }
`
const Text = styled.div`
  margin: 0 0 0 13px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.57;
  letter-spacing: normal;
  color: #343434;
`
const Icon = styled(BsChevronDown)`
  margin: 4px 0 0 80px;
`
type ImgProp = {
  width: string,
  height: string
}
const Img = styled.img<ImgProp>`
  width: ${props => props.width};
  height: ${props => props.height};
  vertical-align: center;
`

function SelectQuery() {
  const [dropdownState, setDropdownState] = useState(false);
  const currentQuery = useAppSelector(selectQuery);
  const dispatch = useAppDispatch();

  const buttonFunction = (Query: 'Reactjs' | 'Angular' | 'Vuejs') => {
    dispatch(changeQuery(Query))
    setDropdownState(false);
  }
  return (
    <Dropdown>
      <DropdownButton onClick={() => setDropdownState(!dropdownState)}>
        <Text>Select your news</Text> <Icon />
      </DropdownButton>
      {
        dropdownState ?
          <DropdownContent>
            <Element
              onClick={() => buttonFunction('Angular')}
              color={currentQuery == 'Angular' ? '#fbfbfb' : '#fff'}
            >
              <Img src={angular} width='22px' height='22px' />
              <Text>Angular</Text>
            </Element>
            <Element
              onClick={() => buttonFunction('Reactjs')}
              color={currentQuery == 'Reactjs' ? '#fbfbfb' : '#fff'}
            >
              <Img src={reactjs} width='24px' height='20px' />
              <Text>Reactjs</Text>
            </Element>
            <Element
              onClick={() => buttonFunction('Vuejs')}
              color={currentQuery == 'Vuejs' ? '#fbfbfb' : '#fff'}
            >
              <Img src={vue} width='22px' height='19px' />
              <Text>Vuejs</Text>
            </Element>
          </DropdownContent> :
          null
      }
    </Dropdown>
  );
}

export default SelectQuery;