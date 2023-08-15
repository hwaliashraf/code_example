import React from 'react';
import _ from 'lodash';
import store from '../../../config/store.js';
import {
  TextEditor,
  DesignChanger,
  DesignEditor,
  DesignDescription,
  AlignmentEditor,
  SearchbarStyle,
  BannerImages,
  CategorySelector,
} from '../../components';
import * as actions from '../../actions/home.actions.js';
import { fontFamilies } from '../../../constants/fontFamilies.js';

const defaultStyle = {
  searchBar: {
    alignment: 'center',
    width: 330,
    height: 32,
  },
  promotionBanner: {
    alignment: 'center',
    width: 330,
    height: 130,
  },
  navigation: {
    alignment: 'center',
    width: 55,
    height: 55,
  },
  itemList: {
    alignment: 'center',
    width: 160,
    height: 160,
  },
};

export const editorMapping = (styleData) => {
  const dispatch   = store.dispatch;
  const homeScreen = _.cloneDeep(styleData);

  const categories = [
    { value: 'categories', label: 'Categories' },
    { value: 'flash deals', label: 'Flash Deals' },
    { value: 'favourites', label: 'Favourites' },
  ];

  const setStyling = () => {
    dispatch(actions.setHomeScreenStyling(homeScreen));
  };

  const searchBar = {
    selectedFont:     styleData.searchBar.text.fontFamily,
    fontSize:         styleData.searchBar.text.fontSize,
    bold:             styleData.searchBar.text.bold,
    italic:           styleData.searchBar.text.italic,
    underline:        styleData.searchBar.text.underline,
    textAlign:        styleData.searchBar.text.textAlign,
    lineHeight:       styleData.searchBar.text.lineHeight,
    color:            styleData.searchBar.text.color,
    borderVisibility: styleData.searchBar.design.entireBar.borderVisibility,
    borderColor:      styleData.searchBar.design.entireBar.borderColor,
    fillVisibility:   styleData.searchBar.design.entireBar.fillVisibility,
    fillColor:        styleData.searchBar.design.entireBar.fillColor,
    shadow:           styleData.searchBar.design.entireBar.shadow,
    borderRadius:     styleData.searchBar.design.entireBar.borderRadius,
    icon:             styleData.searchBar.design.entireBar.icon,
    alignment:        styleData.searchBar.design.size.alignment,
    width:            styleData.searchBar.design.size.width,
    height:           styleData.searchBar.design.size.height,
  };

  const handleSearchbar = {
    fontChange: (font) => {
      homeScreen.searchBar.text.fontFamily = font;
      setStyling();
    },
    fontSize: (e) => {
      homeScreen.searchBar.text.fontSize = Number(e.target.value);
      setStyling();
    },
    boldClick: () => {
      homeScreen.searchBar.text.bold = !searchBar.bold;
      setStyling();
    },
    italicClick: () => {
      homeScreen.searchBar.text.italic = !searchBar.italic;
      setStyling();
    },
    underlineClick: () => {
      homeScreen.searchBar.text.underline = !searchBar.underline;
      setStyling();
    },
    textAlign: (value) => {
      homeScreen.searchBar.text.textAlign = value;
      setStyling();
    },
    lineHeight: (e) => {
      homeScreen.searchBar.text.lineHeight = e.target.value;
      setStyling();
    },
    colorChange: (value) => {
      homeScreen.searchBar.text.color = value.hex;
      setStyling();
    },
    borderVisibility: () => {
      homeScreen.searchBar.design.entireBar.borderVisibility = !searchBar.borderVisibility;
      setStyling();
    },
    borderColor: (value) => {
      homeScreen.searchBar.design.entireBar.borderColor = value.hex;
      setStyling();
    },
    fillVisibility: () => {
      homeScreen.searchBar.design.entireBar.fillVisibility = !searchBar.fillVisibility;
      setStyling();
    },
    fillColor: (value) => {
      homeScreen.searchBar.design.entireBar.fillColor = value.hex;
      setStyling();
    },
    shadow: () => {
      homeScreen.searchBar.design.entireBar.shadow = !searchBar.shadow;
      setStyling();
    },
    borderRadius: (e) => {
      homeScreen.searchBar.design.entireBar.borderRadius = Number(e.target.value);
      setStyling();
    },
    icon: () => {
      homeScreen.searchBar.design.entireBar.icon = !searchBar.icon;
      setStyling();
    },
    elementAlign: (value) => {
      homeScreen.searchBar.design.size.alignment = value;
      setStyling();
    },
    width: (e) => {
      homeScreen.searchBar.design.size.width = Number(e.target.value);
      setStyling();
    },
    height: (e) => {
      homeScreen.searchBar.design.size.height = Number(e.target.value);
      setStyling();
    },
    resetSize: () => {
      homeScreen.searchBar.design.size = defaultStyle.searchBar;
      setStyling();
    },
  };

  const promotionBanner = {
    visibility:       styleData.promotionBanner.visibility,
    borderVisibility: styleData.promotionBanner.design.entireCard.borderVisibility,
    borderColor:      styleData.promotionBanner.design.entireCard.borderColor,
    fillVisibility:   styleData.promotionBanner.design.entireCard.fillVisibility,
    fillColor:        styleData.promotionBanner.design.entireCard.fillColor.rgb,
    shadow:           styleData.promotionBanner.design.entireCard.shadow,
    borderRadius:     styleData.promotionBanner.design.entireCard.borderRadius,
    alignment:        styleData.promotionBanner.design.size.alignment,
    width:            styleData.promotionBanner.design.size.width,
    height:           styleData.promotionBanner.design.size.height,
  };

  const handlePromotionBanner = {
    visibility: () => {
      homeScreen.promotionBanner.visibility = !promotionBanner.visibility;
      setStyling();
    },
    borderVisibility: () => {
      homeScreen.promotionBanner.design.entireCard.borderVisibility = !promotionBanner.borderVisibility;
      setStyling();
    },
    borderColor: (value) => {
      homeScreen.promotionBanner.design.entireCard.borderColor = value.hex;
      setStyling();
    },
    fillVisibility: () => {
      homeScreen.promotionBanner.design.entireCard.fillVisibility = !promotionBanner.fillVisibility;
      setStyling();
    },
    fillColor: (value) => {
      homeScreen.promotionBanner.design.entireCard.fillColor.rgb = value.rgb;
      setStyling();
    },
    shadow: () => {
      homeScreen.promotionBanner.design.entireCard.shadow = !promotionBanner.shadow;
      setStyling();
    },
    borderRadius: (e) => {
      homeScreen.promotionBanner.design.entireCard.borderRadius = Number(e.target.value);
      setStyling();
    },
    elementAlign: (value) => {
      homeScreen.promotionBanner.design.size.alignment = value;
      setStyling();
    },
    width: (e) => {
      homeScreen.promotionBanner.design.size.width = Number(e.target.value);
      setStyling();
    },
    height: (e) => {
      homeScreen.promotionBanner.design.size.height = Number(e.target.value);
      setStyling();
    },
    resetSize: () => {
      homeScreen.promotionBanner.design.size = defaultStyle.promotionBanner;
      setStyling();
    },
  };

  const navigation = {
    visibility:             styleData.navigation.visibility,
    category1_visibility:   styleData.navigation.components[0].visibility,
    category1_borderRadius: styleData.navigation.components[0].borderRadius,
    category1_category:     styleData.navigation.components[0].category,
    category1_fillColor:    styleData.navigation.components[0].backgroundColor,
    category2_visibility:   styleData.navigation.components[1].visibility,
    category2_borderRadius: styleData.navigation.components[1].borderRadius,
    category2_category:     styleData.navigation.components[1].category,
    category2_fillColor:    styleData.navigation.components[1].backgroundColor,
    category3_visibility:   styleData.navigation.components[2].visibility,
    category3_borderRadius: styleData.navigation.components[2].borderRadius,
    category3_category:     styleData.navigation.components[2].category,
    category3_fillColor:    styleData.navigation.components[2].backgroundColor,
    alignment:              styleData.navigation.design.size.alignment,
    width:                  styleData.navigation.design.size.width,
    height:                 styleData.navigation.design.size.height,
  };

  const handleNavigation = {
    visibility: () => {
      homeScreen.navigation.visibility = !navigation.visibility;
      setStyling();
    },
    category1_visibility: () => {
      homeScreen.navigation.components[0].visibility = !navigation.category1_visibility;
      setStyling();
    },
    category1_borderRadius: (e) => {
      homeScreen.navigation.components[0].borderRadius = Number(e.target.value);
      setStyling();
    },
    category1_setCategory: (selected) => {
      homeScreen.navigation.components[0].category = selected;
      setStyling();
    },
    category1_fillColor: (value) => {
      homeScreen.navigation.components[0].backgroundColor = value.hex;
      setStyling();
    },
    category2_visibility: () => {
      homeScreen.navigation.components[1].visibility = !navigation.category2_visibility;
      setStyling();
    },
    category2_borderRadius: (e) => {
      homeScreen.navigation.components[1].borderRadius = Number(e.target.value);
      setStyling();
    },
    category2_setCategory: (selected) => {
      homeScreen.navigation.components[1].category = selected;
      setStyling();
    },
    category2_fillColor: (value) => {
      homeScreen.navigation.components[1].backgroundColor = value.hex;
      setStyling();
    },
    category3_visibility: () => {
      homeScreen.navigation.components[2].visibility = !navigation.category3_visibility;
      setStyling();
    },
    category3_borderRadius: (e) => {
      homeScreen.navigation.components[2].borderRadius = Number(e.target.value);
      setStyling();
    },
    category3_setCategory: (selected) => {
      homeScreen.navigation.components[2].category = selected;
      setStyling();
    },
    category3_fillColor: (value) => {
      homeScreen.navigation.components[2].backgroundColor = value.hex;
      setStyling();
    },
    elementAlign: (value) => {
      homeScreen.navigation.design.size.alignment = value;
      setStyling();
    },
    width: (e) => {
      homeScreen.navigation.design.size.width = Number(e.target.value);
      setStyling();
    },
    height: (e) => {
      homeScreen.navigation.design.size.height = Number(e.target.value);
      setStyling();
    },
    resetSize: () => {
      homeScreen.navigation.design.size = defaultStyle.navigation;
      setStyling();
    },
  };

  const designChangerSearchbar = [
    {
      heading: 'Entire Bar',
      component: (
        <DesignEditor
          iconSelector={true}
          borderVisibility={searchBar.borderVisibility}
          setBorderVisibility={handleSearchbar.borderVisibility}
          borderColor={searchBar.borderColor}
          setBorderColor={handleSearchbar.borderColor}
          fillVisibility={searchBar.fillVisibility}
          setFillVisibility={handleSearchbar.fillVisibility}
          fillColor={searchBar.fillColor}
          setFillColor={handleSearchbar.fillColor}
          shadowVisibilty={searchBar.shadow}
          setShadowVisibility={handleSearchbar.shadow}
          borderRadius={searchBar.borderRadius}
          setBorderRadius={handleSearchbar.borderRadius}
          iconVisibility={searchBar.icon}
          setIconVisibility={handleSearchbar.icon}
        />
      ),
    },
    {
      heading: 'Size',
      component: (
        <AlignmentEditor
          alignment={searchBar.alignment}
          onRightClick={() => handleSearchbar.elementAlign('end')}
          onCenterClick={() => handleSearchbar.elementAlign('center')}
          onLeftClick={() => handleSearchbar.elementAlign('start')}
          width={searchBar.width}
          setElementWidth={handleSearchbar.width}
          height={searchBar.height}
          setElementHeight={handleSearchbar.height}
          onResetPress={handleSearchbar.resetSize}
        />
      ),
    },
  ];

  const designChangerBanner = [
    {
      heading: 'Entire Card',
      // component: <DesignEditor />
    },
    {
      heading: 'Size',
      // component: <AlignmentEditor />
    },
  ];

  const designChangerNavigation = [
    {
      // component: <AlignmentEditor />
    },
  ];

  const designChangerItemList = [
    {
      heading: 'Entire Card',
      // component: <DesignEditor />
    },
    {
      heading: 'Description',
      component: (
        <DesignDescription
          color={itemList.descriptionColor}
          setColor={handleItemList.descriptionColor}
          setOpacity={handleItemList.descriptionOpacity}
        />
      ),
    },
    {
      heading: 'Size',
      // component: <AlignmentEditor />
    },
  ];

  return [
    {
      title: 'Searchbar',
      expanded: [
        {
          heading: 'Text',
          component: (
            <TextEditor
              fontFamilies={fontFamilies}
              selectedFont={searchBar.selectedFont}
              onFontChange={handleSearchbar.fontChange}
              fontSize={searchBar.fontSize}
              onFontSizeChange={handleSearchbar.fontSize}
              bold={searchBar.bold}
              italic={searchBar.italic}
              underline={searchBar.underline}
              onBoldClick={handleSearchbar.boldClick}
              onItalicClick={handleSearchbar.italicClick}
              onUnderlineClick={handleSearchbar.underlineClick}
              textAlign={searchBar.textAlign}
              onLeftClick={() => handleSearchbar.textAlign('left')}
              onCenterClick={() => handleSearchbar.textAlign('center')}
              onRightClick={() => handleSearchbar.textAlign('right')}
              onJustifyClick={() => handleSearchbar.textAlign('justify')}
              lineHeight={searchBar.lineHeight}
              onLineHeightChange={handleSearchbar.lineHeight}
              color={searchBar.color}
              setColor={handleSearchbar.colorChange}
            />
          ),
        },
        {
          heading: 'Design',
          component: <DesignChanger items={designChangerSearchbar} />,
        },
        { heading: 'Style', component: <SearchbarStyle /> },
      ],
    },
    {
      title: 'Promotion Banner',
      button: true,
      visibility: promotionBanner.visibility,
      setVisibility: handlePromotionBanner.visibility,
      expanded: [
        { heading: 'Images', component: <BannerImages /> },
        {
          heading: 'Design',
          component: <DesignChanger items={designChangerBanner} />,
        },
      ],
    },
    {
      title: 'Navigation',
      button: true,
      visibility: navigation.visibility,
      setVisibility: handleNavigation.visibility,
      expanded: [
        {
          heading: 'Category 1',
          component: (
            <CategorySelector
              categoryVisibility={navigation.category1_visibility}
              setCategoryVisibility={handleNavigation.category1_visibility}
              borderRadius={navigation.category1_borderRadius}
              setBorderRadius={handleNavigation.category1_borderRadius}
              selectedCategory={navigation.category1_category}
              onCategoryChange={handleNavigation.category1_setCategory}
              categories={categories}
              color={navigation.category1_fillColor}
              setColor={handleNavigation.category1_fillColor}
            />
          ),
        },
        {
          heading: 'Category 2',
          // component: <CategorySelector />
        },
        {
          heading: 'Category 3',
          // component: <CategorySelector />
        },
        {
          heading: 'Design',
          component: <DesignChanger items={designChangerNavigation} />,
        },
      ],
    },
  ];
};
