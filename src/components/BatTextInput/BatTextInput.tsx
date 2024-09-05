import React from 'react';
import { TextInput } from 'react-native';

import { styles } from './BatTextInputStyles';

interface IProps{
  pass:string
}

export function BatTextInput(props:IProps) {
  return (
    
        <TextInput 
            style={styles.inputer}
            placeholder='pass'
            value={props.pass}
        />
  );
}