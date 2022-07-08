import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const CSOPList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='CustomerCode' />
        <TextField source='SuggestedOrderId' />
        <TextField source='MaterialCode' />
        <TextField source='Quantity' />
        <TextField source='MeassureUnit' />
        <TextField source='CreateDate' />
        <EditButton basePath='/CustomerSuggestedOrderProducts' />
        <DeleteButton basePath='/CustomerSuggestedOrderProducts' />
      </Datagrid>
    </List>
  )
}

export default CSOPList