import { Image, StyleSheet, Text, View } from 'react-native';

export default function ContactList() {
    const Contacts = [
        {
          uid: 'c1',
          name: 'Aaron Miles',
          status: 'Online',
          ImgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqm5XGOCJUsAKZ7NdRHP-SrI5V5TGCQyllWiLNtNjpA&s'
        },
        {
          uid: 'c2',
          name: 'Alice Smith',
          status: 'Away',
          ImgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYjoR0CkS1HN2mR5sbbRKcnCnXsRn9y_zJ7dwSBdqc4Q&s=10'

        },
        {
          uid: 'c3',
          name: 'Benjamin Clark',
          status: 'Offline',
          ImgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqm5XGOCJUsAKZ7NdRHP-SrI5V5TGCQyllWiLNtNjpA&s'
        },
        {
          uid: 'c4',
          name: 'Chloe Davis',
          status: 'Online',
          ImgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYjoR0CkS1HN2mR5sbbRKcnCnXsRn9y_zJ7dwSBdqc4Q&s=10'
        },
        {
          uid: 'c5',
          name: 'Daniel Evans',
          status: 'Do Not Disturb',
          ImgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqm5XGOCJUsAKZ7NdRHP-SrI5V5TGCQyllWiLNtNjpA&s'
        },
        {
          uid: 'c6',
          name: 'Emma Watson',
          status: 'Online',
          ImgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYjoR0CkS1HN2mR5sbbRKcnCnXsRn9y_zJ7dwSBdqc4Q&s=10'
        },
        {
          uid: 'c7',
          name: 'George Harris',
          status: 'Offline',
          ImgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqm5XGOCJUsAKZ7NdRHP-SrI5V5TGCQyllWiLNtNjpA&s'
        },
        {
          uid: 'c8',
          name: 'Hannah Miller',
          status: 'Online',
          ImgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYjoR0CkS1HN2mR5sbbRKcnCnXsRn9y_zJ7dwSBdqc4Q&s=10'
        },
        {
          uid: 'c9',
          name: 'Ian Wright',
          status: 'Away',
          ImgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXqm5XGOCJUsAKZ7NdRHP-SrI5V5TGCQyllWiLNtNjpA&s'
        },
        {
          uid: 'c10',
          name: 'Julia Roberts',
          status: 'Online',
          ImgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYjoR0CkS1HN2mR5sbbRKcnCnXsRn9y_zJ7dwSBdqc4Q&s=10'
        }
      ];
  return (
    <View>
      <Text style={styles.HeadingText}>ContactList</Text>
      <View style={styles.Container}>
        {Contacts.map(  
            ({uid,name,status,ImgUrl}) => (
                <View key={uid} style={styles.ContactCard}>
                    <Image
                    source={{
                        uri: ImgUrl
                    }}
                    style= {styles.Img}
                    />
                    <View style={styles.TextGroup}>
                    <Text style={styles.Texting}>{status}</Text>
                    <Text>{name}</Text>
                    </View>
                </View>
            )
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    HeadingText:{
        fontSize : 30,
        fontWeight: 'bold',
        padding:10,   
        textAlign : 'center',
    },
    Container:{
        paddingHorizontal:21,
    },
    ContactCard:{
        flex :1 ,
        flexDirection:'row',
        alignItems : 'center',
        backgroundColor: 'skyblue',
        borderRadius:12,
        marginVertical:3

    },
    Img:{
        width:70,
        height:70,
        borderRadius:100,
        marginHorizontal:12,
        marginVertical:3
    },
    TextGroup:{
    marginLeft:13,
    },
    Texting:{
        fontSize: 18,
        fontWeight:'bold'
        
    }
})