import React, { useEffect } from "react"
import { Text, View, Button } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { userActions } from "../../../services/User/UserSlice"
import { style } from './UserStyles'

export const User = () => {

  const { users } = useSelector(state => state.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.getUsers())
  }, [])

  return (
    <View style={style.container}>
      <View>
        <Text>
          USUARIOS
      </Text>
      </View>
      {users.map((user, index) => (
        <View key={index} style={style.itemUser}>
          <Text style={style.itemUserText}>{user?.name}</Text>
        </View>
      ))}
      <Button title="Cerrar" onPress={() => dispatch(userActions.setSession(false))} />
    </View>
  )
}