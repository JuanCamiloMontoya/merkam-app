import React from "react"
import { View, Text, Button } from "react-native"
import { useNavigation } from "@react-navigation/native"

export const Register = () => {

  const navigation = useNavigation()

  return (
    <View style={{ marginTop: 50 }}>
      <Text>Registro</Text>
      <Button title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  )
}