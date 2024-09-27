import Navbar from "../../components/Navbar/Navbar";
import Searchbar from "../../components/Searchbar/Searchbar";
import SchoolCard from "../../components/School_list/SchoolCard";
import { Link } from "react-router-dom";
import './Iskolak.css';

export default function Iskolak() {
    return (<>
        <Navbar />
        <Searchbar />
        <div className="school-list">
            <Link to="/iskolaprofil" ><SchoolCard name={"Mechwart Anrdás Gimnázium és kollégium"}/></Link>
            <SchoolCard name={"Mechwart Anrdás Gimnázium és kollégium"}/>
            <SchoolCard name={"Mechwart Anrdás Gimnázium és kollégium"}/>
            <SchoolCard name={"Mechwart Anrdás Gimnázium és kollégium"}/>
            <SchoolCard name={"Mechwart Anrdás Gimnázium és kollégium"}/>
            <SchoolCard name={"Mechwart Anrdás Gimnázium és kollégium"}/>
            <SchoolCard name={"Mechwart Anrdás Gimnázium és kollégium"}/>
            <SchoolCard name={"Mechwart Anrdás Gimnázium és kollégium"}/>
        </div>
    </>)
}