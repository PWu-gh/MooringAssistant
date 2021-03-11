import {StyleSheet, StatusBar, Platform, Image  } from "react-native";

import palette from "./palette";

export default StyleSheet.create({
    header: {
        backgroundColor: palette.primary,
    },
    headerTitle:{
        color: palette.white,
    },

    screen: {
        flex: 1,
        backgroundColor: palette.colorBack,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight*0 : 0,// SafeArea not working on android
    },

    textParam:{
        color: palette.textColor,
        fontSize: 16,
    },

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
    subBtnTxt:{
        alignSelf:'center',
    },
    centerImg:{
        alignSelf:'center',
        width: 60,
        height: 60,
        margin:10,
    }
})