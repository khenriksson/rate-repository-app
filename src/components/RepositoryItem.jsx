import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  background: {
    backgroundColor: 'white',
    paddingBottom: 10,
    paddingTop: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  avatar: {
    height: 70,
    resizeMode: 'contain',
    margin: 5,
    borderRadius: 10,
    width: 70,
    flexGrow: 0,
  },
  upperWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  language: {
    color: theme.colors.textWhite,

    textAlign: 'center',
    fontSize: theme.fontSizes.subheading,
    flexGrow: 0,
  },
  languageBox: {
    backgroundColor: theme.colors.primary,
    width: 100,
    height: 25,
    borderRadius: 5,
    justifyContent: 'center',
  },
  downWrapper: {
    marginTop: 10,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  infoWrapper: {
    display: 'flex',
    justifyContent: 'space-around',
    paddingLeft: 10,
  },
});

const Number = ({ item }) => {
  console.log('typeof item :>> ', typeof item);
  const round = item >= 1000 ? `${(item / 1000).toFixed(1)}k` : item;
  return (
    <Text textAlign="center" fontSize="subheading" fontWeight="bold">
      {round}
    </Text>
  );
};

const Title = ({ text }) => {
  console.log('text :>> ', text);
  return (
    <Text textAlign="center" fontSize="subheading">
      {text}
    </Text>
  );
};

const RepositoryItem = ({ item }) => {
  const avatar = { uri: item.ownerAvatarUrl };
  return (
    <View style={styles.background}>
      <View style={styles.upperWrapper}>
        <View style={styles.image}>
          <Image source={avatar} style={styles.avatar} />
        </View>
        <View style={styles.infoWrapper}>
          <Text fontSize="heading" fontWeight="bold">
            {item.fullName}
          </Text>
          <Text fontSize="subheading" color="textSecondary">
            {item.description}
          </Text>
          <View style={styles.languageBox}>
            <Text style={styles.language}>{item.language}</Text>
          </View>
        </View>
      </View>
      <View style={styles.downWrapper}>
        <View>
          <Number item={item.stargazersCount} />
          <Title text="Stars" />
        </View>
        <View>
          <Number item={item.forksCount} />
          <Title text="Forks" />
        </View>
        <View>
          <Number item={item.reviewCount} />
          <Title text="Reviews" />
        </View>
        <View>
          <Number item={item.ratingAverage} />
          <Title text="Rating" />
        </View>
      </View>
    </View>
  );
};

export default RepositoryItem;
