import React from "react";
import ReportNavbar from "./ReportNavbar/ReportNavbar";
import { Route, Routes } from "react-router-dom";
import ApplicationReport from "./ReportPages/ApplicationReport/ApplicationReport";
import ConversionReport from "./ReportPages/ConversionReport/ConversionReport";
import EffectivenessСoursea from "./ReportPages/EffectivenessСourses/EffectivenessСourses";
import StudentActivity from "./ReportPages/StudentActivity/StudentActivity";
import TeacherEffectiveness from "./ReportPages/TeacherEffectiveness/TeacherEffectiveness";

export default function Report() {
  return (
    <section>
      <ReportNavbar />

      <Routes>
        <Route path="/student-activity" element={<StudentActivity />} />
        <Route path="/conversioneport" element={<ConversionReport />} />
        <Route path="/effectiveness-coursea" element={<EffectivenessСoursea />} />
        <Route path="/application-report" element={<ApplicationReport />} />
        <Route path="/teacher-effectiveness" element={<TeacherEffectiveness />} />
      </Routes>
    </section>
  );
}
