import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {RZPAY_KEY_ID, RZPAY_KEY_SECRET} from '@env';
import RazorpayCheckout from 'react-native-razorpay';

const App = () => {
  const items = [
    {
      id: 1,
      name: 'Premium T-Shirt',
      description: 'High-quality cotton t-shirt',
      price: 1477.91,
      image:
        'https://airtex.in/cdn/shop/products/Slide1_131b2724-c573-4ca7-b705-17d060c0d843.jpg?v=1674119059',
    },
    {
      id: 2,
      name: 'Leather Wallet',
      description: 'Genuine leather wallet with multiple compartments',
      price: 2216.91,
      image:
        'https://craftandglory.in/cdn/shop/products/33.png?v=1654678912&width=1445',
    },
    {
      id: 3,
      name: 'Wireless Headphones',
      description: 'Bluetooth headphones with noise cancellation',
      price: 3699.91,
      image:
        'https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1703080959/Croma%20Assets/Communication/Headphones%20and%20Earphones/Images/235905_0_klqzzf.png?tr=w-600',
    },
    {
      id: 4,
      name: 'Stainless Steel Water Bottle',
      description: 'Durable water bottle for outdoor activities',
      price: 1049.91,
      image:
        'https://market99.com/cdn/shop/products/floral-prints-stainless-steel-water-storage-bottle-500ml-water-bottles-1-29122118942890.jpg?v=1697016088',
    },
    {
      id: 5,
      name: 'Yoga Mat',
      description: 'Non-slip yoga mat for comfortable workouts',
      price: 1749.91,
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUHWlyGdRKhgvmaalxgwLaOdfJZCrLrC6vltNHIsxHW0BRdI3L8HS4dc9Vh-JDlufc_7M&usqp=CAU',
    },
    {
      id: 6,
      name: 'Bluetooth Speaker',
      description: 'Portable speaker with built-in microphone',
      price: 2769.91,
      image:
        'https://www.reliancedigital.in/wp-content/uploads/2020/12/cover_Bluetooth_speakers_buying_guide.jpg',
    },
    {
      id: 7,
      name: 'Sunglasses',
      description: 'UV protection sunglasses with polarized lenses',
      price: 1477.91,
      image:
        'https://beardo.in/cdn/shop/products/1_938b20a4-734b-4d1e-b138-6dbd7f4425ef.jpg?v=1681993775&width=1946',
    },
    {
      id: 8,
      name: 'Running Shoes',
      description: 'Breathable running shoes with cushioned soles',
      price: 4149.91,
      image:
        'https://hips.hearstapps.com/hmg-prod/images/22ss-rt-seidel-product-deviate-nitro-elite-racer-fizzy-light-dark-slate-nitro-blue-wns-q2-0243-rgb-1653045199.jpg?crop=0.667xw:1xh;center,top&resize=640:*',
    },
  ];

  const handleBuyNow = (itemName, itemPrice) => {
    const options = {
      description: `Payment for order from AK Shop - ${itemName}`,
      image: items.find(item => item.name === itemName)?.image,
      currency: 'INR',
      key: RZPAY_KEY_ID,
      amount: itemPrice * 100,
      order_id: '',
      name: `Order - ${itemName}`,
      prefill: {
        email: 'abhishek@example.com',
        contact: '9191919191',
        name: 'Abhishek',
      },
      theme: { color: '#53a20e' },
    };

    // Buy now logic here
    RazorpayCheckout.open(options)
      .then(data => {
        // handle success
        alert(`Success:Order placed ! \nOrder ID:${data.razorpay_payment_id}`);
      })
      .catch(error => {
        // handle failure
        alert(`Error: ${error.code} | ${error.description}`);
      });
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <Text style={styles.title}>Welcome to AK's Shop</Text>
      {items.map(item => (
        <View key={item.id} style={styles.itemContainer}>
          <Image source={{ uri: item.image }} style={styles.itemImage} />
          <View style={styles.itemDetails}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.itemPrice}>₹{item.price}</Text>
          </View>
          <TouchableOpacity
            style={styles.buyButton}
            onPress={() => handleBuyNow(item.name, item.price)}>
            <Text style={styles.buyButtonText}>Buy Now</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:'black'
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    width: '90%',
  },
  itemImage: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 10,
  },
  itemDetails: {
    flex: 1,
    marginRight: 10,
  },
  itemName: {
    fontSize: 10,
    marginBottom: 5,
    fontWeight: 'bold',
    color:'black'
  },
  itemPrice: {
    fontSize: 12,
    color: '#888',
    marginBottom: 5,
  },
  buyButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buyButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
