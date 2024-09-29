import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import Profile from "../../components/Profile/Profile";

export default function ProfilePage() {
    return (
        <>
            <Navbar />
            <Profile 
                name="Kis Pista András"
                accountType="Diák"
                email="example@example.com"
                birthdate="2009.03.13"
                school={{ name: "Debreceni Egyetem", id: 1 }}
                avgRate={null}
            />
            <Footer />
        </>
    );
}