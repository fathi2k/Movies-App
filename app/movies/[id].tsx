import { View, Text } from 'react-native'
import React from 'react'
import { useSearchParams } from 'expo-router/build/hooks'

const MoviesDetails = () => {
  const {id} = useSearchParams();
  return (
    <View className='flex-1 justify-center'>
      <Text>movies details : {id}</Text>
     
    </View>
  )
}

export default MoviesDetails