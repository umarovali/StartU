import React from 'react'
import TeacherItem from "./TeacherItem";
import { GrUserFemale } from "react-icons/gr";
import { GrUser } from "react-icons/gr";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { LuSearch } from "react-icons/lu";
import { FaPlusCircle } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";



export default function Teachers() {
  return (
    <div>
      <div className="teachers_start">
        <h1>Teachers</h1>

        <div className="teacher_blocks">
          <div className="groups_teachers">
            <LiaChalkboardTeacherSolid className='groups_teachers_icons0' />
            <div className="groups_teachers_h2">
              <h2>Общее количество учителей</h2>
              <p>Общее количество учителей 11 человек.</p>
            </div>
          </div>
          <div className="groups_teachers_mans">
            <GrUser className='groups_teachers_icons_mans' />
            <div className="groups_teachers_h2_mans">
              <h2 className='groups_teachers_h2_mans_1'>Количество учителей мужчин</h2>
              <p>Количество учителей мужчин 5 человек.</p>
            </div>
          </div>
          <div className="groups_teachers_womans">
            <GrUserFemale className='groups_teachers_icons_womans' />
            <div className="groups_teachers_h2_womans">
              <h2 className='groups_teachers_h2_womans_1'>Количество учителей женщин</h2>
              <p>Количество учителей женщин 6 человек.</p>
            </div>
          </div>
        </div>



        <div className="teachers_list">
          <h2>Список учителей</h2>
          <div className="teachers_input_selects">
            <div className="teachers_inputs">
              <input
                type="text"
                placeholder="Поиск учителей..."
                className="teachers_searchs_inputs"
              />
              <LuSearch className="teachers_searchs_icons" />
            </div>

            <div className="teachers_selects">
              <select className="teachers_category_selects" >
                <option >Все учителя</option>
                <option >Мужчина</option>
                <option >Женщина</option>
              </select>

              <select className="teachers_category_selects">
                <option>Все категории</option>
                <option>Front End</option>
                <option>Fullstack</option>
                <option>UI/UX Design</option>
              </select>
              <button className='btns_FaPlusCircle_teachers'>
                <FaPlusCircle className='FaPlusCircle_teachers' />
                Добавить учителей
              </button>

            </div>


          </div>


          <ul className='teachers_information'>

            <TeacherItem
              id="1"
              icons={<FaRegCircleUser />}
              name="Иван Иванов"
              years="22 года"
              gender="Мужчина"
              number="+996(220) 378 428"
              groups="Группы 6 - UI/UX Design"
              point="..."
            />

            <TeacherItem
              id="2"
              icons={<FaRegCircleUser />}
              name="Мария Петрова "
              years="22 года"
              gender="Женщина"
              number="+996(220) 378 428"
              groups="Группы 6 - UI/UX Design"
              point="..."
            />



            <TeacherItem
              id="3"
              icons={<FaRegCircleUser />}
              name="Иван Иванов"
              years="22 года"
              gender="Мужчина"
              number="+996(220) 378 428"
              groups="Группы 6 - UI/UX Design"
              point="..."
            />

            <TeacherItem
              id="4"
              icons={<FaRegCircleUser />}
              name="Мария Петрова "
              years="22 года"
              gender="Женщина"
              number="+996(220) 378 428"
              groups="Группы 6 - UI/UX Design"
              point="..."
            />


          </ul>
        </div>

      </div>
    </div>
  )
}
