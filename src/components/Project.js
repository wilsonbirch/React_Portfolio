import React from 'react';
import PasswordGenerator from './assets/PW_generator.png';
import BurgerTracker from './assets/burger_tracker_screenshot.png';
import DayPlanner from './assets/TM_screenshot_.png';
import RestReviewer from './assets/rest_reviewer_screenshot.png';
import EmployeeSummary from './assets/employee_template_screenshot.png';
import EmployeeTracker from './assets/emp_track_screenshot.png';
import ReactEmp from './assets/react_employee.png';
import WorkoutTracker from './assets/workout_tracker.png';
import GoogleBooks from './assets/googlebooks.png';

function Project() {
	const projects = [
		{
			title: 'React Employee Directory',
			screenshot: ReactEmp,
			application: 'https://wilsonbirch.github.io/React_Employee_Directory/',
			github: 'https://github.com/wilsonbirch/React_Employee_Directory',
			id: 3,
		},
		{
			title: 'Google Books Search (MERN APP)',
			screenshot: GoogleBooks,
			application: 'https://intense-lowlands-28384.herokuapp.com/',
			github: 'https://github.com/wilsonbirch/Google_Books',
			id: 4,
		},
		{
			title: 'Burger Tracker',
			screenshot: BurgerTracker,
			application: 'https://stark-tundra-94857.herokuapp.com/',
			github: 'https://github.com/wilsonbirch/Burger_Tracker',
			id: 5,
		},
		{
			title: 'Project 2: Restaurant Reviewer',
			screenshot: RestReviewer,
			application: 'https://secure-mesa-11479.herokuapp.com/',
			github: 'https://github.com/wilsonbirch/restaurant-reviewer-2.0',
			id: 7,
		},
		{
			title: 'Template Engine, Employee Summary',
			screenshot: EmployeeSummary,
			application:
				'https://drive.google.com/file/d/1WVdho-EbAIigQTI1wWAudm0FUMBXwxNi/view',
			github: 'https://github.com/wilsonbirch/Template_Engine_Employee_Summary',
			id: 8,
		},
		{
			title: 'Day Planner',
			screenshot: DayPlanner,
			application: 'https://wilsonbirch.github.io/Day_Planner/',
			github: 'https://github.com/wilsonbirch/Day_Planner',
			id: 9,
		},
		{
			title: 'Employee Tracker',
			screenshot: EmployeeTracker,
			application:
				'https://drive.google.com/file/d/1eTZP16KUctK3DBhMSp740yAxJJ-_K5kD/preview',
			github: 'https://github.com/wilsonbirch/Employee_Tracker_DB-CLI',
			id: 10,
		},
		{
			title: 'Password Generator',
			screenshot: PasswordGenerator,
			application: 'https://wilsonbirch.github.io/HW3_Password_Generator/',
			github: 'https://github.com/wilsonbirch/HW3_Password_Generator',
			id: 11,
		},
		{
			title: 'Home Workout Tracker',
			screenshot: WorkoutTracker,
			application: 'https://sheltered-spire-36879.herokuapp.com/stats',
			github: 'https://github.com/wilsonbirch/Home_Workout_Tracker',
			id: 12,
		},
	];

	let newProjectCardArray = projects.map(newProjectCard);

	function newProjectCard(project) {
		return (
			<section className='card-body' key={project.id}>
				<div className='card projectCard'>
					<img
						className='card-img-top'
						src={project.screenshot}
						alt={project.name}
					></img>
					<div className='card-body'>
						<h5 className='card-title'>{project.title}</h5>
						<a
							className='projectApplication'
							href={project.application}
							target='_blank'
							rel='noopener noreferrer'
						>
							Application
						</a>
						<a href={project.github} target='_blank' rel='noopener noreferrer'>
							Repository
						</a>
					</div>
				</div>
			</section>
		);
	}

	return newProjectCardArray;
}

export default Project;
