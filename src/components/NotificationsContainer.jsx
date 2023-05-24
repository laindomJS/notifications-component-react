import { Box } from '@chakra-ui/react'
import { NotificationsState } from './NotificationsState'
import { useEffect, useState } from 'react'
import notificationsData from '../data.json'

export const NotificationsContainer = () => {
  const [notifications, setNotifications] = useState(null)

  useEffect(() => {
    const { newNotifications } = notificationsData
    setNotifications(newNotifications)
  }, [])

  const markAllAsRead = () => {
    setNotifications(0)
  }

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
      <NotificationsState handleCLick={markAllAsRead} notifications={notifications} />
    </Box>
  )
}
