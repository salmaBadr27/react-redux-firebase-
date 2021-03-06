import React from "react";
import moment from "moment";

const Notifications = (props) => {
	const { notifications } = props;
	return (
		<div className="section">
			{/* <h4 className="center purple-text">Notifications</h4> */}
			<div className="card z-depth-0">
				<div className="card-content">
					<span className="card-title black-text">
						Notifications{" "}
						<span className="new badge white">
							<i className="small material-icons purple-text">notifications</i>
						</span>
						{/*  */}
					</span>
					<ul className="online-users">
						{notifications &&
							notifications.map((item) => {
								return (
									<li key={item.id}>
										<span className="purple-text">{item.user} </span>
										<span>{item.content}</span>
										<div className="note-date grey-text">
											{moment(item.time.toDate()).fromNow()}
										</div>
									</li>
								);
							})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Notifications;
