import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
  appBar: {
    backgroundColor: "rgba(0, 0, 0, 0.69)",
    borderRadius: 15,
    margin: "30px 0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "15px",
  },
}));
