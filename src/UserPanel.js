import {useState} from "react";
import MeetingsPage from "./meeting/MeetingsPage";

export default function UserPanel(props) {

    return <div>
        <h2>Jesteś zalogowany</h2>
        <MeetingsPage />
    </div>;
}