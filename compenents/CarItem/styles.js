import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  carContainer: {
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  header: {
    marginTop: 50,
    marginLeft: 20,
    marginRight: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },
  headerTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    color: "white",
  },
  backgroundImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    position: "absolute",
  },
  BatteryIcon: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  batteriamge: {
    height: 26,
    width: 70,
  },
  batterieText: {
    color: "white",
    fontSize: 26,
    fontWeight: "bold",
  },
  placeStauts: {
    alignItems: "center",
  },
  status: {
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
  },
  caropel: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  key: {
    color: "white",
  },
  barFeatures: {
    flexDirection: "row",
    marginTop: -190,
    justifyContent: "center",
    alignItems: "center",
  },
  keyCirc: {
    backgroundColor: "rgba(11, 11, 11, 0.81)",
    padding: 10,
    borderRadius: 50,
    marginLeft: 10,
    marginTop: 155,
  },
});

export default styles;
