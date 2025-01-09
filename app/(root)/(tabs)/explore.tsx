import {ActivityIndicator, Button, FlatList, Image, Text, TouchableOpacity, View} from "react-native";
import {Link, router, useLocalSearchParams} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import images from "@/constants/images";
import icons from "@/constants/icons";
import Search from "@/components/Search";
import {Card, FeaturedCard} from "@/components/Cards";
import Filters from "@/components/Filters";
import {useGlobalContext} from "@/lib/global-provider";
import seed from "@/lib/seed";
import {useAppwrite} from "@/lib/useAppwrite";
import {getLatestProperties, getProperties} from "@/lib/appwrite";
import {useEffect} from "react";
import NoResults from "@/components/NoResults";


export default function Explore() {

    const params = useLocalSearchParams<{query?:string; filter?:string}>();

    const {data:properties,loading,refetch} = useAppwrite({
        fn: getProperties,
        params: {
            query: params.query,
            filter: params.filter!,
            limit: 20,
        },
        skip:true
    });

    const handleCardPress = (id:string) => {
        router.push(`/properties/${id}`);
    }

    useEffect(()=>{
        refetch({
            query: params.query,
            filter: params.filter!,
            limit: 20,
        })
    },[params.query,params.filter]);


    return (
        <SafeAreaView className='bg-white h-full'>
            <FlatList data={properties} renderItem={({item}) => <Card item={item} onPress={()=> handleCardPress(item.$id)}/>}
                      ListHeaderComponent={
                          <View className='px-5'>
                              <View className='flex flex-row items-center justify-between mt-5'>
                                  <TouchableOpacity onPress={()=> router.back()}
                                                    className='flex flex-row bg-primary-200 rounded-full size-11
                                                    items-center justify-center'>
                                      <Image source={icons.backArrow} className='w-4 h-4'/>
                                  </TouchableOpacity>
                                  <Text className='text-base mr-2 text-center font-rubik-medium text-black-300
                                  '>Search for your Ideal Home</Text>
                                  <Image source={icons.bell} className='size-7 ' resizeMode={'contain'}/>
                              </View>
                              <Search/>
                              <View className='mt-5'>
                                  <Filters/>
                                  <Text className='text-center'>
                                      Found {properties?.length} results
                                  </Text>

                              </View>
                          </View>
                      }
                      keyExtractor={(item) => item.$id.toString()}
                      numColumns={2}
                      contentContainerClassName='pb-32'
                      columnWrapperClassName='flex gap-5 px-5'
                      showsVerticalScrollIndicator={false}
                      ListEmptyComponent={
                          loading ? <ActivityIndicator size='large' className='text-primary-300 mt-5' color='#191d31'/>
                              : <NoResults/>
                      }
            />

        </SafeAreaView>
    );
}
