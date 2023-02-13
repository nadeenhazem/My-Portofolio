import React from 'react';
import '../stayling/Home.css';
import { useSelector } from 'react-redux';
import Aboutme from '../components/Aboutme';
function Home(props) {
    const theme = useSelector((state) => state.darkmood.value)
    let mainColor;
    theme==='black'?mainColor='white':
    mainColor='black';

    return (
        <>
        <section className='section-Home'>
             <div className="container py-5 h-100" style={{width:'100%'}}>
                    <div className="row d-flex justify-content-center align-items-center h-100" >
                        <div className="col col-xl-10 " id='Home-card' style={{backgroundColor:theme}}>
                            <div className="card"id='Home-card'style={{backgroundColor:theme}}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-6 d-flex align-items-center" >
                                        <div className="card-body p-2 p-lg-2"style={{minHeight:'70%',color:mainColor}}>
                                           <h1 className='Home-Title'>Hello,</h1>
                                           <h1 className='Home-Title'id='Name-Text'>I'M Nadeen Hazem</h1>
                                           <h1 className='Home-Title'id='frontend-Text'>Frontend Developer</h1>


                                        </div>
                                    </div>


                                    <div className="col-md-6 col-lg-6  d-md-block" >
                                        <img src='https://i.ibb.co/HHDk7ZM/mainimage.png'
                                            alt="login form" className="img-fluid" />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </section>
        <Aboutme/>
        </>
    );
}

export default Home;