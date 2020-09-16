import React from 'react'




class Instructor extends React.Component{
    instructorClickHandler = () => {
        this.props.appClickHandler(this.props.instructor)
    }
    render(){
        console.log("hello", this.props.instructor)
        return <p onClick={this.instructorClickHandler}>{this.props.instructor.name}</p> 
        //55:00 How to pass in the instructor clicked on but have it wait
    }
    // }

}
export default Instructor