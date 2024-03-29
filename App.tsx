import React from 'react';
import {StatusBar} from 'react-native';
import {Provider} from "react-redux";

import {Colors} from "./src/constants/Colors"
import {store} from "./src/store/recipes/store";
import MainScreen from "./src/screens/MainScreen";

function App(): JSX.Element {
    return (
        <>
            <StatusBar backgroundColor={Colors.yellow500} barStyle="dark-content"/>

            <Provider store={store}>
                <MainScreen/>
            </Provider>
        </>
    );
}

export default App;
