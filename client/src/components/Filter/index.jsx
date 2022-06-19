import React,{useState,useEffect} from 'react'
import {useDispatch ,useSelector} from 'react-redux'


export default function Filter() {
    //const dispatch =useDispatch();
    
  return (
    <div>
        <div className="row justify-content-center">
            <div className="col-md-2">
  <input type="text" className="form-control" placeholder='search items'/>
            </div>
            <div className="col-md-2">
                
                </div>
                <div className="col-md-2">
                
                </div>
        </div>
    </div>
    
  )
}
