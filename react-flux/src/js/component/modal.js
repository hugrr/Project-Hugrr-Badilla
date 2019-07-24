import React from "react";

//create your first component
export default class Modal extends React.Component {
	render() {
		return (
			<div
				className="modal fade"
				id="exampleModalLong"
				role="dialog"
				aria-labelledby="exampleModalLongTitle"
				aria-hidden="true">
				<div className="modal-dialog" role="document">
					<div className="modal-content">
						<div className="modal-header">
							<h5 className="modal-title" id="exampleModalLongTitle">
								Aviso
							</h5>
							<button type="button" className="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							<textarea className="form-control" rows="5" id="comment" />
						</div>
						<div className="modal-footer">
							<button type="button" className="btn btn-secondary" data-dismiss="modal">
								Close
							</button>
							<button type="button" className="btn btn-primary">
								Save changes
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
