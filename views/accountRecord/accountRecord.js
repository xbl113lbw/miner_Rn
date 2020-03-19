import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

export default class AccountRecord extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{margin: 15}}>
                <View style={{paddingLeft: 20, paddingRight: 20, backgroundColor: '#fff'}}>
                    <FlatList
                        data={[1, 2, 3, 4, 5]}
                        renderItem={({item}) => <View style={styles.list}>
                            <View>
                                <Text style={{fontSize: 12, color: '#3E3E3E', fontWeight: 'bold'}}>团队算力</Text>
                                <Text style={{fontSize: 11, color: '#999999', marginTop: 5}}>2019-12-12 15:11:04</Text>
                            </View>
                            <Text style={{fontSize: 15, color: '#3E3E3E', fontWeight: 'bold'}}>+10.0000</Text>
                        </View>}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    list: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 67,
    },
});
