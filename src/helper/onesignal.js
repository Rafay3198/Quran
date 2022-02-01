import OneSignal from 'react-native-onesignal';

export const _oneSignalSetup = async() => {
OneSignal.setAppId("5df21061-ba0a-46d4-aabd-6da7d57b2be2");
    OneSignal.addSubscriptionObserver(event => {
      console.log('observer => ', event);
      console.log(event.to.userId);
    //   setPlayerId(event.to.userId);
      // alert(event.to.userId);
      // console.log(event.to.pushToken);
    });
}
