import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()
  return (
    <IconButton
      aria-label="Toggle theme"
      icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
      colorScheme={useColorModeValue('purple', 'orange')}
      onClick={toggleColorMode}
    />
  )
}

export default ThemeToggleButton
