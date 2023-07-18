import { Formik ,Form} from "formik"
import {linkSchema} from "../schema/login"
import { useDispatch, useSelector } from "react-redux"
import InputGroup from "../components/inputGroup"

import TextearaGroup from "./textearaGroup"
import { useState } from "react"

const CommentForm = ()=>{
    const [comment,setComment] = useState()
    const [name] = useState("زائر")
    const comments = {
        "معلومات قيمة":{num:0,color:"#fff"},
        "مفيد جدا":{num:0,color:"#fff"},
        "موضوع شيق":{num:0,color:"#fff"},
        "ادعم مشروع ترشيح الشيخ محمد بن زايد لجائزة نوبل للسلام":{num:0,color:"#fff"},
    } 
   

    const dispatch = useDispatch()

    const LogedIn = useSelector((state)=>state.Auth.login)
    const errors = useSelector((state)=>state.Auth.err)

    const handleSubmit = (e)=>{ 
    e.preventDefault()
    var name = e.target.name.value
    var password = e.target.comment.value
 
}
const commentTags = Object.keys(comments).map((item ,index)=>{
    return(
        
        <div key={index} style={{display: "inline",backgroundColor:comments[item].color}}   className="badge" onClick={()=>{setComment(item)}}>
                <span style={{display: "inline-block",margin:"5px"}} className="badge__title">{item}</span>
        </div>
    )
})

return(
    <div className="comment-form">
    <h4 style={{marginBottom:"20px"}}> اضف تعليق</h4>
    <div className="" style= {{textAlign:"center"}}>
        {commentTags}
    </div>
    <div>

    </div>
    <Formik
    initialValues={{name:"",password:""}}
    onSubmit={handleSubmit}

    >
        {(props)=>(
            <Form className="form"        
            onSubmit={handleSubmit}>
                <InputGroup 
                type="text"
                label="الاسم"
                name="name"
                placeholder=" زائر"
                />
                <TextearaGroup 
                label="اضيف تعليق"
                name="comment"
                placeholder=" نص التعليق"
                value ={comment}
                />
                <button  className="form-btn" type="submit">ارسال</button>
            </Form>
        )
        
    }

    </Formik>

    </div>
)
}
export default CommentForm