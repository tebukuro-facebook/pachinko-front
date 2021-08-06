import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import GitHubIcon from '@material-ui/icons/GitHub';


import { callPachinkoApi } from '../api/pachinkoApi'
import InputForm from '../components/form/InputForm'
import ResultTable from '../components/ResultTable'
import GetPachinkoRequestParam from '../models/GetPachinkoParam'
import { PachinkoResult } from '../models/PachinkoResult'
import Loading from '../components/LoadingOverlay';
import { SymphogearParam } from '../models/SymphogearParam';
import { callSymphogearApi } from '../api/SymphogearApi';
import { SymphogearResult } from '../models/SymphogearResult';
import { SymphogearForm } from '../components/form/SymphogearForm';
import { FormTabs } from '../components/FormTabs';

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
  const [symphogearResults, setSymphogearResults] = useState<SymphogearResult[]>([])

  const [displayedResults, setDisplayedResults] = useState<PachinkoResult[] | SymphogearResult[]>([])

  useEffect(() => {
    setDisplayedResults(results)
    }, [results])

  useEffect(() => {
    setDisplayedResults(symphogearResults)
    }, [symphogearResults])

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });

  const getPachinko = async (requestParams: GetPachinkoRequestParam) => {

    const responseResults = await callPachinkoApi(requestParams, setIsLoading)

    if (responseResults) {
      setResults(responseResults)
    }
  }

  const getSymphogear = async (requestParams: SymphogearParam) => {

    const responseResults = await callSymphogearApi(requestParams, setIsLoading)

    if (responseResults) {
      setSymphogearResults(responseResults)
    }
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <Head>
        <title>Pachinko</title>
        <meta name="description" content="ぱちんこプログラム"></meta>
      </Head>
      < Loading isLoading={isLoading} >
        <StyledMain>

          <CssBaseline/>

          <Title>pachinko</Title>
          <a href='https://github.com/tebukuro-facebook/pachinko-front'><GitHubIcon/></a>

          <StyledH2 >
            設定
          </StyledH2>

          <FormTabs titleList= {["Pachinko1", "Symphogear"]}>
            <InputForm getPachinko={getPachinko}></InputForm>
            <SymphogearForm getSymphogear={getSymphogear}></SymphogearForm>
          </FormTabs>

          <StyledH2 >
            結果
          </StyledH2>

          <ResultTable results={displayedResults} />

        </StyledMain>

        </ Loading >

    </ThemeProvider>
  )
}
