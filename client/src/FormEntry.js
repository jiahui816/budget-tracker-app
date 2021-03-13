import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import './FormEntry.css';
const FormEntry = () => {
  const [name, setName] = useState('');
  const [cost, setCost] = useState('');
  const [date, setDate] = useState('');

  const submit = (e) => {
    e.preventDefault();
    console.log('hahah');
  };
  return (
    <div className='form'>
      <Form error={true} className='form__groups'>
        <Form.Group widths='equal' className='form__group'>
          <Form.Input fluid label='Name' placeholder='Name' required={true} />
          <Form.Input fluid label='Cost' placeholder='$' required={true} />
          <Form.Input type='date' fluid label='Date' required={true} />
        </Form.Group>
        <Form.Button onClick={submit} style={{ color: 'black', width: '100%' , "background-color": "#2abf7f"}}>
          Submit
        </Form.Button>
      </Form>
    </div>
  );
};

export default FormEntry;
