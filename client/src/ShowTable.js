import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Table, Header } from 'semantic-ui-react';
import './ShowTable.css';
import moment from 'moment';
const ShowTable = ({ item_name, item_costs, date }) => {
  const [mongoDatas, setMongoDatas] = useState([]);
  const [budget, setBudget] = useState(0);

  useEffect(() => {
    fetch('http://localhost:3003/api/logs')
      .then((res) => res.json())
      .then((data) => {
        setMongoDatas(data);
        setBudget(data[0].budget);
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
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {mongoDatas.map((data) => (
              <Table.Row key={data.id}>
                <Table.Cell>{data.item_name}</Table.Cell>
                <Table.Cell>{data.item_cost}</Table.Cell>
                <Table.Cell>
                  {moment(data.date).format('YYYY-MM-DD')}
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