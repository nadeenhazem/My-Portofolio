import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { useSelector } from 'react-redux';

function CardSkills(props) {
    const theme = useSelector((state) => state.darkmood.value)
    let BColor;
    theme === 'black' ? BColor = '#20262E' :
        BColor = '#F5F5F5';

    return (
        <Card sx={{ maxWidth: 200 }} style={{ backgroundColor: BColor,marginLeft:'3%',marginTop:'3%'}}>
            <CardActionArea className='Skills-Container'>

                <CardMedia
                    component="img"
                    id='img-Skills'
                    image={props.image}
                    alt="..."

                />
                <div className="Skills-div">
                    <div className="Skills-text">{props.text}</div>
                </div>


            </CardActionArea>
        </Card>

    );
}

export default CardSkills;