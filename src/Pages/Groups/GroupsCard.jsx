import React from "react";
import "../../assets/scss/blocks/groups/_groups_card.scss";

export default function GroupsCard(groups_card_props) {
  return (
    <div className="groups_card">
      <div className="groups_card_left">
        <div className="groups_card_title">{groups_card_props.title}</div>
        <div className="groups_card_students">{groups_card_props.students}</div>
        <div className="groups_card_teachers">
          Учитель: <span>{groups_card_props.teachers}</span>
        </div>
      </div>

      <div className="groups_card_right">
        <img
          className="groups_card_img"
          src={groups_card_props.image}
          alt="Groups_card_img"
        />
      </div>
    </div>
  );
}
