import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

export default class ShareLists extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.wrap}>
                <View style={styles.nav}>
                    <Text style={{fontSize: 14, color: '#999', flex: 2}}>时间</Text>
                    <Text style={{fontSize: 14, color: '#999', flex: 1}}>天数</Text>
                    <Text style={{fontSize: 14, color: '#999', flex: 1}}>奖励</Text>
                    <Text style={{fontSize: 14, color: '#999', flex: 1}}>金额</Text>
                </View>
                <FlatList
                    data={[1, 2, 3, 4]}
                    renderItem={({item}) =>
                        <View style={styles.nav_list}>
                            <Text style={styles.time}>2018-06-20 16:00</Text>
                            <Text style={styles.num}>第一天</Text>
                            <Text style={[styles.num, styles.green]}>+2HT</Text>
                            <Text style={[styles.num, styles.green]}>已转账</Text>
                        </View>}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    green: {
        color: '#10914A',
    },
    red: {
        color: '#D73939',
    },
    wrap: {
        paddingTop: 30,
        backgroundColor: '#fff',
    },
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 17,
    },
    nav_list: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight: 15,
        height: 34,
        borderBottomColor: '#E5F0E6',
        borderBottomWidth: 0.2,
    },
    time: {
        fontSize: 11, color: '#747F9D', flex: 2,
    },
    num: {
        fontSize: 11, color: '#747F9D', flex: 1,
    },
});
