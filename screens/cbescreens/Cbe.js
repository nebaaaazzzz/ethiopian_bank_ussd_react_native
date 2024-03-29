import * as React from 'react';
import {
  Image,
  ScrollView,
  SafeAreaView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import CbeprofileStack from './Cbeprofile';
import {createStackNavigator} from '@react-navigation/stack';
import Cbebeneficary from './Cbebeneficary';
import Cbeutility from './Cbeutility';
import Cbetransfer from './Cbetransfer';
import Cbetopup from './Cbetopup';
import Cbeslideshow from './Cbeslideshow';
import {Button} from 'react-native-paper';

const Stack = createStackNavigator();
function Cbe({navigation, route}) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    subcontainer: {
      flex: 1,
      marginBottom: '75%',
    },
    image: {
      width: '60%',
      height: '60%',
      marginTop: '5%',
      alignSelf: 'center',
    },
    btn: {
      marginTop: '6%',
      width: '90%',
      justifyContent: 'center',
      height: '15%',
      backgroundColor: '#fff',
      elevation: 3,
      alignSelf: 'center',
    },

    labelstyle: {
      fontSize: 16,
    },
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.subcontainer}>
          <Image
            source={require('./../../src/img/cbe.png')}
            resizeMode="contain"
            style={styles.image}
          />
          <Button
            icon="transfer"
            mode="outlined"
            labelStyle={styles.labelstyle}
            color="#2196F3"
            style={styles.btn}
            onPress={() => {
              requestAnimationFrame(() => navigation.navigate('Cbetransfer'), {
                type: route.params.type,
              });
            }}>
            Transfer
          </Button>

          <Button
            // icon="mobile"
            labelStyle={styles.labelstyle}
            mode="outlined"
            color="#2196F3"
            style={styles.btn}
            onPress={() => {
              requestAnimationFrame(() =>
                navigation.navigate('Cbetopup', {
                  type: route.params.type,
                }),
              );
            }}>
            TopUp
          </Button>

          <Button
            // icon="person"
            labelStyle={styles.labelstyle}
            mode="outlined"
            color="#2196F3"
            style={styles.btn}
            onPress={() => {
              requestAnimationFrame(() =>
                navigation.navigate('Cbebeneficary', {
                  type: route.params.type,
                }),
              );
            }}>
            People
          </Button>

          <Button
            // icon="mobile"
            mode="outlined"
            color="#2196F3"
            labelStyle={styles.labelstyle}
            style={styles.btn}
            onPress={() => {
              requestAnimationFrame(() =>
                navigation.navigate('Cbeutility', {
                  type: route.params.type,
                }),
              );
            }}>
            Utilities
          </Button>

          <Button
            labelStyle={styles.labelstyle}
            // icon="mobile"
            mode="outlined"
            color="#2196F3"
            style={styles.btn}
            onPress={() => {
              requestAnimationFrame(() => {
                navigation.navigate('Cbeprofilestack', {
                  type: route.params.type,
                });
              });
            }}>
            Profile
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function CbeStack({route}) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: 'white',
        headerStyle: {backgroundColor: '#2196F3'},
      }}>
      <Stack.Screen
        name="Cbeslideshow"
        options={{title: 'CBE'}}
        component={Cbeslideshow}
      />
      <Stack.Screen name="Cbehome" options={{title: 'CBE'}} component={Cbe} />
      <Stack.Screen
        name="Cbetopup"
        options={{title: 'CBE TopUp'}}
        component={Cbetopup}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Cbetransfer"
        component={Cbetransfer}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Cbeutility"
        component={Cbeutility}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Cbeprofilestack"
        component={CbeprofileStack}
      />
      <Stack.Screen
        options={{title: 'Beneficiary'}}
        name="Cbebeneficary"
        component={Cbebeneficary}
      />
    </Stack.Navigator>
  );
}
export default CbeStack;
