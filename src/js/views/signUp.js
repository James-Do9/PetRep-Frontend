import React, { useRef } from "react";
import { Form, Button } from "react-bootstrap";

export const SignUp = () => {
	const emailRef = useRef();
	const passwordRef = useRef();
	const confirmPassRef = useRef();
	return (
		<div>
			<div className="card">
				<div className="card-body">
					<h2 className="text-center mb-4">Sign Up</h2>
					<Form>
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" ref={emailRef} required />
						</Form.Group>
						<Form.Group id="password">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" ref={passwordRef} required />
						</Form.Group>
						<Form.Group id="confirmpass">
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control type="password" ref={confirmPassRef} required />
						</Form.Group>
						<Button className="w-100" type="submit">
							Finish Sign Up
						</Button>
					</Form>
				</div>
			</div>
			<div className="w-100 text-center mt-2">Already have an account? Login</div>
		</div>
	);
};
