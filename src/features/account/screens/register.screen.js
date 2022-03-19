import React, { useState, useContext } from 'react';
import { ActivityIndicator, Colors } from 'react-native-paper';

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
} from '../components/account.styled';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';

export const RegisterScreen = ({ navigation }) => {
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatedPassword, setRepeatedPassword] = useState('');

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label='Email'
          value={email}
          onChangeText={setEmail}
          textContentType='emailAddress'
          autoCapitalize='none'
        />
        <Spacer size='large'>
          <AuthInput
            label='Password'
            value={password}
            onChangeText={setPassword}
            extContentType='password'
            autoCapitalize='none'
            secureTextEntry
          />
        </Spacer>
        <Spacer size='large'>
          <AuthInput
            label='Repeat Password'
            value={repeatedPassword}
            onChangeText={setRepeatedPassword}
            extContentType='password'
            autoCapitalize='none'
            secureTextEntry
          />
        </Spacer>
        {error && (
          <ErrorContainer size='large'>
            <Text variant='error'>{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size='large'>
          {!isLoading ? (
            <AuthButton
              icon='email'
              mode='contained'
              onPress={() => onRegister(email, password, repeatedPassword)}
            >
              Register
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </Spacer>
      </AccountContainer>
      <Spacer size='large'>
        <AuthButton mode='contained' onPress={() => navigation.goBack()}>
          Back
        </AuthButton>
      </Spacer>
    </AccountBackground>
  );
};
