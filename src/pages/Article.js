import { useLocation } from "react-router";
import CommentForm from "../components/commentForm";

const Artilce = (props)=>{
const Location  = useLocation()
const data = Location.state.data

        return(
            <>
                <div className="article-view">
                    <div className="container">
                    <div className="article-view__title">
                        {data.title}
                    </div>
                <div>
                    {data.content}
                </div>
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