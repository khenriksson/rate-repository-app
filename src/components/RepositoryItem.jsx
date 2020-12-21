import React from 'react';
import { View, Text } from 'react-native';

const RepositoryItem = ({ item }) => {
  return (
    <View>
      <Text>Full name: {item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Stars: {item.stars}</Text>
      <Text>Forks: {item.forks}</Text>
      <Text>Reviews: {item.reviews}</Text>
      <Text>Rating: {item.rating}</Text>
    </View>
  );
};

export default RepositoryItem;
