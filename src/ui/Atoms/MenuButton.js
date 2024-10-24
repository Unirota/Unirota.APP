import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export const MenuButton = ({ icon, title, onPress }) => (
  <TouchableOpacity
    style={{
      flexDirection: 'row',
      alignItems: 'center',
      padding: 16,
      backgroundColor: 'white',
      borderRadius: 8,
      marginBottom: 8,
    }}
    onPress={onPress}
  >
    <Ionicons name={icon} size={24} color="#333" style={{ marginRight: 12 }} />
    <Text style={{ flex: 1, color: '#333' }}>{title}</Text>
    <Ionicons name="chevron-forward" size={24} color="#999" />
  </TouchableOpacity>
);