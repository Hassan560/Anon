// import React from 'react';
// import Carousel from 'react-material-ui-carousel'
// import { Paper, Button } from '@mui/material'
// import rocket from '../assets/Images/rocket.png';

// export default function ImageSlide(props) {
//   var items = [
//     {
//       name: "Random Name #1",
//       image: rocket,
//       description: "Probably the most random thing you have ever seen!"
//     },
//     {
//       name: "Random Name #2",
//       description: "Hello World!"
//     }
//   ]

//   return (
//     <Carousel indicators={false} animation="slide">
//       {
//         items.map((item, i) => <Item key={i} item={item} />)
//       }
//     </Carousel>
//   )
// }

// function Item(props) {
//   return (
//     <Paper>
//       <h2>{props.item.name}</h2>
//       <p>{props.item.description}</p>
//       <img src={props.item.image}/>

//         <Button className="CheckButton">
//           Check it out!
//         </Button>
//     </Paper>
//   )
// }