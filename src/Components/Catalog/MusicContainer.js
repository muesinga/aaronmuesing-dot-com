import MusicCard from './MusicCard'

function MusicContainer({ music }) {

    const piece = music.map((musicObj) => 
    <MusicCard key={music.id} musicObj={music} title={musicObj.title} />);

    return (
        <div class="content">
            <div className="sidebar">
                <section>
                    {piece}
                </section>
            </div>
        </div>
    )
}

export default MusicContainer