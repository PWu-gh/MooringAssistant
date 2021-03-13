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
        fontSize: 16,
    },

    // button Home page
    btnView:{
        flex:1,
        justifyContent: "center",
    },

    menuBtn:{
        // alignSelf: stretch,
        flex:1,
        backgroundColor: palette.primary,
        maxHeight: 180,
        marginBottom: 40,
        marginHorizontal: "5%",
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',

        shadowColor: "#000", // ios
        shadowOffset: {
            width: 10,
            height: 4,
        },
        shadowOpacity: 0.32,
        shadowRadius: 5.46,

        elevation: 9, // android
    },

    center:{
        alignSelf:'center',
        justifyContent:'center',
    },

    centerImg:{
        alignSelf:'center',
        width: 60,
        height: 60,
        margin:10,
    },


    // Settings
    // view part sizing
    paramCont:{
        flex:2,
        justifyContent: 'center',

    },
    btnParamCont:{
        flex:1,
        justifyContent: 'center',
        bottom:'6%',
    },

    // Slider
    Box:{
        paddingHorizontal: '2%',
        alignContent:'center',
        margin: '1%',
        marginHorizontal:'4%',
        marginVertical:10,

    },
    textBox:{
        fontWeight:'bold',
        color:palette.black,
        marginBottom:2,
    },

    box_slide:{
        // flex:1,
        // maxHeight:100,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:'center',
    },
    valBox:{
        width: '20%',
        marginRight:10,
        minWidth: 60,
        maxWidth:80,
        aspectRatio:1,
        backgroundColor: palette.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:10,
        borderWidth:1,
        borderColor: palette.primary,

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
    txtValBox:{
        fontSize: 20,
    },
    sliderContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth:300,
        // backgroundColor: '#000',
      },
    textCon: {
        width: '96%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    slider:{
        width: '100%',
    },

    // btn

    btnContainer: {
        elevation: 8,
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
    


})