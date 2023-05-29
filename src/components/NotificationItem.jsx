import { chakra, Flex, Avatar, Text, Box, Image } from '@chakra-ui/react'

export const NotificationItem = ({ info }) => {
  return (
    <Box
      as='article'
      w='100%'
      bgColor={info.read ? 'white' : 'neutral.light-grayish-blue'}
      borderRadius='8px'
      p='.8rem'
      my='.3rem'
      transition='colors .2s ease-in'
    >
      <Flex
        as='article'
        w='100%'
        alignItems='center'
      >
        <Avatar name={info.username} src={info.userphoto} mr='.8rem' />
        <Box w='100%'>
          <Text fontSize='14px' w='fit-content' position='relative'>
            <chakra.span
              fontWeight='600'
              cursor='pointer'
              transition='.1s ease-in'
              _hover={{ color: 'primary.custom-blue' }}
            >
              {info.username}
            </chakra.span> {' '}
            <chakra.span color='neutral.dark-grayish-blue'>
              {info.action}
            </chakra.span> {' '}
            <chakra.span
              fontWeight='600'
              cursor='pointer'
              transition='.1s ease-in'
              _hover={{ color: 'primary.custom-blue' }}
            >
              {info.related}
              {
              info.read
                ? null
                : (
                  <chakra.div
                    ml='.3rem'
                    display='inline-block'
                    w='10px'
                    h='10px'
                    bgColor='primary.custom-red'
                    borderRadius='100%'
                  />
                  )
            }
            </chakra.span>
          </Text>
          <Text fontSize='14px' color='neutral.dark-grayish-blue'>{info.date}</Text>
        </Box>
        {
        !info.picture
          ? null
          : (
            <Box w='70px'>
              <Image w='100%' src={info.picture} />
            </Box>
            )
      }
      </Flex>
      {
        !info.message
          ? null
          : (
            <Box
              w='90%'
              h={{ base: 'fit-content', md: 'fit-content', lg: '100px' }}
              border='1px solid'
              borderColor='neutral.grayish-blue'
              borderRadius='4px'
              mt='.8rem'
              padding='1rem'
              mx='10%'
            >
              <Text fontSize='15px' color='neutral.dark-grayish-blue'>{info.message}</Text>
            </Box>
            )
      }
    </Box>
  )
}
