import React from 'react'
import Instructor from '../Components/Instructor'
import Form from '../Components/Form'

class InstructorContainer extends React.Component {

    state = {
        flavors: [{ id: 1, name: "vanilla", price: 5 }, { id: 2, name: "caramel", price: 6 }, { id: 3, name: "hazelnut", price: 7 }]
    }

    // flavors = () => [{ id: 1, name: "vanilla" }, { id: 2, name: "caramel" }, { id: 3, name: "hazelnut" }]

    submitHandler = (obj) => {
        // Async actions in JS cause both console.logs to return the same thing
        console.log(obj)
        let newArray = [...this.state.flavors, obj]
        console.log("Old State: ", this.state.flavors)
        this.setState({ flavors: newArray}, () => console.log("State in render: ", this.state.flavors))
    }

    
    render(){
        let instructors = this.state.flavors.map(instructorObj => <Instructor key={instructorObj.id} instructor={instructorObj} appClickHandler={this.props.appClickHandler}/> )
        return (
            <div>
                <Form submitHandler={this.submitHandler} />
                <div>{instructors}</div>
            </div>
        )
    }
}

export default InstructorContainer