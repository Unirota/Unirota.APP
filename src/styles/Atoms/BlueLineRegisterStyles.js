import { StyleSheet } from 'react-native'

const BlueLineRegister = () => (
    <LinearGradient
        style={styles.blueLineRegister}
        colors={['#008E86', '#007DF0', '#003585']}
        locations={[0.0, 0.5, 1.0]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
    />
);

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  blueLineRegister: {
    width: '73%',
    height: 2,
    backgroundColor: '#007DF0',
    marginHorizontal: 13,
    marginTop: 28,  
  },

  greyLineRegister: {
    width: '78%',
    height: 2,
    backgroundColor: '#818181',
    marginHorizontal: 13,
    marginTop: 20,  
  },
})
