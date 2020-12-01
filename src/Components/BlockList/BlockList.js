
import * as React from "react";
import { List, Datagrid, TextField, ReferenceField, BooleanField } from 'react-admin'


const BlockList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id" />
            <TextField source="submissionDate" />
            <BooleanField source="approval.pending" />
        </Datagrid>
    </List>
);


export default BlockList