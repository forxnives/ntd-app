import * as React from "react";






const PostTitle = ({ record }) => {

    console.log(record.invoiceDetails.number)
        return <span>Invoice {record ? `${record.invoiceDetails.number}` : ''}</span>;
};

export default PostTitle
