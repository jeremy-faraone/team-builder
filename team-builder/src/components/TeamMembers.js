import React from 'react';

const TeamMember = (props) => {
	console.log(props);
	return (
		<div className="team">
			{props.teamMembers.map((teamMember) => (
				<div className="member" key={teamMember.id}>
					<h2>{teamMember.firstname}</h2>
					<h2>{teamMember.lastname}</h2>
					<h3>{teamMember.email}</h3>
				</div>
			))}
		</div>
	);
};

export default TeamMember;
