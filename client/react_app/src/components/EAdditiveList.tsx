import React from 'react';
import { Table } from 'react-bootstrap';
import { EAdditiveData } from '../types';
import EAdditiveItem from './EAdditiveItem';

interface Props {
  list: Array<EAdditiveData>;
}

const EAdditiveList = ({ list }: Props) => {
  return (
    <div>
      <Table bordered hover>
        <thead>
          <tr>
            <th>E number</th>
            <th>Substance name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {list.map((dataItem) => (
            <EAdditiveItem data={dataItem} />
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default EAdditiveList;
