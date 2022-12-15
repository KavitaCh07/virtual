import React from 'react';
import './deleteModal.css'
import { useDispatch, useSelector } from 'react-redux';
import {AddCourseIdData, RemoveCourseIdData} from "../../redux/recentCourseSlice";
import { useState, useEffect } from "react";

function DeleteModal(props) {

    const videos = useSelector((state)=>state.RecentCourses.video.videos);
    
    
    const [videoFetchedIdData, setVideoFetchedIdData] = useState([]);
    const dispatch = useDispatch();
    const state = useSelector((state) => state.RecentCourses.videoId);
    console.log("id state", state);
    console.log("video",videos);

    const handleDelete =() =>{
        for(let i=0;i<videos.length;i++){
            if(videos[i] === state.id){
                dispatch(RemoveCourseIdData({id:state.id}))
            }
        }
    

    }
   
    return (
        <div className='modal'>
            <div className="overlay">
                <div className="modal-content">
                    <div className="modal-inner-content">
                        <div className="delete-video">Delete Video</div>
                        <div className="are-u-sure">Are you sure you want to Delete the video <br />
                            <span className="course-name">{state?.user?.name}</span> from the<br />
                            Recently courses added?
                            </div>
                            <div className="btn">
                                <button className='cancel-btn' type='submit'><span className='cancel-text' onClick={() => {props.setModal(false);}}>Cancel</span></button>
                                <button className='delete-btn' type='submit'><span className='delete-text' onClick={()=>{
                                    
                                   handleDelete()
                                    
                                    console.log("video after remove",videos)
                                    console.log(state.id);
                                    
                                    }}>Delete</span></button>
                            </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DeleteModal;
