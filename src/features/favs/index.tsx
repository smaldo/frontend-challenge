import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { selectShow, changeShow } from '../news/newsSlice';
import styled from '@emotion/styled'

const Div = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  @media (min-width: 769px) {
    margin: 30px 0;
  }
  @media (min-width: 1440px) {
    margin: 60px 0;
  }
`
type ButtonProp = {
  color: string,
  sideBorder: string
}
const Button = styled.button<ButtonProp>`
  width: 98px;
  height: 31px;
  border-radius: 2px;
  border: solid 1px ${props => props.color};
  ${props => props.sideBorder}
  background-color: #fcfcfc;
`
type TextProp = {
  color: string
}
const Text = styled.div<TextProp>`
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: normal;
  text-align: center;
  color: ${props => props.color};
`
function Favs() {
  const currentShow = useAppSelector(selectShow);
  const dispatch = useAppDispatch();

  return (
    <Div>
      <Button
        color={currentShow === 'all' ? '#1797ff' : '#d6d6d6'}
        sideBorder='border-right: 0;'
        onClick={() => dispatch(changeShow("all"))}>
        <Text
          color={currentShow === 'all' ? '#1797ff' : '#606060'}
        >
          All
        </Text>
      </Button>
      <Button
        color={currentShow === 'favs' ? '#1797ff' : '#d6d6d6'}
        sideBorder=''
        onClick={() => dispatch(changeShow("favs"))}>
        <Text
          color={currentShow === 'favs' ? '#1797ff' : '#606060'}
        >
          My faves
        </Text>
      </Button>
    </Div>
  );
}

export default Favs;
