import React , {useState} from 'react'

function Add() {
    let [name , setName]=useState("")
    let [allData , setAlldata]=useState([])
    let [show , setShow]=useState(false)
    let [editIndex , setEditIndex]=useState()

    let handleAdd=()=>{
       if(name.length!=0){
        setAlldata(newdata=>[...newdata,name])
        setName("")
       }
    }
    let handleDelete=(index)=>{
      allData.splice(index,1)
      setAlldata([...allData])
    }
    let handleEdit=(index)=>{
      setName(allData[index])
      setShow(true)
      setEditIndex(index)
    }
    let handleUpdate=()=>{
      allData.splice(editIndex,1,name)
      setAlldata([...allData])
      setShow(false)
      setName("")
    }
  return (
    <div>
        <p>CRUD insert, update and delete</p>
        <input value={name} onChange={(e)=>setName(e.target.value)}/>
        {!show?<button onClick={()=>handleAdd()}>Add</button>:<button onClick={handleUpdate}>Update</button>}
        {
          allData.map((val,index)=>
          <div>
              <h5>{val}</h5>
              <button className='edit' onClick={()=>handleEdit(index)}>Edit</button>
              <button className='delete' onClick={()=>handleDelete(index)}>Delete</button>
          </div>
       ) }
    </div>
  )
}

export default Add;