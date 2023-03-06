// import { makeStyles } from "@mui/styles";
// import { border, borderRadius, display, margin } from "@mui/system";
// import { useTheme } from "@mui/material/styles";



// export default makeStyles((theme)=>({
  
//   [useTheme().breakpoints.down('xs'&&'sm'&&'md')]:{
//     mainContainer:{
//       display:'inline-flex',
//       flexDirection:"column-reverse !important"
//     },
 
//   },

//   appBar: {
//     borderRadius: 15,
//     margin: '30px 0',
//     display: 'flex',
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   heading: {
//     color: 'rgba(0,183,255, 1)',
//   },
//   image: {
//     marginLeft: '350px',
//     position:"absolute",
//   },
// }))

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
  },
  image: {
    marginLeft: '15px',
  },
  [theme.breakpoints.down('sm')]:{
    mainContainer: {
      flexDirection: "column-reverse"
  }},
}));


