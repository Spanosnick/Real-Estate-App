import {View, Text} from 'react-native'
import React from 'react'
import { verifyInstallation } from 'nativewind';

const Test = () => {
    verifyInstallation();
    return (
        <View>
            <Text>Test</Text>
        </View>
    )
}
export default Test
