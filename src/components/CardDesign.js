import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
function CardDesign(props) {
    return (
        <Card sx={{ maxWidth: 400 }} id='mainCard'>
        <CardActionArea>
            <a href={props.Link} target='_blank'>
            <CardMedia
                component="img"
                height="250"
                image={props.img}
                alt="doc"
                id='img-Card'
            /></a>
            
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.Header}
                </Typography>
                <Typography variant="body2" >
                    {props.body}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>

    );
}

export default CardDesign;