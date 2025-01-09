import {View, Text, ScrollView, Image, TouchableOpacity, Alert} from 'react-native'
import React, {useContext} from 'react'
import {SafeAreaView} from "react-native-safe-area-context";
import icons from "@/constants/icons";
import images from "@/constants/images";
import {useGlobalContext} from "@/lib/global-provider";
import {logout} from "@/lib/appwrite";

function  SettingsItem ({icon, title, onPress} : {icon: any, title: string, onPress: () => void}) {
    return (
        <TouchableOpacity onPress={onPress} className='flex-row items-center justify-between border-b border-gray-100 py-4 px-5'>
            <View className='flex-row items-center'>
                <Image source={icon} className='size-8'/>
                <Text className='text-lg font-rubik-medium ml-4'>{title}</Text>
            </View>
            <Image source={icons.rightArrow} className='size-3'/>
        </TouchableOpacity>
    )
}

const Profile = () => {
    const {user,refetch} = useGlobalContext()


    const handleLogout = async  () => {
        console.log('logout... ... ')
        const result = await logout();

        if (result) {
            Alert.alert('Logout', 'You have been logged out successfully');
            refetch();
        }else {
            Alert.alert('Logout', 'An error occurred while logging out')
        }
    }
    return (
        <SafeAreaView className='h-full bg-white'>
            <ScrollView showsVerticalScrollIndicator={false}
                        contentContainerClassName='pb-28 px-3'
            >
                <View className='flex flex-row items-center justify-between mt-5'>
                    <Text className='text-xl font-rubik-bold '>Profile </Text>
                    <Image source={icons.bell} className='size-5'/>
                </View>
                <View className='flex-row justify-center fle mt-5'>
                    <View className='flex flex-col items-center relative mt-5'>
                        <Image source={{uri: user?.avatar}} className='size-44 relative rounded-full'/>
                        <TouchableOpacity className='absolute bottom-11 right-2'>
                            <Image source={icons.edit} className='size-8 '/>
                        </TouchableOpacity>
                        <Text className='text-2xl font-rubik-bold mt-2'>{user?.name} </Text>
                    </View>
                </View>
                <View className='flex flex-col mt-10'>
                    <View className='my-3 border-b-black-300'>
                    <SettingsItem icon={icons.calendar} title='My Booking' onPress={() => console.log('Invite a friend')}/>
                    <SettingsItem icon={icons.wallet} title='Invite a friend' onPress={() => console.log('Invite a friend')}/>
                    </View>
                    <View className='my-3'>
                    <SettingsItem icon={icons.person} title='Profile' onPress={() => console.log('Invite a friend')}/>
                    <SettingsItem icon={icons.bell} title='Notification' onPress={() => console.log('Invite a friend')}/>
                    <SettingsItem icon={icons.shield} title='Security' onPress={() => console.log('Invite a friend')}/>
                    <SettingsItem icon={icons.language} title='Language' onPress={() => console.log('Invite a friend')}/>
                    <SettingsItem icon={icons.info} title='Help Center' onPress={() => console.log('Invite a friend')}/>
                    <SettingsItem icon={icons.people} title='Invite Frinets' onPress={() => console.log('Invite a friend')}/>
                    <SettingsItem icon={icons.logout} title='Logout' onPress={handleLogout}/>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
export default Profile
