import React from 'react';
import { View, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import CustomText from '@components/CustomText';
import { transparent } from '@constants/colors';
import withForm from '@components/withForm';

import styles from './styles';

const CustomTextInput = props => {
  const {
    value,
    placeholderTextColor,
    title,
    titleStyles,
    multiline,
    bottomBorder,
    style,
    onChange,
    onBlur,
    onFocus,
    textStyles,
    error
  } = props;

  const placeholderColor = value ? transparent : placeholderTextColor;

  return (
    <>
      {title && (
        <CustomText gray small style={[styles.title, titleStyles]}>
          {title}
        </CustomText>
      )}
      <View
        style={[
          multiline ? styles.multilineContainer : styles.container,
          bottomBorder && styles.bottomBorder,
          style
        ]}>
        <TextInput
          {...props}
          allowFontScaling={false}
          onChangeText={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value}
          style={[styles.inputStyle, multiline ? styles.multilineInput : styles.singleInput, textStyles]}
          placeholderTextColor={placeholderColor}
        />
        {error && (
         <CustomText small error style={styles.error}>
           {i18next.t(error)}
         </CustomText>
        )}
      </View>
    </>
  );
};

CustomTextInput.defaultProps = {
  autoCapitalize: 'sentences',
  autoCorrect: false,
  bottomBorder: false,
  clearButtonMode: 'never',
  keyboardType: 'default',
  maxHeight: 200,
  multiline: false,
  returnKeyType: 'done',
  underlineColorAndroid: transparent
};

CustomTextInput.propTypes = {
  autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
  autoComplete: PropTypes.string,
  autoCompleteType: PropTypes.string,
  autoCorrect: PropTypes.bool,
  bottomBorder: PropTypes.bool,
  clearButtonMode: PropTypes.oneOf(['never', 'while-editing', 'unless-editing', 'always']),
  error: PropTypes.string,
  keyboardType: PropTypes.oneOf(['default', 'numeric', 'email-address', 'phone-pad']),
  maxHeight: PropTypes.number,
  multiline: PropTypes.bool,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  returnKeyType: PropTypes.oneOf(['done', 'go', 'next', 'search']),
  secureTextEntry: PropTypes.bool,
  showEye: PropTypes.bool,
  textStyles: Text.propTypes.style,
  title: PropTypes.string,
  titleStyles: Text.propTypes.style,
  underlineColorAndroid: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func
};

export default withForm(CustomTextInput);
