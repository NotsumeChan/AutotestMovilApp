import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'; //update the colors
import { Text, SafeAreaView, TextInput, StyleSheet, View, Switch, TouchableOpacity } from 'react-native';
import { Image } from 'expo-image';
import { useFonts } from 'expo-font'; //call the font of figma
import { Link } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/Chillax-Medium.otf'),
  });
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const [showPassword, setShowPassword] = useState(false);
  const togglePassword = () => setShowPassword(previousState => !previousState);
  //repeat per slot in password


  var login =<SafeAreaView style={[styles.container, {top:-50}]}>
      <View style={styles.input}>
        <LinearGradient
        colors={['rgba(0,0,0,0.25)', 'transparent']}
        style={styles.topShadow}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.4 }}
        />
        <TextInput id="user" placeholder="Usuario" style={{padding:5}} onChange={(email) => email}></TextInput>
      </View>
      <View style={styles.input}>
      <LinearGradient
        colors={['rgba(0,0,0,0.25)', 'transparent']}
        style={styles.topShadow}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.4 }}
        />
        <View style={{flexDirection: "row",}}>
          <View style={{width:"90%"}}>
          <TextInput id="passwordLogin" placeholder="Contraseña" style={{padding:4}} secureTextEntry={showPassword} onChange={(password) => password}/>
          </View>
            <TouchableOpacity onPress={togglePassword}>
              <Image 
              source={showPassword ? require("../assets/images/eye.png") : require("../assets/images/eye-closed.png")}
              style={{ width: 18, height: 12, marginVertical:"auto", top:13, position: 'absolute'}}
              contentFit='none'
              />
            </TouchableOpacity>
        </View>
      </View>

      <Link href={"/singup"} style={styles.link}>Olvide Mi contraseña</Link>
      <Link href={"/(tabs)"} style={styles.mainButton}>Iniciar Sesion</Link>
  </SafeAreaView>;
  

  
  
  var register = <SafeAreaView style={[styles.container, {top:-30}]}>
    <View style={[styles.input, {marginBottom:21}]}>
        <LinearGradient
        colors={['rgba(0,0,0,0.25)', 'transparent']}
        style={styles.topShadow}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.4 }}
        />
        <TextInput id="user" placeholder="Usuario" style={{padding:5}} onChange={(email) => email}></TextInput>
      </View>
      <View style={styles.input}>
      <LinearGradient
        colors={['rgba(0,0,0,0.25)', 'transparent']}
        style={styles.topShadow}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.4 }}
        />
        <View style={{flexDirection: "row",}}>
          <View style={{width:"90%"}}>
          <TextInput id="passwordRegister" placeholder="Contraseña" style={{padding:4}} secureTextEntry={showPassword} onChange={(password) => password}/>
          </View>
            <TouchableOpacity onPress={togglePassword}>
              <Image 
              source={showPassword ? require("../assets/images/eye.png") : require("../assets/images/eye-closed.png")}
              style={{ width: 18, height: 12, marginVertical:"auto", top:13, position: 'absolute'}}
              contentFit='none'
              />
            </TouchableOpacity>
        </View>
      </View>
      <View style={styles.input}>
      <LinearGradient
        colors={['rgba(0,0,0,0.25)', 'transparent']}
        style={styles.topShadow}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 0.4 }}
        />
        <View style={{flexDirection: "row",}}>
          <View style={{width:"90%"}}>
            <TextInput id="ConfirmpasswordRegister" placeholder="Confirmar Contraseña" style={{padding:4}} secureTextEntry={showPassword} onChange={(password) => password}/>
          </View>
            <TouchableOpacity onPress={togglePassword}>
              <Image 
              source={showPassword ? require("../assets/images/eye.png") : require("../assets/images/eye-closed.png")}
              style={{ width: 18, height: 12, marginVertical:"auto", top:13, position: 'absolute'}}
              contentFit='cover'
              />
            </TouchableOpacity>
          
        </View>
      </View>
        <Link href={"/register"} style={styles.mainButton}>Registrarse</Link>
  </SafeAreaView>;
  var email = "";
  var password = ""; 

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  var welcome = "¡Bienvenido a la App Test!";
  if (isEnabled) {
    var content = register;
    welcome = "¡Bienvenido a la App Test!";
  }else{
    welcome = "";
    var content = login;
  }
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <LinearGradient colors={['#055776','#E7D6BC' ]} start={{x:0,y:0.4}} end={{x:0, y:1}} style={{position: 'absolute',left: 0,right: 0,top: 0,height: "100%"}} />
          <View style={styles.container}>
          <Image
          source={require('../assets/images/logo.png')}
          style={{ width: 250, height: 188.2, position: 'absolute'}}
          contentFit='cover'
          />
          </View>
          <View style={{justifyContent: "center",alignItems: "center", top:-30}}>
            <Text style={styles.text}>{welcome}</Text>
            <View style={{flexDirection: "row", marginLeft:-50}}><Text style={styles.text}>Inicio de sesion  </Text><Text style={styles.text}>registro</Text></View>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              onValueChange={toggleSwitch}
              value={isEnabled}
            />
          </View>
          {content}
  </ThemeProvider>
  );
}


//move the styles to other file
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }, 
  text: {
    color: "#fff",
  },
  input: {
    paddingLeft: 60,
    margin: 4,
    height: 40,
    width: "100%",
    overflow: "hidden",
    backgroundColor : "#E7D6BC",
    color:"#818181"
  },
  topShadow: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 20,
  },

  mainButton:{
    paddingHorizontal: 40,
    paddingVertical:10,
    margin: 20,
    borderRadius: 20,
    overflow: "hidden",
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#E7D6BC",
    color: "#E7D6BC",
    textAlign: "center",
  },
  link:{
    color: "#E7D6BC",
    paddingTop: 10,
  },

});

