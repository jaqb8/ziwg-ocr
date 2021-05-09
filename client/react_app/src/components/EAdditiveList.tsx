import { EAdditiveData } from '../types';
import EAdditiveItem from './EAdditiveItem';

interface Props {
  list: Array<EAdditiveData>;
}

const EAdditiveList = ({ list }: Props) => {
  return (
    <>
      <div className='my-5'>
        <div className='list-group'>
          {list.map((dataItem) => (
            <EAdditiveItem key={dataItem.id} data={dataItem} />
          ))}
        </div>
      </div>
    </>
  );
};

export default EAdditiveList;
