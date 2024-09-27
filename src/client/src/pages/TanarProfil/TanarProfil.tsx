import Navbar from "../../components/Navbar/Navbar";
import Profile from "../../components/Profile/Profile";


export default function TanarProfil() {
    return (<>
        <Navbar />
        <Profile name="Nagy János"
            accountType="Tanár"
            email="example@example.com"
            birthdate="1964.03.13"
            school="XY általános iskola és kollégium"/>
        </>)
}