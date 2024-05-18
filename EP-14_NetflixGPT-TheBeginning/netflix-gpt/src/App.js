import Body from "./components/Body";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../src/utils/Firebase";
import appStore from "./utils/appSlice";
import { Provider } from "react-redux";

const db = getDatabase(app);

function App() {
  const putData = () => {
    set(ref(db, "users/taniya"), {
      id: 1,
      name: "Taniya",
      age: 21,
    });
  };
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
