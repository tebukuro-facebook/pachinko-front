import React, { useState } from 'react';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


import GetPachinkoRequestParam  from '../../models/GetPachinkoParam';
import { isNumber } from '../../utils/TypeGuards';
import styled from 'styled-components';
import InputSlider from './InputSliuder';


const FormArea = styled.div`
  width: 80%;
  margin: 0 10px;
`

const SliderArea= styled.div`
  margin-bottom: 20px;
`


export default function ContinuousSlider({getPachinko}:{getPachinko: (requestParams: GetPachinkoRequestParam) => Promise<void>}) {

  const [normal, setNormal] = useState<number>(10)
  const [koukaku, setKoukaku] = useState<number>(20)
  const [kakuhen, setKakuhen] = useState<number>(10)
  const [keizoku, setKeizoku] = useState<number>(10)

  const changeNormal = (event: any, newValue: number | number[]) => {
    if (!isNumber(newValue)) return

    console.log('changeNormal');

    setNormal(newValue)
  }

  const changeKoukaku = (event: any, newValue: number | number[]) => {
    if (!isNumber(newValue)) return
    setKoukaku(newValue)
  }

  const changeKakuhen = (event: any, newValue: number | number[]) => {
    if (!isNumber(newValue)) return
    setKakuhen(newValue)
  }

  const changeKeizoku = (event: any, newValue: number | number[]) => {
    if (!isNumber(newValue)) return
    setKeizoku(newValue)
  }

  return (
    <FormArea>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      <SliderArea>
        <InputSlider title={"低確率状態での大当たり確率[1/n]"} value={normal} changeHandler={changeNormal} key={0} />
        <InputSlider title={"高確率状態での大当たり確率[1/n]"} value={koukaku} changeHandler={changeKoukaku} key={1} />
        <InputSlider title={"高確率状態突入率[%]"} value={kakuhen} changeHandler={changeKakuhen} key={2} />
        <InputSlider title={"高確率状態継続率[%]"} value={keizoku} changeHandler={changeKeizoku} key={3} />
      </SliderArea>

      <Button
        variant="contained"
        color="primary"
        endIcon={<Icon>send</Icon>}
        onClick={()=> {getPachinko({normal: normal, koukaku:koukaku, kakuhen:kakuhen, keizoku:keizoku})}}
      >
        Send
      </Button>

    </FormArea>
  );
}
