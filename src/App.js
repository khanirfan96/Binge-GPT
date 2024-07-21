import { Provider, useDispatch } from "react-redux";
import Body from "./body/Body";
import appStore from "./utils/appStore";

function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
