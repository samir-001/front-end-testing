import { useLocation } from "react-router";
import CommentForm from "../components/commentForm";
import { useEffect } from "react";


const Artilce = (props)=>{
const Location  = useLocation()
const {pathname} = useLocation()

useEffect(()=>{
    window.scrollTo(0,0)
},[pathname])

const data = Location.state.data

        return(
            <>

                <div className="article-view">
                    <div className="container">
                    <div className="article-view__title">
                        {data.title}
                    </div>
                <div style={{marginBottom:"30px"}}>
                    {data.content}
                </div>
                <h3 className="centered-title">إعلان</h3>
                <div className="advertising"></div>
                <div className="article-view__comments">
                    <h4>التعليقات</h4>
                </div>
                <div className="article-view__comment-form">
                    <CommentForm></CommentForm>
                </div>
                
            </div>
            </div>
            </>
    )
}
export default Artilce