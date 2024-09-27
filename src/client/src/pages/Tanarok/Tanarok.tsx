import Navbar from "../../components/Navbar/Navbar";
import Searchbar from "../../components/Searchbar/Searchbar";
import Teacher_list_item from "../../components/Teacher_list_item/Teacher_list_item";
import { Link } from "react-router-dom";

export default function Tanarok() {
    return (<>
        <Navbar />
        <Searchbar />
        <Link to="/tanarprofil" className="link-decoration"><Teacher_list_item name="Nagy János" school="XY Gimnázium és kollégium" rating="4.78"/></Link>
        <Teacher_list_item name="Nagy János" school="XY Gimnázium és kollégium" rating="4.78"/>
        <Teacher_list_item name="Nagy János" school="XY Gimnázium és kollégium" rating="4.78"/>
        <Teacher_list_item name="Nagy János" school="XY Gimnázium és kollégium" rating="4.78"/>
        <Teacher_list_item name="Nagy János" school="XY Gimnázium és kollégium" rating="4.78"/>
        <Teacher_list_item name="Nagy János" school="XY Gimnázium és kollégium" rating="4.78"/>
        <Teacher_list_item name="Nagy János" school="XY Gimnázium és kollégium" rating="4.78"/>
    </>)
}