import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';
import Slider from '@react-native-community/slider';
import styles from '../styles/styles'
import palette from '../styles/palette';
import { TextInput } from 'react-native-gesture-handler';


export default class SliderBox extends Component {
  
  constructor(props){
    super(props)
    this.state = { 
        curVal: props.curVal ? props.curVal : 0,
        minVal: props.minVal ? props.minVal : 0,
        maxVal: props.maxVal ? props.maxVal : 100,
        unit: props.unit ? props.unit : 'm',
        title: props.title ? props.title : 'title',
		step: props.step ? props.step : 1,
    }   
  }

  passVal(val){
	  this.props.val(val);
  }

  render() {
    return (
		<View style={styles.Box}>
			<Text style={styles.textBox} >{this.state.title}</Text>
			<View style= {styles.box_slide}>
				<TouchableHighlight style={styles.valBox}>
					<TextInput 
						style={styles.txtValBox}
						placeholder={this.state.curVal.toString()}
						keyboardType='numeric'
						onChangeText={val => {
								this.setState({curVal: val ? parseFloat(val).toFixed(1) : 0});
								this.passVal(val.toFixed(1));
							}
						}
						value={ this.state.curVal.toString()}
					/>
				</TouchableHighlight>


				<View style={styles.sliderContainer}>
					<View style={styles.textCon}>
						<Text >{this.state.minVal +' '+ this.state.unit}</Text>
						<Text >
							{this.state.curVal +' '+ this.state.unit}
						</Text>  
						<Text >{this.state.maxVal +' '+ this.state.unit}</Text>
					</View>
					<Slider
						style={styles.slider}
						step={this.state.step}
						minimumValue={this.state.minVal}
						maximumValue={this.state.maxVal}
						value={this.state.curVal}
						onValueChange={val => {
								this.setState({ curVal: val.toFixed(1) });
								this.passVal(val.toFixed(1));
							}
						}
						thumbTintColor={palette.primary}
						maximumTrackTintColor={palette.primary}
						minimumTrackTintColor={palette.primary}
					/>
				</View>
			</View>
        </View> 
    );
  }
}


