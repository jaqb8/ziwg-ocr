import React from 'react';
import { EAdditiveData, HarmfulnessLevel } from '../types';

interface Props {
  data: EAdditiveData;
}

const EAdditiveItem = ({ data }: Props) => {
  const { code, name, description, additive_type, harmfulness } = data;

  const getBadgeColor = (harmfulnessLevel: HarmfulnessLevel): string => {
    let color: string = '';
    if (harmfulnessLevel === HarmfulnessLevel.Safe) {
      color = 'success';
    } else if (harmfulnessLevel === HarmfulnessLevel.PotentiallyDangerous) {
      color = 'warning';
    } else if (harmfulnessLevel === HarmfulnessLevel.Dangerous) {
      color = 'danger';
    } else if (harmfulnessLevel === HarmfulnessLevel.NoInfo) {
      color = 'light';
    }
    return color;
  };

  return (
    <tr>
      <td>E{code}</td>
      <td>{name}</td>
      <td>{description}</td>
      <td>{additive_type}</td>
      <td>
        <span className={`badge bg-${getBadgeColor(harmfulness)}`}>
          {harmfulness}
        </span>
      </td>
    </tr>
  );
};

export default EAdditiveItem;
