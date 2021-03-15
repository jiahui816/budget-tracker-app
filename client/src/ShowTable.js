import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button, Table, Header, Icon } from 'semantic-ui-react';
import axios from 'axios';
import './ShowTable.css';
import moment from 'moment';
const ShowTable = ({ item_name, item_costs, date }) => {
  const [mongoDatas, setMongoDatas] = useState([]);
  const history = useHistory();
  useEffect(() => {
    fetch('https://budget-tracker-mern.herokuapp.com/api/logs')
      .then((res) => res.json())
      .then((data) => {
        setMongoDatas(data);
      });
  }, []);

  return (
    <>
      <div className='showTable'>
        <Header>Budget Record 📝 - View All</Header>
        <Link to='/'>
          <Button>Back to Home</Button>
        </Link>
        <Table color='violet' striped={true} textAlign='left'>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Item Name</Table.HeaderCell>
              <Table.HeaderCell>Cost</Table.HeaderCell>
              <Table.HeaderCell>Date Spent</Table.HeaderCell>
              <Table.HeaderCell>Remove</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {mongoDatas.map((data) => (
              <Table.Row key={data._id}>
                <Table.Cell>{data.item_name}</Table.Cell>
                <Table.Cell>{data.item_cost}</Table.Cell>
                <Table.Cell>
                  {moment(data.date).format('YYYY-MM-DD')}
                </Table.Cell>
                <Table.Cell
                  onClick={() => {
                    var check = window.confirm(
                      'Are you sure you want to delete?'
                    );
                    if (check) {
                      axios.delete(
                        `https://budget-tracker-mern.herokuapp.com/api/logs/${data._id}`
                      );
                      history.push('/viewAll');
                    } else {
                    }
                  }}
                >
                  <Icon name='delete' className='showTable__delete' />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </>
  );
};

export default ShowTable;
