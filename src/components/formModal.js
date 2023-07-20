import { useLocation } from "react-router-dom"
import { useDispatch } from "react-redux"
import { closeModal } from "../reducers/global/global"
const FormModal = ({page})=>{
 
    const dispatch = useDispatch()
    const hideModal = (e)=>{
        if(e.target.classList.contains("modal")){
            dispatch(closeModal())
        }

    }
    return(
        <div className="modal" onClick={hideModal}>
            <form className="add-Form">
                 <h4 style={{paddingBottom:"10px"}}>{page} </h4>
                <input className="comment-form__element" type="text"  placeholder={page}/>
                <button typeof="submit" className="form-btn" onClick={(e)=>{
                    e.preventDefault()
                    console.log(123)}}> حفظ</button>
            </form>
        </div>
    )
}

export default FormModal