import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { history } from "../helpers";
import { alertActions } from "../actions/alert-actions";
import { CharacterDetail } from "./Character/CharacterDetail";
import { CharacterList } from "./Character/CharacterList";
import { CharacterCreate } from "./Character/CharacterCreate";
import { NavigationBar } from "./NavigationBar/NavigationBar";
import { CharacterEdit } from "./Character/CharacterEdit";
import * as c from "../constants/routes";

function App() {
  const alert = useSelector((state) => state.alert);
  const dispatch = useDispatch();

  useEffect(() => {
    history.listen((location, action) => {
      dispatch(alertActions.clear());
    });
  }, []);

  return (
    <div className="App">
      <Router history={history}>
        <NavigationBar></NavigationBar>
        <Switch>
          <Route exact path={c.LANDING} component={Home} />
          <Route exact path={c.CHARACTER_DETAILS} component={CharacterDetail} />
          <Route exact path={c.CHARACTER_LIST} component={CharacterList} />
          <Route exact path={c.char} component={CharacterList} />
          <Route exact path={c.ABOUT} component={About} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
