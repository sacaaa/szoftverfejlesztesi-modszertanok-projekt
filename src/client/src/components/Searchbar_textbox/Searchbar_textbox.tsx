import './Searchbar_textbox.css';

export default function Searchbar_textbox() {
    return (<>
        <div className="search-container">
            <div className="search-box">
                <label className="search-label">Keress rá iskoládra vagy tanárodra</label>
                <input type="text" className="search-input" placeholder="Keresés" />
            </div>
            <div className="text-box">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel scelerisque enim, vel
                    rhoncus ipsum. Praesent pulvinar lacinia neque, eu pulvinar neque lobortis quis. Vivamus
                    orci augue, dignissim non diam eget, laoreet ultricies elit. Aliquam quis augue consequat,
                    tincidunt risus et, viverra ante. Quisque nibh libero, feugiat eu nisl sed, mollis posuere
                    mi. Sed vel mauris sit amet orci gravida blandit. Nam finibus in leo et ultrices. Nam finibus in leo et ultrices.
                </p>
            </div>
        </div>
    </>)
}