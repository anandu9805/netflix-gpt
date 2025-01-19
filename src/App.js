import Body from "./components/Body";
import { Provider } from "react-redux";
import { appStore } from "./utils.js/appStore/appStore";
function App() {
  return (
    <Provider store={appStore}>
      <Body />
    </Provider>
  );
}

export default App;
