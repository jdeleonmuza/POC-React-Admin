import React from 'react'
import { Create, SimpleForm, TextInput, DateInput, Edit } from 'react-admin'

const PSEdit = (props) => {
  return (
    <Edit title='Edit a price sequences' {...props}>
      <SimpleForm>
        <TextInput source='Level' />
        <TextInput source='MaterialCode' />
        <TextInput source='Value' />
        <TextInput source='Attributes.CustomerGroup'/>
        <TextInput source='Attributes.InitialDate'/>
        <TextInput source='Attributes.EndDate'/>
      </SimpleForm>
    </Edit>
  )
}

export default PSEdit