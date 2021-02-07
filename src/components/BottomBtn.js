import React,{useState, useEffect} from 'react'
import '../css/bottomBtn.css';

const BottomBtn = ()=>{

    const newFile = ()=>{
        console.log("<<<<<<new file======");
    }
    const loadFile = ()=>{
        console.log("<<<<<<load file=====");
    }

    return (
        <ul className="bottom_btn_box">
            <li className="btn_item" onClick={()=>{newFile()}}>新建</li>
            <li className="btn_item right_none" onClick={()=>{loadFile()}}>导入</li>
        </ul>
    )
}

export default BottomBtn;