import { useLocation } from "react-router-dom"
import FormModal from "../components/formModal"
import { useDispatch, useSelector } from "react-redux"
import { showModal } from "../reducers/global/global"

const Table = ()=>{
  const dispatch = useDispatch();
const location = useLocation()
const isFormModalopned = useSelector((state)=>state.Global.formModal)
const page = String(location.pathname).split("/")[2]

console.log(isFormModalopned)
return(
        <>
      {isFormModalopned ?<FormModal page= {page}/> :""}
      <button className="add-btn" onClick={()=>{
        dispatch(showModal())
      }}>new data</button>
       <table>
  <thead>
    <tr>
      <th>control</th>
      <th className="content"> {page}</th>
      <th>name</th>
    </tr>
  </thead>
  <tbody>

  <tr>
      <td style={{display:"flex" ,justifyContent:"start"}}>   
        <div className="form-btn-danger">delete</div>
        <div className="form-btn-success">edit</div>
      </td>
    <td className="content">Data 2</td>
    <td>Data 3</td>
  </tr>
  <tr>
    <td style={{display:"flex"}}>  
        <div className="form-btn-danger">delete</div>
        <div className="form-btn-success">edit</div>
      </td>
    <td>Data 5</td>
    <td>Data 6</td>
  </tr>
  </tbody>
</table>

   
        </>
    )
}
export default Table