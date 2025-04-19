import React from 'react'
import { Link } from 'react-router'
import "./IndexPage.css"

function IndexPage() {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-xl">
                        <h1 className="text-5xl font-bold main-text">MedGuide</h1>
                        <p className="py-6 main-text">
                            An<span className="badge badge-soft badge-primary font-mono uppercase">AI-powered</span>app that offers detailed medicine descriptions💊
                        </p>
                        <Link to={"/search"} className='btn btn-primary sub-text'>Try for free 😄</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndexPage