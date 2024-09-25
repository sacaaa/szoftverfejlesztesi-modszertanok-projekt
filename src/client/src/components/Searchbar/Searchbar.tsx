import './Searchbar.css';

export default function Searchbar() {
    return(<>
        <div className="searchbox">
            <label className="searchlabel">Keress rá tanárodra</label>
            <input type="text" className="searchinput" placeholder="Keresés" />
        </div>
    </>)
}