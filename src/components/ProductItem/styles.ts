import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  page:{
    padding: 10,
  },
  root:{
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
    marginVertical: 5,
  },
  image:{
    height: 150,
    width: 150,
    flex: 2,
    resizeMode:'contain',
  },
  title:{
    width: '100%',
    fontSize: 18,
  },
  price:{
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice:{
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  rightContainer:{
    padding: 10,
    width: '100%',
    flex: 3,
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
});

export default styles;
