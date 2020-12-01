
import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, BooleanField } from 'react-admin'


const InvoiceList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            {/* <TextField source="id" /> */}
            <TextField source="invoiceDetails.number" />
            <ReferenceField source="blockId" reference="blocks"><TextField source="id" /></ReferenceField>
            <BooleanField source="paymentRecieved" />
            <BooleanField source="cancellation.cancelled" />
            <BooleanField source="return.returned" />
            <TextField source="paymentMethod.method" />
        </Datagrid>
    </List>
);

export default InvoiceList