import { StyleSheet } from 'react-native';
import { black, white } from '@constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: white,
    borderRadius: 10
  },
  mainButton: {
    color: black,
    fontWeight: 'bold',
    fontSize: 15
  },
  image: {
    width: 20,
    height: 20
  }
});
