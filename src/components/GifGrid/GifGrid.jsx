import useFetchGifs from "../../hooks/useFetchGifs";
import GifGridItem from '../GifGridItem/GifGridItem';

export default function GifGrid ({category}) {

    const { data:images, loading} = useFetchGifs(category);

    return(
        <>
        <h3>{category}</h3>

        { loading && <p>Loading...</p> }

        <div className="card-grid">
            {
                images.map( img => (
                    <GifGridItem
                        { ...img }
                        key={img.id}
                        />
                ))
            }
        </div>
        </>
    )
}