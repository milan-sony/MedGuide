import { Search } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

function SearchPage() {
    return (
        <div className='w-full h-dvh'>
            <div className="navbar bg-base-100 shadow-sm">
                <Link to={"/"} className="btn btn-ghost text-xl main-text">MedGuide</Link>
            </div>
            <div className='flex justify-center items-center'>
                <div className="join">
                    <div>
                        <label className="input validator join-item">
                            <Search className="h-[1em] opacity-50"/>
                            <input type="text" placeholder="Eg. Paracetamol" required className='main-text' />
                        </label>
                        <div className="validator-hint hidden sub-text">Please enter a medicine name</div>
                    </div>
                    <button className="btn btn-primary join-item main-text">Search</button>
                </div>
            </div>
        </div>
    )
}

export default SearchPage