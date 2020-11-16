import { Vimeo, YouTube } from 'mdx-embed';

const Player = ({type, videoId}) => {
    switch (type) {
        case 'youtube':
            return <YouTube youTubeId={videoId} />
            break;
        case 'vimeo':
            return <Vimeo vimeoId={videoId} />
            break;
        default:
            break;
    }
    return <Player />
}

const UnitVideo = ({type, videoId}) => {

    return (
        <div className="mb-4">
            <Player type={type} videoId={videoId} />
        </div>
    )
}

export default UnitVideo;