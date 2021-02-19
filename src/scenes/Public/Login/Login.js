import React from "react"
import { View, Text, Button } from "react-native"
import { useNavigation } from "@react-navigation/native"
import { useDispatch } from "react-redux"
import { userActions } from "../../../services/User/UserSlice"

export const Login = () => {

  const navigation = useNavigation()
  const dispatch = useDispatch()


  return (
    <View style={{ marginTop: 50 }}>
      <Text>Login</Text>
      <Button title="Registro" onPress={() => navigation.navigate('Register')} />
      <Button title="Ingresar" onPress={() => dispatch(userActions.setSession(true))} />
    </View>
  )
}