import { Route, Routes } from "react-router-dom";
import { Channels } from "../channel/channels";

export const Conent = ({ channels }) => {
    <div className="content-container">
        <Routes>
            <Route path='channels' element={<Channels channels={channels}/>}/>
        </Routes>
    </div>
}