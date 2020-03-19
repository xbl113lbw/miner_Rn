import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView, ImageBackground, Image, TouchableOpacity} from 'react-native';

export default class Group extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.route.params);
        return (
            <ScrollView style={{flex: 1, backgroundColor: '#fff'}}>
                <ImageBackground source={require('../../img/group/background.png')}
                                 style={{width: '100%', height: 340, alignItems: 'center', marginBottom: 22}}>
                    <Text style={styles.bgText}>拼团获得更多收益</Text>
                    <Image source={require('../../img/group/coin1.png')} style={{width: 152, height: 167}}/>
                </ImageBackground>
                {/*规则*/}
                <View style={{marginLeft: 17, marginRight: 17, alignItems: 'center'}}>
                    <ImageBackground source={require('../../img/group/rules_background.png')}
                                     style={{
                                         width: 336,
                                         height: 128,
                                         alignItems: 'center',
                                         justifyContent: 'space-around',
                                     }}>
                        <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={styles.rule_l}>拼团</Text>
                            <View style={{justifyContent: 'center'}}>
                                <Text style={{fontSize: 12, color: '#fff', marginBottom: 10}}>1.拼团需要2人才能拼团成功。</Text>
                                <Text style={{fontSize: 12, color: '#fff', marginBottom: 10}}>2.邀请好友拼团，邀请奖奖励保留。</Text>
                                <Text style={{fontSize: 12, color: '#fff', marginBottom: 10}}>3.每期团员成员不能与往期完全相同。</Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                {/*拼团信息*/}
                <View style={styles.rulesBottom}>
                    <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Text style={{fontSize: 12, color: '#666666', fontWeight: 'bold'}}>
                            拼团还差<Text style={{color: '#FF5B5B'}}>1</Text> 人
                        </Text>
                        <Text style={{fontSize: 12, color: '#1FC26D', fontWeight: 'bold'}}>复制邀请码</Text>
                    </View>
                    {/*按钮*/}
                    <View style={{
                        flexDirection: 'row',
                        paddingLeft: 5,
                        paddingRight: 5,
                        marginTop: 43,
                        justifyContent: 'space-between',
                    }}>
                        <TouchableOpacity style={[styles.buyBtn, {backgroundColor: '#fff'}]} onPress={() => {
                            console.log(1);
                        }}>
                            <Text style={{fontSize: 12, fontWeight: 'bold', color: '#1FC26D'}}>拼团购买</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.buyBtn, {backgroundColor: '#1FC26D'}]}>
                            <Text style={{fontSize: 12, fontWeight: 'bold', color: '#fff'}}>直接购买</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    bgText: {
        marginTop: 50,
        marginBottom: 35,
        fontSize: 36,
        fontWeight: 'bold',
        color: '#666666',
    },
    rule_l: {
        width: 27,
        fontSize: 30,
        marginRight: 29,
        fontWeight: 'bold',
        color: '#fff',
    },
    rulesBottom: {
        paddingTop: 15,
        paddingLeft: 20,
        paddingRight: 20,
        paddingBottom: 25,
    },
    buyBtn: {
        width: 151,
        height: 41,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#1FC26D',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
