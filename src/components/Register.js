import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Linking,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import text from './Text';

export default function Register() {
  const [toggleCheckbox, setToggleCheckbox] = useState(false);
  const [complianceModal, setComplianceModal] = useState(true);
  const goToGoogle = () => {
    Linking.openURL('https://google.com');
  };
  const handleValue = newValue => {
    setToggleCheckbox(newValue);
  };
  const handleOut = () => {
      setComplianceModal(false)
  }
  return (
    <SafeAreaView style={styles.mainContainer}>
      <Text style={styles.googleText}>register</Text>
      <Button onPress={goToGoogle} title="go to google" />

      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={complianceModal}>
          <SafeAreaView>
            <ScrollView>
              <View style={styles.modalContainer}>
                <View style={styles.modalView}>
                  <Text style={styles.modalComplianceTitle}>Main title</Text>
                  <Text>{text}</Text>
                  <View style={styles.checkboxContainer}>
                    <CheckBox
                      style={styles.checkbox}
                      disabled={false}
                      value={toggleCheckbox}
                      onValueChange={handleValue}
                    />
                    <Text>I aggree</Text>
                  </View>
                  <TouchableOpacity
                    style={[
                      styles.continueButton,
                      {backgroundColor: toggleCheckbox ? 'dodgerblue' : 'grey'},
                    ]}
                    disabled={!toggleCheckbox}
                    onPress={handleOut}
                    >
                        <Text>Continue to the next step</Text>
                    </TouchableOpacity>
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
        </Modal>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleText: {
    fontSize: 18,
    marginBottom: 20,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  modalView: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    margin: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalComplianceTitle: {
    marginBottom: 20,
    color: 'dodgerblue',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginVertical: 30,
    alignItems: 'center',
  },
  checkbox: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  continueButton: {
    marginTop: 20,
    padding: 20,
    borderRadius: 18,
  },
});
