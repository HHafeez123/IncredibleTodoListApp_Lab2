import React from 'react';

import { Button, StyleSheet, TextInput, View } from 'react-native';

const ToDoForm = () => {
  return (
<View style={styles.formContainer}>

<TextInput
        style={styles.input}
        placeholder="Add a new task"
      />
<Button
        title="Add Task"
        onPress={() => {}}
      />
</View>
  );
};


const styles = StyleSheet.create({
  formContainer: {
    margin: 16,
    padding: 8,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
  },
  input: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    fontSize: 16,
    marginBottom: 8,
  },
});


export default ToDoForm;
