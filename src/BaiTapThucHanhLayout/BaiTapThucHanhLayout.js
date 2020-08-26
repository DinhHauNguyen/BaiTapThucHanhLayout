import React, { Component } from 'react'
import BT3Header from './BT3Header'
import BT3SideBar from './BT3SideBar'
import BT3Carousel from './BT3Carousel'
import BT3ProductList from './BT3ProductList'
import BT3Footer from './BT3Footer'
import BT3Content from './BT3Content'

export default class BaiTapThucHanhLayout extends Component {
    render() {
        return (
            <div>
                <div>
                    <div>
                        <BT3Header></BT3Header>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <BT3SideBar></BT3SideBar>
                        </div>
                        <div className="col-8">
                            <BT3Content></BT3Content>
                        </div>
                    </div>
                    <BT3Footer></BT3Footer>
                </div>
            </div>
        )
    }
}
