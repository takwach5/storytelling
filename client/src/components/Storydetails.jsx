import React from "react";


const Storydetails=({one})=>{
    return(
        <div>
            {one.title}
            {one.story}
            {one.image}
            {one.likes}
        </div>
    )

}


export default Storydetails