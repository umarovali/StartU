import React from 'react'
import { FaUserFriends } from "react-icons/fa";

export default function CardInfoProps(item) {
    return (
        <div>
            <div className="cardinfo__warapper">
                <div className="top">
                    <div className="left">
                        <h3>{item.suptitle}</h3>
                        <h2>{item.title}</h2>
                    </div>
                    <div className="right">{item.icon}</div>
                </div>
                <div className="down">{item.prosent} <span>{item.prosentspan}</span></div>
            </div>
        </div>
    )
}
