import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
  TextInput,
  SearchInput
} from 'react-admin'


const postFilters = [
  <SearchInput source="q" alwaysOn />,
];

const PeopleList = (props) => {
  return (
    <List {...props} filters={postFilters}>
      <Datagrid>
        <TextField source='Code' />
        <TextField source='Name' />
        <TextField source='ContactPerson' />
        <TextField source='GECDescription' />
        <TextField source='ChannelDescription' />
        <TextField source='Email' />
        <TextField source='Address.Address1' label='Address 1' />
        <TextField source='Address.BetweenStreet1' label='Between Street 1' />
        <TextField source='Address.BetweenStreet2' label='Between Street 2' />
        <TextField source='Address.Locality'/>
        <TextField source='Address.City'/>
        <TextField source='Address.Telephone'/>
        <TextField source='Address.TelExtension'/>
        <TextField source='Address.PostalCode'/>
        <EditButton basePath='/Customers' />
        <DeleteButton basePath='/Customers' />
      </Datagrid>
    </List>
  )
}

export default PeopleList