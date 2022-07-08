import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const DPLList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='Sequence' />
        <TextField source='ConditionClass' />
        <TextField source='Description'/>
        <EditButton basePath='/DiscountPriorityLevels' />
        <DeleteButton basePath='/DiscountPriorityLevels' />
      </Datagrid>
    </List>
  )
}

export default DPLList