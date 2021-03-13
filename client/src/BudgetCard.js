import React from 'react';
import { Card } from 'semantic-ui-react';

import './BudgetCard.css';
const BudgetCard = ({ image, header, description }) => {
  return (
    <Card
      style={{ width: '110px', height: 'auto' }}
      image={image}
      header={header}
      centered={true}
      description={description}
      color={'orange'}
    ></Card>
  );
};

export default BudgetCard;
