import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import styled from 'styled-components';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box py={4}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const TabRoot = styled.div`
  flex-grow: 1;
`

export const FormTabs = ({titleList, children}: {titleList:string[] ,children: JSX.Element[]}) : JSX.Element => {
  const [value, setValue] = React.useState(0);

  const handleChange = (_event: React.ChangeEvent<any>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <TabRoot>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          {
            titleList.map(
              (title,index) => (
                <Tab label={title} {...a11yProps(index)} key={`tab-${index}`} />
              )
            )
          }
        </Tabs>
      </AppBar>
      {
        children.map(
          (element, index) => (
            <TabPanel value={value} index={index} key={`tabPanel-${index}`}>
              {element}
            </TabPanel>
          )
        )
      }
    </TabRoot>
  );
}
