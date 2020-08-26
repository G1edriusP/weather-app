import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  headView: {
    flexDirection: "column",
    alignItems: "center",
  },
  headText: {
    fontSize: 32,
    fontFamily: "roboto-light",
    color: "white",
  },
  tempText: {
    paddingTop: 64,
    fontSize: 65,
    fontFamily: "roboto-light",
    color: "white",
  },
  bgImage: {
    flex: 1,
    resizeMode: "cover",
  },
  descView: {
    paddingHorizontal: 16,
    marginTop: 260,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  weatherImage: {
    width: 50,
    height: 50,
  },
  listView: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: 20,
    marginTop: 110,
  },
  listItemView: {
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listDesc: {
    flexDirection: "row",
    alignItems: "center",
  },
  listDescText: {
    fontFamily: "roboto-light",
    fontSize: 15,
    color: "white",
  },
  center: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
  },
});

export default styles;
