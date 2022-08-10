import React, { Component, useState } from "react";
import { StyleSheet, View, Text, Button } from "react-native";
import Svg, { Ellipse } from "react-native-svg";
import calculator, { handleNumber, handleEqual, initialState } from "../calculator-logic";

function Calculator(props) {
  const [calcState, setCalcState] = useState(initialState);

  const handleTap = (type, value) => {
    setCalcState(calcState => calculator(type, value, calcState));
    console.log(value);
    console.log('calcState', calcState);
  };
  return (
    <View style={styles.container}>
      <View style={styles.rectRow}>
        <View style={styles.rect}>
        <Button
         title="Clear"
         color="#f194ff"
         onPress={() => {handleTap('clear')}}
        />
        </View>
        <View style={styles.rect14Stack}>
          <View style={styles.rect14}></View>
          <Button
         title="."
         color="#f194ff"
         onPress={() => {handleTap('decimal')}}
        />
        </View>
        <View style={styles.rect13}>
        <Button
         title="0"
         color="#f194ff"
         onPress={() => {handleTap('number', 0)}}
        />
        </View>
        <View style={styles.ellipseStack}>
          <Svg viewBox="0 0 59.18 64.03" style={styles.ellipse}>
            <Ellipse
              stroke="rgba(50, 168, 166, 1)"
              strokeWidth={0}
              fill="rgba(50, 168, 166, 1)"
              cx={30}
              cy={32}
              rx={30}
              ry={32}
            ></Ellipse>
          </Svg>
          <Button
         title="/"
         color="#f194ff"
         onPress={() => {handleTap('operator', '/')}}
        />
        </View>
      </View>
      <View style={styles.rect8Row}>
        <View style={styles.rect8}>
        <Button
         title="7"
         color="#f194ff"
         onPress={() => {handleTap('number', 7)}}
        />
        </View>
        <View style={styles.rect4}>
          <Button
         title="8"
         color="#f194ff"
         onPress={() => {handleTap('number', 8)}}
        />
        </View>
        <View style={styles.rect12}>
        <Button
         title="9"
         color="#f194ff"
         onPress={() => {handleTap('number', 9)}}
        />
        </View>
        <View style={styles.ellipse4Stack}>
          <Svg viewBox="0 0 59.18 64.03" style={styles.ellipse4}>
            <Ellipse
              stroke="rgba(50, 168, 166, 1)"
              strokeWidth={0}
              fill="rgba(50, 168, 166, 1)"
              cx={30}
              cy={32}
              rx={30}
              ry={32}
            ></Ellipse>
          </Svg>
          <Button
         title="-"
         color="#f194ff"
         onPress={() => {handleTap('operator', '-')}}
        />
        </View>
      </View>
      <View style={styles.rect5Row}>
        <View style={styles.rect5}>
        <Button
         title="1"
         color="#f194ff"
         onPress={() => {handleTap('number', 1)}}
        />
        </View>
        <View style={styles.rect6}>
        <Button
        title="2"
        color="#f194ff"
        onPress={() => {handleTap('number', 2)}}
        />
        </View>
        <View style={styles.rect7}>
        <Button
         title="3"
         color="#f194ff"
         onPress={() => {handleTap('number', 3)}}
        />
        </View>
        <View style={styles.ellipse2Stack}>
          <Svg viewBox="0 0 59.18 64.03" style={styles.ellipse2}>
            <Ellipse
              stroke="rgba(50, 168, 166, 1)"
              strokeWidth={0}
              fill="rgba(50, 168, 166, 1)"
              cx={30}
              cy={32}
              rx={30}
              ry={32}
            ></Ellipse>
          </Svg>
          <Button
         title="*"
         color="#f194ff"
         onPress={() => {handleTap('operator', '*')}}
        />
        </View>
      </View>
      <View style={styles.rect9Row}>
        <View style={styles.rect9}>
        <Button
         title="4"
         color="#f194ff"
         onPress={() => {handleTap('number', 4)}}
        />
        </View>
        <View style={styles.rect10}>
        <Button
         title="5"
         color="#f194ff"
         onPress={() => {handleTap('number', 5)}}
        />
        </View>
        <View style={styles.rect11}>
        <Button
         title="6"
         color="#f194ff"
         onPress={() => {handleTap('number', 6)}}
        />
        </View>
        <View style={styles.ellipse3Stack}>
          <Svg viewBox="0 0 59.18 64.03" style={styles.ellipse3}>
            <Ellipse
              stroke="rgba(50, 168, 166, 1)"
              strokeWidth={0}
              fill="rgba(50, 168, 166, 1)"
              cx={30}
              cy={32}
              rx={30}
              ry={32}
            ></Ellipse>
          </Svg>
          <Button
         title="+"
         color="#f194ff"
         onPress={() => {handleTap('operator', '+')}}
        />
        </View>
      </View>
      <View style={styles.ellipse5Stack}>
        <Svg viewBox="0 0 86.27 88.29" style={styles.ellipse5}>
          <Ellipse
            stroke="rgba(50, 168, 166, 1)"
            strokeWidth={0}
            fill="rgba(50, 168, 166, 1)"
            cx={43}
            cy={44}
            rx={43}
            ry={44}
          ></Ellipse>
        </Svg>
        <Button
         title="="
         color="#f194ff"
         onPress={() => {handleTap('equal', null)}}
        />
      </View>
      <View style={styles.rect15}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#77dee6'
  },
  rect: {
    width: 62,
    height: 64,
    backgroundColor: "#327da8",
    marginTop: 2
  },
  clear: {
    color: "#327da8",
    marginTop: 24,
    marginLeft: 15
  },
  rect14: {
    top: 2,
    left: 0,
    width: 62,
    height: 64,
    position: "absolute",
    backgroundColor: "#327da8"
  },
  loremIpsum15: {
    top: 0,
    left: 22,
    position: "absolute",
    color: "#121212",
    fontSize: 59
  },
  rect14Stack: {
    width: 62,
    height: 69,
    marginLeft: 26
  },
  rect13: {
    width: 62,
    height: 64,
    backgroundColor: "#327da8",
    marginLeft: 26,
    marginTop: 2
  },
  loremIpsum14: {
    color: "#121212",
    marginTop: 24,
    marginLeft: 27
  },
  ellipse: {
    top: 0,
    left: 0,
    width: 59,
    height: 64,
    position: "absolute"
  },
  loremIpsum10: {
    top: 24,
    left: 25,
    position: "absolute",
    color: "#121212"
  },
  ellipseStack: {
    width: 59,
    height: 64,
    marginLeft: 29,
    marginTop: 2
  },
  rectRow: {
    height: 69,
    flexDirection: "row",
    marginTop: 257,
    marginLeft: 22,
    marginRight: 27
  },
  rect8: {
    width: 62,
    height: 64,
    backgroundColor: "#327da8"
  },
  loremIpsum7: {
    color: "#121212",
    marginTop: 26,
    marginLeft: 27
  },
  rect4: {
    width: 62,
    height: 64,
    backgroundColor: "#327da8",
    marginLeft: 25
  },
  loremIpsum8: {
    color: "#121212",
    marginTop: 26,
    marginLeft: 24
  },
  rect12: {
    width: 62,
    height: 64,
    backgroundColor: "#327da8",
    marginLeft: 25
  },
  loremIpsum9: {
    color: "#121212",
    marginTop: 26,
    marginLeft: 25
  },
  ellipse4: {
    top: 0,
    left: 0,
    width: 59,
    height: 64,
    position: "absolute"
  },
  loremIpsum12: {
    top: 18,
    left: 26,
    position: "absolute",
    color: "#121212",
    fontSize: 24
  },
  ellipse4Stack: {
    width: 59,
    height: 64,
    marginLeft: 31
  },
  rect8Row: {
    height: 64,
    flexDirection: "row",
    marginTop: 222,
    marginLeft: 22,
    marginRight: 27
  },
  rect5: {
    width: 62,
    height: 64,
    backgroundColor: "#327da8"
  },
  loremIpsum: {
    color: "#121212",
    marginTop: 24,
    marginLeft: 27
  },
  rect6: {
    width: 62,
    height: 64,
    backgroundColor: "#327da8",
    marginLeft: 25
  },
  loremIpsum2: {
    color: "#121212",
    marginTop: 24,
    marginLeft: 24
  },
  rect7: {
    width: 62,
    height: 64,
    backgroundColor: "#327da8",
    marginLeft: 25
  },
  loremIpsum3: {
    color: "#121212",
    marginTop: 24,
    marginLeft: 29
  },
  ellipse2: {
    top: 0,
    left: 0,
    width: 59,
    height: 64,
    position: "absolute"
  },
  x: {
    top: 24,
    left: 25,
    position: "absolute",
    color: "#121212"
  },
  ellipse2Stack: {
    width: 59,
    height: 64,
    marginLeft: 31
  },
  rect5Row: {
    height: 64,
    flexDirection: "row",
    marginTop: -257,
    marginLeft: 22,
    marginRight: 27
  },
  rect9: {
    width: 62,
    height: 64,
    backgroundColor: "#327da8"
  },
  loremIpsum4: {
    color: "#121212",
    marginTop: 27,
    marginLeft: 27
  },
  rect10: {
    width: 62,
    height: 64,
    backgroundColor: "#327da8",
    marginLeft: 25
  },
  loremIpsum5: {
    color: "#121212",
    marginTop: 27,
    marginLeft: 24
  },
  rect11: {
    width: 62,
    height: 64,
    backgroundColor: "#327da8",
    marginLeft: 25
  },
  loremIpsum6: {
    color: "#121212",
    marginTop: 27,
    marginLeft: 25
  },
  ellipse3: {
    top: 0,
    left: 0,
    width: 59,
    height: 64,
    position: "absolute"
  },
  loremIpsum11: {
    top: 27,
    left: 25,
    position: "absolute",
    color: "#121212"
  },
  ellipse3Stack: {
    width: 59,
    height: 64,
    marginLeft: 31
  },
  rect9Row: {
    height: 64,
    flexDirection: "row",
    marginTop: 33,
    marginLeft: 22,
    marginRight: 27
  },
  ellipse5: {
    top: 0,
    left: 0,
    width: 86,
    height: 88,
    position: "absolute"
  },
  loremIpsum13: {
    top: 18,
    left: 32,
    position: "absolute",
    color: "#121212",
    fontSize: 43
  },
  ellipse5Stack: {
    width: 86,
    height: 88,
    marginTop: 121,
    marginLeft: 274
  },
  rect15: {
    width: 293,
    height: 156,
    backgroundColor: "#327da8",
    marginTop: -652,
    marginLeft: 37
  }
});

export default Calculator;