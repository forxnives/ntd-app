import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import InvoiceList from './Components/InvoiceList/InvoiceList';
import DepositList from './Components/DepositList/DepositList';
import InvoiceEdit from './Components/InvoiceEdit/InvoiceEdit';
import InvoiceCreate from './Components/InvoiceCreate/InvoiceCreate';

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const dataProvider = jsonServerProvider('http://localhost:5000');



const App = () => (

  <Admin dataProvider={dataProvider}>
      <Resource name="invoices" list={InvoiceList} edit={InvoiceEdit} create={InvoiceCreate} />
      <Resource name="deposits" list={DepositList} />
  </Admin>

);



export default App;
