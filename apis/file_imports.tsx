import * as FileSystem from 'expo-file-system';

const fileUri = FileSystem.documentDirectory + 'example.txt';

// Write
await FileSystem.writeAsStringAsync(fileUri, 'Hello world!');

// Read
const content = await FileSystem.readAsStringAsync(fileUri);
