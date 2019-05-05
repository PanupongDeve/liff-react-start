import { connect } from 'react-redux';
import React, { Component } from 'react';


 class Component1 extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>VIEW1</h1>
                <button onClick={ () => this.props.history.push('/view2')}>view2</button>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        history: state.history
    }
}

export default connect(mapStateToProps)(Component1);

