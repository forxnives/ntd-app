
import * as React from "react";
import { Create, SimpleForm, ReferenceInput, SelectInput, TextInput, DateInput } from 'react-admin';




const InvoiceCreate = props => (

    <Create {...props}>
        <SimpleForm>
            {/* <TextInput source="id" /> */}
            <TextInput source="invoiceDetails.number" />
            <ReferenceInput source="depositId" reference="deposits"><SelectInput optionText="submissionDate" /></ReferenceInput>

            <DateInput source="paymentMethod.method" />
        </SimpleForm>
    </Create>
);

export default InvoiceCreate