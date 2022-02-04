import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';
import { INewsItem } from './types';
import axios from 'axios';

export interface INewsState {
    news: { [key: string]: INewsItem };
    favs: {
        'Reactjs': { [key: string]: INewsItem };
        'Angular': { [key: string]: INewsItem };
        'Vuejs': { [key: string]: INewsItem };
    };
    show: 'all' | 'favs';
    query: 'Reactjs' | 'Angular' | 'Vuejs';
    page: number;
}
const initialState: INewsState = {
    news: {},
    favs: {
        'Reactjs': {},
        'Angular': {},
        'Vuejs': {},
    },
    show: 'all',
    query: 'Reactjs',
    page: 1,
};

export const NewsAPICall = createAsyncThunk(
    'news/fetchNews',
    async ({currentQuery, currentPage}: {currentQuery: string, currentPage: number}) => {
        const response = await axios.get(`https://hn.algolia.com/api/v1/search_by_date?query=${currentQuery.toLowerCase()}&page=${currentPage}&hitsPerPage=8`);
        const news: { [key: string]: INewsItem } = {};
        response.data.hits.map( ({ objectID, author, created_at, story_title, story_url }: INewsItem) => {
            news[objectID] = { objectID, author, created_at, story_title, story_url };
            return { objectID, author, created_at, story_title, story_url };
        });
        return news;
    }
  );

export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        addFav: (state, action: PayloadAction<INewsItem>) => {
            state.favs[state.query][action.payload.objectID] = action.payload;
        },
        deleteFav: (state, action: PayloadAction<string>) => {
            delete state.favs[state.query][action.payload];
        },
        changeShow: (state, action: PayloadAction<'all' | 'favs'>) => {
            state.show = action.payload;
        },
        changeQuery: (state, action: PayloadAction<'Reactjs' | 'Angular' | 'Vuejs'>) => {
            state.query = action.payload;
            state.page = 1;
        },
        nextPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(NewsAPICall.fulfilled, (state, action) => {
            state.news = action.payload;
          });
    },
});

export const { addFav, deleteFav, changeShow, changeQuery, nextPage } = newsSlice.actions;

export const selectNews = (state: RootState) => state.news.news;
export const selectFavs = (state: RootState) => state.news.favs;
export const selectShow = (state: RootState) => state.news.show;
export const selectQuery = (state: RootState) => state.news.query;
export const selectPage = (state: RootState) => state.news.page;

export default newsSlice.reducer;
