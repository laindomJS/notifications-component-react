import { chakra, Flex, Avatar, Text, Box } from '@chakra-ui/react'

export const NotificationItem = ({ info }) => {
  return (
    <Flex
      as='article'
      w='100%'
      alignItems='center'
      bgColor={info.read ? 'white' : 'neutral.light-grayish-blue'}
      borderRadius='8px'
      p='.8rem'
      my='.3rem'
      transition='colors .2s ease-in'
    >
      <Avatar name={info.username} src={info.userphoto} mr='.8rem' />
      <Box w='100%'>
        <Text fontSize='14px' w='fit-content' position='relative'>
          <chakra.span fontWeight='600'>{info.username}</chakra.span> {' '}
          <chakra.span color='neutral.dark-grayish-blue'>{info.action}</chakra.span> {' '}
          <chakra.span fontWeight='600'>{info.related}</chakra.span>
          {
            !info.read
              ? (<chakra.div
                  w='10px'
                  h='10px'
                  bgColor='primary.custom-red'
                  position='absolute'
                  right='-18px'
                  top='6px'
                  borderRadius='100%'
                 />)
              : null
          }
        </Text>
        <Text fontSize='14px' color='neutral.dark-grayish-blue'>{info.date}</Text>
      </Box>
    </Flex>
  )
}
