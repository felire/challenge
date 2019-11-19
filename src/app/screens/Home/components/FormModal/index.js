import React from 'react';
import { View, Modal } from 'react-native';
import { Formik } from 'formik';
import i18next from 'i18next';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import CustomTextInputField from '@components/CustomTextInput';
import { isNotEmpty } from '@utils/formUtils';

import styles from './styles';

const INITIAL_VALUES = {
  itemTitle: ''
};

const FormModal = ({ visible, onClose, onAddItem }) => (
  <Modal visible={visible} transparent>
    <Formik onSubmit={onAddItem} initialValues={INITIAL_VALUES}>
      {({ handleSubmit }) => (
        <View style={styles.background}>
          <View style={styles.container}>
            <CustomText style={styles.title} bold>
              {i18next.t('HOME:ADD_ITEM')}
            </CustomText>
            <CustomTextInputField
              style={styles.formElement}
              textStyles={styles.textStyle}
              name="itemTitle"
              validate={isNotEmpty}
            />
            <View style={styles.buttons}>
              <CustomButton
                activeOpacity={0.7}
                title={i18next.t('HOME:CANCEL')}
                style={styles.cancelButton}
                textStyle={styles.cancelButtonTextStyle}
                onPress={onClose}
              />
              <CustomButton
                activeOpacity={0.7}
                title={i18next.t('HOME:ADD')}
                style={styles.addButton}
                textStyle={styles.addButtonTextStyle}
                onPress={handleSubmit}
              />
            </View>
          </View>
        </View>
      )}
    </Formik>
  </Modal>
);

export default FormModal;
