import React from 'react';
import { createLogEntry } from './API';
import { Form, Button } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
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
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  );
};

export default FormEntry;
