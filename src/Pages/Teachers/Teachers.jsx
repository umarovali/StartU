import React from 'react';
import { FaRegCircleUser } from "react-icons/fa6";
import { GrUserFemale } from "react-icons/gr";
import { GrUser } from "react-icons/gr";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";
import { LuSearch } from "react-icons/lu";
import { FaPlusCircle } from "react-icons/fa";

export default function Teachers() {
  return (
    <div>
      <div className="teach_start">
        <h1>Teachers</h1>
        <div className="teach_block">
          <div className="group_teachers">
            <LiaChalkboardTeacherSolid className='group_teachers_icons0' />
            <div className="group_teachers_h2">
              <h2>Общее количество учителей</h2>
              <p>Общее количество учителей 11 человек.</p>
            </div>
          </div>
          <div className="group_teachers_man">
            <GrUser className='group_teachers_icons_man' />
            <div className="group_teachers_h2_man">
              <h2 className='group_teachers_h2_man_1'>Количество учителей мужчин</h2>
              <p>Количество учителей мужчин 5 человек.</p>
            </div>
          </div>
          <div className="group_teachers_woman">
            <GrUserFemale className='group_teachers_icons_woman' />
            <div className="group_teachers_h2_woman">
              <h2 className='group_teachers_h2_woman_1'>Количество учителей женщин</h2>
              <p>Количество учителей женщин 6 человек.</p>
            </div>
          </div>
        </div>

        <div className="teacher_list">
          <h2>Список учителей</h2>
          <div className="teach_in_se">
            <div className="teach_input">
              <input
                type="text"
                placeholder="Поиск учителей..."
                className="search_input"
              />
              <LuSearch className="search_icon" />
            </div>

            <div className="select">
              <select className="category_select" >
                <option >Все учителя</option>
                <option >Мужчина</option>
                <option >Женщина</option>
              </select>

              <select className="category_select">
                <option>Все категории</option>
                <option>Front End</option>
                <option>Fullstack</option>
                <option>UI/UX Design</option>
              </select>
              <button className='btn_FaPlusCircle_teach'>
                <FaPlusCircle className='CiCirclePlus_teacher' />
                Добавить учителей
              </button>

            </div>


          </div>



          <ul className='teach_info2'>

            <li className="teacher_item">
              <div className="teacher_id">1</div>
              <FaRegCircleUser className='FaRegCircleUser' />
              <div className="teacher_name_man"><li>Иван Иванов</li></div>
              <div className="teacher_years"><li >22 года</li></div>

              <div className="teacher_man"><li>Мужчина</li></div>
              <div className="teacher_nomder"><li> +996 (234) 567-8901</li></div>
              <div className="teacher_item1"><li>Группы 6 - UI/UX Design</li></div>
              <div className="teach_thiplpoint"><li>...</li></div>

            </li>
            <hr className='teach_hr' />


            <li className="teacher_item">
              <div className="teacher_id">2</div>

              <FaRegCircleUser className='FaRegCircleUser' />
              <div className="teacher_name_woman"><li>Мария Петрова</li></div>
              <div className="teacher_years"><li >22 года</li></div>

              <div className="teacher_woman"><li>Женщина</li></div>
              <div className="teacher_nomder"><li> +996 (234) 567-8901</li></div>
              <div className="teacher_item1"><li>Группы 6 - UI/UX Design</li></div>
              <div className="teach_thiplpoint"><li>...</li></div>

            </li>
            <hr className='teach_hr' />

            <li className="teacher_item">
              <div className="teacher_id">3</div>

              <FaRegCircleUser className='FaRegCircleUser' />
              <div className="teacher_name_man"><li>Иван Иванов</li></div>
              <div className="teacher_years"><li >22 года</li></div>

              <div className="teacher_man"><li>Мужчина</li></div>
              <div className="teacher_nomder"><li> +996 (234) 567-8901</li></div>
              <div className="teacher_item1"><li>Группы 6 - UI/UX Design</li></div>
              <div className="teach_thiplpoint"><li>...</li></div>

            </li>

            <hr className='teach_hr' />


            <li className="teacher_item">
              <div className="teacher_id">4</div>

              <FaRegCircleUser className='FaRegCircleUser' />
              <div className="teacher_name_woman"><li>Мария Петрова</li></div>
              <div className="teacher_years"><li >22 года</li></div>

              <div className="teacher_woman"><li>Женщина</li></div>
              <div className="teacher_nomder"><li> +996 (234) 567-8901</li></div>
              <div className="teacher_item1"><li>Группы 6 - UI/UX Design</li></div>
              <div className="teach_thiplpoint"><li>...</li></div>

            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
