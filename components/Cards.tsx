import {View, Text, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import images from "@/constants/images";
import icons from "@/constants/icons";

interface Props {
    onPress?: () => void,
    name: string,
    location: string,
    price: string,
    image: string,
    isFav: boolean,
    rating: number

}

export const FeaturedCard = ({onPress}: Props) => {
    return (
        <TouchableOpacity className='flex flex-col items-start w-60 h-80 relative '>
            <Image source={images.japan} className='size-full rounded-2xl'/>
            <Image source={images.cardGradient} className='absolute bottom-0 size-full rounded-2xl'/>
            <View className='flex flex-row items-center bg-white/90 px-3 py-1.5 rounded-full absolute top-3 right-2'>
                <Image source={icons.star} className='size-3.5'/>
                <Text className='text-sm font-rubik-bold text-primary-300 ml-1'>4.4</Text>
            </View>
            <View className='flex flex-col items-start absolute bottom-5 inset-x-5 '>
                <Text className='text-xl font-extrabold text-white' numberOfLines={1}>Modern Apartment</Text>
                <Text className='text-base font-rubik text-white'>22 w 15th St, New York , NY 10011</Text>
                <View className='flex flex-row items-center justify-between w-full '>
                    <Text className='text-xl font-rubik-extrabold text-white'>2500$</Text>
                    <Image source={icons.heart} className='size-4'/>
                </View>

            </View>
        </TouchableOpacity>
    )
}

export const Card = ({onPress}: Props) => {
    return (
        <TouchableOpacity onPress={onPress} className='flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative'>
            <View className='flex flex-row items-center absolute px-2 top-5 right-5 bg-white/90 p-1 rounded-full z-50'>
                <Image source={icons.star} className='size-2.5'/>
                <Text className='text-xs font-rubik-bold text-primary-300 ml-0.5'>4.4</Text>
            </View>
            <Image source={images.newYork} className='w-full h-40 rounded-lg'/>
            <View className='flex flex-col mt-2'>
                <Text className='text-base font-bold text-black-300'>Cozy Studio</Text>
                <Text className='text-xs font-rubik text-black-200'>22 w 15th St, New York , NY 10011</Text>
                <View className='flex flex-row items-center justify-between wmt-2 '>
                    <Text className='text-base font-rubik-extrabold text-primary-300'>2500$</Text>
                    <Image source={icons.heart} className='w-5 h-5 mr-2' tintColor="#191d31"/>
                </View>

            </View>
        </TouchableOpacity>
    )
}
// export const Card = ({item, onPress}: Props) => {
//     return (
//         <TouchableOpacity
//             className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative"
//             onPress={onPress}
//         >
//             <View className="flex flex-row items-center absolute px-2 top-5 right-5 bg-white/90 p-1 rounded-full z-50">
//                 <Image source={icons.star} className="size-2.5"/>
//                 <Text className="text-xs font-rubik-bold text-primary-300 ml-0.5">
//                     {item.rating}
//                 </Text>
//             </View>
//
//             <Image source={{uri: item.image}} className="w-full h-40 rounded-lg"/>
//
//             <View className="flex flex-col mt-2">
//                 <Text className="text-base font-rubik-bold text-black-300">
//                     {item.name}
//                 </Text>
//                 <Text className="text-xs font-rubik text-black-100">
//                     {item.address}
//                 </Text>
//
//                 <View className="flex flex-row items-center justify-between mt-2">
//                     <Text className="text-base font-rubik-bold text-primary-300">
//                         ${item.price}
//                     </Text>
//                     <Image
//                         source={icons.heart}
//                         className="w-5 h-5 mr-2"
//                         tintColor="#191D31"
//                     />
//                 </View>
//             </View>
//         </TouchableOpacity>
//     );
// };
