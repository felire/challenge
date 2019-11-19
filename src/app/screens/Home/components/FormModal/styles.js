import { StyleSheet } from 'react-native';
import { white, gray, black } from '@constants/colors';

export default StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container: {
    padding: 25,
    width: '80%',
    backgroundColor: white,
    borderRadius: 5,
    alignItems: 'center'
  },
  title: {
    marginBottom: 15
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 15
  },
  cancelButton: {
    borderColor: gray,
    backgroundColor: white,
    borderWidth: 1,
    borderRadius: 5,
    width: 100
  },
  cancelButtonTextStyle: {
    color: black
  },
  addButton: {
    backgroundColor: gray,
    borderRadius: 5,
    width: 100
  },
  addButtonTextStyle: {
    color: white
  },
  formElement: {
    padding: 3,
    marginBottom: 10,
    height: 40,
    width: '100%',
    borderColor: gray,
    borderWidth: 1,
    borderRadius: 5
  },
  textStyle: {
    color: black,
    fontSize: 20
  }
});
