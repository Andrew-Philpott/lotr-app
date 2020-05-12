import React, { useEffect } from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../helpers/history";
import { alertActions } from "../actions/alert-actions";
import { CharacterDetails } from "./CharacterDetails";
import { CharacterList } from "./CharacterList";
import { CharacterNew } from "./CharacterNew";
import { CharacterEdit } from "./CharacterEdit";
import { Header } from "./Header";
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
    <div className="App" style={{ height: "100%", fontSize: "12px" }}>
      <Router history={history}>
        <Switch>
          <Route exact path={c.NEW_CHARACTER} component={CharacterNew} />
          <Route
            exact
            path={c.CHARACTER_DETAILS}
            component={CharacterDetails}
          />
          <Route exact path={c.CHARACTER_LIST} component={CharacterList} />
          <Route exact path={c.EDIT_CHARACTER} component={CharacterEdit} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
