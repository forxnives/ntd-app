import * as React from "react";
import { Admin, Resource, EditGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';


import Dashboard from './Components/Dashboard/Dashboard';
import AuthProvider from './Components/AuthProvider/AuthProvider';

import InvoiceList from './Components/InvoiceList/InvoiceList';
import DepositList from './Components/DepositList/DepositList';
import InvoiceEdit from './Components/InvoiceEdit/InvoiceEdit';
import InvoiceCreate from './Components/InvoiceCreate/InvoiceCreate';

import DescriptionIcon from '@material-ui/icons/Description';
import LibraryBooksIcon from '@material-ui/icons/LibraryBooks';

// const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');
const dataProvider = jsonServerProvider('http://localhost:5000');



const App = () => (

  <Admin authProvider={AuthProvider} dashboard={Dashboard} dataProvider={dataProvider}>
      <Resource icon={DescriptionIcon} name="invoices" list={InvoiceList} edit={InvoiceEdit} create={InvoiceCreate} />
      <Resource icon={LibraryBooksIcon} name="deposits" list={DepositList} />
  </Admin>

);



export default App;
