
import * as React from "react";
import { useState } from 'react';
import { List, Datagrid, TextField, ReferenceField, BooleanField, SimpleList, EditButton  } from 'react-admin'
import InvoiceFilter from '../InvoiceFilter/InvoiceFilter';
import InvoiceEdit from '../InvoiceEdit/InvoiceEdit';
import { useMediaQuery } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';







const InvoiceList = props => {

    const [drawerToggle, toggleDrawerToggle] = useState(false);

    // console.log(props.history)

    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));

    const handleDrawerToggle = (anchor) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        // setState({ ...state, [anchor]: open });
        console.log(anchor)
      };
    

    return (
        <React.Fragment>
    <List sort={{ field: 'name', order: 'ASC' }} filters={<InvoiceFilter />} {...props}>
        {isSmall ? (
            <SimpleList 
            primaryText={record => (<div onClick={(e) => toggleDrawerToggle(true)} >{record.invoiceDetails.number}</div>)}
            secondaryText={record => record.paymentMethod.method}

            tertiaryText={record => 
                
                (
                <ReferenceField label='Deposit' source='depositId' reference='deposits' basePath="productCode" record={record}>
                    <TextField source='submissionDate' />
                </ReferenceField>
                )
        }
            />
        ) : (
            <Datagrid isRowSelectable={record => (false)}  >
            {/* <TextField source="id" /> */}
            <TextField label='Invoice' source="invoiceDetails.number" />

            <ReferenceField source="depositId" reference="deposits">
                
                <TextField source="submissionDate" />
            
            </ReferenceField>

            <BooleanField source="paymentRecieved" />
            <BooleanField label='Cancelled' source="cancellation.cancelled" />
            <BooleanField label='Returned' source="return.returned" />
            <TextField label='Payment' source="paymentMethod.method" />
            <EditButton />
        </Datagrid>
        )}

    </List>





    <Drawer anchor='bottom' open={drawerToggle} onClose={() => toggleDrawerToggle(false)} >
        <h1>THIS IS MY DRAWER</h1>

    </Drawer>
    </React.Fragment>
    );
};

export default InvoiceList