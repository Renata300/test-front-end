import React from 'react'
import {View, Text, TextInput, Alert} from 'react-native'
import {Controller} from 'react-hook-from'

const Login = ({steps}) => {
    const makeLogin = async () => { // Make sure that the login was made with success (if something went wrong, the login will fail)
        try {
            Alert.alert('Success')
            steps.navigate('Profile')
        } catch (error) {
            Alert.alert('Failed')
        }
    }

    return (
        // Here the are two fields (Name and Pin) which must be filled correctly
        <View style={styles.container}>
            {/* The page where people will start is on Login page */}
            <Text style={styles.subtitle}>Login</Text>

            {/* The user must complete the fields below (Email and Pin) to continue the process */}
            <Controller control={control} name='email' button={makeLogin} render={({ field : {onChange, value}}) => {
                <TextInput style={styles.input} placeholder='email' onChange={onChange} value={value}/>
            }}/>
            <Controller control={control} name={pin} button={makeLogin} render={({field: {onChange, value}}) => (
                <TextInput style={styles.input} name={pin} onChange={onChange} value={value}/>
            )}/>
        </View>
    )
}

export default Login
