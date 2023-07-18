import { useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { getArticles } from '../reducers/articles/getArticles';
import { Link } from 'react-router-dom';
import {data} from "../data"
import  { intervalToDuration ,format, parseISO} from "date-fns"
const Home = ()=>{
//   const dispatch = useDispatch()

// useEffect(()=>{
//   dispatch(getArticles())
// },[])

// const articlesState = useSelector((state)=>{
//   return state.Articles.data
// })

function getDurationSrting(date = ""){
  const interval = intervalToDuration({
    start: new Date("2023-07-18T14:21:00.800Z"),
    end : new Date()
  })
   const sec = interval.seconds > 0 ?  interval.seconds + " " + "ثانية" : ""
   const min = interval.minutes > 0 ?  interval.minutes + " " +"دقيقة"  : ""
   const hr = interval.hours > 0 ?   interval.hours + " " + "ساعة": ""
   const dy = interval.days > 0 ? interval.days +" " + "يوم"  : ""
   const yr = interval.years > 0 ?  interval.years + " " + "عام" : ""
  return sec + " " + min + " " + hr + " " + dy + " " + yr
}
var article ;
if(data){
  article = data.map((item,index )=>{
    return(
      
      <div key={index} className='summary-card'>
        <Link to={`/article/${item.Aid}`} state={{data:item}}>
        <div className='summary-card__title'>{item.title  +"[اخر تحديث]"+ new Date("2023-07-18T14:21:00.800Z").toLocaleDateString() }</div>
        <div className='summary-card__content'>{String(item.content).slice(0,30)}</div>
      </Link>
        <div className='summary-card__meta'>
          <div> عدد الزوار : 0</div>
          <div> منذ : {getDurationSrting()} </div>
        </div>
      </div>
    )
  })
} 



return(  <div>
 <div className='jumbotron'>
        <img className='image-jumbo' src='./jumbo.jpg' alt="er"/>
      </div>
    <div className='container'>
      <div className=''>
        <p className='title' style={{textAlign:"center",margin:"20px"}}>محرك البحث</p>
      <div className="search-engine" >
          <input type="search" className="search" placeholder="Search..."/>
          <button className="form-btn-success"> بحث</button>
        </div>

      </div>
      <div className='report-section'>
      {article}
      </div>
    </div>    
    </div>
)
}

  

export default Home