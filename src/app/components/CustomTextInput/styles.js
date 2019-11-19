import { StyleSheet } from 'react-native';
import { GOTHAM_ROUNDED_MEDIUM } from '@constants/fonts';
import { gray, transparent, white, red } from '@constants/colors';

const INPUT_PADDING = 5;

export default StyleSheet.create({
  containerWithLabel: {
    marginTop: 10
  },
  inputContainer: {
    flexDirection: 'row',
    height: 20,
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  },
  multilineContainer: {
    flex: 1
  },
  singleInput: {
    color: white,
    flex: 1,
    paddingLeft: INPUT_PADDING
  },
  multilineInput: {
    color: white,
    paddingTop: 10,
    fontSize: 14,
    paddingLeft: 0
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: gray
  },
  inputStyle: {
    fontSize: 14,
    fontFamily: GOTHAM_ROUNDED_MEDIUM,
    paddingHorizontal: 0,
    marginHorizontal: 0,
    marginBottom: 0,
    paddingVertical: 0
  },
  label: {
    fontFamily: GOTHAM_ROUNDED_MEDIUM,
    backgroundColor: transparent,
    color: white,
    position: 'absolute',
    left: INPUT_PADDING
  },
  error: {
    color: red,
    alignSelf: 'flex-start',
    marginBottom: 10
  }
});
