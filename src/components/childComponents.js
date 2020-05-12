import React from 'react';
import PropTypes from 'prop-types';

class ChildComponent extends React.Component {
    render(){
        let tableContents = [];
        Object.keys(this.props.prop).forEach((key) => {
            return tableContents.push(
            <tr key={key}>
                <td>{key}</td>
                <td>{this.props.prop[key]}</td>
            </tr>);
        })
        return (
            <table>
                <thead>
                    <tr>
                        <th>Key</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    {tableContents}
                    <tr>
                        <td>randomProp</td>
                        <td>{this.props.randomProp}</td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

ChildComponent.propTypes = {
    arr: PropTypes.array,
    b: PropTypes.bool,
    optionalFunc: PropTypes.func,
    i: PropTypes.number,
    obj: PropTypes.object,
    str: PropTypes.string,
}
ChildComponent.defaultProps = {
    randomProp: "Never passes from Parent"
}
export default ChildComponent;