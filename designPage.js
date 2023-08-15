import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import _ from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import { RouterHelper } from '../../helpers/router.helper';
import { getApp } from '../../actions/selectedApp.actions';
import { getMobileComponent } from '../../actions/mobileComponents.actions';
import { updateMobileComponent } from '../../api/mobileComponents.api';
import { TopBar } from '../../components';
import {
  HomeScreenEditor,
  CategoriesEditor,
  CategoryEditor,
  LoginScreenEditor,
  SignupScreenEditor,
  AddressScreenEditor,
  NewAddressScreenEditor,
  PaymentMethodsEditor,
  NewPaymentScreenEditor,
  SingleItemScreenEditor,
} from '../../AppEditor/screens';
import { Button } from '../../AppEditor/components/common';
import {
  HomeScreenPreview,
  CategoriesPreview,
  CategoryPreview,
  LoginScreenPreview,
  SignupScreenPreview,
  AddressScreenPreview,
  NewAddressScreenPreview,
  PaymentMethodsPreview,
  NewPaymentScreenPreview,
  SingleItemScreenPreview,
} from '../../AppPreview/screens';
import { PreviewPanel } from '../../AppPreview/components';
import * as icons from '../../assets/icons';

export default () => {
  const history                 = useHistory();
  const { appId }               = useParams();
  const dispatch                = useDispatch();
  const colors                  = useSelector((state) => state.selectedApp.colors);
  const [selected, setSelected] = useState('HomeScreen');

  useEffect(() => {
    dispatch(getApp(appId));
    toast.info('save styling before proceeding');
  }, []);

  useEffect(() => {
    dispatch(getMobileComponent(appId, screenData[selected].key));
  }, [selected]);

  const screenData = {
    HomeScreen: {
      key:     'home_screen',
      styling: useSelector((state) => state.homeScreen),
      editor:  <HomeScreenEditor />,
      preview: <HomeScreenPreview />,
    },
    Categories: {
      key:     'categories',
      styling: useSelector((state) => state.categories),
      editor:  <CategoriesEditor />,
      preview: <CategoriesPreview />,
    },
    Category: {
      key:     'category',
      styling: useSelector((state) => state.category),
      editor:  <CategoryEditor />,
      preview: <CategoryPreview />,
    },
    'Log In': {
      key:     'log_in',
      styling: useSelector((state) => state.loginScreen),
      editor:  <LoginScreenEditor />,
      preview: <LoginScreenPreview />,
    },
    'Sign Up': {
      key:     'sign_up',
      styling: useSelector((state) => state.signupScreen),
      editor:  <SignupScreenEditor />,
      preview: <SignupScreenPreview />,
    },
    Address: {
      key:     'saved_addresses',
      styling: useSelector((state) => state.addressScreen),
      editor:  <AddressScreenEditor />,
      preview: <AddressScreenPreview />,
    },
    'New Address': {
      key:     'new_address',
      styling: useSelector((state) => state.newAddressScreen),
      editor:  <NewAddressScreenEditor />,
      preview: <NewAddressScreenPreview />,
    },
    'Payment Methods': {
      key:     'saved_payment_methods',
      styling: useSelector((state) => state.paymentMethods),
      editor:  <PaymentMethodsEditor />,
      preview: <PaymentMethodsPreview />,
    },
    'N. Payment Method': {
      key:     'new_payment_method',
      styling: useSelector((state) => state.newPaymentScreen),
      editor:  <NewPaymentScreenEditor />,
      preview: <NewPaymentScreenPreview />,
    },
    'Single Product': {
      key:     'item_page',
      styling: useSelector((state) => state.singleItemScreen),
      editor:  <SingleItemScreenEditor />,
      preview: <SingleItemScreenPreview />,
    },
  };

  const screens = Object.keys(screenData);

  const scroll = (direction) => {
    let container = document.getElementById('scroll');

    direction === 'right' ? (container.scrollLeft += 150) : (container.scrollLeft -= 150);
  };

  const saveStyling = () => {
    const name            = screenData[selected].key;
    const mobileComponent = { settings: JSON.stringify(screenData[selected].styling) };

    updateMobileComponent(appId, name, mobileComponent)
      .then(() => toast.success('styling saved successfully!'))
      .catch(() => toast.error('unable to save styling'));
  };

  return (
    <div>
      <TopBar appId={appId} />

      <div className='my-5 grid grid-cols-2'>
        <div className='flex flex-col items-end'>
          <div className='h-screen w-4/5'>
            <div className='w-full flex justify-between items-center'>
              <p className='text-4xl'>Design</p>
              <Button.Transparent text='SAVE' onClick={saveStyling} />
            </div>
            <p className='text-lg'>Screen</p>

            <div className='mx-2 mt-2 flex justify-between items-center'>
              <FontAwesomeIcon
                icon={icons.chevronLeft}
                size='lg'
                className='cursor-pointer'
                onClick={() => scroll('left')}
              />
              <div id='scroll' className='mx-4 flex overflow-x-auto'>
                {screens.map((screen) => (
                  <div
                    key={screen}
                    onClick={() => setSelected(screen)}
                    className={`w-40 h-9 mx-2 rounded-full flex-shrink-0 ${
                      screen === selected ? 'bg-blue-500' : 'bg-gray-500'
                    } flex justify-center items-center cursor-pointer`}
                  >
                    <p className='text-white'>{screen}</p>
                  </div>
                ))}
              </div>
              <FontAwesomeIcon
                icon={icons.chevronRight}
                size='lg'
                className='cursor-pointer'
                onClick={() => scroll('right')}
              />
            </div>

            <p className='mt-2'>Elements</p>

            <div className='h-4/5 overflow-y-auto p-2'>
              {!_.isEmpty(screenData[selected].styling) &&
                screenData[selected].editor}
            </div>

            <div className='flex justify-center'>
              <button
                onClick={() => history.push(RouterHelper.appColorsPath(appId))}
                className='mt-5 px-5 py-1 bg-blue-500 text-white rounded-full'
              >
                Proceed to Colours
              </button>
            </div>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <PreviewPanel>
            {!_.isEmpty(screenData[selected].styling) &&
              !_.isEmpty(colors) &&
              screenData[selected].preview}
          </PreviewPanel>
        </div>
      </div>
    </div>
  );
};
