import React from 'react'

import bellIcon from '../../../assets/svg/bell.svg'
import settingsIcon from '../../../assets/svg/settings.svg'
import burgerIcon from '../../../assets/svg/burger-icon.svg'

const SvgIcon = ({ name, ...props }) => {
  const icons = {
    bell: bellIcon,
    settings: settingsIcon,
    burger: burgerIcon,
  }

  const iconUrl = icons[name]

  if (!iconUrl) {
    return null
  }

  return <img src={iconUrl} alt={name} />
}

export default SvgIcon
