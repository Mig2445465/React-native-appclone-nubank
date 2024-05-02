import { Image,StyleSheet,View, Text, ScrollView } from 'react-native';
import logo from '../assets/logo (1).png';
import setting from '../assets/setting.png'
import mastercard from '../assets/mastercard.png'
import Wallet from '../assets/Wallet.png'
import pix from '../assets/pix.png'
import boleto from '../assets/boleto.png'
import dinheiro from '../assets/dinheiro.png'




export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <View style={styles.header}>
        <Image source={logo}/>
        <Image source={setting}/>
      </View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <View/>
          <Image source={mastercard}/>
        </View>
        <Text style={styles.cardtxt}>Miguel Araujo</Text>
      </View>
      <View style={styles.cardDetails}>
      <View style={styles.cardDeatailsHeader}>
          <Text style={styles.cardDeatailsHeadertxt}>Saldo disponível</Text>
          <Image source={Wallet}/>
        </View>
        <Text style={styles.cardDetailstxt}>R$: 22.568,48</Text>
      </View>
      </View>
      <View style={styles.footer}>
      <Text style={styles.footertxt}>Do que precisa?</Text>

      <ScrollView style={styles.footerContentScrollView}
      showsVerticalScrollIndicator={false} horizontal={true}>
      <View style={styles.footerCard}>
        <Image source={pix}/>
        <Text style={styles.footerCardtxt}>Fazer um pix</Text>
      </View>
      <View style={styles.footerCard}>
        <Image source={boleto}/>
        <Text style={styles.footerCardtxt}>Pagar boleto</Text>
      </View>
      <View style={styles.footerCard}>
        <Image source={dinheiro}/>
        <Text style={styles.footerCardtxt}>Nuinvest</Text>
      </View>
      <View style={styles.footerCard}>
        <Image source={Wallet}/>
        <Text style={styles.footerCardtxt}>Conta nubank</Text>
      </View>
      </ScrollView>

      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#820ad1',
    paddingTop: 60
  },
  content:{
    paddingHorizontal: 30,
  },
  header:{
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  card:{
    width: '100%',
    height: 190,
    backgroundColor: '#9500f6',
    borderRadius: 20,
    elevation: 5,
    marginBottom: 20,
    padding: 20,
    justifyContent: 'space-between'
  },
  cardDetails:{
    width: '100%',
    height: 120,
    backgroundColor: '#9500f6',
    borderRadius: 20,
    elevation: 5,
    padding: 20,
    justifyContent: 'space-between'
  },
  cardHeader:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cardtxt:{
    color: '#fff',
    fontSize: 24,
    lineHeight: 36,
    fontWeight: '500'
  },
  cardDeatailsHeader:{
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  cardDetailstxt:{
    color: '#fff',
    fontSize: 30,
    fontWeight: '500'
  },
  cardDeatailsHeadertxt:{
    color: '#fff'
  },
  footer:{
    paddingTop: 25,
    paddingLeft: 20
  },
  footertxt:{
    marginHorizontal: 25,
    color: '#fff',
    paddingBottom: 20,
    fontSize: 20,
    fontWeight: '500'
  },
  footerCard:{
    width: 100,
    height: 150,
    backgroundColor: '#9500f6',
    elevation: 5,
    borderRadius: 20,
    padding: 20,
    justifyContent: 'space-between',
    marginLeft: 20
  },
  footerCardtxt:{
    color: '#fff',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 18
  },
  footerContentScrollView:{
    height: 400
  }
});
