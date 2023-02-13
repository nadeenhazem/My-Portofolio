import React from 'react';
import { useSelector } from 'react-redux';
import resume from '../Files/Nadeen_Hazem_Resume.pdf';
import resumeimg from '../img/resume.png'
function Resume(props) {
    const theme = useSelector((state) => state.darkmood.value)
    let mainColor;
    theme==='black'?mainColor='white':
    mainColor='black';
//download
    const onButtonClick = () => {
        
        fetch('Nadeen_Hazem_Resume.pdf').then(response => {
            response.blob().then(blob => {
                
                const fileURL = window.URL.createObjectURL(blob);
                
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = 'Nadeen_Hazem_Resume.pdf';
                alink.click();
            })
        })
    }
    
    return (
        <section style={{backgroundColor:theme,color:mainColor,textAlign:'center'}}>

          <img src={resumeimg} alt=''
                className='Resume-img img-fluid'/>
                
<br/>
          <button onClick={onButtonClick} className='Resume-btn '
          style={{backgroundColor:mainColor,color:theme}}>
                    Download Resume
                </button>
                <button className='Resume-btn'
                style={{backgroundColor:mainColor}}>
                <a href={resume} target="_blank" 
                className='Resume-Link'
                    rel="noreferrer"
                    style={{color:theme}}>
                    Open  Resume
                </a> 
                </button>
                <br/>
        </section>
    );
}

export default Resume;