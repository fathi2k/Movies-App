import { View, Text, Image,ImageSourcePropType } from 'react-native'
import React from 'react'





//type//

// interface jenisCard  {
//   src : ImageSourcePropType;
//   title : string;
//   ratings : number;
//   year : number | string;
// }



interface jenisCard {
  src: { uri: string } | any;  // support both remote & local images
  title: string;
  ratings: number;
  year: number | string;

}

const MoviesCard = ({src,title,ratings,year}:jenisCard) => {
  return (
    <View className='  w-1/3 px-3 py-3 rounded-2xl ' >
          <Image source={src} className='h-[120px] w-[80px] rounded-xl'/>
          <Text className='min-w-[100px] text-white'>{title}</Text>
          <Text>*{ratings}</Text>
          <View className='flex-1 flex-row justify-around'>
                <Text className='text-[10px] text-gray-400'>{year}</Text>
                <Text className='text-[10px] text-gray-400'>Manga</Text>
          </View>
    </View>
  )
}

export default MoviesCard