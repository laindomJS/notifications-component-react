import { Box } from '@chakra-ui/react'
import { NotificationsState } from './NotificationsState'
import { NotificationItem } from './NotificationItem'
import { useEffect, useState } from 'react'
import notificationsData from '../data.json'

export const NotificationsContainer = () => {
  // Maybe all this logic, be fine in one context!
  const [notifications, setNotifications] = useState(null)
  const [allNotifications, setAllNotifications] = useState([])

  useEffect(() => {
    const { newNotifications } = notificationsData
    setNotifications(newNotifications)

    const { notifications } = notificationsData
    setAllNotifications(notifications)
  }, [])

  const markAllAsRead = () => {
    if (notifications !== 0) {
      setNotifications(0)
      allNotifications.forEach(notification => {
        notification.read = true
      })
    }
  }

  return (
    <Box
      as='article'
      bgColor='white'
      w={{ base: '100%', md: '80%', lg: '50%' }}
      h='fit-content'
      display='flex'
      flexDirection='column'
      borderRadius='12px'
      boxShadow='md'
      p={{ base: '.8rem', md: '1rem' }}
    >
      <NotificationsState handleCLick={markAllAsRead} notifications={notifications} />
      {allNotifications.map(item => (
        <NotificationItem key={item.id} info={item} />
      ))}
    </Box>
  )
}
