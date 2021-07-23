import React, { useState } from 'react'
import styled from 'styled-components'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import { callPachinkoApi } from '../api/pachinkoApi'
import InputForm from '../components/form/InputForm'
import ResultTable from '../components/ResultTable'
import GetPachinkoRequestParam from '../models/GetPachinkoParam'
import { PachinkoResult } from '../models/PachinkoResult'
import Loading from '../components/LoadingOverlay';

const StyledMain = styled.main`
  margin: 0 20px;
`

const Title = styled.h1`
  font-size: 35px;
`

const StyledH2 = styled.h2`
  font-size: 20px;
  margin-top: 40px;
`

export default function Home(): JSX.Element {
  const [results, setResults] = useState<PachinkoResult[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });

  const getPachinko = async (requestParams: GetPachinkoRequestParam) => {

    const results = await callPachinkoApi(requestParams, setIsLoading)

    if (results) {
      setResults(results)
    }
  }

  return (
    <ThemeProvider theme={darkTheme}>
      < Loading isLoading={isLoading} >
        <StyledMain>

          <CssBaseline/>

          <Title>pachinko</Title>

          <StyledH2 >
            設定
          </StyledH2>

          <InputForm getPachinko={getPachinko}></InputForm>

          <StyledH2 >
            結果
          </StyledH2>

          <ResultTable results={results} />

        </StyledMain>

        </ Loading >

    </ThemeProvider>
  )
}
