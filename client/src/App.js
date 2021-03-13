import './App.css';
import { Header, Icon } from 'semantic-ui-react';
import BudgetCard from './BudgetCard';
import budgetImage from './image/moneyicon.png';
import remainingBalanceImage from './image/remaining.png';
import spendImage from './image/spend.png';
import FormEntry from './FormEntry';
function App() {
  return (
    <div className='app'>
      <Header as='h2' className='app__header'>
        <Icon name='database' />
        <Header.Content>Budget Tracker App</Header.Content>
      </Header>
      <div className='app__budgetCard'>
        <BudgetCard image={budgetImage} header='Budget' description='2000$' />
        <BudgetCard
          image={remainingBalanceImage}
          header='Remaining'
          description='1402$'
        />
        <BudgetCard image={spendImage} header='Spend' description='1000$' />
      </div>
      <FormEntry />
    </div>
  );
}

export default App;
