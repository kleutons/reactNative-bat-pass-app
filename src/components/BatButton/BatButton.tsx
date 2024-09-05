import React, { useState } from 'react';
import { Text, Pressable } from 'react-native';

import { styles } from './BatButtonStyles';
import { BatTextInput } from '../BatTextInput/BatTextInput';
import generatePass from '../../services/passwordService';

import * as Clipboard from 'expo-clipboard';

export function BatButton() {

  const [pass, setPass] = useState('');

  function handelGenerateButton(){
    let generateToken = generatePass();
    setPass(generateToken);
  }

  function handleCopyButton(){
    Clipboard.setStringAsync(pass);
  }

  return (
    <>
        
        <BatTextInput pass={pass} />

        <Pressable
            onPress={handelGenerateButton}
            style={styles.btn}
        >
            <Text style={styles.btnText}>GENERATE</Text>
        </Pressable>

        <Pressable
            onPress={handleCopyButton}
            style={styles.btn}
        >
            <Text style={styles.btnText}>⚡COPY</Text>
        </Pressable>
    </>
  );
}