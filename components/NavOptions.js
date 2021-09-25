import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useSelector } from 'react-redux';
import tw from "tailwind-react-native-classnames";
import { selectOrigin } from '../redux/slices/navSlice';

const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    }
]

const NavOptions = () => {
    const navigation = useNavigation();
    const origin = useSelector(selectOrigin)

    return (
        <FlatList
            data={data}
            // key tells react "dont rerender everything just the one with the key that changed"
            horizontal
            keyExtractor={(item) => item.id}
            renderItem={({item}) => (
                <TouchableOpacity
                    onPress={() => navigation.navigate('MapScreen')}
                    style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-35`}
                    disabled={!origin}
                >
                    <View style={tw`${!origin && "opacity-20"}`}>
                        <Image 
                            //must give style to image to see it
                            style={{ width: 120, height: 120, resizeMode: "contain"}}
                            source={{ uri: item.image}}
                        />
                        <Text
                            style={tw`mt-2 text-lg font-semibold`}
                        >{item.title}</Text>
                        <Icon 
                            style={tw`p-2 bg-black rounded-full w-10 mt-4`}
                            type="antdesign"
                            name="arrowright"
                            color="white"
                        />
                    </View>
                </TouchableOpacity>
            )}
        />
    )
}

export default NavOptions
