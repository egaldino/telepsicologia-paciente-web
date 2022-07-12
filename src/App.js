import React from 'react';
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import HomeTemplate from "./pages/home/HomeTemplate";
import Search from './pages/home/search/Search'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ScheduledAppointments from "./pages/home/scheduledAppointments/ScheduledAppointments";
import PastAppointments from "./pages/home/pastAppointments/PastAppointments";
import Profile from "./pages/home/profile/Profile";
import VideoCall from "./pages/videoCall/VideoCall";
import {Provider} from "react-redux";
import {store} from "./store/store";
import ScheduleNew from "./pages/home/scheduleNew/ScheduleNew";

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="search" element={
                        <HomeTemplate title="Buscar Psicólogo">
                            <Search />
                        </HomeTemplate>}/>
                    <Route path="schedule" element={
                        <HomeTemplate title="Consultas Agendadas">
                            <ScheduledAppointments />
                        </HomeTemplate>}/>
                    <Route path="schedule/:crp" element={
                        <HomeTemplate title="Agendar consulta">
                            <ScheduleNew />
                        </HomeTemplate>}/>
                    <Route path="history" element={
                        <HomeTemplate title="Consultas Realizadas">
                            <PastAppointments />
                        </HomeTemplate>}/>
                    <Route path="profile" element={
                        <HomeTemplate title="Meus Dados">
                            <Profile />
                        </HomeTemplate>}/>
                    <Route path="call" element={<VideoCall/>}/>
                </Routes>
            </BrowserRouter>
        </Provider>
    );
};

export default App;
