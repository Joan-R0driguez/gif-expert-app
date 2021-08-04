import { useState } from "react"
import AddCategory from "../AddCategory"
import GifGrid from "../GifGrid/GifGrid";

export default function GitExpertApp () {

    const [categories, setCategories] = useState(["Naruto"]);

    return(
        <>
            <h2>GitExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                {
                    categories.map( category =>
                     <GifGrid
                        key={category}
                        category={category} />
                        )                
                }
            </ol>
        </>
    )
}