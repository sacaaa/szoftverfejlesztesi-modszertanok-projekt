import { useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Profile from "../../components/Profile/Profile";


export default function TanarProfil() {
    const location = useLocation();
    const { name, school, email, birthdate } = location.state || {};

    return (<>
        <Navbar />
        <Profile
            name={name}
            accountType="Tanár"
            email={email}
            birthdate={birthdate}
            school={school}
        />
    </>)
}