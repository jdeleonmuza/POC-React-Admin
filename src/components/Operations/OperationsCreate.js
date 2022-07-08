import React from 'react'
import { Create, SimpleForm, TextInput, DateInput, Edit } from 'react-admin'

const OperationsCreate = (props) => {
  return (
    <Create title='Create a Operation' {...props}>
      <SimpleForm>
        <TextInput source='OperationType' />
        <TextInput source='Description' />
        <TextInput source='Valued' />
        <TextInput source='Sign' />
        <TextInput source='ApplyDiscount' />
        <TextInput source='ApplyBonus' />
      </SimpleForm>
    </Create>
  )
}

export default OperationsCreate