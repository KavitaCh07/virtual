import React from 'react';
import './addCourseQuestion.css';
import deleteCourse from '../../Assets/delete.png';
import minus from '../../Assets/minus.png';
import pluse from '../../Assets/Pluse.png';
import circle from '../../Assets/circle1.png';
import { useState } from 'react';

export default function Addcoursequestion() {
    const [deleteQuestion, setDeleteQuestion] = useState(false);
    const [deleteMultilpe, setDeleteMultiple] = useState(false);
    const [plusMinusIcon, setPlusMinusIcon] = useState(false);

    function handleQuestionDiv(){
        document.getElementById("questionCard").style.display === "none" ?
        (document.getElementById("questionCard").style.display = "flex") :
        (document.getElementById("questionCard").style.display = "none");
    }

    function handlePluseMinusIcon(){
        setPlusMinusIcon(!plusMinusIcon);
    }

    function handleMultipleQuestion(){
        document.getElementById("multipleQuestionDiv").style.display === "none" ? 
        (document.getElementById("multipleQuestionDiv").style.display = "flex") :
        (document.getElementById("multipleQuestionDiv").style.display = "none");
    }

    function handleDelete(){
        document.getElementById("questionCard").style.display === "flex" ? 
        (document.getElementById("questionCard").style.display = "none") :
        (document.getElementById("questionCard").style.display = "flex");
    }

    let count=0;

    return (
        <div className='add-course-part'>

            <div className="add-more-btn"><button className='add-new-btn' onClick={()=>{handleQuestionDiv();}}><span className='add-new-text'>Add New +</span></button></div>

            <div className="first-card">
                <div className="select-chapter">Select Chapter Name</div>
                <div className="dropdown">
                    <select name="plan" id="plan" className='drop-menu'>
                        <option className='options' value="free" selected>Chapter 1 - Setting up a new project</option>
                        <option className='options' value="starter">Chapter 2 - Write 1st Program</option>
                        <option className='options' value="professional">Chapter 3 - Start with data types</option>
                        <option className='options' value="corporate">Chapter 4 - Start with loops</option>
                    </select>
                    <div>1 of 44</div>
                </div>
            </div>

            <div className="second-card" id='questionCard' style={{ display: "none" }}>
                <form action="" className='add-question-form'>
                <div className="question-text">Question {++count}</div>

                <div className="load-balance-row">
                    <div className="input-question"> <input type="text" className='load-text' placeholder='enter the question' /></div>
                    <div className=' delete-minus'>
                        <img src={deleteCourse} alt="" onClick={()=>{handleDelete();}} />
                        <img src={plusMinusIcon ? minus : pluse} alt=""  onClick={()=>{handlePluseMinusIcon(); handleMultipleQuestion();}}/>
                    </div>
                </div>

                <div className="multiple-question-part" id='multipleQuestionDiv' style={{ display: "none" }}>
                    <div className="line-1">

                        <div className="multipleQ1">
                            <div className="ques1-choice"><input type="text" className="ques1" placeholder='enter 1st choice'/></div>
                            <div className="check-box"><label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label></div>
                        </div>

                        <div className="multipleQ1">
                            <div className="ques1-choice"><input type="text" className="ques1" placeholder='enter 2nd choice'/></div>
                            <div className="check-box"><label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label></div>
                        </div>

                    </div>

                    <div className="line-2">
                        <div className="multipleQ1">
                            <div className="ques1-choice"><input type="text" className="ques1" placeholder='enter 3rd choice'/></div>
                            <div className="check-box"><label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label></div></div>

                        <div className="multipleQ1">
                            <div className="ques1-choice"><input type="text" className="ques1" placeholder='enter 4th choice'/></div>
                            <div className="check-box"><label class="switch">
                                <input type="checkbox" />
                                <span class="slider round"></span>
                            </label></div>
                        </div>
                    </div>

                </div>
                </form>
            </div>

            <div className="fourth-card">
                <div className="pages-btns">
                    <button className='prev-btn'><span className='prev-text'>previous</span></button>
                    <div className="page-numberes">
                        <img src={circle} alt="" />
                        1 2 3 4 5 6 7 8 9 10</div>
                    <button className='next-btn'><span className='next-text'>Next</span></button>
                </div>
                <button className='save-btn'><span className='save-text'>save</span></button>
            </div>
        </div>
    )
}
