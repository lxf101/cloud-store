import React,{useState, useEffect, useRef} from 'react'
import PropTypes from 'prop-types'
import '../css/fileSearch.css'

const FileSearch = ({title, onFileSearch})=>{
    const [isActive, setIsActive] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const inputEl = useRef(null);

    const closeFileSearch = (event)=>{
        event.preventDefault();
        setIsActive(false);
        setInputValue('');
    }

    useEffect(()=>{
        const handleInputEvent = (event)=>{
            if(event.keyCode === 13 && isActive){
                onFileSearch(inputValue);
            }else if(event.keyCode === 27){
                closeFileSearch(event);
            }
        }
        document.addEventListener('keyup',handleInputEvent);
        return ()=>{
            document.removeEventListener('keyup',handleInputEvent);
        }
    });

    useEffect(()=>{
        if(isActive){
            inputEl.current.focus();
        }
    },[isActive]);
    
    return (
        <div className="search_wrapper">
        {
            !isActive ?
                <div className="noedit_box">
                    <span className="title font14 color666">{title}</span>
                    <i className="el-icon-search icon_search font14 color666" onClick={()=>{setIsActive(true)}}></i>
                </div>
            :
                <div className="noedit_box">
                    <input 
                        className="input_box font14 color666"
                        placeholder="请输入搜索内容" 
                        ref={inputEl}
                        value={inputValue} 
                        onChange={(event)=>{setInputValue(event.target.value)}}/>
                    <i className="el-icon-close icon_search font10 color666" onClick={closeFileSearch}></i>
                </div>
        }
        </div>
    )
}

FileSearch.propTypes = {
    title: PropTypes.string,
    onFileSearch : PropTypes.func.isRequired
};

FileSearch.defaultProps = {
    title : '云存储文档'
};
export default FileSearch;