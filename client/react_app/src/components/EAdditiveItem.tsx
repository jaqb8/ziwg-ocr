import React from 'react';
import { EAdditiveData, HarmfulnessLevel } from '../types';

interface Props {
  data: EAdditiveData;
}

const EAdditiveItem = ({ data }: Props) => {
  const { code, name, description, additive_type, harmfulness } = data;

  const getBadgeColor = (harmfulnessLevel: HarmfulnessLevel): string => {
    let color: string = '';
    if (harmfulnessLevel === 'SAFE') {
      color = 'success';
    } else if (harmfulnessLevel === 'POTENTIALLY_DANGEROUS') {
      color = 'warning';
    } else if (harmfulnessLevel === 'DANGEROUS') {
      color = 'danger';
    } else if (harmfulnessLevel === 'NO_INFO') {
      color = 'light';
    }
    return color;
  };

  return (
    <div className='list-group-item list-group-item-action flex-column align-items-start'>
      <div className='d-flex w-100 justify-content-between'>
        <h5 className='mb-1'>E{code}</h5>
        <h5>
          <span className={`badge bg-${getBadgeColor(harmfulness)}`}>
            {harmfulness}
          </span>
        </h5>
      </div>
      <p className='mb-1 h4'>{name}</p>
      <p className='mb-3'>{additive_type}</p>
      <small>{description}</small>
    </div>
  );
};

export default EAdditiveItem;
