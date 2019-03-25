import React, { Component } from 'react'
import { Table } from 'antd'
  
class Role extends Component {
    constructor() {
        super()
        this.state = {
            shuju: [{
                key: '1',
                name: 'John Brown',
                money: '￥300,000.00',
                address: 'New York No. 1 Lake Park'
            }, {
                key: '2',
                name: 'Jim Green',
                money: '￥1,256,000.00',
                address: 'London No. 1 Lake Park'
            }, {
                key: '3',
                name: 'Joe Black',
                money: '￥120,000.00',
                address: 'Sidney No. 1 Lake Park'
            }],
            columns: [{
                title: 'Name',
                dataIndex: 'name'
            }, {
                title: 'Age',
                dataIndex: 'age'
            }, {
                title: 'Address',
                dataIndex: 'address'
            }]
        }
    };

    componentWillMount() {
        
    }

    render() {
        return (
            <Table
                columns={this.state.columns}
                dataSource={this.state.shuju}
                bordered
                title={() => 'Header'}
                footer={() => 'Footer'}
            />
        )
    }
}

export default Role
