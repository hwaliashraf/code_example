import React from 'react';
import { useSelector } from 'react-redux';
import { selectedColor } from '../../../helpers/colors.helper';
import {
  Header,
  Search,
  PromotionBanner,
  Navigation,
  ItemListHome,
} from '../../components';

export default () => {
  const colors      = useSelector((state) => state.selectedApp.colors);
  const homeScreen  = useSelector((state) => state.homeScreen);
  const headerColor = selectedColor(colors, 'primary');
  const banner      = homeScreen.promotionBanner.visibility;
  const navigation  = homeScreen.navigation.visibility;

  return (
    <div className='flex flex-col'>
      <Header color={headerColor} />
      <div className={`order-${homeScreen.order[0]}`}>
        <Search styleData={homeScreen.searchBar} />
      </div>
      <div className={`order-${homeScreen.order[1]}`}>
        {banner && <PromotionBanner styleData={homeScreen.promotionBanner} />}
      </div>
      <div className={`order-${homeScreen.order[2]}`}>
        {navigation && <Navigation styleData={homeScreen.navigation} />}
      </div>
      <div className={`order-${homeScreen.order[3]}`}>
        <ItemListHome styleData={homeScreen.itemList} />
      </div>
    </div>
  );
};
