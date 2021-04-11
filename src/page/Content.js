import React, { Component } from "react";
import axios from 'axios';
import moment from 'moment';



export default class Content extends Component {


    state = {
        covid: [],
    };
    
    componentDidMount() {
        console.log("DidMount");
        // var self = this;
        axios.get("https://covid19.th-stat.com/api/open/today")
        .then(response => {
            console.log(response.data.Confirmed);
            this.setState({ covid: response.data });
        },
        function (error) {
            console.log(error);
        })
        let data = this.props.data;
        console.log("test : "+data);
    }

  render() {
        
    let data = this.state.covid;
    // Moment.locale('th');
    

    return (
        <div>
            
            <h2 className = "text-body margin-date"> อัตเดทล่าสุด : {data.UpdateDate} </h2>
            <div class="row">
                <div class="col-md-2"></div>
                    <div class="col-md-8">
                        <div class="card block-covid-case text-body"> 
                            <h4>ติดเชื้อสะสม</h4>
                            <h1> {data.Confirmed} </h1>
                            <span> ( + {data.Confirmed} ) </span>
                        </div>
                    </div>
                <div class="col-md-2"></div>
            </div>
            <div class="row text-body">
                <div class="col-md-2"></div>
                <div class="card block-covid-recover ">
                    <h4>หายแล้ว</h4>
                    <h1> {data.Recovered} </h1>
                    <span> ( + {data.NewRecovered} ) </span>
                </div>
                <div class="card block-covid-hospital">
                    <h4>รักษาอยู่ใน รพ.</h4>
                    <h1> {data.Hospitalized}</h1>
                    <span> ( + {data.NewHospitalized} ) </span>

                </div>
                <div class="card block-covid-died">
                    <h4>เสียชีวิต</h4>
                    <h1> {data.Deaths} </h1>
                    <span> ( + {data.NewDeaths} )</span>
                </div>
            </div>
        </div>
            
         
        
    );
  }
}
