import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faCog,
  faToolbox,
  faKey,
  faFan,
  faLock,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import Menu from "../Menu/index";

const CarItem = () => {
  const [locked, setLocked] = useState(true);
  const Clickclock = () => {
    if (locked) {
      setLocked(false);
    } else {
      setLocked(true);
    }
  };
  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../imagges/img1.png")}
        style={styles.backgroundImage}
      />
      <View style={styles.header}>
        <TouchableOpacity>
          <FontAwesomeIcon style={styles.icon} icon={faCog} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Opel Astra</Text>
        <TouchableOpacity>
          <FontAwesomeIcon style={styles.icon} icon={faToolbox} size={24} />
        </TouchableOpacity>
      </View>
      <View style={styles.BatteryIcon}>
        <Image
          source={require("../../imagges/4-2-battery-charging-png-hd.png")}
          style={styles.batteriamge}
        />
        <Text style={styles.batterieText}>500 mi</Text>
      </View>
      <View style={styles.placeStauts}>
        <Text style={styles.status}>Parked</Text>
      </View>
      <View style={styles.caropel}>
        <Image source={require("../../imagges/opel-astra-2021-3.png")} />
      </View>
      <View style={styles.barFeatures}>
        <TouchableOpacity>
          <View style={styles.keyCirc}>
            <FontAwesomeIcon icon={faKey} size={30} style={styles.key} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.keyCirc}>
            <FontAwesomeIcon icon={faFan} size={30} style={styles.key} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={Clickclock}>
          <View style={styles.keyCirc}>
            <FontAwesomeIcon
              icon={locked ? faLock : faUnlockAlt}
              size={30}
              style={styles.key}
            />
          </View>
        </TouchableOpacity>
      </View>
      <Menu />
    </View>
  );
};

export default CarItem;
