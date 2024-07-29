import { HashRouter, Route, Routes } from "react-router-dom";
import Me from "../content/Me";
import ProjectPage from '../content/ProjectPage'
import More from '../content/More'


const Layout = () => {
    return <div>
        <HashRouter>
            <Routes>
                <Route path='/' element={<Me />}>
                    <Route index element={<ProjectPage />} />
                    <Route path='/More' element={<More />} />
                </Route>
            </Routes>
        </HashRouter>
    </div>
}

export default Layout;