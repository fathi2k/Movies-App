import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import { images } from '@/constants/images'

const search = () => {
  return (
    <View className='flex-1  bg-primary'>
    
            <Image source={images.bg} className='z-0 absolute cover'/>


      
    </View>
  )
}

export default search


