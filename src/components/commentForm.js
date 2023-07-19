
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"

const CommentForm = ()=>{
    const [comment,setComment] = useState()
    const [name,setName] = useState("زائر")
    const comments = {
        "معلومات قيمة":{num:0,color:"#fff"},
        "مفيد جدا":{num:0,color:"#fff"},
        "موضوع شيق":{num:0,color:"#fff"},
        "ارشح محمد بن زايد لجائزة نوبل للسلام":{num:0,color:"#fff"},
    } 
   

    const handleSubmit = (e)=>{ 
    e.preventDefault()
    // var name = e.target.name.value
    // var password = e.target.comment.value
    console.log(123)
 
}
const commentTags = Object.keys(comments).map((item ,index)=>{
    return(
        
        <div key={index} className="comment-badge"   onClick={()=>{setComment(item)}}>
              {item}
        </div>
    )
})

return(
    <div className="comment-form">
    <h4 style={{marginBottom:"10px"}}> اضف تعليق</h4>
    <div  style= {{textAlign:"center"}}>
        {commentTags}
    </div>
    <div>
        <form className="comment-form" onSubmit={handleSubmit}>
                <input value={name} className="comment-form__element" type="text" placeholder="ادخل اسمك" onChange={(e)=>{setName(e.target.value) }}/>
                <textarea value={comment} className="comment-form__element" onChange={(e)=>{setComment(e.target.value) }} placeholder="تفضل برأيك" />
                <button typeof="submit" className="form-btn"> ارسل تعليقك</button>
        </form>
    </div>
    

    </div>
)
}
export default CommentForm