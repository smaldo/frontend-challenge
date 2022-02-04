import styled from "@emotion/styled/macro";
import { AiFillHeart, AiOutlineClockCircle, AiOutlineHeart } from 'react-icons/ai';

import { useAppDispatch } from '../../app/hooks';
import { AppThunkDispatch } from '../../app/store';
import { addFav, deleteFav } from './newsSlice';
import { INewsItem } from './types';
import { timeToWords } from './timeConverter';

const Div = styled.div`
  width: 100%;
  height: 90px;
  margin: 0 0 20px;
  display: flex;
  flex-direction: row;
  border-radius: 6px;
  border: solid 1px #979797;
  background-color: #fff;
  overflow: hidden;
  &:hover {
    opacity: 0.4;
  }
  @media (min-width: 481px) {
    width: 450px;
    margin: 0 auto 20px auto;
  }
  @media (min-width: 769px) {
    width: 340px;
    margin: 0;
  }
  @media (min-width: 1025px) {
    width: 500px;
    margin: 0;
  }
  @media (min-width: 1440px) {
    width: 550px;
    height: 90px;
  }
`
const DataBox = styled.a`
  width: 80%;
  height: 90px;
  padding: 14px 16px 14px 26px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  text-decoration: none;
  @media (min-width: 1440px) {
    width: 482px;
  }
`
const Icon = styled(AiOutlineClockCircle)`
  margin: 0 8px -5px 0;
`
const SmallText = styled.div`
  height: 13px;
  margin: 0 0 7px;
  font-family: Roboto;
  font-size: 11px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #767676;
`
const TitleText = styled.div`
  height: 40px;
  margin: 6px 0 0;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: 0.25px;
  color: #6b6b6b;
`
const LikeBox = styled.div`
  width: 20%;
  height: 90px;
  display: flex;
  align-items: center;
  background-color: #f3f3f3;
  @media (min-width: 1440px) {
    padding: 35px 22px 33px;
    width: 68px;
    height: 90px;
  }
`
const HearthFill = styled(AiFillHeart)`
  margin: 0 auto;

}
`
const OutlineFill = styled(AiOutlineHeart)`
  margin: 0 auto;
`

function NewsItem({ data, like }: { data: INewsItem, like: boolean }) {
  const dispatch: AppThunkDispatch = useAppDispatch();

  const link = data.story_url ? data.story_url : undefined;
  const timePassed = timeToWords(data.created_at);

  const likeFunction = (item: INewsItem, likeState: boolean) => {
    if (likeState) {
      dispatch(deleteFav(item.objectID));
    } else {
      dispatch(addFav(item));
    }
  }

  return (
    <Div >
      <DataBox href={link} target="_blank">
        <SmallText>
          <Icon color='#6b6b6b' size={18} />
          {timePassed} by {data.author}
        </SmallText>
        <TitleText> {data.story_title} </TitleText>
      </DataBox>
      <LikeBox>
        {
          like ?
            <HearthFill color='#dd0031' size={26} onClick={() => likeFunction(data, like)} /> :
            <OutlineFill color='#dd0031' size={26} onClick={() => likeFunction(data, like)} />
        }
      </LikeBox>
    </Div>
  );
}

export default NewsItem;