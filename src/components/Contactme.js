import React from 'react';
import '../stayling/Home.css';
import {FaLinkedin,FaGithub} from "react-icons/fa";
import{MdEmail}from "react-icons/md";
import {ImMobile}from "react-icons/im";

function Contactme(props) {
    return (
        <section className='Contact-Me'>
            <h1>contact me</h1>
            <div className='Contact-Me-Icons'>
                <a href='https://www.linkedin.com/in/nadeen-hazem-6624a31a3/' target={'_blank'} rel="noreferrer">
            <FaLinkedin   className='Contact-Me-Links'/>
            </a>

            <a href={`mailto:NadeenHazem@outlook.com`} target={'_blank'} rel="noreferrer">
            <MdEmail   className='Contact-Me-Links'/>
            </a>
            <a href='https://github.com/nadeenhazem' target={'_blank'} rel="noreferrer">
            <FaGithub   className='Contact-Me-Links'/>
            </a>
            <a href='http://api.whatsapp.com/send?phone=01003199669' target={'_blank'} rel="noreferrer">
            <ImMobile   className='Contact-Me-Links'/>
            </a>
            </div>
        </section>
    );
}

export default Contactme;