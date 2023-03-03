// import { makeStyles } from "@mui/styles";

// import { useTheme } from "@mui/material/styles";



// export default makeStyles((theme)=>({
  
//   [useTheme().breakpoints.down('xs'&&'sm'&&'md')]:{
//     mainContainer:{
//       display:'flex',
//       flexDirection:"column-reverse !important"
//     },
 
//   },

//   Paper: {
    
//       display:"inline-flex",
//       flexWrap: 'wrap',
//       '& > :not(style)': {
//         padding: 5,
//         margin: 20,
//       },
 
//     },
//       root: {
//         display:"inline-flex",
//         flexWrap: 'wrap',
//         '& > :not(style)': {
//           margin: 5,
//         },
   
//         },
      

//       form: {
//         display: 'flex',
//         flexWrap: 'wrap',
//         justifyContent: 'center',
//       },

//       fileInput: {
//         width: 300,
//         margin: 50,
//       },
//       buttonSubmit: {
//         '& > :not(style)': {
//           margin: 10,
//         },
//       },
// }))

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      borderRadius:'50%'
    },
  },
  Paper: {
    padding: theme.spacing(2),
    borderRadius:'3%'

  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
}));




