import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ChevronLeftIcon } from 'react-native-heroicons/solid';

export default function PasswordResetScreen() {
  const [email, setEmail] = useState('');
  const [resetStatus, setResetStatus] = useState(null);
  const [isValidEmail, setIsValidEmail] = useState(true); // Track email validation
  const navigation = useNavigation();

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false, // Hide the header for this screen
    });
  }, [navigation]);

  const handlePasswordReset = async () => {
    if (!isValidEmail) {
      setResetStatus('Please enter a valid email address.');
      return;
    }

    try {
      setResetStatus('Password reset instructions sent to your email.');
    } catch (error) {
      console.error("Password Reset Error:", error);
      setResetStatus('An error occurred. Please check your email address and try again.');
    }
  };

  const validateEmail = (text) => {
    // Regular expression for a valid email format
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

    if (emailRegex.test(text)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }

    setEmail(text);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#A6D267' }}>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ backgroundColor: '#ccc', padding: 8, borderRadius: 12, marginLeft: 4, marginTop: 2 }}>
            <ChevronLeftIcon size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ fontSize: 23, fontWeight: 'bold', textAlign: 'center', marginBottom: 10 }}>Reset Your Password</Text>
          <TextInput
            style={{padding: 16, backgroundColor: '#D8D8D8', color: '#777', borderRadius: 20, marginBottom: 10,
            borderColor: isValidEmail ? '#D8D8D8' : 'red', borderWidth: 1, 
            }}
            placeholder="Enter your email"
            value={email}
            onChangeText={(text) => validateEmail(text)} // Call the validateEmail function
          />
          <TouchableOpacity
            onPress={handlePasswordReset}
            style={{ backgroundColor: '#81D2C7', padding: 16, borderRadius: 20 }}
          >
            <Text style={{ color: 'white', fontWeight: 'bold', textAlign: 'center' }}>Reset Password</Text>
          </TouchableOpacity>
          {resetStatus && (
            <Text style={{ color: 'red', textAlign: 'center', marginTop: 10 }}>{resetStatus}</Text>
          )}
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ marginTop: 10 }}>
            <Text style={{ color: 'blue', textAlign: 'center', textDecorationLine: 'underline' }}>Back to Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
