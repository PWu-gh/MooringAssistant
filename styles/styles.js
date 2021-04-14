import {StyleSheet, StatusBar, Platform, Image  } from "react-native";

import palette from "./palette";

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
        alignSelf:'center'
    },
    textHighlight:{
        color: palette.textColor,
        fontSize: 18,
        alignSelf:'center',
        fontWeight:'bold',
    },

    // button Home page
    btnView:{
        flex:1,
        justifyContent: "center",
    },

    menuBtn:{
        flex:1,
        backgroundColor: palette.primary,
        maxHeight: 180,
        marginBottom: 40,
        marginHorizontal: "5%",
        borderRadius: 8,
        // overflow:'hidden',
        
        shadowColor: "#000", // ios
        shadowOffset: {
            width: 10,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9, // android
    },

    continueMano:{
        flex: 1.6,
        alignContent:'center',
        justifyContent:'center',
        backgroundColor: palette.primary,
        borderBottomWidth:1,
    },
    textBoxL2:{
        flexDirection:'row',
        flex:1,
    },
    textBoxL1:{
        flex:1,
        justifyContent:'center',
        // borderWidth:1,
        borderStyle:'dashed',
        borderRadius: 1,
        borderColor:palette.third,
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

    // Slider
    Box:{
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
        top:97, 
        zIndex:1,
    },
    textBox:{
        fontSize:17,
        color:palette.whiteSand,
        marginBottom:2,
        alignSelf:'center',
        fontWeight:'bold',
        marginBottom:10,
        marginTop:1,
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
        backgroundColor: palette.lightSand,
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
        height:'114%',
        width:'114%',
        resizeMode: 'contain',
    },
    txtValBox:{
        fontSize: 20,
        textAlign:'center',
        fontWeight:'bold',
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
    },
    sliderTxtsub:{
        fontSize:15,
        fontWeight:'bold',
        // top:-5,
    },
    slider:{
        width: '100%',
        height:20, // 40 height of thumb icon by default
    },



    // btn

    btnContainer: {
        elevation: -1,
        zIndex: -1, // test on ios => img blocks btn click ?
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
        textTransform: "uppercase"
    },

    // CVision
    infoVisCont:{
        flex:1,
        flexDirection:'row',
        minHeight:60,
        maxHeight:80,
        justifyContent:'space-evenly',
        marginVertical:'2%',

    },
    infoVis:{
        // flex:1,
        width:'47%', // 2% margin like camBox
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:palette.secondary,
        borderRadius:5,
        marginVertical:'1%',
    },
    txtVis:{
    },
    valueVis:{
        fontSize:24,
        fontWeight:'bold',
        color: palette.textColor,
    },
    camBox:{
        backgroundColor: palette.black,
        width:"96%",
        aspectRatio:1,
        alignSelf:'center',
        borderRadius:5,
        // marginVertical:5,
        // maxHeight:'60%',
    },
    btnCam:{
        height: 100,
        alignContent:'center',
        justifyContent:'center',
    },
    histScroll:{
        marginTop:2,
        flex:1,
        // width:"100%",
    },
    histPart:{
        backgroundColor: palette.quadro,
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




})