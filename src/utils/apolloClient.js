import ApolloClient from 'apollo-boost';
// exp://192.168.1.103:19000
import Constants from 'expo-constants';
const createApolloClient = () => {
  return new ApolloClient({
    // Replace the IP address part with your own IP address!
    uri: Constants.manifest.extra.apollo_uri,
  });
};

export default createApolloClient;
