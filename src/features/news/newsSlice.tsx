import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { INewsItem } from './types';

export interface INewsState {
    news: INewsItem[];
    favs: {
        'Reactjs': INewsItem[],
        'Angular': INewsItem[],
        'Vuejs': INewsItem[],
    };
    show: 'all' | 'favs';
    query: 'Reactjs' | 'Angular' | 'Vuejs';
    page: number;
}

const initialState: INewsState = {
    news: [],
    favs: {
        'Reactjs': [],
        'Angular': [],
        'Vuejs': [],
    },
    show: 'all',
    query: 'Reactjs',
    page: 1,
};


export const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {
        changeShow: (state, action: PayloadAction<'all' | 'favs'>) => {
            state.show = action.payload;
        },
        selectQuery: (state, action: PayloadAction<'Reactjs' | 'Angular' | 'Vuejs'>) => {
            state.query = action.payload;
        },
        nextPage: (state) => {
            state.page += 1;
        },
    },
});

export const { changeShow, selectQuery, nextPage } = newsSlice.actions;

export default newsSlice.reducer;
