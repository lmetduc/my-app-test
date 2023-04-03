import "./modalValidation.css";

export default function ModalValidation({isOpen = false, buttonCloseTitle = "Ok", Text = "Your text here", closeModal}) {
    return (
        <div className={`modalFullPage ${isOpen ? "modaleActivate" : "modaleDesactivate"}`}>
            <div className="modal">
                <p>{Text}</p>
                <button onClick={closeModal}>{buttonCloseTitle}</button>
                </div>

        </div>
    )

}