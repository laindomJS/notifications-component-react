import { Flex, Heading, Button, Box } from '@chakra-ui/react'

export const NotificationsState = ({ notifications, handleCLick }) => {
  return (
    <Flex
      as='section'
      h='fit-content'
      w='full'
      p='.8rem'
      justifyContent='space-between'
      alignItems='center'
    >
      <Box>
        <Heading
          as='h2'
          fontSize={{ base: '18px', md: '24px' }}
          w='fit-content' display='inline'
        >
          Notifications
        </Heading>
        <Box
          ml='.3rem'
          display='inline'
          bgColor='primary.custom-blue'
          color='white'
          fontSize={{ base: '15px', md: '18px' }}
          py='.4rem'
          px={{ base: '.5rem', md: '.7rem' }}
          borderRadius='8px'
          fontWeight='800'
        >
          {notifications}
        </Box>
      </Box>

      <Button
        fontSize={{ base: '15px', md: '17px' }}
        onClick={handleCLick}
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
