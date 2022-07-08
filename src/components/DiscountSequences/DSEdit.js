import React from 'react'
import { Create, SimpleForm, TextInput, DateInput, Edit } from 'react-admin'

const DSEdit = (props) => {
  return (
    <Edit title='Create a Person' {...props}>
      <SimpleForm>
        <TextInput source='Level' />
        <TextInput source='ConditionClass' />
        <TextInput source='MaterialCode' />
        <TextInput source='Value' />
        <TextInput source='DiscountType' />
        <TextInput source='Attributes.CustomerGroup' />
        <TextInput source='Attributes.CustomerGroup'/>
        <TextInput source='Attributes.Segment'/>
        <TextInput source='Attributes.PriceGroup'/>
        <TextInput source='Attributes.ScaleBasis'/>
        <TextInput source='Attributes.InitialDate'/>
        <TextInput source='Attributes.EndDate'/>
      </SimpleForm>
    </Edit>
  )
}

export default DSEdit