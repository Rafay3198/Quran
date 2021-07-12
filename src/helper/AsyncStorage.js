import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeLastRead = async (pageIndex) => {
    try {
      await AsyncStorage.setItem('pageIndex', pageIndex)
    } catch (e) {
      alert("Something went wrong")
    }
  }

export const getLastRead = async () => {
    try {
      const value = await AsyncStorage.getItem('pageIndex')
      if(value !== null) {
        return value
      }
    } catch(e) {
      return "dark"
    }
  }

  export const saveTheme = async (theme) => {
    try {
      await AsyncStorage.setItem('theme', theme)
    } catch (e) {
      alert("Something went wrong")
    }
  }

  export const getTheme = async () => {
    try {
      const value = await AsyncStorage.getItem('theme')
      if(value !== null) {
        return value
      }
    } catch(e) {
      return 0
    }
  }
  