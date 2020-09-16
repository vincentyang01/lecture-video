import React from 'react'
import Instructor from '../Components/Instructor'

function InstructorContainer(props) {

    const flavors = [{id: 1, name: "vanilla"}, {id: 2, name: "caramel"}, {id: 3, name: "hazelnut"}]

    let instructors = flavors.map(instructorObj => <Instructor key={instructorObj.id} instructor={instructorObj} appClickHandler={props.appClickHandler}/> )

    return (
        <div>{instructors}</div>
    )

}

export default InstructorContainer