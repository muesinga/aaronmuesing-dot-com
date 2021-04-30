import Piece from './Piece'

function MusicContainer({ music }) {

    const piece = music.map((piece) => 
    <Piece key={piece.id} piece={piece} title={piece.title} />);

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