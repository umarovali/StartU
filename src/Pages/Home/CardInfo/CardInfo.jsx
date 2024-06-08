import React from 'react'
import CardInfoProps from './CardInfoProps'
import { FaUserFriends } from "react-icons/fa";
import info from "../../../assets/images/Sales Details.png"

export default function CardInfo(item) {
    return (
        <section>
            <div className="container">
                <div className="cardinfo">
                    <h2 className='title' >Главный</h2>
                    <div className="card">
                        <CardInfoProps
                            suptitle={"Total User"}
                            title={"40,689"}
                            icon={<FaUserFriends />}
                            prosent={"8.5%"}
                            prosentspan={"Up from yesterday"} />
                        <CardInfoProps
                            suptitle={"Total Order"}
                            title={"10293"}
                            icon={<FaUserFriends />}
                            prosent={"1.3%"}
                            prosentspan={" Up from past week"} />
                        <CardInfoProps
                            suptitle={"Total Sales"}
                            title={"$89,000"}
                            icon={<FaUserFriends />}
                            prosent={"4.3%"}
                            prosentspan={" Down from yesterday"} />
                        <CardInfoProps
                            suptitle={"Total Pending"}
                            title={"2040"}
                            icon={<FaUserFriends />}
                            prosent={"1.8% "}
                            prosentspan={"Up from yesterday"} />
                    </div>
                    <div className="info">
                        <img src={info} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
