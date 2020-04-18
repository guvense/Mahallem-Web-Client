import actionTypes from './action-types';

const initialState = {
};

export default (state = initialState, action) => {
    switch (action.type) {
        /*
            case actionTypes.LOAD_CHARACTERS:
                return { ...state, charactersLoading: true };
            case success:
                return { ...state, characters: action.characters};
        */
       default:
        return state;
    }
};