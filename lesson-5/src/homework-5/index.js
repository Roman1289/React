import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button } from "@material-ui/core";

import { Home } from "./routes/Home";
import { Chats } from "./routes/Chats";
import { Profile } from "./routes/Profile";
import { Provider } from "react-redux";

export const Homework = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <AppBar position="static">
                    <Toolbar>
                        <Button to="/" component={Link} color="inherit">
                            Home
                        </Button>
                        <Button to="/profile" component={Link} color="inherit">
                            Profile
                        </Button>
                        <Button to="/chats" component={Link} color="inherit">
                            Chats
                        </Button>
                    </Toolbar>
                </AppBar>
                <Switch>
                    <Route component={Chats} path="/chats" />
                    <Route component={Profile} path="/profile" />
                    <Route component={Home} path="/" />
                </Switch>
            </BrowserRouter>
        </Provider>

    );
};