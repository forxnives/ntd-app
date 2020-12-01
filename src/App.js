import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import InvoiceList from './Components/InvoiceList/InvoiceList';
import BlockList from './Components/BlockList/BlockList';

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const dataProvider = jsonServerProvider('http://localhost:5000');



const App = () => (

  <Admin dataProvider={dataProvider}>
      <Resource name="invoices" list={InvoiceList} />
      <Resource name="blocks" list={BlockList} />
  </Admin>

);



export default App;
