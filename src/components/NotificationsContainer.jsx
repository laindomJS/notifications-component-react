import { Box } from '@chakra-ui/react'
import { NotificationsState } from './NotificationsState'

export const NotificationsContainer = () => {
  return (
    <Box
      as='article'
      bgColor='white'
      w={{ base: '100%', md: '60%' }}
      h='450px'
      display='flex'
      flexDirection='column'
      borderRadius='12px'
      boxShadow='md'
      p={{ md: '1rem' }}
    >
      <NotificationsState />
    </Box>
  )
}
