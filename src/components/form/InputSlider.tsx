import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

const InputSlider = ({title, value, max, min, step, changeHandler}:{title: string, value: number, max: number,min: number, step?: number, changeHandler: (event: React.ChangeEvent<any>, newValue: number | number[])=> void}): JSX.Element => {

  /**
   * onblurで値が範囲外の場合範囲内に収める.
   */
  const onBlurHandler = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    if (parseFloat(event.target.value) > max){
      changeHandler(event, max)
    } else if (parseFloat(event.target.value) < min) {
      changeHandler(event, min)
    }
  }

  return (
    <div>
      <Typography gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs>
          <Slider value={value} max={max} min={min} step={step ? step : 0.1} color='secondary' onChange={changeHandler} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          <Input
            value={value}
            margin="dense"
            onChange={(event) => changeHandler(event, parseFloat(event.target.value))}
            onBlur={(event) => onBlurHandler(event)}
            inputProps={{
              step: 0.1,
              min: {min},
              max: {max},
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
