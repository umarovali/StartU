import React, { useState } from "react";
import GroupsCard from "./GroupsCard";
import { FaPlusCircle } from "react-icons/fa";
import Card_Image from "../../assets/images/Card_Image.png";
import { IoIosSearch } from "react-icons/io";
import { Modal, Box, Typography, Button, TextField } from "@mui/material";
import useDarkModeStore from "../../Store/DarcModeStore";

export default function Groups() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { darkMode, toggleDarkMode } = useDarkModeStore();

  return (
    <section>
      <div className="container">
        <div className="groups_page">
          <div className="groups_page_head_title">Группы</div>

          <div className="groups_page_head">
            <div className="groups_page_head_inputs">
              <input
                className={`${
                  darkMode
                    ? "groups_page_head_inputs_input-light"
                    : "groups_page_head_inputs_input-dark"
                }`}
                type="text"
                placeholder="Найти группу"
              />
              <IoIosSearch className="search-icon" />
            </div>

            <div className="groups_page_head_filters">
              <div className="select_wrapper">
                <select
                  className={`${
                    darkMode
                      ? "groups_page_head_filters_choose_teacher-light"
                      : "groups_page_head_filters_choose_teacher-dark"
                  }`}
                >
                  <option value="Выберите учителя">Выберите учителя</option>
                  <option value="111">111</option>
                  <option value="222">222</option>
                  <option value="333">333</option>
                </select>
              </div>

              <div className="select_wrapper">
                <select
                  className={`${
                    darkMode
                      ? "groups_page_head_filters_choose_course-light"
                      : "groups_page_head_filters_choose_course-dark"
                  }`}
                >
                  <option value="Выберите курс">Выберите курс</option>
                  <option value="111">111</option>
                  <option value="222">222</option>
                  <option value="333">333</option>
                </select>
              </div>

              <div className="select_wrapper">
                <select
                  className={`${
                    darkMode
                      ? "groups_page_head_filters_choose_teacher-light"
                      : "groups_page_head_filters_choose_teacher-dark"
                  }`}
                >
                  <option value="Выберите учителя">Выберите уровень</option>
                  <option value="111">111</option>
                  <option value="222">222</option>
                  <option value="333">333</option>
                </select>
              </div>

              <button
                onClick={handleOpen}
                className="groups_page_head_inputs_btn"
              >
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Добавить новую группу
          </Typography>
          <TextField
            fullWidth
            margin="normal"
            label="Название группы"
            className="modal-input"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Имя учителя"
            className="modal-input"
          />
          <TextField
            fullWidth
            margin="normal"
            label="Количество студентов"
            className="modal-inputt"
          />
          <Button variant="contained" className="modal-button">
            Добавить группу
          </Button>
        </Box>
      </Modal>
    </section>
  );
}
