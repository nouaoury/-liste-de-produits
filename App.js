import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet
} from 'react-native';

const App = () => {
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'Baskets Vintage',
      price: '600 dhs',
      description: 'Chaussures vintage authentiques, confortables et stylées. Parfaites pour un look rétro moderne.',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=300&fit=crop'
    },
    {
      id: '2',
      name: 'Sac Cuir Noir',
      price: '130 dhs',
      description: 'Sac en cuir véritable, élégant et fonctionnel. Idéal pour toutes vos sorties.',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=300&fit=crop'
    },
    {
      id: '3',
      name: 'Montre Classique',
      price: '199 dhs',
      description: 'Montre élégante pour toutes les occasions. Design intemporel et qualité suisse.',
      image: require('./assets/images/téléchargement (1).jpg')
    },
    {
      id: '4',
      name: 'Lunettes Soleil',
      price: '59,99 dhs',
      description: 'Lunettes de soleil polarisées avec protection UV400. Style et protection optimale.',
      image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=300&fit=crop'
    },
    {
      id: '5',
      name: 'Sac PUNCH BY BADR HAR',
      price: '149,99 dhs',
      description: 'Sac élégant de la marque PUNCH BY BADR HAR. Design moderne et fonctionnel.',
      image: require('./assets/images/WhatsApp Image 2025-11-19 at 11.50.25.jpeg')
    },
  ]);

  const [activeButtons, setActiveButtons] = useState({});

  const toggleButton = (productId) => {
    setActiveButtons(prev => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const ProductCard = ({ product }) => {
    const isActive = activeButtons[product.id] || false;

    return (
      <View style={styles.container}>
        {/* Image produit */}
        <Image
          source={typeof product.image === 'string' ? { uri: product.image } : product.image}
          style={styles.image}
          resizeMode="cover"
        />

        {/* Ligne Titre + Prix avec space-between */}
        <View style={styles.header}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>{product.price}</Text>
        </View>

        {/* Description */}
        <Text style={styles.description}>{product.description}</Text>

        {/* Bouton avec style conditionnel */}
        <TouchableOpacity
          style={[
            styles.button,
            isActive ? styles.buttonActive : styles.buttonInactive
          ]}
          onPress={() => toggleButton(product.id)}
        >
          <Text style={styles.buttonText}>
            {isActive ? 'Ajouté au panier ✓' : 'Acheter maintenant'}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* En-tête */}
      <View style={styles.headerContainer}>
        <Text style={styles.mainTitle}>🛍️ Boutique assia</Text>
        <Text style={styles.subtitle}>Découvrez nos produits exclusifs</Text>
      </View>

      {/* Liste des produits */}
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductCard product={item} />}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.listContent}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  headerContainer: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    alignItems: 'center',
  },
  mainTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  listContent: {
    padding: 16,
  },
  container: {
    backgroundColor: 'white',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    padding: 16,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    flex: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E91E63',
    marginLeft: 12,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
    lineHeight: 20,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonInactive: {
    backgroundColor: '#2196F3',
  },
  buttonActive: {
    backgroundColor: '#4CAF50',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default App;
