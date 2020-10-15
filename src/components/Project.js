import React from "react";
import ProjectOne from "./assets/project_1.png"
import PasswordGenerator from "./assets/PW_generator.png"
import BurgerTracker from "./assets/burger_tracker_screenshot.png"
import ATNMY from "./assets/atnmy_screenshot.png"
import DayPlanner from "./assets/TM_screenshot_.png"
import RestReviewer from "./assets/rest_reviewer_screenshot.png"
import EmployeeSummary from "./assets/employee_template_screenshot.png"
import EmployeeTracker from "./assets/emp_track_screenshot.png"
import ReactEmp from "./assets/react_employee.png"

function Project() {

    const projects = [
    
    {
        title: "Project 1: Productivity Booster",
        screenshot: ProjectOne,
        application: "https://christopherjbourque.github.io/project1/",
        github: "https://github.com/christopherjbourque/project1",
        id: 1
    },
    {
        title: "React Employee Directory",
        screenshot: ReactEmp,
        application: "https://wilsonbirch.github.io/React_Employee_Directory/",
        github: "https://github.com/wilsonbirch/React_Employee_Directory",
        id: 2
    },
    {
        title: "Burger Tracker",
        screenshot: BurgerTracker,
        application: "https://stark-tundra-94857.herokuapp.com/",
        github: "https://github.com/wilsonbirch/Burger_Tracker",
        id: 3
    
    },
    {
        title: "ATNMY Marketing Webpage",
        screenshot: ATNMY,
        application: "https://atnmymarketing.com/",
        id: 4
    },
    {
        title: "Project 2: Restaurant Reviewer",
        screenshot: RestReviewer,
        application: "https://secure-mesa-11479.herokuapp.com/",
        github: "https://github.com/wilsonbirch/restaurant-reviewer-2.0",
        id: 5
    },
    {
        title: "Template Engine, Employee Summary",
        screenshot: EmployeeSummary,
        application: "https://drive.google.com/file/d/1WVdho-EbAIigQTI1wWAudm0FUMBXwxNi/view",
        github: "https://github.com/wilsonbirch/Template_Engine_Employee_Summary",
        id: 6
    
    },
    {
        title: "Day Planner",
        screenshot: DayPlanner,
        application: "https://wilsonbirch.github.io/Day_Planner/",
        github: "https://github.com/wilsonbirch/Day_Planner",
        id: 7
    
    },
    {
        title: "Employee Tracker",
        screenshot: EmployeeTracker,
        application: "https://drive.google.com/file/d/1eTZP16KUctK3DBhMSp740yAxJJ-_K5kD/preview",
        github: "https://github.com/wilsonbirch/Employee_Tracker_DB-CLI",
        id: 8
    },
    {
        title: "Password Generator",
        screenshot: PasswordGenerator,
        application: "https://wilsonbirch.github.io/HW3_Password_Generator/",
        github: "https://github.com/wilsonbirch/HW3_Password_Generator",
        id: 9
    }];

    let newProjectCardArray = projects.map(newProjectCard)
    
    function newProjectCard (project) {
        return (
            <section className="card-body" key={project.id}>
                <div className="card projectCard" >
                    <img className="card-img-top" src={project.screenshot} alt={project.name}></img>
                    <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <a className = "projectApplication" href= {project.application} target = "_blank" rel="noopener noreferrer">Application</a>
                        <a href= {project.github} target = "_blank" rel="noopener noreferrer">Repository</a>
                    </div>
                </div>
            </section>
        );
    }
    

    return (
        newProjectCardArray
    );
}

export default Project;