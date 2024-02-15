import { configureStore } from '@reduxjs/toolkit'
import reducer from '@/lib/reducers/basket'

// import postsReducer from '../reducers/postsReducer'
// import usersReducer from '../reducers/usersReducer'

// Automatically adds the thunk middleware and the Redux DevTools extension
const store = configureStore({
    // Automatically calls `combineReducers`
    reducer: {
        products : reducer.reducer
    }
})

export default store