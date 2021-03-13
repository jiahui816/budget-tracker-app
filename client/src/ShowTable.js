import React, { useEffect, useState } from 'react';
import { Icon, Label, Menu, Table } from 'semantic-ui-react';
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
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Item Name</Table.HeaderCell>
          <Table.HeaderCell>Cost</Table.HeaderCell>
          <Table.HeaderCell>Date Spent</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {mongoDatas.map((data) => (
          <Table.Row>
            <Table.Cell>{data.item_name}</Table.Cell>
            <Table.Cell>{data.item_cost}</Table.Cell>
            <Table.Cell>{data.date}</Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell colSpan='3'>
            <Menu floated='right' pagination>
              <Menu.Item as='a' icon>
                <Icon name='chevron left' />
              </Menu.Item>
              <Menu.Item as='a'>1</Menu.Item>
              <Menu.Item as='a'>2</Menu.Item>
              <Menu.Item as='a'>3</Menu.Item>
              <Menu.Item as='a'>4</Menu.Item>
              <Menu.Item as='a' icon>
                <Icon name='chevron right' />
              </Menu.Item>
            </Menu>
          </Table.HeaderCell>
        </Table.Row>
      </Table.Footer>
    </Table>
  );
};

export default ShowTable;
