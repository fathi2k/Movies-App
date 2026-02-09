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

         

<ImageBackground source={images.highlight} className=' flex justify-center flex-row  min-w-[110px] gap-2 mt-4  items-center min-h-12 ' >
 
                  
                        <Image  source={icon} className="size-5" />
                        <Text>{title}</Text>
                    
                  

                    </ImageBackground>

        

        

                   




          

   
  )
  }else{


      return (

        <View className="w-full flex justify-center flex-row p-2 min-w-[114px] gap-2 mt-4 min-h-12 items-center">
              <Image source={icon} className="size-5"/>
              
        </View>

      )





  }


 
}

  const _Layout = () => {


        // bottom navigation///

    
    return (
     <Tabs screenOptions={{
      tabBarShowLabel : false,
      tabBarItemStyle : {
        width : '100%',
        
        justifyContent : 'center',
        alignItems : 'center',

      },
      tabBarStyle : {
        backgroundColor : '#0f0D23',
        borderRadius : 50,
        marginHorizontal : 10,
        marginBottom : '8%',
        height : 40,
        position : 'absolute',
        overflow : 'hidden',
        borderWidth : 0,
        
        borderColor : '#0f0d23',
        
      }
     }} >


            <Tabs.Screen name='index' options={{
  
              headerShown : true,
              tabBarIcon : ({focused})=>(
                
             <TabIcon focused={focused} icon={icons.home} title='Home'/>
                
              )
            }}/>



             <Tabs.Screen name='search' options={{
      
              headerShown : true ,
               tabBarIcon : ({focused})=>(
                
             <TabIcon focused={focused} icon={icons.search} title='Search'/>
                
              )
            }}/>


               <Tabs.Screen name='saved' options={{
        
              headerShown : true ,
               tabBarIcon : ({focused})=>(
                
             <TabIcon focused={focused} icon={icons.save} title='saved'/>
                
              )
            }}/>



              <Tabs.Screen name='profile' options={{
              
              headerShown : true,
               tabBarIcon : ({focused})=>(
                
             <TabIcon focused={focused} icon={icons.person} title='account'/>
                
              )
            }}/>




    




     </Tabs>
    )
  }
  
  export default _Layout



  