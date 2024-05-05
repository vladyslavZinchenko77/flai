import React from 'react'
import styled from 'styled-components'

import bellIcon from '../../../assets/svg/bell.svg'
import settingsIcon from '../../../assets/svg/settings.svg'
import burgerIcon from '../../../assets/svg/burger-icon.svg'
import updateIcon from '../../../assets/svg/update.svg'
import downloadIcon from '../../../assets/svg/download.svg'
import playIcon from '../../../assets/svg/play.svg'
import infoIcon from '../../../assets/svg/Info.svg'
import spotifyIcon from '../../../assets/svg/spotify.svg'
import appleMusicIcon from '../../../assets/svg/apple-music.svg'
import tikTokIcon from '../../../assets/svg/tik-tok.svg'
import lockIcon from '../../../assets/svg/lock.svg'
import canadaIcon from '../../../assets/svg/Canada.svg'

const IconImg = styled.img`
  margin: ${(props) => props.margin};
`

const SvgIcon = ({ name, margin, ...props }) => {
  const icons = {
    'bell': bellIcon,
    'settings': settingsIcon,
    'burger': burgerIcon,
    'update': updateIcon,
    'download': downloadIcon,
    'play': playIcon,
    'info': infoIcon,
    'spotify': spotifyIcon,
    'apple-music': appleMusicIcon,
    'tik-tok': tikTokIcon,
    'lock': lockIcon,
    'canada': canadaIcon,
  }

  const iconUrl = icons[name]

  if (!iconUrl) {
    return null
  }

  return <IconImg src={iconUrl} alt={name} margin={margin} {...props} />
}

export default SvgIcon
