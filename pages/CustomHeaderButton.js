import React from 'react';
import { Platform } from 'react-native';
import { HeaderButton } from 'react-navigation-header-buttons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { theme } from '../color';
//import Colors from '../../constants/Colors';

const CustomHeaderButton = (props) => {
  return (
    <HeaderButton
      {...props}
      IconComponent={MaterialCommunityIcons}
      iconSize={24}
      color={theme.grey2}
    />
  );
};

export default CustomHeaderButton;
