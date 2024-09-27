import React from 'react';
import { Page, Text, View, Document, StyleSheet, Font } from '@react-pdf/renderer';

// Define the styles
const styles = StyleSheet.create({
  page: {
    padding: 30,
  },
  header: {
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 10,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    marginBottom: 20,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCol: {
    width: '20%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#bfbfbf',
    padding: 5,
  },
  tableHeader: {
    backgroundColor: '#f0f0f0',
    fontWeight: 'bold',
  },
  tableCell: {
    fontSize: 8,
    textAlign: 'center',
    whiteSpace: 'wrap',
  },
  total: {
    textAlign: 'right',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 20,
  },
});

const Invoice = ({ invoiceData }) => {
  const { user, products } = invoiceData;

  const calculateTotalPrice = () => {
    return products.reduce((total, item) => {
      const price = parseFloat(item.discountPrice * item.quantity) || 0;
      return total + price;
    }, 0);
  };

  const formatDate = (date) => {
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
    }).format(date);
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={{ fontSize: 24, marginBottom: 10, color: '#3b82f6' }}>Invoice</Text>
        </View>
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 }}>
          <View>
            <Text style={{ fontSize: 18, marginBottom: 5, fontWeight: 'bold' }}>Order Shop</Text>
            <Text>Badda ,Dhaka 1212</Text>
            <Text>Dhaka</Text>
            <Text>Bangladesh</Text>
            <Text>1212</Text>
          </View>
          <View style={{ textAlign: 'right' }}>
            <Text style={{ fontSize: 18, marginBottom: 5, fontWeight: 'bold' }}>Invoice #</Text>
            <Text>{user.id}</Text>
            <Text style={{ fontSize: 18, marginBottom: 5, fontWeight: 'bold' }}>Date</Text>
            <Text> {formatDate(new Date())} </Text>
            <Text style={{ fontSize: 18, marginBottom: 5, fontWeight: 'bold' }}>Invoice Due Date</Text>
            <Text> {formatDate(new Date())} </Text>
          </View>
        </View>

        {/* Bill To */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 18, marginBottom: 5, fontWeight: 'bold' }}>BILL TO:</Text>
          <Text>{user.name}</Text>
          <Text>{user.address}</Text>
          <Text>{user.phone}</Text>
          <Text>{user.email}</Text>
        </View>

        {/* Products Table */}
        <View style={styles.table}>
          <View style={[styles.tableRow, styles.tableHeader]}>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Product ID</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Product</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Quantity</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Price</Text></View>
            <View style={styles.tableCol}><Text style={styles.tableCell}>Total</Text></View>
          </View>
          {products.map((product, index) => (
            <View style={styles.tableRow} key={index}>
              <View style={styles.tableCol}><Text style={styles.tableCell}>{product._id}</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell}>{product.name}</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell}>{product.quantity}</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell}>{product.discountPrice} BDT</Text></View>
              <View style={styles.tableCol}><Text style={styles.tableCell}>{parseFloat(product.discountPrice * product.quantity).toFixed(2)} BDT</Text></View>
            </View>
          ))}
        </View>

        {/* Notes */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ fontSize: 18, marginBottom: 5, fontWeight: 'bold' }}>NOTES:</Text>
          <Text>Thank you for purchase.</Text>
        </View>

        {/* Total */}
        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderTop: '1px solid #bfbfbf', paddingTop: 10 }}>
          <View></View>
          <View style={{ textAlign: 'right' }}>
            <Text style={{ fontSize: 18, marginBottom: 5, fontWeight: 'bold' }}>TOTAL</Text>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{calculateTotalPrice().toFixed(2)} BDT</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default Invoice;