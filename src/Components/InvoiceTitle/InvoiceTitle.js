import * as React from "react";






const PostTitle = ({ record }) => {


        return <span>Invoice {record ? `${record.invoiceDetails.number}` : ''}</span>;
};

export default PostTitle
