import { configureStore } from '@reduxjs/toolkit'
import reducer from '@/lib/reducers/basket'

// import postsReducer from '../reducers/postsReducer'
// import usersReducer from '../reducers/usersReducer'
import { loadState } from '@/core/redux/localStorage'

// Automatically adds the thunk middleware and the Redux DevTools extension
const store = configureStore({
    // Automatically calls `combineReducers`
    preloadedState: loadState(),
    reducer: {
        products : reducer.reducer
    }
})

export default store