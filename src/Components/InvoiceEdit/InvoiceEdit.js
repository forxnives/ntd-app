import * as React from "react";
import { TextField, Edit, SimpleForm, DateInput, TextInput, ReferenceInput, BooleanInput, SelectInput, FileInput, FileField } from 'react-admin';
import InvoiceTitle from '../InvoiceTitle/InvoiceTitle';
import  Drawer  from '@material-ui/core/Drawer';

import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';






function TabPanel(props) {
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
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
      width: '100%',
    },
  }));






const InvoiceEdit = props => {






    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };





    return (

    <Edit title={<InvoiceTitle />} {...props}>
        <SimpleForm>
            {/* <TextInput source="id" /> */}
            <TextField fullWidth label='Invoice' source="invoiceDetails.number" />
            <ReferenceInput fullWidth source="depositId" reference="deposits"><SelectInput optionText="submissionDate" /></ReferenceInput>
            <BooleanInput source="paymentRecieved" />
            <BooleanInput label='Cancelled' source="cancellation.cancelled" />
            <BooleanInput label='Returned' source="return.returned" />
            <TextInput fullWidth label='Payment method' source="paymentMethod.method" />



            <div className={classes.root}>
                <AppBar position="static">
                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                    <Tab label="Cancellation" {...a11yProps(0)} />
                    <Tab label="Return" {...a11yProps(1)} />
                    <Tab label="Payment" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <FileInput source="cancellationFile" accept="application/pdf">
                        <FileField source="src" title="cancellationFile" />
                    </FileInput>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <FileInput source="returnFile" accept="application/pdf">
                        <FileField source="src" title="returnFile" />
                    </FileInput>
                </TabPanel>
                <TabPanel value={value} index={2}>

                    <FileInput source="paymentFile" accept="application/pdf">
                        <FileField source="src" title="paymentFile" />
                    </FileInput>

                </TabPanel>
            </div>






        </SimpleForm>

    </Edit>

    )};

export default InvoiceEdit