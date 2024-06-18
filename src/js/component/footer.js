import React, { Component } from "react";
import "../../styles/footer.css";
export const Footer = () => (
	<footer className="footer mt-auto py-3 text-center text-light text-muted">
		<p>
			Made with <i className="fa fa-heart text-danger" /> by{" "}
			<a href="https://github.com/Mitronios">Mitronios</a>
		</p>
		<p className="pulsing container text-light bg-dark text-muted">
			May the force be with you
			<span>
				<i className="fa-brands fa-old-republic fa-xl mx-2"></i>
			</span>
		</p>
	</footer>
);
