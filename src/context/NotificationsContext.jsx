import { createContext, useState, useEffect } from 'react'
import notificationsData from '../data.json'

export const NotificationsContext = createContext(null)

export const NotificationsContextProvider = ({ children }) => {
  const [notifications, setNotifications] = useState(null)
  const [allNotifications, setAllNotifications] = useState([])

  useEffect(() => {
    const { newNotifications } = notificationsData
    setNotifications(newNotifications)

    const { notifications } = notificationsData
    setAllNotifications(notifications)
  }, [])

  const markAllAsRead = () => {
    if (notifications !== null && notifications !== 0) {
      setNotifications(0)
      allNotifications.forEach(notification => {
        notification.read = true
      })
    }
  }

  return (
    <NotificationsContext.Provider
      value={{
        markAllAsRead,
        notifications,
        allNotifications
      }}
    >
      {children}
    </NotificationsContext.Provider>
  )
}
