import { useEffect, useState } from 'react'
import { Flex, Heading, Button, Box } from '@chakra-ui/react'
import notificationsData from '../data.json'

export const NotificationsState = () => {
  const [notifications, setNotifications] = useState(null)

  useEffect(() => {
    const { newNotifications } = notificationsData
    setNotifications(newNotifications)
  }, [])

  const markAllAsRead = () => {
    setNotifications(0)
  }

  return (
    <Flex
      as='section'
      h='fit-content'
      w='full'
      p='1rem'
      justifyContent='space-between'
      alignItems='center'
    >
      <Box>
        <Heading
          as='h2'
          fontSize={{ base: '18px', md: '26px' }}
          w='fit-content' display='inline'
        >
          Notifications
        </Heading>
        <Box
          ml='.3rem'
          display='inline'
          bgColor='primary.custom-blue'
          color='white'
          fontSize={{ base: '15px', md: '20px' }}
          py='.4rem'
          px={{ base: '.5rem', md: '1rem' }}
          borderRadius='8px'
          fontWeight='800'
        >
          {notifications}
        </Box>
      </Box>

      <Button
        fontSize={{ base: '15px', md: '17px' }}
        onClick={markAllAsRead}
        color='neutral.grayish-blue'
        fontWeight='500'
        transition='.2s ease-in'
        _hover={{ color: 'primary.custom-blue' }}
      >
        Mark all as read
      </Button>
    </Flex>
  )
}
