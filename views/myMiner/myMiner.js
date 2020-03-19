import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, FlatList} from 'react-native';

class Lists extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <FlatList
                data={[1, 2, 3, 4, 5, 6]}
                keyExtractor={(item, index) => index}
                renderItem={({item}) => <View style={styles.lists}>
                    <Image source={require('../../img/miner.png')} style={{width: 75, height: 82}}/>
                    <View style={styles.lists_right}>
                        <View style={styles.lists_right_line}>
                            <Text style={styles.lists_right_line_l}>矿机类型：</Text>
                            <Text style={styles.lists_right_line_r}>微型矿机</Text>
                        </View>
                        <View style={styles.lists_right_line}>
                            <Text style={styles.lists_right_line_l}>矿机已产币：</Text>
                            <Text style={styles.lists_right_line_r}>0.0000</Text>
                        </View>
                        <View style={styles.lists_right_line}>
                            <Text style={styles.lists_right_line_l}>是否有效：</Text>
                            <Text style={styles.lists_right_line_r}>有效</Text>
                        </View>
                        <View style={styles.lists_right_line}>
                            <Text style={styles.lists_right_line_l}>矿机已产币：</Text>
                            <Text style={styles.lists_right_line_r}>2019-10-20 16:00</Text>
                        </View>
                    </View>
                </View>}/>
        );
    }
}

export default class myMiner extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{backgroundColor: '#fff', flex: 1}}>
                <View style={[styles.minerInfo, styles.boxShadow]}>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#0EC15E'}}>20</Text>
                        <Text style={{fontSize: 11, color: '#AEBACB', marginTop: 11}}>有效矿机数</Text>
                    </View>
                    <View style={{alignItems: 'center'}}>
                        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#DF5334'}}>0</Text>
                        <Text style={{fontSize: 11, color: '#AEBACB', marginTop: 11}}>无效矿机数</Text>
                    </View>
                </View>
                {/*列表*/}
                <Lists/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    boxShadow: {
        elevation: 1,  //  设置阴影角度，通过这个设置有无阴影（这个是最重要的，决定有没有阴影）
        shadowColor: 'rgba(226,226,226,0.4)',  //  阴影颜色
        shadowOffset: {width: 0, height: 0},  // 阴影偏移
        backgroundColor: '#fff',
    },
    minerInfo: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 10,
        marginBottom: 20,
        borderRadius: 10,
        height: 70,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    lists: {
        marginLeft: 34,
        marginRight: 45,
        marginBottom: 25,
        flexDirection: 'row',
    },
    lists_right: {
        flex: 1,
        marginLeft: 35,
    },
    lists_right_line: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,

    },
    lists_right_line_l: {
        flex: 1,
        fontSize: 12,
        color: '#AEBACB',
    },
    lists_right_line_r: {
        flex: 1.5,
        marginLeft: 27,
        fontSize: 12,
        color: '#4F5668',
        fontWeight: 'bold',
    },
});
