import React from 'react';
import { useSelector } from 'react-redux';
import CardDesign from '../components/CardDesign';
import CardSkills from '../components/CardSkills';

function Work(props) {
    const theme = useSelector((state) => state.darkmood.value)
    let mainColor;
    theme === 'black' ? mainColor = 'white' :
        mainColor = 'black';
    return (

        <section className='section-Home'  >
            <div className="container py-5 h-100" style={{ width: '100%' }}>
                <div className="row d-flex justify-content-center align-items-center h-100" >
                    <div className="col col-xl-10 " id='Home-card' style={{ backgroundColor: theme }}>
                       
                       
                        <div className="card" id='Home-card' style={{ backgroundColor: theme,justifyItems:'center',alignItems:'center'}}>
                        <h1 style={{color:mainColor }}>
                                 My <span style={{color:'#8771b7'}}>Skills</span></h1>

                            <div className="row g-0 "id='Skills-main-dev'style={{backgroundColor:theme}}>
                               <CardSkills image='https://i.ibb.co/NpmJsXS/React.png' text='React.js'/>
                               <CardSkills image='https://i.ibb.co/KKYH6Q2/java.png' text='JavaScript'/>
                                <CardSkills image="https://i.ibb.co/zPFkfQ4/Bootstrap.png" text='Bootstrap'/>
                               <CardSkills image='https://i.ibb.co/7VFJTZM/typescript.png' text='TypeScript'/>
                                <CardSkills image='https://i.ibb.co/zbQYyXT/pngegg-3.png' text='HTML5'/>
                               <CardSkills image='https://i.ibb.co/CJXrzMW/css.png' text='CSS3'/>
                               <CardSkills image='https://i.ibb.co/y5HgpWY/sass.png' text='SASS'/>  
                               <CardSkills image='https://i.ibb.co/NZJXXQK/python.png' text='Python'/>
                               <CardSkills image='https://i.ibb.co/jH1hnPC/Redux.png' text='Redux'/>
                               <CardSkills image='https://i.ibb.co/93RHKBc/figma.png' text='Figma'/>  
                               <CardSkills image='https://i.ibb.co/1rr5N3B/gith-1.png' text='GitHub'/>
                               <CardSkills image='https://i.ibb.co/tMV9JcB/linx3.png' text='Linux' />
                               <CardSkills image='https://i.ibb.co/sRMgPMg/dj.png' text='Django'/>  
                               <CardSkills image='https://i.ibb.co/9pqQJMN/sql.png' text='PostgreSQL'/>
                               <CardSkills image='https://i.ibb.co/yn7rMZx/photshop.png' text='PhotoShop'/>  
                               <CardSkills image='https://i.ibb.co/pWxWgQS/Alis.png' text='Illustrator'/>

                            </div>
                        </div>

                        <div className="card" id='Home-card' style={{ backgroundColor: theme,textAlign:'center' }}>
                            <h1 style={{color:mainColor ,marginBottom:'2%',marginTop:'10%' }}>
                                <span style={{color:'#8771b7'}}>Recent</span> Work</h1>
                            <div className="row g-0">
                                
                            <CardDesign img='https://i.ibb.co/MgyK4qv/mainpage.jpg' Header='Education'
                                Link='https://e-learning-dd3de.firebaseapp.com/' 
                                body='This Website is For learning in different fields such as
                                programming, languages, and more fields
                                ' />


                                <CardDesign img='https://i.ibb.co/cDDrf7j/ToDoList.png' Header='TODO List' 
                                Link='https://github.com/nadeenhazem/To-Do-List'
                                body='
                                 This Website will be like a task keeper 
                                 where the user would be able to enter the tasks that they need to do. 
                                 Once they are done with their tasks they can also done or remove them from the list.' />



                                <CardDesign img='https://i.ibb.co/zbSgmXn/Home.png' Header='Furniture' 
                                Link='https://sama-furniture.web.app/'body='This Website to display Furniture or buy it and can added to the cart to buy later or add to favorit'/>

<CardDesign img='https://i.ibb.co/Bf6SLGV/2.png' Header='Care Hospital'
                                Link='https://drive.google.com/drive/folders/1C8CCH8oTNhizIXaa52Hbmp1hkogRWbzn?usp=sharing' 
                                body='This Website For easy Booking Appointments with a Doctor
                                ,  Choosing a Good Doctor and Follow-up with this Doctor
                                ' />




                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Work;