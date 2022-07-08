import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const DSCreate = (props) => {
  return (
    <Create title='Create a Person' {...props}>
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
    </Create>
  )
}

export default DSCreate