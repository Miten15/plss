import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native'
import React, { useEffect, useState  } from 'react'
import { Stack, router, useLocalSearchParams } from 'expo-router'
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Colors from '@/constants/Colors';
import { isClerkAPIResponseError, useSignIn, useSignUp } from '@clerk/clerk-expo';



const Page = () => {
    const { phone, signin } = useLocalSearchParams<{ phone: string, signin: string }>();
    const [code, setCode] = useState('')
    const CELL_COUNT = 6;
    const ref = useBlurOnFulfill({value: code, cellCount: CELL_COUNT })
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value: code,
        setValue: setCode,
      });
      const { signUp, setActive } = useSignUp();
      const { signIn } = useSignIn();

    useEffect(() => {
        if (code.length === 6) {
            if (signin === 'true') {
                verifySignin()
            } else {
                verifyCode()
            }

        }
    }, [code])

    const verifyCode = async () => {
        try {
            await signUp!.attemptPhoneNumberVerification({
              code,
            });
      
            await setActive!({ session: signUp!.createdSessionId });
          } catch (err) {
            console.log('error', JSON.stringify(err, null, 2));
            if (isClerkAPIResponseError(err)) {
              Alert.alert('Error', err.errors[0].message);
            }
          }
    };
    
    const verifySignin = async () => {
        try {
            await signIn!.attemptFirstFactor({
              strategy: 'phone_code',
              code,
            });
      
            await setActive!({ session: signIn!.createdSessionId });
          } catch (err) {
            console.log('error', JSON.stringify(err, null, 2));
            if (isClerkAPIResponseError(err)) {
              Alert.alert('Error', err.errors[0].message);
            }
          }
    };
    
    const resendCode = async () => {
        try {
            if (signin === 'true') {
              const { supportedFirstFactors } = await signIn!.create({
                identifier: phone,
              });
      
              const firstPhoneFactor: any = supportedFirstFactors.find((factor: any) => {
                return factor.strategy === 'phone_code';
              });
      
              const { phoneNumberId } = firstPhoneFactor;
      
              await signIn!.prepareFirstFactor({
                strategy: 'phone_code',
                phoneNumberId,
              });
            } else {
              await signUp!.create({
                phoneNumber: phone,
              });
              signUp!.preparePhoneNumberVerification();
            }
          } catch (err) {
            console.log('error', JSON.stringify(err, null, 2));
            if (isClerkAPIResponseError(err)) {
              Alert.alert('Error', err.errors[0].message);
            }
          }    };
    
    return (
        <View style={styles.container}>
            <Stack.Screen options={{ headerTitle: phone }} />
            <Text style={styles.legal}>
                You must be{' '}
                <Text style={styles.legal} >
                    at least 16 years old
                </Text>{' '}
                to register. Learn how WhatsApp works with the{' '}
                <Text style={styles.legal} >
                    Meta Companies
                </Text>
                .
            </Text>

            <CodeField
                ref={ref}
                {...props}
                value={code}
                onChangeText={setCode}
                cellCount={CELL_COUNT}
                rootStyle={styles.codeFieldRoot}
                keyboardType="number-pad"
                textContentType="oneTimeCode"
                renderCell={({ index, symbol, isFocused }) => (
                     <Text
                     key={index}
                     style={[styles.cellRoot, isFocused && styles.focusCell]}
                     onLayout={getCellOnLayoutHandler(index)}>
                     {symbol || (isFocused ? <Cursor/> : null)}
                     </Text> )} />
           
              <TouchableOpacity style={styles.button} onPress={resendCode}>
                <Text>Didn't receive a verifiaction code?</Text>
              </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        backgroundColor: Colors.background,
        gap: 20,
    },
    legal: {
        fontSize: 14,
        textAlign: 'center',
        color: '#000',
    },
    button: {
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: Colors.primary,
        fontSize: 18,
    },
    codeFieldRoot: {
        marginTop: 20,
        width: 260,
        marginLeft: 'auto',
        marginRight: 'auto',
        gap: 4,
    },
    cellRoot: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
    },
    cellText: {
        color: '#000',
        fontSize: 36,
        textAlign: 'center',
    },
    focusCell: {
        paddingBottom: 4,
        borderBottomColor: '#000',
        borderBottomWidth: 2,
    },
    cell: {
        width: 40,
        height: 40,
        lineHeight: 38,
        fontSize: 24,
        borderWidth: 2,
        borderColor: '#00000030',
        textAlign: 'center',
      },
    
   
});
export default Page