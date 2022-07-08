import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const OperationsList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='OperationType' />
        <TextField source='Description' />
        <TextField source='Valued' />
        <TextField source='Sign' />
        <TextField source='ApplyDiscount' />
        <TextField source='ApplyBonus' />
        <EditButton basePath='/Operations' />
        <DeleteButton basePath='/Operations' />
      </Datagrid>
    </List>
  )
}

export default OperationsList