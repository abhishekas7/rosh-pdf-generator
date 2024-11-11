import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4',
    height:' 34px',
padding:' 5px 14px',
    display:'flex',
    fontSize: '10px',
fontStyle:' normal',
fontWeight: '700',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  heeaderTitle:{
display:'flex'
  }
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.heeaderTitle}>Section #1</Text>
        <Text style={styles.heeaderNumber}>1</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
      </View>
    </Page>
  </Document>
);

export default MyDocument