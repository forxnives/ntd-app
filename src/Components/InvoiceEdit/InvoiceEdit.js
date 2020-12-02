import * as React from "react";
import { TextField, Edit, SimpleForm, DateInput, TextInput, ReferenceInput, BooleanInput, SelectInput } from 'react-admin';



const InvoiceEdit = props => (
    <Edit {...props}>
        <SimpleForm>
            {/* <TextInput source="id" /> */}
            <TextField source="invoiceDetails.number" />
            <ReferenceInput source="depositId" reference="deposits"><SelectInput optionText="submissionDate" /></ReferenceInput>
            <BooleanInput source="paymentRecieved" />
            <BooleanInput source="cancellation.cancelled" />
            <BooleanInput source="return.returned" />
            <DateInput source="paymentMethod.method" />
        </SimpleForm>
    </Edit>
);

export default InvoiceEdit