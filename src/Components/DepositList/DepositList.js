
import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, BooleanField } from 'react-admin'


const DepositList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="submissionDate" />
            <BooleanField label='Ready for approval' source="approval.pending" />
        </Datagrid>
    </List>
);


export default DepositList