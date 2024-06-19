import React from 'react'

export default function TeacherItem(teachers_items_props) {
    return (
        <div className="teachers_item2">
            <div className="teachers_ids">{teachers_items_props.id}</div>

            <div className='teachers_items_FaRegCircleUser'>{teachers_items_props.icons}</div> 
            <div className="teachers_names_mans">{teachers_items_props.name}</div>
            <div className="teachers_years">{teachers_items_props.years}</div>

            <div className="teachers_mans">{teachers_items_props.gender}</div>
            <div className="teachers_nomders">{teachers_items_props.number}</div>
            <div className="teachers_items1">{teachers_items_props.groups}</div>
            <div className="teachers_thiplpoints">{teachers_items_props.point}</div>

        </div>
    )
}
