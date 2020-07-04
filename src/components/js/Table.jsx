import React from 'react'
import '../css/table.css'


export default class Table extends React.Component {

    render() {
        return (
            <>
                <div className="table-container">
                    {this.props.children}
                </div>
            </>
        )
    }
}
class TableBody extends React.Component {

    render() {
        return (
            <>
                <table class="table table-striped table-bordered table-sm">
                    {this.props.children}
                </table>
            </>
        )
    }
}
class TableHeader extends React.Component {

    render() {
        return (
            <>
                <div className="flex">
                    {this.props.children}
                </div>
            </>
        )
    }
}
class Thead extends React.Component {

    render() {
        return (
            <>
                <thead className="thead-dark">
                    <tr>
                        {this.props.children}
                    </tr>
                </thead>
            </>
        )
    }
}
class Tbody extends React.Component {

    render() {
        return (
            <>
                <tbody>
                    {this.props.children}
                </tbody>
            </>
        )
    }
}

export { Table, TableBody, Tbody, Thead, TableHeader }