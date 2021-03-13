import React from 'react';
import { createLogEntry } from './API';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './FormEntry.css';
const FormEntry = () => {
  const { register, handleSubmit } = useForm();

  const submit = (data, e) => {
    createLogEntry(data);
    e.target.reset();
    window.location.reload();
  };
  return (
    <div className='form'>
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
    </div>
  );
};

export default FormEntry;
