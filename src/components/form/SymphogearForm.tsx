import React, { useState } from 'react';

import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import { isNumber } from '../../utils/TypeGuards';
import styled from 'styled-components';
import InputSlider from './InputSlider';
import { SymphogearParam } from '../../models/SymphogearParam';


const FormArea = styled.div`
  width: 80%;
  margin: 0 10px;
`

const SliderArea= styled.div`
  margin-bottom: 20px;
`

const SymphogearForm = ({getSymphogear}:{getSymphogear: (requestParams: SymphogearParam) => Promise<void>}): JSX.Element => {

  const [normal, setNormal] = useState<number>(199)
  const [koukaku, setKoukaku] = useState<number>(60)
  const [tokuzu1, setTokuzu1] = useState<number>(10)
  const [tokuzu2, setTokuzu2] = useState<number>(10)
  const [challenge, setChallenge] = useState<number>(1000)


  const changeNormal = (_event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, newValue: number | number[]) => {
    if (!isNumber(newValue)) return
    setNormal(newValue)
  }

  const changeKoukaku = (_event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, newValue: number | number[]) => {
    if (!isNumber(newValue)) return
    setKoukaku(newValue)
  }

  const changeTokuzu1 = (_event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, newValue: number | number[]) => {
    if (!isNumber(newValue)) return
    setTokuzu1(newValue)
  }

  const changeTokuzu2 = (_event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, newValue: number | number[]) => {
    if (!isNumber(newValue)) return
    setTokuzu2(newValue)
  }

  const changeChallenge = (_event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>, newValue: number | number[]) => {
    if (!isNumber(newValue)) return
    setChallenge(newValue)
  }



  return (
    <FormArea>
      <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

      <SliderArea>
        <InputSlider title={"特図2での大当たり確率[1/n]"} value={normal} max={400} min={100} changeHandler={changeNormal} key={0} />
        <InputSlider title={"特図2での小当たり確率[1/n]"} value={koukaku} max={400} min={10} changeHandler={changeKoukaku} key={1} />
        <InputSlider title={"特図1当せん時の電サポ回数[回]"} value={tokuzu1} max={100} min={0} changeHandler={changeTokuzu1} key={2} />
        <InputSlider title={"特図2当せん時の電サポ回数[回]"} value={tokuzu2} max={100} min={0} changeHandler={changeTokuzu2} key={3} />
        <InputSlider title={"試行回数"} value={challenge} max={10000} min={0} step={1} changeHandler={changeChallenge} key={4} />
      </SliderArea>

      <Button
        variant="contained"
        color="primary"
        endIcon={<Icon>send</Icon>}
        onClick={
          ()=> {
            getSymphogear({normal: normal, koukaku:koukaku, tokuzu1:tokuzu1, tokuzu2:tokuzu2, challenge:challenge})
          }
        }
      >
        Send
      </Button>

    </FormArea>
  );
}

export {SymphogearForm}