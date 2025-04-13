import { Search } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router';

function SearchPage() {
    const [medName, setMedName] = useState('');

    const searchMedicine = () => {
        console.log("medName:", medName);
    };

    const handleInputChange = (e) => {
        setMedName(e.target.value);
    };

    return (
        <div className='w-full h-dvh'>
            <div className="navbar bg-base-100 shadow-sm">
                <Link to="/" className="btn btn-ghost text-xl main-text">MedGuide</Link>
            </div>
            <div className='flex justify-center items-center mt-10'>
                <div className="join">
                    <div>
                        <label className="input validator join-item">
                            <Search className="h-[1em] opacity-50" />
                            <input
                                type="text"
                                name='medName'
                                value={medName}
                                onChange={handleInputChange}
                                placeholder="Eg. Paracetamol"
                                required
                                className='main-text'
                            />
                        </label>
                        <div className="validator-hint hidden sub-text">Please enter a medicine name</div>
                    </div>
                    <button
                        className="btn btn-primary join-item main-text"
                        onClick={searchMedicine}
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SearchPage;