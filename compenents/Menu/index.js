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
import { faMusic, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import items from "../Menu/items";
const Menu = () => {
  return (
    <View style={styles.MenuItems}>
      {items.map((items) => (
        <TouchableOpacity key={items.id}>
          <View style={styles.MenuIcon}>
            <FontAwesomeIcon style={styles.icon} icon={items.icon} size={24} />
            <View style={styles.menuTextBox}>
              <Text style={styles.menuText}>{items.title}</Text>
              {items.subTitle && (
                <Text style={styles.subTitle}>{items.subTitle}</Text>
              )}
            </View>
            <FontAwesomeIcon
              style={styles.icon}
              icon={faChevronRight}
              size={24}
            />
          </View>
        </TouchableOpacity>
      ))}
      <View style={styles.ashraf}>
        <Text style={styles.ashraf}>By Ashraf Ettaftafi</Text>
      </View>
    </View>
  );
};

export default Menu;
