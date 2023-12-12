import React from 'react';
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {ThemeProvider} from "@mui/material";
import './App.css';
import {theme} from "./theme/theme";
import {MainLayout} from "./common/layout/MainLayout";
import {HomePageContainer} from "./features/homePage/components/HomePageContainer";
import {LevelPageContainer} from "./features/levelPage/components/LevelPageContainer";
import {TopicPageContainer} from "./features/topicPage/components/TopicPageContainer";
import {TestPageContainer} from "./features/testPage/components/TestPageContainer";
import {TestResultPageСontainer} from "./features/testPage/components/TestResultPageContainer";

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<MainLayout />}>
                        <Route path="" element={<HomePageContainer />} />
                        <Route path="/grammar/:levelCode" element={<LevelPageContainer />} />
                        <Route path="/grammar/:levelCode/:topicId" element={<TopicPageContainer />} />
                        <Route path="/grammar/:levelCode/:topicId/test" element={<TestPageContainer />} />
                        <Route path="/grammar/:levelCode/:topicId/test/results" element={<TestResultPageСontainer />} />
                    </Route>
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}

export default App;
