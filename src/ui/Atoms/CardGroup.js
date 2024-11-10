import { Text as RNText } from 'react-native';

export const Text = ({ children, style, ...props }) => (
  <RNText style={[{ color: '#333' }, style]} {...props}>
    {children}
  </RNText>
);