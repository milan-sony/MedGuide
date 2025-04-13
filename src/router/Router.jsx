import React from 'react'
import { Routes, Route } from "react-router";
import IndexPage from '../pages/IndexPage/IndexPage';
import SearchPage from '../pages/SearchPage/SearchPage';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<IndexPage />} />
            <Route path='/search' element={<SearchPage />} />
        </Routes>
    )
}

export default Router