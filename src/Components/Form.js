import React from 'react'

class Form extends React.Component {
    
    state = { 
        name: "",
        price: ""
    }

    changeHandler = (e) => {
        console.log(e.target.value)
        if(e.target.name === "name"){
            this.setState({ name: e.target.value })
        } else {
            this.setState({ price: e.target.value })
        }
    }

    render(){
        return (
            <form onSubmit={(e) => {
                e.preventDefault()
                this.props.submitHandler({ name: e.target[0].value })
                this.setState({ name: "", price: ""})
                    console.log(e)
                    console.log(e.target[0].value)
    
                    this.props.submitHandler({name: e.target[0].value})
                }}>
                <input type="text" name="name" placeholder="Flavor" value={this.state.name} onChange={this.changeHandler}/>
                <input type="number" name="price" placeholder="Price" value={this.state.price} onChange={this.changeHandler}/>

                <input type="submit" value="Create" />
            </form>
    
        )

    }


}


// Uncontrolled Component - Keep single source of truth in app 



export default Form