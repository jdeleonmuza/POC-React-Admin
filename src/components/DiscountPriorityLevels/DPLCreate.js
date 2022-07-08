import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const DPLCreate = (props) => {
  return (
    <Create title='Create a price sequences' {...props}>
      <SimpleForm>
        <TextInput source='Sequence' />
        <TextInput source='ConditionClass' />
        <TextInput source='Description'/>
      </SimpleForm>
    </Create>
  )
}

export default DPLCreate