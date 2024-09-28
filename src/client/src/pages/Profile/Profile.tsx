import Navbar from "../../components/Navbar/Navbar";
import Profile from "../../components/Profile/Profile";

export default function ProfilePage() {
    return (<>
        <Navbar />
        <Profile name="Kis Pista"
        accountType="Diák"
        email="example@example.com"
        birthdate="2009.03.13"
        school="XY általános iskola és kollégium" avgRate={null}/>
        </>)
}