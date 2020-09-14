import React  from 'react';
import {TextField} from "@material-ui/core";
import {withStyles,} from '@material-ui/core/styles';


const CustomTextField = withStyles({
        root: {
          '& label.Mui-focused': {
            color: '#43A4F3',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#43A4F3',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#43A4F3',
              border: '2px solid rgba(196,196,196, 0.5)',
              borderRadius: '10px'

            },
            '&:hover fieldset': {
              borderColor: '#43A4F3',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#43A4F3',
            },
          },
        },
      })(TextField);

export default CustomTextField;
