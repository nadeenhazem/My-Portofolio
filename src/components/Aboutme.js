import React from 'react';
import { useSelector } from 'react-redux';
import '../stayling/Home.css';
function Aboutme(props) {
    const theme = useSelector((state) => state.darkmood.value)
    let mainColor;
    theme === 'black' ? mainColor = 'white' :
        mainColor = 'black';
    return (
        <>
            <section className='section-Home section-aboutme' style={{ color: mainColor }} id='AboutMe'>
                <h1 className='About-Me-Header'>
                    About Me</h1>
                <div className="container py-5 h-100" style={{ width: '80%' }}>
                    <div className="row d-flex justify-content-center align-items-center h-100" >
                        <div className="col col-xl-10 " id='Home-card' style={{ backgroundColor: theme }}>
                            <div className="card" id='Home-card' style={{ backgroundColor: 'hsl(259, 56%, 69%)' }}>
                                <div className="row g-0">


                                    <div className="col-md-6 col-lg-6  d-md-block" >
                                        <img src='https://i.ibb.co/42DMmLg/aboutme.png'
                                            alt="login form" className="img-fluid" />
                                    </div>
                                    <div className="col-md-6 col-lg-6 d-flex align-items-center" >
                                        <div className="card-body p-2 p-lg-2" style={{ minHeight: '70%' }}>
                                            <p className='About-Me-Data'>
                                                My name is nadeen hazem ,
                                                I studied software engineering at asyut university and completed ITI internship in full-stack using python .
                                                I am front end developer with one year of experience, I translated UX designs into actual code and built websites,
                                                I am currently studying more features in React

                                            </p>


                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    );
}

export default Aboutme;