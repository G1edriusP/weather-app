import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    padding: 16,
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },
  topText: {
    paddingBottom: 16,
    fontSize: 36,
    fontFamily: "roboto-regular",
    color: "#a47b81",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 5,
    alignSelf: "center",
  },
  viewItem: {
    paddingVertical: 8,
    marginBottom: 5,
    backgroundColor: "rgba(221, 169, 171, 0.5)",
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 20,
  },
  itemInside: {
    alignItems: "center",
    paddingEnd: 15,
  },
  itemName: {
    alignSelf: "center",
    fontFamily: "roboto-light",
    fontSize: 20,
    color: "#846c73",
    paddingStart: 10,
  },
  itemImage: {
    width: 50,
    height: 50,
    marginTop: -5,
  },
  itemText: {
    marginTop: -5,
    fontSize: 15,
    fontFamily: "roboto-light",
    color: "#846c73",
  },
});

export default styles;
