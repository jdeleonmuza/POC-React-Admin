import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const CSOPEdit = (props) => {
    return (
        <Create title='Create a customer suggest order product' {...props}>
            <SimpleForm>
                <TextInput disabled source='id' />
                <TextInput source='CustomerCode' />
                <TextInput source='SuggestedOrderId' />
                <TextInput source='MaterialCode' />
                <TextInput source='Quantity' />
                <TextInput source='MeassureUnit' />
            </SimpleForm>
        </Create>
    )
}

export default CSOPEdit