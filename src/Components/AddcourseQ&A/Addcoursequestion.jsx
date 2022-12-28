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
    const [questionForm, setQuestionForm] = useState([{ question: "", multipleChoice1: "", multipleChoice2: "", multipleChoice3: "", multipleChoice4: "" }]);

    const handleFormChange = (index, event) => {
        let data = [...questionForm];
        data[index][event.target.name] = event.target.value;
        setQuestionForm(data);
        console.log(questionForm);
    }

    const addForm = () => {
        let newForm = { question: "", multipleChoice1: "", multipleChoice2: "", multipleChoice3: "", multipleChoice4: "" }
        setQuestionForm([...questionForm, newForm])
    }

    const submit = (e) => {
        e.preventDefault();
        console.log("form on submit", questionForm);
    }

    const RemoveForm = (index) => {
        let data = [...questionForm];
        data.splice(index, 1)
        setQuestionForm(data);
    }



    let count = 0;

    return (
        <div className='add-course-part'>

            <div className="add-more-btn"><button className='add-new-btn' onClick={addForm}><span className='add-new-text'>Add New +</span></button></div>

            <div className="add-question-answer-form">
                <form action="" className='add-question-form'>

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


                    <div className="question-answer-ka-part">
                        {questionForm.map((input, index) => {
                            return (
                                <div className="second-card" id='questionCard' key={index}>
                                    <div className="question-text">Question {++count}</div>

                                    <div className="load-balance-row">
                                        <div className="input-question"><input type="text" name='questionName' className='load-text' placeholder='enter the question' /></div>
                                        <div className=' delete-minus'>
                                            <img src={deleteCourse} alt="" onClick={()=> {RemoveForm(index)}}/>
                                            <img src={plusMinusIcon ? minus : pluse} alt="" />
                                        </div>
                                    </div>


                                </div>

                            );
                        })}
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
                <button className='save-btn' form='questionForm' onClick={submit}><span className='save-text'>save</span></button>
            </div>
        </div>
    )
}
