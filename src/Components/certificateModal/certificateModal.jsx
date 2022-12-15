import React from 'react';
import './certificateModal.css';
import certiLogo from '../../Assets/certificateLogo.png';
import certiTrophy from '../../Assets/tophy.png';
import cancleModal from '../../Assets/cancleModal.png';

function CertificateModal(props) {
    return (
        <div className='modal'>
            <div className="overlay">
                <div className="modal-content">
                    <div className="cancel-btn"><img src={cancleModal} className='certi-cancel-icon' onClick={() => {props.setCertificatePreviewModal(false);}} alt="" /></div>
                    <div className="modal-certificate-first-content">
                        <div className="modal-certificate-column">
                        <div className="certi-coomplete-text">Certificate of Completion</div>
                        <div className="award-reciever-name">Mahendra Singh Dhoni</div>
                        <div className="award-course-name">User Interface with Illusion</div>
                        <div className="joined-completed-time">Joined: {123456} .Completed: {123456} .4h 30m</div>
                        <div className="ceti-num">Certificate No. {123456789}</div>
                        </div>
                        <div className="certi-trophy"><img src={certiTrophy} className='certi-icon' alt="" /></div>
                    </div>
                    <div className="modal-certificate-second-content">
                        <img src={certiLogo} alt="" />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CertificateModal;
