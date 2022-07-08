import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const DSList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='Level' />
        <TextField source='ConditionClass' />
        <TextField source='MaterialCode' />
        <TextField source='Value' />
        <TextField source='DiscountType' />
        <TextField source='Attributes.CustomerGroup' label='Customer Group' />
        <TextField source='Attributes.Segment' label='Segment'/>
        <TextField source='Attributes.PriceGroup' label='Price Group'/>
        <TextField source='Attributes.ScaleBasis' label='ScaleBasis'/>
        <TextField source='Attributes.InitialDate' label='Initial Date'/>
        <TextField source='Attributes.EndDate' label='End Date'/>
        <EditButton basePath='/DiscountSequences'/>
        <DeleteButton basePath='/DiscountSequences'/>
      </Datagrid>
    </List>
  )
}

export default DSList