import React, {Component} from 'react';
import {StyleSheet, View, Text, Image, ScrollView, TouchableOpacity, Button} from 'react-native';
import start from '../../img/orderSuccess/start.png';
import start_A from '../../img/orderSuccess/start_A.png';

export default class orderSuccess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            creditIndex: 0,
            timeIndex: 0,
        };
    }

    creditEvent(index) {
        this.setState({creditIndex: index + 1});
    }

    timeEvent(index) {
        this.setState({timeIndex: index + 1});
    }

    render() {
        return (
            <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
                <View style={[styles.info, styles.boxShadow]}>
                    <View style={{alignItems: 'center'}}>
                        <Image source={require('../../img/orderSuccess/logo.png')} style={{width: 47, height: 47}}/>
                        <Text style={{marginTop: 11, fontSize: 18, color: '#333', fontWeight: 'bold'}}>订单已完成</Text>
                    </View>
                    {/*订单详情*/}
                    <View style={{marginTop: 60}}>
                        <View style={styles.listBox_line}>
                            <Text style={{fontSize: 13, color: '#6F788B'}}>买方</Text>
                            <Text style={{fontSize: 14, color: '#333', fontWeight: 'bold'}}>CHIU DUEN WING</Text>
                        </View>
                        <View style={styles.listBox_line}>
                            <Text style={{fontSize: 13, color: '#6F788B'}}>总额</Text>
                            <Text style={{fontSize: 14, color: '#333', fontWeight: 'bold'}}>510 RMB</Text>
                        </View>
                        <View style={styles.listBox_line}>
                            <Text style={{fontSize: 13, color: '#6F788B'}}>数量</Text>
                            <Text style={{fontSize: 14, color: '#333', fontWeight: 'bold'}}>500</Text>
                        </View>
                    </View>
                    <View style={{marginTop: 40}}>
                        <View style={styles.listBox_line}>
                            <Text style={{fontSize: 13, color: '#6F788B'}}>备注码</Text>
                            <Text style={{fontSize: 14, color: '#333', fontWeight: 'bold'}}>193484</Text>
                        </View>
                        <View style={styles.listBox_line}>
                            <Text style={{fontSize: 13, color: '#6F788B'}}>广告ID：11</Text>
                            <Text style={{fontSize: 14, color: '#333', fontWeight: 'bold'}}>订单号：6</Text>
                        </View>
                        <View style={styles.listBox_line}>
                            <Text style={{fontSize: 13, color: '#6F788B'}}>下单时间</Text>
                            <Text style={{fontSize: 14, color: '#333', fontWeight: 'bold'}}>2019-03-13 15:09:32</Text>
                        </View>
                    </View>
                </View>
                {/*评分系统*/}
                <View style={styles.start}>
                    <Text style={styles.start_title}>评价商家</Text>
                    <View style={styles.startBox}>
                        <Text style={styles.startBox_title}>信用度：</Text>
                        {
                            Array.from({length: 5}).map((item, index) => {
                                return <TouchableOpacity onPress={this.creditEvent.bind(this, index)}>
                                    <Image source={index < this.state.creditIndex ? start_A : start}
                                           style={styles.startBox_img}/>
                                </TouchableOpacity>;
                            })
                        }
                    </View>
                    <View style={styles.startBox}>
                        <Text style={styles.startBox_title}>及时度：</Text>
                        {
                            Array.from({length: 5}).map((item, index) => {
                                return <TouchableOpacity onPress={this.timeEvent.bind(this, index)}>
                                    <Image source={index < this.state.timeIndex ? start_A : start}
                                           style={styles.startBox_img}/>
                                </TouchableOpacity>;
                            })
                        }
                    </View>
                </View>
                <View style={{marginLeft: 15, marginRight: 15, marginBottom: 15}}>
                    <Button
                        title="评价商家"
                        color="#1FC26D"
                        onPress={() => this.props.navigation.navigate('Tab')}
                    />
                </View>
            </ScrollView>
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
    info: {
        margin: 15,
        marginBottom: 30,
        padding: 15,
        paddingTop: 32,
        borderRadius: 10,
        backgroundColor: '#fff',
    },
    listBox_line: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    start: {
        margin: 15,
        padding: 15,
        marginBottom: 40,
    },
    start_title: {
        paddingLeft: 10,
        marginBottom: 30,
        fontSize: 15,
        color: '#333333',
        fontWeight: 'bold',
        borderLeftWidth: 3,
        borderLeftColor: '#2FCF7A',
    },
    startBox: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    startBox_title: {
        marginRight: 17,
        fontSize: 15,
        fontWeight: 'bold',
        color: '#333',
    },
    startBox_img: {
        width: 23,
        height: 22,
        marginRight: 18,
    },
});
