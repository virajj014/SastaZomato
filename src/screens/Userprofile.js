import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeHeadNav from '../components/HomeHeadNav'
import { navbtn, navbtnin } from '../globals/style'
import { AntDesign } from '@expo/vector-icons';
import { colors, btn2, titles } from '../globals/style';

import { firebase } from '../../Firebase/firebaseConfig';
const Userprofile = ({ navigation }) => {
    const [userloggeduid, setUserloggeduid] = useState(null);
    const [userdata, setUserdata] = useState(null);
    useEffect(() => {
        const checklogin = () => {
            firebase.auth().onAuthStateChanged((user) => {
                // console.log(user);
                if (user) {
                    // navigation.navigate('home');
                    setUserloggeduid(user.uid);
                } else {
                    // No user is signed in.
                    console.log('no user');
                }
            });
        }
        checklogin();
    }, [])

    // console.log(userloggeduid);

    useEffect(() => {
        const getuserdata = async () => {
            const docRef = firebase.firestore().collection('UserData').where('uid', '==', userloggeduid)
            const doc = await docRef.get();
            if (!doc.empty) {
                doc.forEach((doc) => {
                    setUserdata(doc.data());
                })
            }
            else {
                console.log('no user data');
            }
        }
        getuserdata();
    }, [userloggeduid]);

    // console.log(userdata);

    const [oldpassword, setOldPassword] = useState('');
    const [newpassword, setNewPassword] = useState('');


    return (
        <View style={styles.containerout}>
            <TouchableOpacity onPress={() => navigation.navigate('home')}>
                <View style={navbtn}>
                    <AntDesign name="back" size={24} color="black" style={navbtnin} />
                </View>
            </TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.head1}>Your Profile</Text>
                <View style={styles.containerin}>
                    <Text style={styles.head2}>Name: {userdata ? <Text style={styles.head2in}>
                        {userdata.name}
                    </Text> : 'loading'}</Text>

                    <Text style={styles.head2}>Email: {userdata ? <Text style={styles.head2in}>
                        {userdata.email}
                    </Text> : 'loading'}</Text>

                    <Text style={styles.head2}>Phone: {userdata ? <Text style={styles.head2in}>
                        {userdata.phone}
                    </Text> : 'loading'}</Text>

                    <Text style={styles.head2}>Address: {userdata ? <Text style={styles.head2in}>
                        {userdata.address}
                    </Text> : 'loading'}</Text>
                </View>
            </View>
        </View>
    )
}

export default Userprofile

const styles = StyleSheet.create({
    containerout: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        width: '100%',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        // justifyContent: 'center',
        width: '100%',
    },
    head1: {
        fontSize: 40,
        fontWeight: '200',
        marginVertical: 20,
        color: colors.text1,
    },
    containerin: {
        width: '90%',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: colors.text1,
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
    },
    head2: {
        fontSize: 20,
        fontWeight: '200',
        marginTop: 20,

    },
    head2in: {
        fontSize: 20,
        fontWeight: '300',
    },
    inputout: {
        flexDirection: 'row',
        width: '100%',
        marginVertical: 10,
        backgroundColor: colors.col1,
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        // alignSelf: 'center',
        elevation: 20,
    },
})