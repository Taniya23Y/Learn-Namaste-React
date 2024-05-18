import Body from "./components/Body";
import { getDatabase, ref, set } from "firebase/database";
import { app } from "../src/utils/Firebase";

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
    <div>
      <Body />
      <button onClick={putData}>Put Data</button>
    </div>
  );
}

export default App;
