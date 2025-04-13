import React from 'react'
import { Routes, Route } from "react-router";
import IndexPage from '../pages/IndexPage/IndexPage';
import SearchPage from '../pages/SearchPage/SearchPage';
import NoPage from '../pages/NoPage/NoPage';

function Router() {
    return (
        <Routes>
            <Route path='/' element={<IndexPage />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='*' element={<NoPage />} />
        </Routes>
    )
}

export default Router