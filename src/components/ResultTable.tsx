import React from 'react';

import { PachinkoResult } from "../models/PachinkoResult"

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import styled from 'styled-components';
import range from '../utils/Range';


const TableCellPaper = styled(Paper)`
  min-width: 350px;
  max-width: 80%;
`

const StyledTableHeader = styled(TableHead)`
  border-bottom: 2px double white;
`

const ResultTable = ({results}: {results: PachinkoResult[]}): JSX.Element => {

  return (
    <div>
      <TableContainer component={TableCellPaper}>
        <Table size="small"  aria-label="simple table">
          <StyledTableHeader>
            <TableRow>
              <TableCell align="center">index</TableCell>
              <TableCell align="center">回転数</TableCell>
              <TableCell align="center">状態</TableCell>
              <TableCell align="center">次回</TableCell>
            </TableRow>
          </StyledTableHeader>
          <TableBody>
            {results.map((result, index) => (
              <TableRow key={index}>
                <TableCell align="right">{index}</TableCell>
                <TableCell align="right">{result.kaiten}</TableCell>
                <TableCell align="right">{result.mode}</TableCell>
                <TableCell align="right">{result.next}</TableCell>
              </TableRow>
            ))}
            { (!results || !results.length)
              &&
              range(0, 20).map((number)=> {
                <TableRow key={number}>
                  <TableCell>{""}</TableCell>
                  <TableCell>{""}</TableCell>
                  <TableCell>{""}</TableCell>
                  <TableCell>{""}</TableCell>
                </TableRow>
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ResultTable
