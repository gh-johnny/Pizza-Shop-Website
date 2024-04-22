export const useSessionStorage = (key: 'is_guest') => {
  const setItem = (value: unknown) => {
    try {
      window.sessionStorage.setItem(key, JSON.stringify(value))
    } catch (err) {
      console.log('Could not set session storage: ' + err)
    }
  }

  const getItem = () => {
    try {
      const item = window.sessionStorage.getItem(key) as string
      return item ? (JSON.parse(item) as unknown) : undefined
    } catch (err) {
      console.log('Could not get session storage: ' + err)
    }
  }

  const removeItem = () => {
    try {
      window.sessionStorage.removeItem(key)
    } catch (err) {
      console.log('Could not remove session storage: ' + err)
    }
  }

  return { setItem, getItem, removeItem }
}
