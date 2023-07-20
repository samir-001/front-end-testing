import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getArticles } from "../reducers/articles/getArticles"
import ArticleCard from "../components/articleCard"
import {data} from "../data"
const ArtilcesControl = ()=>{
    // const data = useSelector((state)=>state.Articles.data)
    // const dispatch = useDispatch()
    // useEffect(()=>{
    //     dispatch(getArticles())
    // },[])
        

    const requests = data.map((item ,index)=>{
        return(
            <div key={index} >

                <ArticleCard title={item.title} content={item.content}/>
            </div>
        
        )
    })
 
    return(
<>
                <h3 style={{marginBottom:"30px"}} className=""> المقالات</h3>

        <div className="main-dash-board">
                <button style={{marginBottom:"20px"}} className="add-btn">add new</button>
    
                    {requests}
       
            </div>

          
</>
    )
}
export default ArtilcesControl