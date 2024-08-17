import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import HomePage from "./pages/HomePage";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}