import { GGAdview } from "@greedygame/react-native-sdkx";
import React from "react";
import { View, ScrollView,ImageBackground,Text,StyleSheet } from "react-native";

export default function PlaceDetail(props) {
  return (
    <>
    
      <ImageBackground
        style={{
          flex:1,
        }}
    
        source = {{uri:props.place.url}}
      >
        <View
          style={{
            flex: 8.5,
            
          }}
        >
            <View style={{
                marginTop:"30%",
                marginStart:16,

            }}>
                <Text style={[styles.whiteText]}> 4.5(362)</Text>
                <Text style={[styles.whiteText,{
                    fontSize:40,
                    fontWeight:'bold'
                }]}>{props.place.title}</Text>
                <Text style={[styles.whiteText,{
                    fontSize:18
                }]}>{props.place.location}</Text>
                <ScrollView style={{
                    height:340,
                    width:"100%"
                }}>
                <Text style={[styles.whiteText,{
                    marginTop:20
                }]}>
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. \n Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.\n Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.\n Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. \nRichard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.\n Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.
                </Text>
                </ScrollView>
            </View>
        </View>
        <View
          style={{
            flex: 1.5,
          }}
        >
          <GGAdview
            style={{
             flex:1
            }}
            unitId="float-4727"
            onAdLoaded={() => {
                console.log("AdUnit loaded");
              }}
              onAdLoadFailed={(data) => {
                console.log("Failed to load ad",data)
              }}
              onUiiClosed={() => {
                console.log("UII Closed")
              }}
              onUiiOpened={() => {
                  console.log("UII Opened")
              }}
              onReadyForRefresh={() => {
               console.log("Ad Unit is ready to refresh")
              }}
          />
        </View>
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
    whiteText:{
        color:"#ffffff"
    }
})
