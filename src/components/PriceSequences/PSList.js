import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const PSList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='Level' />
        <TextField source='MaterialCode' />
        <TextField source='Value' />
        <TextField source='Attributes.CustomerGroup' label='Customer Group' />
        <TextField source='Attributes.InitialDate' label='Initial Date' />
        <TextField source='Attributes.EndDate' label='End Date' />
        <EditButton basePath='/priceSequences' />
        <DeleteButton basePath='/priceSequences' />
      </Datagrid>
    </List>
  )
}

export default PSList