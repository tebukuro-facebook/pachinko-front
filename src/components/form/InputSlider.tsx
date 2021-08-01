import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

const InputSlider = ({title, value, changeHandler}:{title: string, value: number, changeHandler: (event: any, newValue: number | number[])=> void}): JSX.Element => {


  return (
    <div>
      <Typography gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs>
          <Slider value={value} step={0.1} color='secondary' onChange={changeHandler} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          <Input
            value={value}
            margin="dense"
            // onChange={handleInputChange}
            // onBlur={handleBlur}
            inputProps={{
              step: 0.1,
              min: 0,
              max: 100,
              type: 'number',
              'aria-labelledby': 'input-slider',
            }}
          />
        </Grid>
      </Grid>
    </div>
  )

}

export default InputSlider
