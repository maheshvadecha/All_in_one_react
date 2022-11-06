import React from 'react';
import AddDataArray from './AddDataArray';
import { Users } from '../../assets/UserData'
import Table from './Table';

const ArrayOperation = () => {
  return (
    <div>
        <Table  data={Users}/>
        <AddDataArray />
    </div>
  )
}

export default ArrayOperation;