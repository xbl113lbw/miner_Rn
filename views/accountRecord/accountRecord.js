import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList} from 'react-native';

export default class AccountRecord extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listData: [],
        };
        this.getListsData = this.getListsData.bind(this);
    }

    componentDidMount() {
        this.props.navigation.addListener('focus', () => {
            this.getListsData();
        });
    }

    getListsData() {
        global.Ajax('appapi/user/getLog', {coin: ''}).then(res => {
            if (res.code === 1) {
                console.log(res);
                this.setState({
                    listData: res.data.data,
                });
            }
        });
    }

    render() {
        return (
            <View style={{marginTop: 15, marginBottom: 15}}>
                {
                    this.state.listData.length > 0 &&
                    <FlatList
                        style={styles.FlatList}
                        data={this.state.listData} keyExtractor={(item, index) => `${index}`}
                        renderItem={({item}) => <View style={styles.list}>
                            <View>
                                <Text style={{
                                    fontSize: 12,
                                    color: '#3E3E3E',
                                    fontWeight: 'bold',
                                }}>{item.text}</Text>
                                <Text style={{fontSize: 11, color: '#999999', marginTop: 5}}>
                                    {global.formatDate(item.create_time, 2)}
                                </Text>
                            </View>
                            <Text style={{
                                fontSize: 15,
                                color: '#3E3E3E',
                                fontWeight: 'bold',
                            }}>{item.number}</Text>
                        </View>}/>
                }
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
    FlatList: {
        marginLeft: 15,
        marginRight: 15,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#fff',
    },
});
