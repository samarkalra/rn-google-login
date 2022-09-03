import {View, Text} from 'react-native';
import React from 'react';
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
  webClientId:
    '655537921320-iecudlo44jbfj64rnp6jsbc210r0f2pd.apps.googleusercontent.com',
  iosClientId:
    '655537921320-c4pcru55hnnptqcaiukisc78s0glucoi.apps.googleusercontent.com',
  offlineAccess: true,
});

const App = () => {
  const onSignIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      const token = await GoogleSignin.getTokens();

      console.log(token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <GoogleSigninButton
        onPress={onSignIn}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        style={{marginTop: 100}}
      />
    </View>
  );
};

export default App;
