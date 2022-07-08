import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const PromotionDefinitionsList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='PromotionCode' />
        <TextField source='PromoMaterialCode' />
        <TextField source='Name' />
        <TextField source='Description' />
        <TextField source='InitialDate' />
        <TextField source='EndDate' />
        <TextField source='ApplyTo' />
        <TextField source='ApplicationLimit' />
        <TextField source='PromoChild.ChildMaterialCode' label='Child Material Code'/>
        <TextField source='PromoChild.Quantity' label='Quantity'/>
        <TextField source='PromoChild.BenefitType' label='Benefit Type'/>
        <TextField source='PromoChild.Value' label='Value'/>
        <EditButton basePath='/PromotionDefinitions' />
        <DeleteButton basePath='/PromotionDefinitions' />
      </Datagrid>
    </List>
  )
}

export default PromotionDefinitionsList