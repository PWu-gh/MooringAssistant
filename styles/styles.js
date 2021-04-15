import {StyleSheet, StatusBar, Platform} from "react-native";

import palette from "./palette";

const fontStyle = "Alice"

export default StyleSheet.create({
    // statusBar
    screen: {
        flex: 1,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,// SafeArea not working on android
        backgroundColor: palette.colorStatus,
        
    },
    // header styles
    header: {
        backgroundColor: palette.primary,
    },
    headerTitle:{
        alignSelf:'center',
        fontFamily: "Alice",
        fontWeight:'bold',
        fontSize:22,
        color: palette.lightSand,
        
    },
    // usable screen part
    useScreen: {
        flex: 1,
        backgroundColor: palette.colorBack,
    },

    // text color
    textStyle:{
        color: palette.textColor,
        fontSize: 17,
        alignSelf:'center',
        fontFamily: fontStyle,
    },
    textHighlight:{
        color: palette.lightSand,
        fontSize: 18,
        alignSelf:'center',
        fontWeight:'bold',
        fontFamily: fontStyle,
    },
    

    /////////////////////  Button Layout ////////////////////////////
    btnView:{
        flex:1,
        justifyContent: "center",
    },

    menuBtn:{
        flex:1,
        backgroundColor: palette.primary,
        maxHeight: 180,
        marginBottom: 40,
        marginHorizontal: "8%",
        borderRadius: 8,
        overflow:'hidden',
        
        shadowColor: "#000", // ios
        shadowOffset: {
            width: 10,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9, // android
    },
    /////////////////////  image historic ////////////////////////////
    backtimeBtn:{
        right:"4%",
        top:"2%",
        height: 60,
        width: 60,
        position:'absolute',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:palette.secondary,
        borderRadius:50,
    },

    backtime:{
        width: '60%',
        height: "60%",
        resizeMode: 'contain',
    },

    /////////////////////  Button ////////////////////////////
    continueMano:{
        flex: 1.6,
        alignContent:'center',
        justifyContent:'center',
        backgroundColor: palette.primary,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    textBoxL2:{
        flexDirection:'row',
        flex:1,
        backgroundColor:palette.third,
    },
    textBoxL1:{
        flex:1,
        justifyContent:'center',
        borderRadius: 1,

        // backgroundColor:palette.primary,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.18,
        shadowRadius: 1.00,

        elevation: 1,
    },
    sflex:{
        flex:1,
    },

    centerImg:{
        alignSelf:'center',
        width: 60,
        height: 60,
        margin:10,
    },
    imgRope:{
        width: '105%',
        resizeMode: 'contain',
        position: 'absolute',
        top:'40%', // flex 1.6/2
    },  

    // Settings
    // view part sizing
    paramCont:{
        marginTop:10,
        justifyContent: 'center',

    },
    btnParamCont:{
        flex:1,
        justifyContent: 'center',
        alignSelf:'center',
        width:200,
        //shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },

    //////////////////// Slider styling ////////////////////////
    BoxSlider:{
        paddingHorizontal: '2%',
        alignContent:'center',
        marginHorizontal:'4%',
        marginTop:10,
        backgroundColor: palette.secondary,
        borderRadius:4,
        padding:4,

        //shadow
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65,

        elevation: 8,
    },

    confRope:{
        width: '100%',
        resizeMode: 'contain',
        position: 'absolute',
        right:'96%',
        top:88, 
        zIndex:1,
    },
    textBox:{
        fontSize:17,
        color:palette.textColor,
        marginBottom:3,
        marginTop:1,
        alignSelf:'center',
        fontFamily: fontStyle,
    },

    box_slide:{
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
    },
    valBox:{
        width: '16%',
        marginRight:10,
        minWidth: 60,
        maxWidth:70,
        aspectRatio:1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:50,
        backgroundColor: palette.virgsand,
        alignSelf:'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    sideBubble:{
        width:45,
        aspectRatio:1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:50,
        backgroundColor: palette.rope,
        alignSelf:'center',
        top:8,

    },
    bubble:{
        position:'absolute',
        height:'110%',
        width:'110%',
        resizeMode: 'contain',
    },
    txtValBox:{
        fontSize: 20,
        textAlign:'center',
        fontWeight:'bold',
        fontFamily: fontStyle,
    },
    sliderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth:400,
        // backgroundColor: '#000',
      },
    legendCon: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    sliderTxt:{
        fontSize:18,
        top:-4,
        fontWeight:'bold',
        fontFamily: fontStyle,
    },
    sliderTxtsub:{
        fontSize:15,
        fontWeight:'bold',
        fontFamily: fontStyle,
        // top:-5,
    },
    slider:{
        width: '100%',
        height:20, // 40 height of thumb icon by default
    },


    ////////////////// Buttons ////////////////////////
    btnContainer: {
        backgroundColor: palette.primary,
        borderRadius: 5,
        paddingVertical: 20,
        marginHorizontal: '5%',
        
    },
    btnText: {
        fontSize: 18,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        fontFamily: fontStyle,
    },

    ////////////////////// CVision Parts ///////////////////////////
    infoVisCont:{
        flex:1,
        flexDirection:'row',
        minHeight:60,
        maxHeight:80,
        justifyContent:'space-evenly',
        marginVertical:'2%',

    },
    ///////////////  Info box on top at CVision   /////////////////
    infoVis:{
        // flex:1,
        width:'47%', // 2% margin like camBox
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:palette.secondary,
        borderRadius:5,
        marginVertical:'1%',
    },
    valueVis:{
        fontSize:22,
        fontWeight:'bold',
        color: palette.textColor,
        fontFamily: fontStyle,
    },

    ///////////// Camera container ////////////////
    camBox:{
        // backgroundColor: palette.black,
        width:"90%",
        aspectRatio:1,
        alignSelf:'center',
        borderWidth: 2,
        borderColor: palette.third,
        borderRadius:1,

    },
    ///////// Button bellow the cam ///////////////
    btnCam:{
        flex:1,
        height: 100,
        width: 200,
        alignContent:'center',
        justifyContent:'center',
        alignSelf:'center',
        bottom: 10,
    },

    //////////// Historic /////////////////////

    histScroll:{
        flex:1,
    },
    histPart:{
        backgroundColor: palette.primary,
        flex:1,
        width: "80%",
        height: 120,
        borderRadius: 4,
        margin:10,
        alignSelf:'center',

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        overflow:'hidden',
    },
    histDate:{
        backgroundColor: palette.secondary,
        padding:7,
        justifyContent:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    numTopLeft:{
        color: palette.textColor,
        fontSize: 18,
        alignSelf:'center',
        fontWeight:'bold',
        fontFamily: fontStyle,
        position:'absolute',
        left:10,
    },




})