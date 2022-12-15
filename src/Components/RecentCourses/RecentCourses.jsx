import React from "react";
import './RecentCourses.css';
import back from '../../Assets/back.png';
import pythonC from '../../Assets/python.png'
import cancel from '../../Assets/Cancel.png';
import UIUX from '../../Assets/UIUX.png';
import adobePhoto from '../../Assets/AdobePhoto.png';
import d3 from '../../Assets/3D.png';
import drawing from '../../Assets/drawing.png';
import charDraw from '../../Assets/charDraw.png';
import adobeEffects from '../../Assets/AdobeEffects.png';
import deletesmall from '../../Assets/deletesmall.png';
import tick from '../../Assets/tick.png';
import playBtn from '../../Assets/play.png';
import retry from '../../Assets/Retry.png';
import error from '../../Assets/error.png';
import DeleteModal from "../modal/deleteModal";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { AddCourse, AddCourseIdData} from "../../redux/recentCourseSlice";


export default function RecentCourses() {

  const [modal, setModal] = useState(false);
  const navigate = useNavigate();
  const [videoFetchedData, setVideoFetchedData] = useState([]);
  const [videoFetchedIdData, setVideoFetchedIdData] = useState([]);
  const dispatch = useDispatch();
  let id;

  const options = {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: "563492ad6f91700001000001082f4446b4dd4d9f9e05ecf955046a4f",
      // Authorization: "563492ad6f9170000100000132c593fe670b4a79af21cc7805e93875"     //use the apikey you have generated
    },
  };

  useEffect(() => {
    const videosURL = `https://api.pexels.com/videos/search?query=nature&per_page=5`;
    const fetchVideoData = async () => {
      try {
        const response = await fetch(videosURL, options);
        const videodata = await response.json();
        setVideoFetchedData(videodata);
        //    setVideoFetchedData(data && data.videos);
        console.log(videodata);

      } catch (error) {
        console.log("error", error);
      }
    };
    fetchVideoData();

  }, []);  // for videos

 
    
    const fetchVideoID = async (id) => {
      try {
        const videosURL = `https://api.pexels.com/videos/videos/${id}`;
        const response = await fetch(videosURL, options);
        const videoIDdata = await response.json();
        setVideoFetchedIdData(videoIDdata);
        //    setVideoFetchedData(data && data.videos);
        console.log("iddf",videoIDdata);

      } catch (error) {
        console.log("error", error);
      }
    };
    





  const state = useSelector((state) => state.RecentCourses.video);
 

  useEffect(() => {                            //useeffect for videos
    dispatch(AddCourse(videoFetchedData));
    // console.log("ghfsytd",videoFetchedData)
  }, [videoFetchedData]);

  useEffect(() => {                            //useeffect for videos
    dispatch(AddCourseIdData(videoFetchedIdData));
    // console.log("ghfsytd",videoFetchedData)
  }, [videoFetchedIdData]);







  return <div className="recent-part">
    <div className="recent-courses-div">
      {modal && <DeleteModal setModal={setModal}/>}
      <div className="recent-added-div">
        <img src={back} onClick={() => { navigate('/home') }} className='back-btn' alt="" />
        <div className="recent-added-text">Recently courses added</div>
      </div>

      <div className="courses-div">

        <div className="courses">
          <div className="py-img"><img src={pythonC} alt="" />
            <img src={playBtn} className='play-btn' alt="" />
          </div>
          <div className="course-name-progress">
            <div className="course-name-btn">
              <div className="py-course-student">Courses | Python Programming for School students</div>
              <div className="cross">
                <img src={cancel} className='cross-btn' alt="cross-icon" /></div>
            </div>
            <div className="progress-bar">
              <progress id="file" value="32" max="100"> 32% </progress>
            </div>
          </div>
        </div>


        {state && state.videos && state.videos.map((video, id) => {

          return (
            <div className="courses" key={video.id}>
              <div className="py-img"> <img src={video && video.image} className="course-img" alt="" />
                <img src={playBtn} className='play-btn' alt="" />
              </div>
              <div className="course-name-progress">
                <div className="course-name-btn">
                  <div className="tick-part">
                    <div className="py-course-student">User Experience Design Essentials - {video && video.user && video.user.name}</div>
                    <div className="tick"><img src={tick} alt="" /></div>
                  </div>
                  <div className="cross" onClick={() => { setModal(true);
                  fetchVideoID(video.id);
                  }}>
                    <img src={deletesmall} className='delete-icon' alt="cross-icon" /></div>
                </div>
              </div>
            </div>)

        })
        }







        <div className="courses">
          <div className="py-img"><img src={adobePhoto} alt="" />
            <img src={playBtn} className='play-btn' alt="" />
          </div>
          <div className="course-name-progress">
            <div className="course-name-btn">
              <div className="py-course-student">Adobe Photoshop CC – Essentials Training Course</div>
              <div className="cross">
                <div className="error-div"><img src={error} alt="" /> <span className="upload-text">Upload failed</span></div>
                <img src={retry} className='retry-btn' alt="" />
                <img src={deletesmall} className='cross-btn' alt="cross-icon" /></div>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
}
