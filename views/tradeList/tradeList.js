import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

export default class TradeList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FlatList
                data={[1, 2, 3, 4, 5]}
                style={styles.lists}
                renderItem={({item}) => <View style={styles.lists_item}>
                    <View style={styles.lists_item_line}>
                        <Text style={styles.lists_item_line_title}>
                            来自ID：
                            <Text style={styles.lists_item_line_num}>32424</Text>
                        </Text>
                        <Text style={styles.lists_item_line_title}>
                            数量：
                            <Text style={styles.lists_item_line_num}>32424 HT</Text>
                        </Text>
                    </View>
                    <View style={styles.lists_item_line}>
                        <Text style={styles.lists_item_line_title}>
                            价格：
                            <Text style={styles.lists_item_line_num}>32424 USDT</Text>
                        </Text>
                        <Text style={styles.lists_item_line_title}>
                            时间：
                            <Text style={styles.lists_item_line_num}>2019-12 11:12:24</Text>
                        </Text>
                    </View>
                    <View style={[styles.lists_item_line, {marginBottom: 0}]}>
                        <Text style={styles.lists_item_line_title}>
                            交易类型：
                            <Text style={styles.lists_item_line_num}>买入</Text>
                        </Text>
                        <Text style={styles.lists_item_line_title}>
                            交易状态：
                            <Text style={styles.lists_item_line_num}>交易成功</Text>
                        </Text>
                    </View>
                </View>}/>
        );
    }
}


const styles = StyleSheet.create({
    lists: {
        flex: 1,
        marginTop: 20,
        paddingLeft: 15,
        paddingRight: 15,
    },
    lists_item: {
        padding: 24,
        borderRadius: 10,
        marginBottom: 10,
        shadowColor: '#E2E2E2',
        shadowRadius: 5,
        shadowOpacity: 40,
        backgroundColor: '#fff',
    },
    lists_item_line: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 18,
    },
    lists_item_line_title: {
        flex: 1,
        fontSize: 12,
        fontWeight: 'bold',
        color: '#3E3E3E',
    },
    lists_item_line_num: {
        fontSize: 12,
        color: '#999999',
    },
});
