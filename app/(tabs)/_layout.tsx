// import {  Text, ImageBackground,Image, View } from 'react-native'
// import React from 'react'
// import { Tabs } from 'expo-router'
// import { images } from '@/constants/images'
// import { icons } from '@/constants/icons'
// import { Tabs, } from 'expo-router'


// // const _layout = () => {
// //   return (
  
    


// //   )
// // }

// // export default _layout




//   // <Tabs>

//   //       {/* boleh customize bottom tab */}
//   //           <Tabs.Screen name='index' options={{
//   //             title: 'Home',
//   //             headerShown : false,
//   //             tabBarIcon : ({focused}) => (
//   //               <>
//   //                     <ImageBackground source={images.highlight} className='flex-row w-full flex-1 min-w-[112px] min-h-14 items-center justify-center min-h-14 mt-4 rounded-[80%] ml-5'>

//   //                       <Image source={icons.home}  tintColor="#151312" className='size-5'/>

//   //                       <View>
//   //                               <Text>Home</Text>

//   //                       </View>
                      

//   //                     </ImageBackground>
                      
//   //               </>
//   //             )
//   //           }}/>


//   //            <Tabs.Screen name='profile' options={{
//   //             title: 'Profile Page',
//   //             headerShown : false
//   //           }}/>


//   //            <Tabs.Screen name='saved' options={{
//   //             title: 'Save Page',
//   //             headerShown : false,

//   //           }}/>

            
          
//   //     </Tabs>hjs


//   import { View, Text, ImageBackground } from 'react-native'
//   import React from 'react'
// import { Background } from '@react-navigation/elements'
// import { images } from '@/constants/images'

  



import { Tabs } from "expo-router"
import { ImageBackground, Image ,Text, View} from "react-native"
import { images } from "@/constants/images"
import { icons } from "@/constants/icons"



const TabIcon = ({focused,icon,title}: any)=>{


  if (focused){


           return (

    <ImageBackground source={images.highlight} className='w-full flex justify-center flex-row p-2 min-w-[114px] gap-2 mt-4 min-h-12 items-center ' >
 
                    <>
                        <Image  source={icon} className="size-5" />
                        <Text>{title}</Text>
                    
                    </>

                    </ImageBackground>

  )
  }else{


      return (

        <View className="w-full flex justify-center flex-row p-2 min-w-[114px] gap-2 mt-4 min-h-12 items-center">
              <Image source={icon}/>
              <Text>{title}</Text>
        </View>

      )





  }


 
}

  const _Layout = () => {


        // bottom navigation///

    
    return (
     <Tabs>


            <Tabs.Screen name='index' options={{
              title : 'Home',
              headerShown : true,
              tabBarIcon : ({focused})=>(
                
             <TabIcon focused={focused} icon={icons.home} title='Home'/>
                
              )
            }}/>


            <Tabs.Screen name='profile' options={{
              title : 'My account',
              headerShown : true,
               tabBarIcon : ({focused})=>(
                
             <TabIcon focused={focused} icon={icons.person} title='my account'/>
                
              )
            }}/>


               <Tabs.Screen name='saved' options={{
              title : 'setting',
              headerShown : true ,
               tabBarIcon : ({focused})=>(
                
             <TabIcon focused={focused} icon={icons.star} title='Setting'/>
                
              )
            }}/>





     </Tabs>
    )
  }
  
  export default _Layout



  