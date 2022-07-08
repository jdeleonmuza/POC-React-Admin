import React from 'react'
import { Create, SimpleForm, TextInput, DateInput, Edit } from 'react-admin'

const PromotionDefinitionsCreate = (props) => {
  return (
    <Create title='Create a Promotion Definition' {...props}>
      <SimpleForm>
        <TextInput source='PromotionCode' />
        <TextInput source='PromoMaterialCode' />
        <TextInput source='Name' />
        <TextInput source='Description' />
        <TextInput source='InitialDate' />
        <TextInput source='EndDate' />
        <TextInput source='ApplyTo' />
        <TextInput source='ApplicationLimit' />
        <TextInput source='PromoChild.ChildMaterialCode'/>
        <TextInput source='PromoChild.Quantity'/>
        <TextInput source='PromoChild.BenefitType'/>
        <TextInput source='PromoChild.Value'/>
      </SimpleForm>
    </Create>
  )
}

export default PromotionDefinitionsCreate