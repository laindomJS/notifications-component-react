import { Box } from '@chakra-ui/react'
import { NotificationsState } from './NotificationsState'
import { NotificationItem } from './NotificationItem'
import { useContext } from 'react'
import { NotificationsContext } from '../context/NotificationsContext'

export const NotificationsContainer = () => {
  const { allNotifications, notifications, markAllAsRead } = useContext(NotificationsContext)

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
