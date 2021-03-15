import React, { useState } from 'react';
import { createBudgetEntry, createLogEntry } from './API';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import './FormEntry.css';
const FormEntry = () => {
  const { register, handleSubmit } = useForm();
  const [loading, setLoading] = useState(false);
  const [budgetLoading, setBudgetLoading] = useState(false);
  const submit = (data, e) => {
    setLoading(true);
    createLogEntry(data);
    setTimeout(() => {
      setLoading(false);
      e.target.reset();
      window.location.reload();
    }, 1500);
  };

  const submitBudget = (data, e) => {
    setBudgetLoading(true);
    createBudgetEntry(data);
    setTimeout(() => {
      setBudgetLoading(false);
      e.target.reset();
      window.location.reload();
    }, 1500);
  };

  return (
    <div className='form'>
      {loading ? (
        <ClipLoader size={100} color={'black'} loading={loading} />
      ) : (
        <Form onSubmit={handleSubmit(submit)}>
          <Form.Field>
            <label>Name</label>
            <input placeholder='Item' name='item_name' ref={register} />
          </Form.Field>
          <Form.Field>
            <label>Cost</label>
            <input placeholder='💰' name='item_cost' ref={register} />
          </Form.Field>
          <Form.Field>
            <label>Date</label>
            <input type='date' name='date' ref={register} />
          </Form.Field>
          <Button
            className='button'
            type='submit'
            style={{ backgroundColor: 'lightgreen', color: 'black' }}
          >
            Add to Database ➕
          </Button>

          <Link to='/viewAll'>
            <Button
              className='button'
              style={{ backgroundColor: 'coral', color: 'black' }}
            >
              View All Logs 📝
            </Button>
          </Link>
        </Form>
      )}

      {budgetLoading ? (
        <ClipLoader size={50} color={'black'} loading={budgetLoading} />
      ) : (
        <Form onSubmit={handleSubmit(submitBudget)}>
          <Form.Field>
            <label>Monthly Budget </label>
            <input
              required={true}
              placeholder='Budget'
              name='budget'
              ref={register}
            />
          </Form.Field>
          <Button
            style={{ color: 'black', backgroundColor: '#FFB266' }}
            type='submit'
          >
            New Budget 💸
          </Button>
        </Form>
      )}
    </div>
  );
};

export default FormEntry;
