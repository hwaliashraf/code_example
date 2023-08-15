import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import * as actions from '../../actions/home.actions'
import { ItemEditor } from '../../components';
import { editorMapping } from './editorMapping';

export default () => {
  const dispatch        = useDispatch();
  const [data, setData] = useState([]);
  const homeScreen      = useSelector((state) => state.homeScreen);

  useEffect(() => setData(editorMapping(homeScreen)), [homeScreen]);

  const moveUp = (i) => {
    if (i > 0) {
      let order = _.cloneDeep(homeScreen.order);
      const firstIndex = order.findIndex((e) => e === i); 
      const secondIndex = order.findIndex((e) => e === i + 1); 
      [order[firstIndex], order[secondIndex]] = [order[secondIndex], order[firstIndex]];
      dispatch(actions.setHomeScreenOrder(order));
    }
  };

  const moveDown = (i) => {
    if (i < data.length - 1) {
      let order = _.cloneDeep(homeScreen.order);
      const firstIndex = order.findIndex((e) => e === i + 1); 
      const secondIndex = order.findIndex((e) => e === i + 2); 
      [order[firstIndex], order[secondIndex]] = [order[secondIndex], order[firstIndex]];
      dispatch(actions.setHomeScreenOrder(order));
    }
  };

  return (
    <div className='flex flex-col'>
      {data.map((items, index) => {
        return (
          <div key={index} className={`order-${homeScreen.order[index]}`}>
            <ItemEditor
              items={items}
              itemVisibility={items.visibility}
              setItemVisibility={items.setVisibility}
              moveUp={() => moveUp(homeScreen.order[index] - 1)}
              moveDown={() => moveDown(homeScreen.order[index] - 1)}
            />
          </div>
        );
      })}
    </div>
  );
};
