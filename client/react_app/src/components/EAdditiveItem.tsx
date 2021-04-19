import React from 'react';
import { EAdditiveData } from '../types';

interface Props {
  data: EAdditiveData;
}

const EAdditiveItem = ({ data }: Props) => {
  const { code, name, description } = data;
  return (
    <tr>
      <td>E{code}</td>
      <td>{name}</td>
      <td>{description}</td>
    </tr>
  );
};

export default EAdditiveItem;
