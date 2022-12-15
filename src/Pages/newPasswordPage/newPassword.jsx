import React from "react";
import './newPassword.css';
import NewPassword from '../../Components/NewPassword/NewPassword'

const NewPasswordPage = () => {
    return(
        <div>
            <div className="new-pass-container">
                <NewPassword/>
            </div>
        </div>
    )
}

export default NewPasswordPage;