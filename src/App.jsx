import { chakra } from '@chakra-ui/react'
import { NotificationsContainer } from './components/NotificationsContainer'

function App () {
  return (
    <chakra.main
      w='100%'
      minH='100vh'
      bgColor='neutral.very-light-grayish-blue'
      display='flex'
      flexDirection='column'
      alignItems='center'
      pt='2rem'
      color='black'
    >
      <NotificationsContainer />
    </chakra.main>
  )
}

export default App
