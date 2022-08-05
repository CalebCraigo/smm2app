import React, { useState, useEffect }  from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Grid from '@mui/material/Grid';
import '../css/infoCards.css';


const InfoCards = (props) => {


    const cards = props.currentPage.map(i => {
        console.log("i", i);
    return  <Card
                sx={{ 
                    height: 125,
                    width: 650,
                    backgroundColor: "#FCF5D9",
                    margin: 2
                }}
                key={i.id}
            >
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="0"
                        image=""
                        alt=""
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {i.course.header.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {i.uploader}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {i.difficulty}
                    </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
    });

console.log("cards", cards)
    return(
        <Grid>
            {cards}
        </Grid>
    )
}

export default InfoCards;