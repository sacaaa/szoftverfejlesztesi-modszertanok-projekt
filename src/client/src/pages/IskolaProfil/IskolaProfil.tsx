import Navbar from "../../components/Navbar/Navbar";
import SchoolProfile from "../../components/SchoolProfile/SchoolProfile";

export default function IskolaProfil(){
    return(
        <>
            <Navbar/>
            <SchoolProfile  schoolName="XY Általános Iskola és Kollégium"
                            accountType="Diák"
                            email="example@example.com"
                            birthdate="2009.03.13"
                            />
            
        </>
    )
}