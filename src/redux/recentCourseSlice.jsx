import {createSlice } from "@reduxjs/toolkit";

const initialState = {
    video:[],
    videoId:[],
    certificate:[]
}


const RecentCourseSlice = createSlice({
    name: 'RecentCourses',
    initialState,
    reducers:{
        AddCourse: (state, {payload}) => {
            state.video = payload;
            console.log("got hit", state.video)
        },
        AddCourseIdData: (state,  {payload}) =>{
            console.log("id got hit")
            state.videoId = payload;
        },
        RemoveCourseIdData: (state, action) => {
            console.log("entered remove")
            state.video.videos = state.video.videos.filter((item) => item.id !== action.payload.id);
        },
        AddCertificate: (state, action) => {
            let isPresent = false;
            for(let item of state.certificate){
                if(item.id === action.payload){
                    isPresent = true;
                }
            }
            if(!isPresent) {
                console.log("certificate got hit");
                state.certificate.unshift(action.payload);
            }
        },
    }
})

export const {AddCourse, AddCourseIdData, RemoveCourseIdData, AddCertificate} = RecentCourseSlice.actions;
export default RecentCourseSlice.reducer;