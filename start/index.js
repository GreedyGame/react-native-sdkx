import React, { useEffect } from "react";
import { StyleSheet, View, Text, Image, Linking } from "react-native";
import { Button } from "react-native-elements";
import SDKX from "@greedygame/react-native-sdkx";
import { Actions } from "react-native-router-flux";
import PagerView from "react-native-pager-view";
import { PUBLISHER, ADVERTISER } from "../images/index";

export default function Start() {
  const [isReady, setIsReady] = React.useState(false);

  useEffect(() => {
    setIsReady(SDKX.isInitialized);
    if (isReady) {
      return;
    }

    initialiseSDK();
  }, []);

  function renderPageFooter() {
    if (isReady) {
      return (
        <View style={styles.bottom}>
          <Button title="Know More" onPress={()=>{
            Linking.openURL("https://greedygame.com/")
          }} />
          <Button
            title="See Demo"
            onPress={() => {
              Actions.dashboard();
            }}
          />
        </View>
      );
    } else {
      return (
        <Text
          style={{
            textAlign: "center",
            marginBottom: 10,
            color: "#800000",
          }}
        >
          Initialising
        </Text>
      );
    }
  }

  function initialiseSDK() {
    SDKX.initWith({
      appId: "89221032",
    })
      .then(() => {
        setIsReady(true);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  return (
    <>
      <View
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "column",
        }}
      >
        <View
          style={{
            flex: 9,
            paddingHorizontal: 16,
          }}
        >
          <View
            style={{
              display: "flex",
              height: "50%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "left",
            }}
          >
            <Image
              style={{
                flex: 1,
                height: 100,
                width: 100,
              }}
              source={PUBLISHER}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                marginStart: 10,
                flex: 2,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                For Publishers
              </Text>
              <Text>
                Solving two key issues was important for native to be a viable
                ad strategy for publishers – placement rule-set and fill-rate.
                With our product suite, publishers can now implement native ads
                with ease, automate design optimization to improve CTR for a
                considerable jump in revenue.
              </Text>
            </View>
          </View>
          <View
            style={{
              display: "flex",
              height: "50%",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "left",
            }}
          >
            <Image
              style={{
                flex: 1,
                height: 100,
                width: 100,
              }}
              source={ADVERTISER}
            />
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                marginStart: 10,
                flex: 2,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                For Advertiser
              </Text>
              <Text>
                User experience is key for us. Any ad from our platform is
                quality, compliant, relevant and most importantly opt-in. This
                results into effective outcome metrics for the advertiser and
                non-intrusive ads for the user automatically.
              </Text>
            </View>
          </View>
        </View>

        {renderPageFooter()}
      </View>
    </>
  );
}

const pageData = [
  {
    title: "For Publishers",
    desc:
      "Solving two key issues was important for native to be a viable ad strategy for publishers – placement rule-set and fill-rate. With our product suite, publishers can now implement native ads with ease, automate design optimization to improve CTR for a considerable jump in revenue.",
    icon: PUBLISHER,
  },
  {
    title: "For Advertiser",
    desc:
      "User experience is key for us. Any ad from our platform is quality, compliant, relevant and most importantly opt-in. This results into effective outcome metrics for the advertiser and non-intrusive ads for the user automatically.",
    icon: ADVERTISER,
  },
];

const styles = StyleSheet.create({
  bottom: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 20,
  },
});
