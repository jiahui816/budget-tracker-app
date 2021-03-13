import './App.css';
import { Header, Icon } from 'semantic-ui-react';
import BudgetCard from './BudgetCard';
import budgetImage from './image/moneyicon.png';
import remainingBalanceImage from './image/remaining.png';
import spendImage from './image/spend.png';
import FormEntry from './FormEntry';
import { useEffect, useState } from 'react';
import ShowTable from './ShowTable';
function App() {
  const [mongoDatas, setMongoDatas] = useState({});
  const [budget, setBudget] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3003/api/logs')
      .then((res) => res.json())
      .then((data) => {
        setMongoDatas(data);
        setBudget(data[0].budget);
      });
  }, []);

  var dataFromMongo = mongoDatas;

  var spent = 0;
  var data = dataFromMongo;
  try {
    data.forEach((elem) => {
      spent += Number(elem.item_cost);
    });
  } catch (error) {}

  const remaining = budget - spent;

  return (
    <div className='app'>
      <Header as='h2' className='app__header'>
        <Icon name='database' />
        <Header.Content>Budget Tracker App</Header.Content>
      </Header>
      <div className='app__budgetCard'>
        <BudgetCard image={budgetImage} header='Budget' description={budget} />
        <BudgetCard
          image={remainingBalanceImage}
          header='Remaining'
          description={remaining}
        />
        <BudgetCard image={spendImage} header='Spent' description={spent} />
      </div>
      <FormEntry />
      <ShowTable />
    </div>
  );
}

export default App;
