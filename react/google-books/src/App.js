import "./assets/styles/theme.scss";
import { useState, useEffect } from "react";
import SearchIndex from "./containers/SearchIndex";
import CardContainer from "./containers/CardContainer";
import SearchProvider from "./context/dataContexts";

function App() {
    return (
        <div className="App">
            <SearchProvider>
                <SearchIndex></SearchIndex>
                <CardContainer></CardContainer>
            </SearchProvider>
        </div>
    );
}

export default App;
