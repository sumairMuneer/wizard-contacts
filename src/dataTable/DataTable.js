import React, {useEffect} from 'react'
import DataTable from 'react-data-table-component';
import {connect} from 'react-redux'
import * as actions from '../store/actions'

let data = [];
const columns = [
    {
        name: 'Id',
        selector: 'Id',
        sortable: true,
    }, {
        name: 'Title',
        selector: 'Title',
        sortable: true,

    },
    {
        name: 'Item No',
        selector: 'ItemNo', sortable: true,

    },

    {
        name: 'Item Code',
        selector: 'Code', sortable: true,

    }, {
        name: 'Item Detail',
        selector: 'ItemDetail', sortable: true,

    },
];


const CustomDataTable = (props) => {

    useEffect(() => {
        props.fetchItems()
        let {state} = props
        console.log(" state ", state)
        data = state.data
    }, [])

    const addNewItemHandler = (event) => {
        props.history.push('/newItem')
    }
    return (
        <>

            <DataTable
                title={
                    <div className='table-header'>
                        <span>Items List </span>
                        <button  className={'btn-secondary'} onClick={(event => addNewItemHandler(event))}>Add Items</button>
                    </div>
                }
                columns={columns}
                data={data}
                pagination={true}
                // paginationDefaultPage={5}
                paginationPerPage={15}
                striped
                highlightOnHover
                noContextMenu={true}
                className='table-bordered'
                // direction='rtl'
            />
        </>
    )
};

const mapStateToProps = (state) => {
    return {
        state: state.fetchItemsReducer
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        fetchItems: () => dispatch(actions.fetchItems())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomDataTable)
