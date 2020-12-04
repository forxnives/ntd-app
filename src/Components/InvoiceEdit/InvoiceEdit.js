import * as React from "react";
import { TextField, Edit, SimpleForm, DateInput, TextInput, ReferenceInput, BooleanInput, SelectInput } from 'react-admin';
import InvoiceTitle from '../InvoiceTitle/InvoiceTitle';
import  Drawer  from '@material-ui/core/Drawer';



const InvoiceEdit = props => (

    <Edit title={<InvoiceTitle />} {...props}>
        <SimpleForm>
            {/* <TextInput source="id" /> */}
            <TextField label='Invoice' source="invoiceDetails.number" />
            <ReferenceInput source="depositId" reference="deposits"><SelectInput optionText="submissionDate" /></ReferenceInput>
            <BooleanInput source="paymentRecieved" />
            <BooleanInput label='Cancelled' source="cancellation.cancelled" />
            <BooleanInput label='Returned' source="return.returned" />
            <TextInput label='Payment method' source="paymentMethod.method" />
        </SimpleForm>
    </Edit>

);

export default InvoiceEdit