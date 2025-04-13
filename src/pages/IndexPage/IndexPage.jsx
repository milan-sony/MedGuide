import React from 'react'
import { Search } from 'lucide-react'
import "./IndexPage.css"

function IndexPage() {
    return (
        <>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content text-center">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold main-text">MedGuide</h1>
                        <p className="py-6 main-text">
                            An <span className="badge badge-soft badge-primary font-mono uppercase">AI-powered</span> medicine information application that provides users with detailed descriptions of medicines.
                        </p>
                        <button className="btn btn-primary sub-text text-center"><Search color="white"/> Search</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default IndexPage