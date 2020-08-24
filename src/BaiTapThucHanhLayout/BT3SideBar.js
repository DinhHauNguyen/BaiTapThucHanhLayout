import React, { Component } from 'react'

export default class BT3SideBar extends Component {
    render() {
        return (
            <div style={{marginTop:'30px'}}>
                <h3>SHOP NAME</h3>
                <ul style={{marginTop:'30px',marginLeft:'10px'}} className="list-group">
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Categori 1
      <span className="badge badge-primary badge-pill"></span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Categori 2
      <span className="badge badge-primary badge-pill"></span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Categori 3
      <span className="badge badge-primary badge-pill"></span>
                    </li>
                </ul>
            </div>

        )
    }
}
