import { StyleSheet, Text, View, StatusBar, TextInput, ScrollView, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import HomeHeadNav from '../components/HomeHeadNav'
import Categories from '../components/Categories'
import OfferSlider from '../components/OfferSlider'
import { AntDesign } from '@expo/vector-icons';
import { colors, nonveg } from '../globals/style'

import { firebase } from '../../Firebase/firebaseConfig'
import Cardslider from '../components/Cardslider'

const HomeScreen = () => {
    const [foodData, setFoodData] = useState([]);
    const [VegData, setVegData] = useState([]);
    const [NonVegData, setNonVegData] = useState([]);

    const foodRef = firebase.firestore().collection('FoodData')

    useEffect(() => {
        foodRef.onSnapshot(snapshot => {
            setFoodData(snapshot.docs.map(doc => doc.data()))
        })
    }, [])

    useEffect(() => {
        setVegData(foodData.filter(item => item.foodType == 'veg'))
        setNonVegData(foodData.filter(item => item.foodType == 'non-veg'))
    }, [foodData])

    // console.log(foodData)
    // console.log(VegData)


    const [search, setSearch] = useState('')
    // console.log(search)
    return (
        <ScrollView style={styles.container}>
            <StatusBar />
            <HomeHeadNav />
            <View style={styles.searchbox}>
                <AntDesign name="search1" size={24} color="black" style={
                    styles.searchicon
                } />
                <TextInput style={styles.input} placeholder="Search"
                    onChangeText={(text) => { setSearch(text) }}
                />
            </View>
            {search != ''
                && <View style={styles.seacrhresultsouter}>
                    {/* <Text>Your typed something</Text> */}
                    <FlatList style={styles.searchresultsinner}
                        data={foodData}
                        renderItem={({ item }) => {
                            if (item.foodName.toLowerCase().includes(search.toLocaleLowerCase())) {
                                return (
                                    <View style={styles.searchresult}>
                                        <AntDesign name="arrowright" size={24} color="black" />


                                        <Text style={styles.searchresulttext}>{item.foodName}</Text>
                                    </View>
                                )
                            }
                        }}
                    />
                </View>}
            <Categories />
            <OfferSlider />
            {/* <Text>HomeScreen</Text> */}
            <Cardslider title={"Today's Special"} data={foodData} />
            <Cardslider title={"NonVeg Love"} data={NonVegData} />
            <Cardslider title={"Veg Hunger"} data={VegData} />

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
        // marginTop: 50,
        flex: 1,
        backgroundColor: colors.col1,
        // alignItems: 'center',
        width: '100%',
    },
    searchbox: {
        flexDirection: 'row',
        width: '90%',
        backgroundColor: colors.col1,
        borderRadius: 30,
        alignItems: 'center',
        padding: 10,
        margin: 20,
        elevation: 10,
    },
    input: {
        marginLeft: 10,
        width: '90%',
        fontSize: 18,
        color: colors.text1,
    },
    searchicon: {
        color: colors.text1,
    },
    seacrhresultsouter: {
        width: '100%',
        marginHorizontal: 30,
        // height: '100%',
        backgroundColor: colors.col1,
    },
    searchresultsinner: {
        width: '100%',
    },
    searchresult: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5,
    },
    searchresulttext: {
        marginLeft: 10,
        fontSize: 18,
        color: colors.text1,
    }
})
export default HomeScreen