import { Search } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router';
import { axiosInstance } from '../../libs/Axios';

function SearchPage() {
    const [medName, setMedName] = useState('');

    const searchMedicine = async () => {
        try {
            console.log("medName:", medName);
            console.log("axiosInstance", axiosInstance)
            const res = await axiosInstance.post(medName)
            console.log("res: ", res)
        } catch (error) {
            console.log("import.meta.env.VITE_APP_API_URL: ", import.meta.env.VITE_APP_API_URL)
            console.log("Error getting response from api", error)
        }
    };

    const handleInputChange = (e) => {
        setMedName(e.target.value);
    };

    return (
        <div className='w-full h-dvh'>

            {/* Navbar */}
            <div className="navbar bg-base-100 shadow-sm">
                <Link to="/" className="btn btn-ghost text-xl main-text">💊 MedGuide</Link>
            </div>

            <div className='flex flex-col justify-center items-center mt-10'>
                {/* Search Input */}
                <input type="text" className="input" name='medName' value={medName} onChange={handleInputChange} placeholder="Eg. Paracetamol" />
                <button className="btn btn-outline btn-primary mt-4" onClick={searchMedicine}><Search></Search> Search</button>
            </div>

            {/* List */}
            <div className='flex justify-center'>

                <div className='w-lg mt-4 mb-4'>
                    <ul className="list bg-base-100 rounded-box shadow-md">

                        <li className="p-4 pb-2 text-xs opacity-60 tracking-wide">Search result</li>

                        <li className="list-row">
                            <div>
                                <div className='uppercase text-md text-green-400 font-bold mb-4'>Paracetamol</div>
                                <div className="text-xs font-semibold opacity-60">Paracetamol (also known as acetaminophen) is an over-the-counter (OTC) analgesic (pain reliever) and antipyretic (fever reducer). It works by reducing the production of prostaglandins in the central nervous system, which are responsible for causing pain and fever.</div>
                            </div>
                        </li>

                        <li className="list-row">
                            <div>
                                <div className='uppercase text-md font-bold'>Uses:</div>
                            </div>
                            <p className="list-col-wrap text-xs">
                                Pain relief (mild to moderate pain such as headache, muscle aches, backache, toothache, and menstrual cramps),
                                Fever reduction
                            </p>
                        </li>

                        <li className="list-row">
                            <div>
                                <div className='uppercase text-md font-bold'>Dosage:</div>
                            </div>
                            <p className="list-col-wrap text-xs">
                                The recommended dosage varies depending on age and the specific product.  Always follow the instructions on the product label.  For adults, a typical dose is 500mg to 1000mg every 4-6 hours, not exceeding 4000mg in 24 hours.  Children's dosages are significantly lower and should be determined based on weight and age.  Consult a doctor or pharmacist for appropriate dosage for children and individuals with liver or kidney impairment.
                            </p>
                        </li>

                        <li className="list-row">
                            <div>
                                <div className='uppercase text-md font-bold'>Side Effects:</div>
                            </div>
                            <p className="list-col-wrap text-xs">
                                Common:  Nausea, vomiting, abdominal pain,
                                Rare but serious:  Liver damage (especially with overdose or prolonged use), allergic reactions (skin rash, itching, swelling, difficulty breathing)
                            </p>
                        </li>

                        <li className="list-row">
                            <div>
                                <div className='uppercase text-md font-bold'>Warnings:</div>
                            </div>
                            <p className="list-col-wrap text-xs">
                                Do not exceed the recommended dosage.,
                                Do not take paracetamol with alcohol.,
                                Consult a doctor before use if you have liver or kidney disease.,
                                Do not take paracetamol with other medications containing paracetamol to avoid overdose.,
                                If symptoms persist or worsen, consult a doctor.,
                                In case of overdose, seek immediate medical attention.,
                                Keep out of reach of children.
                            </p>
                        </li>

                        <li className="list-row">
                            <div>
                                <div className='uppercase text-md font-bold'>Alternatives:</div>
                            </div>
                            <p className="list-col-wrap text-xs">
                                Ibuprofen (for pain and fever),
                                Aspirin (for pain and fever, but not recommended for children due to Reye's syndrome risk),
                                Naproxen (for pain and fever)
                            </p>
                        </li>

                    </ul>
                </div>

            </div>

            {/* Footer */}
            <footer className="footer sm:footer-horizontal footer-center text-base-content p-4">
                <aside>
                    <p>Made with ❤️ Milan Sony</p>
                </aside>
            </footer>

        </div>
    );
}

export default SearchPage;