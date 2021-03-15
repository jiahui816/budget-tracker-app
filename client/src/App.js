import './App.css';
import { Header, Icon } from 'semantic-ui-react';
import BudgetCard from './BudgetCard';
import budgetImage from './image/moneyicon.png';
import remainingBalanceImage from './image/remaining.png';
import spendImage from './image/spend.png';
import FormEntry from './FormEntry';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ShowTable from './ShowTable';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { changeBudget, selectBudget } from './features/budgetSlice';

function App(props) {
  const [mongoDatas, setMongoDatas] = useState({});
  const dispatch = useDispatch();
  const budget = useSelector(selectBudget);
  const local_logs_api = 'http://localhost:3003/api/logs';
  const local_budget_api = 'http://localhost:3003/api/budget';
  const heroku_logs_api = 'https://budget-tracker-mern.herokuapp.com/api/logs';
  const heroku_budget_api =
    'https://budget-tracker-mern.herokuapp.com/api/budget';
  useEffect(() => {
    fetch(local_logs_api)
      .then((res) => res.json())
      .then((data) => {
        setMongoDatas(data);
      });
    fetch(local_budget_api)
      .then((res) => res.json())
      .then((data) => {
        console.log(data[data.length - 1].budget);
        dispatch(changeBudget(data[data.length - 1].budget));
      });
  }, [dispatch]);

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
    <>
      <Router>
        <Switch>
          <Route exact path='/'>
            <div className='app'>
              <Header as='h2' className='app__header'>
                <Icon name='database' />
                <Header.Content>Budget Tracker App</Header.Content>
              </Header>
              <div className='app__budgetCard'>
                <BudgetCard
                  image={budgetImage}
                  header='Budget'
                  description={budget}
                />

                <BudgetCard
                  image={remainingBalanceImage}
                  header='Remaining'
                  description={remaining}
                />
                <BudgetCard
                  image={spendImage}
                  header='Spent'
                  description={spent}
                />
              </div>
              <FormEntry />
            </div>
          </Route>
          <Route path='/viewAll'>
            <ShowTable />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
