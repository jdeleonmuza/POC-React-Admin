import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const PSCreate = (props) => {
  return (
    <Create title='Create a price sequences' {...props}>
      <SimpleForm>
        <TextInput source='Level' />
        <TextInput source='MaterialCode' />
        <TextInput source='Value' />
        <TextInput source='Attributes.CustomerGroup'/>
        <TextInput source='Attributes.InitialDate'/>
        <TextInput source='Attributes.EndDate'/>
      </SimpleForm>
    </Create>
  )
}

export default PSCreate