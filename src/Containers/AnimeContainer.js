import React from 'react'
import Instructor from '../Components/Instructor.js'

function AnimeContainer(props) {
    console.log("Hello Anime", props)
    // let instructors = props.instructors.map(instructor => <Instructor instructor={instructorObj} />) //29:40 talks about instructor
    return (
        <>
            <h1> Anime Container </h1>
            <Instructor instructor={props.instructor} />
        </>
    )
}

export default AnimeContainer