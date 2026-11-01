import { useState } from "react";
import { Formik } from "formik";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import * as Yup from "yup";

const PasswordSchema = Yup.object().shape({
  PasswordLength: Yup.number()
    .min(4, "Password should have at least 4 characters")
    .max(16, "Password must not exceed 16 characters")
    .required("Password length is required!"),
});

export default function PasswordGenerator() {
  const [password, setPassword] = useState("");
  const [ispassword, setIsPassword] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbol, setSymbol] = useState(false);

  const GeneratorPassword = (PasswordLength: number) => {
    let characterList = "";
    const UppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const LowercaseChar = "abcdefghijklmnopqrstuvwxyz";
    const numbersChar = "1234567890";
    const symbolChar = "!@#$%^&*";

    if (uppercase) characterList += UppercaseChar;
    if (lowercase) characterList += LowercaseChar;
    if (numbers) characterList += numbersChar;
    if (symbol) characterList += symbolChar;

    // Safety fallback if no checkboxes are selected
    if (characterList.length === 0) characterList += LowercaseChar;

    const PasswordResult = CreatePassword(characterList, PasswordLength);
    setPassword(PasswordResult);
    setIsPassword(true);
  };

  const CreatePassword = (characters: string, PasswordLength: number) => {
    let results = "";
    for (let i = 0; i < PasswordLength; i++) {
      const CreatorIndex = Math.floor(Math.random() * characters.length);
      results += characters.charAt(CreatorIndex);
    }
    return results;
  };

  const resetPasswordState = () => {
    setPassword("");
    setIsPassword(false);
    setUppercase(false);
    setLowercase(true);
    setNumbers(false);
    setSymbol(false);
  };

  return (
    <View style={styles.mainWrapper}>
      <ScrollView keyboardShouldPersistTaps="handled" style={styles.container}>
        <Text style={styles.HeadingText}>Password Generator</Text>

        <Formik
          initialValues={{ PasswordLength: "" }}
          validationSchema={PasswordSchema}
          onSubmit={(values) => {
            GeneratorPassword(+values.PasswordLength);
          }}
        >
          {({
            values,
            errors,
            touched,
            isValid,
            handleChange, 
            handleSubmit,
            handleReset, 
          }) => (
            <View style={styles.formContainer}>
              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Password Length:</Text>
                <TextInput
                  style={styles.inputStyle}
                  keyboardType="numeric"
                  placeholder="Ex. 8"
                  value={values.PasswordLength}
                  onChangeText={handleChange("PasswordLength")}
                />
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.label}>LowerCase:</Text>
                <BouncyCheckbox
                style={styles.BoxStyle}
                useBuiltInState={false} 
                isChecked={lowercase}
                onPress= {() => setLowercase(!lowercase)}
                fillColor="green">
                </BouncyCheckbox>
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.label}>UpperCase:</Text>
                <BouncyCheckbox
                style={styles.BoxStyle}
                useBuiltInState={false} 
                isChecked={uppercase}
                onPress= {() => setUppercase(!uppercase)}
                fillColor="green">
                </BouncyCheckbox>
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Include number:</Text>
                <BouncyCheckbox
                style={styles.BoxStyle}
                useBuiltInState={false} 
                isChecked={numbers}
                onPress= {() => setNumbers(!numbers)}
                fillColor="green">
                </BouncyCheckbox>
              </View>
              <View style={styles.inputWrapper}>
                <Text style={styles.label}>Include Symbol:</Text>
                <BouncyCheckbox
                style={styles.BoxStyle}
                useBuiltInState={false} 
                isChecked={symbol}
                onPress= {() => setSymbol(!symbol)}
                fillColor="green">
                </BouncyCheckbox>
              </View>
              {touched.PasswordLength && errors.PasswordLength && (
                <Text style={styles.errorText}>{errors.PasswordLength}</Text>
              )}

              {/* Action Buttons */}
              <View style={styles.formActions}>
                <TouchableOpacity
                  disabled={!isValid}
                  style={[styles.btn, styles.primaryBtn]}
                  onPress={() => handleSubmit()}
                >
                  <Text style={styles.btnText}>Generate</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[styles.btn, styles.secondaryBtn]}
                  onPress={() => {
                    handleReset();
                    resetPasswordState();
                  }}
                >
                  <Text style={styles.btnText}>Reset</Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>

        {/* Display Password Output */}
        { (
          <View style={styles.resultCard}>
            <Text style={styles.resultHeading}>Generated Password:</Text>
            <Text selectable style={styles.resultText}>
              {password}
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: "#f4f4f6",
    paddingTop: 50,
  },
  container: {
    paddingHorizontal: 20,
    
  },
  HeadingText: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    color: "navy",
    marginBottom: 20,
    borderRadius: 4,
    borderWidth: 2,        
    borderColor: 'navy',   
  },
  formContainer: {
    marginVertical: 10,
  },
  inputWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: "600",
  },
  inputStyle: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 6,
    width: 100,
    backgroundColor: "#fff",
    textAlign: "center",
  },
  BoxStyle: {
    
    padding: 10,
    borderRadius: 6,
    width: 100,
    textAlign: "center",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginBottom: 10,
  },
  formActions: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
  },
  btn: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    minWidth: 120,
    alignItems: "center",
  },
  primaryBtn: {
    backgroundColor: "navy",
  },
  secondaryBtn: {
    backgroundColor: "#6c757d",
  },
  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },
  resultCard: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 8,
    marginTop: 30,
    alignItems: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
  },
  resultHeading: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  resultText: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333",
  },
});
