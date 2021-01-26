import React from 'react'
import Contactinput from './Contactinput'

export default function Footer() {
    return (
        <footer id="footer">
						<div className="inner">
							<section>
								<h2>Contact Us</h2>
								<form method="post" action="/">
									<div className="fields">
                                        <Contactinput name="name" placeholder="Name"/>
                                        <Contactinput name="email" placeholder="Email" />
                                        <Contactinput name="subject" placeholder="Subject" />

										<div className="field">
											<textarea name="message" id="message" rows="3" placeholder="Notes"></textarea>
										</div>
										<div className="field text-right">
											<label>&nbsp;</label>
											<ul className="actions">
												<li><input type="submit" value="Send Message" className="primary" /></li>
											</ul>
										</div>
									</div>
								</form>
							</section>
							<section>
								<h2>Contact Info</h2>

								<ul className="alt">
									<li><span className="fa fa-envelope-o"></span> <a href="/">contact@company.com</a></li>
									<li><span className="fa fa-phone"></span> +1 333 4040 5566 </li>
									<li><span className="fa fa-map-pin"></span> 212 Barrington Court New York, ABC 10001 United States of America</li>
								</ul>

								<h2>Follow Us</h2>

								<ul className="icons">
									<li><a href="/" className="icon style2 fa-twitter"><span className="label">Twitter</span></a></li>
									<li><a href="/" className="icon style2 fa-facebook"><span className="label">Facebook</span></a></li>
									<li><a href="/" className="icon style2 fa-instagram"><span className="label">Instagram</span></a></li>
									<li><a href="/" className="icon style2 fa-linkedin"><span className="label">LinkedIn</span></a></li>
								</ul>
							</section>

							<ul className="copyright">
								<li>Copyright © 2020 Kitabi Keeda </li>
							</ul>
						</div>
					</footer>
    )
}
