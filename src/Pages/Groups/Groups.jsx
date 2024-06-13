import React from "react";
import GroupsCard from "./GroupsCard";

// Images
import { FaPlusCircle } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import Card_Image from "../../assets/images/Card_Image.png";

export default function Groups() {
  return (
    <section>
      <div className="container">
        <div className="groups_page">
          <div className="groups_page_head_title">Группы</div>

          <div className="groups_page_head">
            <div className="groups_page_head_filters">
              <select className="groups_page_head_filters_choose_teacher">
                <option value="Выберите учителя">Выберите учителя</option>
                <option value="111">111</option>
                <option value="222">222</option>
                <option value="333">333</option>
              </select>

              <select className="groups_page_head_filters_choose_course">
                <option value="Выберите учителя">Выберите курс</option>
                <option value="111">111</option>
                <option value="222">222</option>
                <option value="333">333</option>
              </select>
            </div>

            <div className="groups_page_head_inputs">
              <input
                className="groups_page_head_inputs_input"
                type="text"
                placeholder="Найти группу"
              />
              <button className="groups_page_head_inputs_btn">
                <FaPlusCircle /> Добавить группу
              </button>
            </div>
          </div>

          <div className="groups_page_cards">
            <GroupsCard
              title="Английский 0 Level"
              image={Card_Image}
              students="197 Студентов"
              teachers="Ms.Millie"
            />
            <GroupsCard
              title="Английский 0 Level"
              image={Card_Image}
              students="197 Студентов"
              teachers="Ms.Millie"
            />
            <GroupsCard
              title="Английский 0 Level"
              image={Card_Image}
              students="197 Студентов"
              teachers="Ms.Millie"
            />
            <GroupsCard
              title="Английский 0 Level"
              image={Card_Image}
              students="197 Студентов"
              teachers="Ms.Millie"
            />
            <GroupsCard
              title="Английский 0 Level"
              image={Card_Image}
              students="197 Студентов"
              teachers="Ms.Millie"
            />
            <GroupsCard
              title="Английский 0 Level"
              image={Card_Image}
              students="197 Студентов"
              teachers="Ms.Millie"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
