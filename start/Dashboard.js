import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  TouchableHighlight,
  ToastAndroid,
} from "react-native";
import { Button, colors } from "react-native-elements";
import SDKX, { GGAdview } from "@greedygame/react-native-sdkx";
import Icon from "react-native-vector-icons/FontAwesome";
import PagerView from "react-native-pager-view";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colorsDark } from "react-native-elements/dist/config";
import { Actions } from "react-native-router-flux";

export function Dashboard({ navigation }) {
  const viewPagerData = [
    {
      type: "content",
      url: "https://i.imgur.com/y7v9pCJ.png",
      title: "Antelope\nCanyon",
      location: "Antelope,USA",
    },
    {
      type: "content",
      url: "https://i.imgur.com/JbZ92pE.png",
      title: "Beach\nMaldives",
      location: "Maldives",
    },
    {
      type: "content",
      url: "https://i.imgur.com/ZBFe67z.png",
      title: "Amristar\nFort",
      location: "Amristar,India",
    },
    {
      type: "ad",
      unitId: "float-4704",
    },
    {
      type: "content",
      url: "https://i.imgur.com/T5tPude.png",
      title: "Malibu\nIsland",
      location: "California,USA",
    },
    {
      type: "content",
      url: "https://i.imgur.com/v9CS3W3.png",
      title: "Eiffel\nTower",
      location: "Paris,France",
    },
    {
      type: "ad",
      unitId: "float-4704",
    },
  ];

  const newPlacesData = [
    {
      type: "content",
      url: "https://i.imgur.com/0a6l6n2.png",
      title: "Causeaway",
      location: "Ireland",
    },
    {
      type: "content",
      url: "https://i.imgur.com/uNcRope.png",
      title: "Castle",
      location: "Iceland",
    },
    {
      type: "content",
      url: "https://i.imgur.com/BihS6yR.png",
      title: "River Aga",
      location: "Venice",
    },
    {
      type: "ad",
      unitId: "float-4705",
    },
    {
      type: "content",
      url: "https://i.imgur.com/7tPNcqK.png",
      title: "The Mosque",
      location: "Turkey",
    },
    {
      type: "content",
      url: "https://i.imgur.com/dgzviKz.png",
      title: "The Valley",
      location: "Baghdad",
    },
    {
      type: "ad",
      unitId: "float-4705",
    },
  ];

  useEffect(()=>{
    SDKX.prefetchAds({
            adUnits:["float-4839"],
            onAdPrefetched:(data)=>{
                console.log("Ad Prefetched",data)
            },
            onAdPrefetchFailed:(unitId,cause) => {
                console.log("Ad Prefetch Failed",unitId,cause)
            },
            onPrefetchComplete:()=>{
                console.log("Ad Prefetch completed")
            }
        })
  })

  return (
    <>
      <ScrollView
        style={{
          height: 600,
        }}
      >
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              height: 56,
              width: "100%",
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
              paddingStart: 16,
              paddingEnd: 16,
              marginTop: 10,
            }}
          >
            <Icon name="navicon" size={30} color={"#000000"} />
            <Icon name="user" size={30} color={"#000000"} />
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <Text
              style={{
                color: "#F9A24B",
                fontWeight: "bold",
              }}
            >
              Popular
            </Text>
            <Text
              style={{
                color: "#000000",
                fontWeight: "700",
              }}
            >
              Recommended
            </Text>
            <Text
              style={{
                color: "#000000",
                fontWeight: "700",
              }}
            >
              Cost Effective
            </Text>
          </View>
        </View>
        <View
          style={{
            marginTop: 16,
            flex: 7,
          }}
        >
          <PagerView
            style={{
              height: 400,
              width: "100%",
            }}
          >
            {viewPagerData.map((element, index) => {
              console.log(element);
              switch (element.type) {
                case "content":
                  return (
                    <TouchableHighlight
                      key={index}
                      onPress={() => {
                        SDKX.loadInterstitialAd("float-4839").then(()=>{
                            SDKX.showInterstitialAd({
                                onAdLeftApplication:()=>{
                                },
                                    onAdClosed:()=>{
                                    Actions.placedetail({ place: element });
                                    },
                                onAdOpened:()=>{
                                }
                 
                            })
                        }).catch((e)=>{
                            console.log("Failed to load inter ad ",e)
                            Actions.placedetail({ place: element });
                        })
                      }}
                    >
                      <View
                        key={index}
                        style={{
                          flex: 1,
                        }}
                      >
                        <ImageBackground
                          style={{
                            flex: 1,
                          }}
                          source={{ uri: element.url }}
                        >
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              flex: 1,
                              justifyContent: "center",
                              alignItems: "flex-start",
                              marginStart: 24,
                            }}
                          >
                            <Text
                              style={{
                                color: "#ffffff",
                                fontSize: 52,
                                fontWeight: "bold",
                              }}
                            >
                              {element.title}
                            </Text>
                            <Text
                              style={{
                                color: "#ffffff",
                                fontSize: 20,
                              }}
                            >
                              {element.location}
                            </Text>
                          </View>
                        </ImageBackground>
                      </View>
                    </TouchableHighlight>
                  );
                default:
                  return (
                    <GGAdview unitId={element.unitId} style={{ flex: 1 }}
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
                      }} />
                  );
              }
            })}
          </PagerView>
        </View>

        <View
          style={{
            flex: 2,
            marginTop: 16,
            marginStart: 16,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            New Places
          </Text>
          <ScrollView horizontal={true}>
            {newPlacesData.map((element, index) => {
              console.log(element);
              switch (element.type) {
                case "content":
                  return (
                    <View
                      key={index}
                      style={{
                        height: 160,
                        width: 80,
                        margin: 5,
                      }}
                    >
                      <Image
                        style={{
                          height: 80,
                          width: 80,
                        }}
                        source={{ uri: element.url }}
                      />
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          flex: 1,
                          justifyContent: "center",
                          alignItems: "flex-start",

                          marginTop: 20,
                        }}
                      >
                        <Text
                          style={{
                            color: "#000000",
                            fontSize: 14,
                            fontWeight: "bold",
                          }}
                        >
                          {element.title}
                        </Text>
                        <Text
                          style={{
                            color: "#000000",
                            fontSize: 14,
                          }}
                        >
                          {element.location}
                        </Text>
                      </View>
                    </View>
                  );
                default:
                  return (
                    <View
                      key={index}
                      style={{
                        height: 160,
                        width: 80,
                        marginEnd: 25,
                        marginStart: 5,
                      }}
                    >
                      <GGAdview
                        unitId={element.unitId}
                        style={{ height: "100%", width: "100%" }}
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
                  );
              }
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </>
  );
}
