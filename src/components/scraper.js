import React from 'react';
import {connect} from "react-redux";
import {READDATA,SORTDATA} from "../state/actions/actions";

class Scraped extends React.Component{
     componentWillMount() {
         console.log(this.props);
    }

    showData = () => {
         let internships = [];
         console.log(this.props.state);
         for(let item in this.props.state){
             let obj = this.props.state[item];
             internships.push(<li className="listItem" key={item}>{obj.companyName}{obj.profile}{obj.location}{obj.maxStipend}{obj.minStipend}{obj.postedOn}{obj.duration}</li>);
         }
        return internships;
    };
    render() {
        return(
            <div>
            <h1>Hello</h1>
                <button onClick={this.sortData}>Sort Data</button>
                <button onClick={this.showData}>Show Data</button>
                <ul>{this.showData()}</ul>
            </div>
        )
    }

    sortData = () => {
        console.log(this.props);
        this.props.sortData();
        console.log(this.props);
        this.forceUpdate();
    }


}
const mapStateToProps = (state) => {
    return {
        state:state
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sortData: () => {dispatch(SORTDATA)},
        readData: () => {dispatch(READDATA)}
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Scraped);
