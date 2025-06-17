import { useClerk } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'
import { Platform, Alert, TouchableOpacity } from 'react-native'
import { styles } from '../assets/styles/home.styles'
import { Ionicons } from '@expo/vector-icons'
import {COLORS} from '../constants/colors.js'

export const SignOutButton = () => {
  // Use `useClerk()` to access the `signOut()` function
  const { signOut } = useClerk();

  const handleSignOut = async () => {
    if(Platform.OS ==='web'){
      const confirm = window.confirm("Are you sure you want to Logout?");
      if(confirm){
        await signOut();
      }
    }else{
      Alert.alert("Logout","Are you sure you want to logout?", [
      {text:"Cancel", style:"cancel"},
      {text:"Logout", style:"destructive", onPress: signOut},
    ]);
    }
  };

  return (
    <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut}>
      <Ionicons name="log-out-outline" size={22} color={COLORS.text} />
    </TouchableOpacity>
  )
}