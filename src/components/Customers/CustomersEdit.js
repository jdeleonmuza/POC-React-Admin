import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const PeopleEdit = (props) => {
  return (
    <Edit title='Edit Person' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='Code' />
        <TextInput source='Name' />
        <TextInput source='ContactPerson' />
        <TextInput source='GECDescription' />
        <TextInput source='ChannelDescription' />
        <TextInput source='Email' />
        <TextInput source='Address.Address1' />
        <TextInput source='Address.BetweenStreet1' />
        <TextInput source='Address.BetweenStreet2' />
        <TextInput source='Address.Locality' />
        <TextInput source='Address.street' />
        <TextInput source='Address.City' />
        <TextInput source='Address.Telephone' />
        <TextInput source='Address.TelExtension' />
        <TextInput source='Address.PostalCode' />
      </SimpleForm>
    </Edit>
  )
}

export default PeopleEdit
