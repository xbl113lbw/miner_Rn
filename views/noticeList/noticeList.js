import React, {Component} from 'react';
import {StyleSheet, View, Text, FlatList, TouchableOpacity} from 'react-native';

export default class NoticeList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{margin: 15}}>
                <FlatList
                    data={[1, 2, 3, 4, 5]}
                    renderItem={({item}) => <TouchableOpacity style={[styles.list, styles.boxShadow]} onPress={() => {
                        this.props.navigation.navigate('NoticeInfo', {id: item});
                    }}>
                        <Text>封号公告{item}</Text>
                    </TouchableOpacity>}/>
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
    list: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 50,
        paddingLeft: 17,
        paddingRight: 17,
        marginBottom: 9,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
});
