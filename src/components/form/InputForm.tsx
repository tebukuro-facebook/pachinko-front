import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import GetPachinkoRequestParam  from '../../models/GetPachinkoParam';
import { isNumber } from '../../utils/TypeGuards';
import styled from 'styled-components';
import InputSlider from './InputSlider';


const FormArea = styled.div`
  width: 80%;
  margin: 0 10px;
`

const SliderArea= styled.div`
  margin-bottom: 20px;
`

export default function ContinuousSlider({getPachinko}:{getPachinko: (requestParams: GetPachinkoRequestParam) => Promise<void>}): JSX.Element {

  const [normal, setNormal] = useState<number>(199)
  const [koukaku, setKoukaku] = useState<number>(60)
  const [kakuhen, setKakuhen] = useState<number>(50)
  const [keizoku, setKeizoku] = useState<number>(60)

  const changeNormal = (_event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, newValue: number | number[]) => {
    if (!isNumber(newValue)) return

    console.log('changeNormal');

    setNormal(newValue)
  }

  const changeKoukaku = (_event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, newValue: number | number[]) => {
    if (!isNumber(newValue)) return
    setKoukaku(newValue)
  }

  const changeKakuhen = (_event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, newValue: number | number[]) => {
    if (!isNumber(newValue)) return
    setKakuhen(newValue)
  }

  const changeKeizoku = (_event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, newValue: number | number[]) => {
    if (!isNumber(newValue)) return
    setKeizoku(newValue)
  }

  return (
    <FormArea>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      <SliderArea>
        <InputSlider title={"低確率状態での大当たり確率[1/n]"} value={normal} max={400} min={100} changeHandler={changeNormal} key={0} />
        <InputSlider title={"高確率状態での大当たり確率[1/n]"} value={koukaku} max={400} min={10} changeHandler={changeKoukaku} key={1} />
        <InputSlider title={"高確率状態突入率[%]"} value={kakuhen} max={100} min={0} changeHandler={changeKakuhen} key={2} />
        <InputSlider title={"高確率状態継続率[%]"} value={keizoku} max={100} min={0} changeHandler={changeKeizoku} key={3} />
      </SliderArea>

      <Button
        variant="contained"
        color="primary"
        endIcon={<Icon>send</Icon>}
        onClick={
          ()=> {
            getPachinko({normal: normal, koukaku:koukaku, kakuhen:kakuhen, keizoku:keizoku})
          }
        }
      >
        Send
      </Button>

    </FormArea>
  );
}
