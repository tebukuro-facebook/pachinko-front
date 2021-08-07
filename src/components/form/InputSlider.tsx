import React from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

import styled from 'styled-components';

const SideInput = styled(Input)`
  max-width: 60px
`

interface inputSliderProps {
  title: string
  value: number
  max: number
  min: number
  step: number
  changeHandler: (event: React.ChangeEvent<any>, newValue: number | number[])=> void
}

const InputSlider = ({title, value, max, min, step, changeHandler}:inputSliderProps): JSX.Element => {

  /**
   * onblurで値が範囲外の場合範囲内に収める.
   */
  const onBlurHandler = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    let inputValue = parseFloat(event.target.value)

    if (step && step >= 1) {
      inputValue = Math.round(inputValue)
    }

    if (!inputValue) {
      inputValue = min
    }

    if (inputValue > max){
      inputValue = max
    } else if (inputValue < min) {
      inputValue = min
    }
    changeHandler(event, inputValue)
  }

  return (
    <div>
      <Typography gutterBottom>
        {title}
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs>
          <Slider value={value} max={max} min={min} step={step} color='secondary' onChange={changeHandler} aria-labelledby="continuous-slider" />
        </Grid>
        <Grid item>
          <SideInput
            value={value}
            margin="dense"
            onChange={(event) => changeHandler(event, parseFloat(event.target.value))}
            onBlur={(event) => onBlurHandler(event)}
            inputProps={{
              step: step,
              min: min,
              max: max,
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
