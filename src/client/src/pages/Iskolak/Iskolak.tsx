import Navbar from "../../components/Navbar/Navbar";
import Searchbar from "../../components/Searchbar/Searchbar";
import SchoolCard from "../../components/School_list/SchoolCard";
import './Iskolak.css';

interface SchoolCardNames {
    name: string;
}

export default function Iskolak({ name }: SchoolCardNames) {
    return (<>
        <Navbar />
        <Searchbar />
        <div className="school-list">
            <SchoolCard name={"Mechwart Anrdás Gimnázium és kollégium"}/>
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