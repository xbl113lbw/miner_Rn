import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

export default class ShareLists extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listData: [],
        };

        this.getData = this.getData.bind(this);
        this.getStatus = this.getStatus.bind(this);
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.getData();
        });
    }


    getData(page = 1) {
        global.Ajax('appapi/User/picSignList', {page}).then((res) => {
            if (res.code === 1) {
                this.setState({
                    listData: res.data.data,
                });
            }
        });
    }

    getStatus(status) {
        const statusMap = {
            2: '等待审核',
            1: '审核通过',
            3: '拒绝',
        };
        return statusMap[status];

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
                {
                    this.state.listData.length > 0 && <FlatList data={this.state.listData} renderItem={({item}) =>
                        <View style={styles.nav_list}>
                            <Text style={styles.time}>{global.formatDate(item.time_int)}</Text>
                            <Text style={styles.num}>第{item.day_num}天</Text>
                            <Text style={[styles.num, styles.green]}>
                                {item.num} {item.coin.toLocaleUpperCase()}
                            </Text>
                            <Text style={[styles.num, styles.green]}>{this.getStatus(item.status)}</Text>
                        </View>}
                    />
                }
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
