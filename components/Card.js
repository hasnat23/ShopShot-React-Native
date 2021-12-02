import React from 'react';
import {Dimensions, Image, TouchableOpacity, Text, View} from 'react-native';
import { sWidth } from '../constants/dimensions';
import capitalizeName from '../utility/capitalize';

const Card = ({data}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      style={{
        backgroundColor: '#FFFFFF',
        marginBottom: 5,
        flexDirection: 'row',
        height: 120,
        flex: 1,
        borderRadius: 10,
        padding: 5,
      }}>
      <Image
        style={{flex: 1, borderRadius: 10}}
        source={{
          uri: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        }}
      />

      <View style={{padding: 6, justifyContent: 'space-between', flex: 3}}>
        <Text style={{color: '#5280e2'}}>{capitalizeName(data.brandname)}</Text>
        <Text style={{fontWeight: '700', fontSize: 16}}>{data.name.toUpperCase()}</Text>
        <Text numberOfLines={1} style={{fontSize: 14, color: '#bdbcbc'}}>{data.description}</Text>
        <View
          style={{
            justifyContent: 'space-between',
            alignItems:'center',
            flex: 1,
            flexDirection: 'row',
          }}>
          <View style={{backgroundColor: '#3dd5a2', height:20, paddingLeft:8, paddingRight:8, borderRadius:sWidth/7, alignItems:'center', justifyContent:'center'}}>
            <Text style={{color:'#FFFFFF'}}>New</Text>
          </View>
          <View style={{paddingRight:6}}>
            <Text>${data.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

module.exports = Card;
