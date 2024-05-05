import React from 'react';
import styled from 'styled-components';

import bellIcon from '../../../assets/svg/bell.svg';
import settingsIcon from '../../../assets/svg/settings.svg';
import burgerIcon from '../../../assets/svg/burger-icon.svg';
import updateIcon from '../../../assets/svg/update.svg';
import downloadIcon from '../../../assets/svg/download.svg';

const IconImg = styled.img`
  margin: ${props => props.margin};
`;

const SvgIcon = ({ name, margin, ...props }) => {
  const icons = {
    'bell': bellIcon,
    'settings': settingsIcon,
    'burger': burgerIcon,
    'update': updateIcon,
    'download': downloadIcon,
  };

  const iconUrl = icons[name];

  if (!iconUrl) {
    return null;
  }

  return <IconImg src={iconUrl} alt={name} margin={margin} {...props} />;
};

export default SvgIcon;
