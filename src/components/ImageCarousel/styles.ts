import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
      root:{

      },
      image:{
        margin: 10,
        height: 250,
        resizeMode: 'contain',
      },
      dot: {
        width: 10,
        height: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#c9c9c9',
        backgroundColor: '#ededed',
        margin: 5,
      },
      dots: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      },
});

export default styles;
