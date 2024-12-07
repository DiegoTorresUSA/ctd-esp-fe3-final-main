export const initialState = {
    theme: 'light',
    dentists: [],
    favorites: JSON.parse(localStorage.getItem('favorites')) || []
};

export const globalReducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_THEME':
            return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
        case 'SET_DENTISTS':
            return { ...state, dentists: action.payload };
        case 'ADD_FAVORITE':
            const newFavorites = [...state.favorites, action.payload];
            localStorage.setItem('favorites', JSON.stringify(newFavorites));
            return { ...state, favorites: newFavorites };
        case 'REMOVE_FAVORITE':
            const filteredFavorites = state.favorites.filter(d => d.id !== action.payload.id);
            localStorage.setItem('favorites', JSON.stringify(filteredFavorites));
            return { ...state, favorites: filteredFavorites };
        default:
            return state;
    }
};