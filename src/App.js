import React from 'react'
import { Admin, Resource } from 'react-admin'
import eveDataProvider from './ra-data-eve';
import BoyIcon from '@mui/icons-material/Boy';
import BuildIcon from '@mui/icons-material/Build';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import DiscountIcon from '@mui/icons-material/Discount';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import PeopleList from './components/Customers/CustomersList'
import PeopleCreate from './components/Customers/CustomersCreate'
import PeopleEdit from './components/Customers/CustomersEdit'
import CSOPList from './components/CustomerSuggestedOrderProducts/CSOPList';
import CSOPCreate from './components/CustomerSuggestedOrderProducts/CSOPCreate';
import CSOPEdit from './components/CustomerSuggestedOrderProducts/CSOPCEdit';
import PSCreate from './components/PriceSequences/PSCreate';
import PSEdit from './components/PriceSequences/PSEdit';
import PSList from './components/PriceSequences/PSList';
import DPLCreate from './components/DiscountPriorityLevels/DPLCreate';
import DPLList from './components/DiscountPriorityLevels/DPLList';
import DPLEdit from './components/DiscountPriorityLevels/DPLEdit';
import DSList from './components/DiscountSequences/DSList';
import DSCreate from './components/DiscountSequences/DSCreate';
import DSEdit from './components/DiscountSequences/DSEdit';
import OperationsList from './components/Operations/OperationsList'
import OperationsCreate from './components/Operations/OperationsCreate'
import OperationsEdit from './components/Operations/OperationsEdit';
import PromotionDefinitionsList from './components/PromotionDefinitions/PromotionDefinitionsList'
import PromotionDefinitionsCreate from './components/PromotionDefinitions/PromotionDefinitionsCreate'
import PromotionDefinitionsEdit from './components/PromotionDefinitions/PromotionDefinitionsEdit'


function App() {
  return (
    <Admin title="My Custom Admin" dataProvider={eveDataProvider('http://127.0.0.1:5000')}>
      <Resource
        name='Customers'
        list={PeopleList}
        create={PeopleCreate}
        edit={PeopleEdit}
        options={{ label: 'Customers' }}
        icon={BoyIcon}
      />
      <Resource
        name='CustomerSuggestedOrderProducts'
        list={CSOPList}
        create={CSOPCreate}
        edit={CSOPEdit}
        options={{ label: 'Suggested Order Products' }}
        icon={MonetizationOnIcon}
      />
      <Resource
        name='PriceSequences'
        list={PSList}
        create={PSCreate}
        edit={PSEdit}
        options={{ label: 'Price Sequences' }}
        icon={CreditCardIcon}
      />
      <Resource
        name='DiscountPriorityLevels'
        list={DPLList}
        create={DPLCreate}
        edit={DPLEdit}
        options={{ label: 'Discount Priority Levels' }}
        icon={DiscountIcon}
      />
      <Resource
        name='DiscountSequences'
        list={DSList}
        create={DSCreate}
        edit={DSEdit}
        options={{ label: 'Discount Sequences' }}
      />
      <Resource
        name='Operations'
        list={OperationsList}
        create={OperationsCreate}
        edit={OperationsEdit}
        options={{ label: 'Operations' }}
        icon={BuildIcon}
      />
      <Resource
        name='PromotionDefinitions'
        list={PromotionDefinitionsList}
        create={PromotionDefinitionsCreate}
        edit={PromotionDefinitionsEdit}
        options={{ label: 'Promotion Definitions' }}
        icon={QueryStatsIcon}
      />
    </Admin>
  )
}

export default App;
