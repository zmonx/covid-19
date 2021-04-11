
import React from 'react';
import axios from 'axios';

export default class Case extends React.Component {


    componentDidMount() {
        console.log("DidMount");
        var self = this;
        axios.get("https://covid19.th-stat.com/api/open/today").then(function (response) {
            console.log(response.data);
            self.setState({ name: response.data });
        },
            function (error) {
                console.log(error);
            })
    }

}



