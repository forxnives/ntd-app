import * as React from "react";
import { Filter, TextInput, ReferenceInput, SelectInput } from 'react-admin';



const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
        <ReferenceInput label="Deposit" source="depositId" reference="deposits" allowEmpty>
            <SelectInput optionText="submissionDate" />
        </ReferenceInput>
    </Filter>
);

export default PostFilter