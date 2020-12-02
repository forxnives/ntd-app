
import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, BooleanField, SimpleList } from 'react-admin'
import InvoiceFilter from '../InvoiceFilter/InvoiceFilter';
import { useMediaQuery } from '@material-ui/core';



const InvoiceList = props => {


    const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
    

    return (
    <List filters={<InvoiceFilter />} {...props}>
        {isSmall ? (
            <SimpleList
            primaryText={record => record.invoiceDetails.number}
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
            <Datagrid rowClick={(thing) => console.log(thing)}>
            {/* <TextField source="id" /> */}
            <TextField label='Invoice' source="invoiceDetails.number" />
            <ReferenceField source="depositId" reference="deposits">
                
                <TextField source="submissionDate" />
            
            </ReferenceField>
            <BooleanField source="paymentRecieved" />
            <BooleanField label='Cancelled' source="cancellation.cancelled" />
            <BooleanField label='Returned' source="return.returned" />
            <TextField label='Payment' source="paymentMethod.method" />
        </Datagrid>
        )}

    </List>
    );
};

export default InvoiceList