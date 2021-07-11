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
      return 0
    }
  }
  