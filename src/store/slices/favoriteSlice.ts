import { createSlice } from '@reduxjs/toolkit';
import { LSFAVS } from 'utils/interfaces/enums';

export type FavSliceType = {
    favs: string[]
}

const initState: FavSliceType = {
    favs: localStorage.getItem(LSFAVS)?.split(',') || []
}

const favoriteSlice = createSlice({
    name: "favorites",
    initialState: initState,
    reducers: {
        setFavoriteAction: (state, action) => {
            state.favs.push(action.payload)
        },
        removeFromFavoritesAction: (state, action) => {
            state.favs = state.favs.filter(x => x !== action.payload)
        }

    }

})

export const { setFavoriteAction, removeFromFavoritesAction } = favoriteSlice.actions;
export default favoriteSlice.reducer;