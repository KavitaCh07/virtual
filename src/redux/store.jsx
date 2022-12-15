import { configureStore } from "@reduxjs/toolkit";
import recentCourseReducer from './recentCourseSlice'

const store = configureStore ({
    reducer: {
        RecentCourses: recentCourseReducer,
    }
})

export default store;