import React from 'react'
import { Create, SimpleForm, TextInput, DateInput, Edit } from 'react-admin'

const DPLEdit = (props) => {
  return (
    <Edit title='Create a price sequences' {...props}>
      <SimpleForm>
        <TextInput source='Sequence' />
        <TextInput source='ConditionClass' />
        <TextInput source='Description'/>
      </SimpleForm>
    </Edit>
  )
}

export default DPLEdit