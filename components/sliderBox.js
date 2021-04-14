import React, { Component } from 'react';
import { Text, View, TouchableHighlight, Image } from 'react-native';
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
			unit: props.unit ? props.unit : '',
			title: props.title ? props.title : 'title',
			step: props.step ? props.step : 1,
			dot: "",
		}   
	}

	passVal(val){
		this.props.val(val);
	}

	bubbleInput(){
		return(
			<View style={styles.valBox}>
				<Image style={styles.bubble}source={require('../assets/img/bubble.png')}/>
				<TextInput 
						style={styles.txtValBox}
						// placeholder={this.state.curVal.toString()}
						keyboardType='numeric'
						onChangeText={val => {
								this.setState({curVal: val ? Number(parseFloat(val).toFixed(1)): 0});
								this.passVal(Number(parseFloat(val).toFixed(1)));
								if(val[val.length-1] == "."){
									this.setState({ dot: "." });
								}else{
									this.setState({ dot: "" });
								}
							}
						}

						value={ this.state.curVal.toString()+ this.state.dot}
					/>
			</View>
		)
	}


  render() {
    return (

		<View style={styles.Box}>
			<Image style={styles.confRope} source={require('../assets/img/rope.png')}/>

			<Text style={styles.textBox} >{this.state.title}</Text>
			<View style= {styles.box_slide}>


				<View style={styles.sliderContainer}>
					<View style={styles.legendCon}>
						<View style={styles.sideBubble}>
							<Image style={styles.bubble}source={require('../assets/img/bubble.png')}/>
							<Text style={styles.sliderTxtsub} >{this.state.minVal +this.state.unit}</Text>
						</View>
						{this.bubbleInput()}
						<View style={styles.sideBubble}>
							<Image style={styles.bubble} source={require('../assets/img/bubble.png')}/>
							<Text style={styles.sliderTxtsub} >{this.state.maxVal +this.state.unit}</Text>
						</View>

					</View>
					<Slider
						style={styles.slider}
						step={this.state.step}
						minimumValue={this.state.minVal}
						maximumValue={this.state.maxVal}
						value={this.state.curVal}
						onValueChange={val => {
												clearTimeout(this.sliderTimeoutId)
												this.sliderTimeoutId = setTimeout(() => {
													this.setState({ curVal: Number(val.toFixed(1)) });
													this.passVal(Number(val.toFixed(1)));
												}, 100)
											}
						}
						maximumTrackTintColor={palette.black}
						minimumTrackTintColor={palette.rope}
						thumbImage={require('../assets/img/anchor_arrow.png')} 
						thumbTintColor={palette.black}
					/>
				</View>
			</View>

        </View> 
    );
  }
}


