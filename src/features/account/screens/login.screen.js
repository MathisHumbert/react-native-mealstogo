import React, { useState, useContext } from 'react';

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

export const LoginScreen = ({ navigation }) => {
  const { onLogin, error } = useContext(AuthenticationContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        {error && (
          <ErrorContainer size='large'>
            <Text variant='error'>{error}</Text>
          </ErrorContainer>
        )}
        <Spacer size='large'>
          <AuthButton
            icon='lock-open-outline'
            mode='contained'
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
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
