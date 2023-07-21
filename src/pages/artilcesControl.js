import { useDispatch, useSelector } from "react-redux"
import ArticleCard from "../components/articleCard"
import {data} from "../data"
import { showModal } from "../reducers/global/global"
import { BiAddToQueue } from "react-icons/bi";


import ArticleFormModal from "../components/articleFormModal";
const ArtilcesControl = ()=>{
    const isFormModalopned = useSelector((state)=>state.Global.formModal)
    const dispatch = useDispatch()

    console.log(isFormModalopned)
        

    const requests = data.map((item ,index)=>{
        return(
            <div key={index}>
                <ArticleCard title={item.title} content={item.content}/>
            </div>
        
        )
    })
 
    return(
<>
                {isFormModalopned ?<ArticleFormModal page= {" بيانات المقال"}/> :""}
                <h3 style={{marginBottom:"30px"}} className=""> المقالات</h3>
                <button className="add-btn" onClick={()=>{
        dispatch(showModal())
      }}><span style={{paddingRight:"5px"}}>new data</span><BiAddToQueue /></button>
        <div className="main-dash-board">
    
                    {requests}
       
            </div>

          
</>
    )
}
export default ArtilcesControl