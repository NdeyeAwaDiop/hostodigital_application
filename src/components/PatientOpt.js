import {useEffect, useState} from "react";
import axios from "axios";
import TabPatientOpt from "./TabPatientOpt";
import NavbarPatient from "./layout/NavbarPatient";

const PatientOpt = ()=>{

    const [data, setData] = useState([])

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/api/patients')
            .then((response)=>setData(response.data))
    },[])
    return(
        <div className="container-fluid ">
            <h3>Liste des patients</h3>
            <table className="table mx-auto border-none ">
                <thead>
                <tr>
                    <th scope="col">NOM</th>
                    <th scope="col">PRENOM</th>
                    <th scope="col">ACTION</th>
                </tr>
                </thead>
                <tbody className="mb-5 border-0 bg-white rounded-3" >
                {data.map((patient)=>(
                        <TabPatientOpt patient={patient} key={patient.id}/>
                    )
                )}
                </tbody>
            </table>
        </div>
    )
}
export default PatientOpt;