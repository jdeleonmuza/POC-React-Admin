import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const PeopleCreate = (props) => {
  return (
    <Create title='Create a Person' {...props}>
      <SimpleForm>
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
        
        <TextInput source='PaymentsInformation.Address1' />
        <TextInput source='PaymentsInformation.BetweenStreet1' />
        <TextInput source='PaymentsInformation.BetweenStreet2' />
        <TextInput source='PaymentsInformation.Locality' />
        <TextInput source='PaymentsInformation.street' />
        <TextInput source='PaymentsInformation.City' />
        <TextInput source='PaymentsInformation.Telephone' />
        <TextInput source='PaymentsInformation.TelExtension' />
        <TextInput source='PaymentsInformation.PostalCode' />
      </SimpleForm>
    </Create>
  )
}

export default PeopleCreate