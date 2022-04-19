import {
	FooterStyled,
	Pages,
	Image,
	Contact,
	InfoContainer,
	Social,
} from "./Footer.styled"
import logo from "../../assets/images/logo.svg"

import facebook from "../../assets/images/facebook.svg"
import twitter from "../../assets/images/twitter.svg"
import instagram from "../../assets/images/instagram.svg"
import location from "../../assets/images/icon-location.svg"
import phone from "../../assets/images/icon-phone.svg"
import email from "../../assets/images/icon-email.svg"

export default function Footer() {
	return (
		<FooterStyled>
			<div>
				<Image src={logo} />
			</div>
			<InfoContainer>
				<Contact>
					<div>
						<img src={location} />
						<span>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua
						</span>
					</div>
					<div>
						<img src={phone} />
						<span>+1-543-123-4567</span>
					</div>
					<div>
						<img src={email} />
						<span>example@huddle.com</span>
					</div>
				</Contact>
				<Pages>
					<div>
						<a>About Us</a>
						<a>What We Do</a>
						<a>FAQ</a>
					</div>
					<div>
						<a>Career</a>
						<a>Blog</a>
						<a>Contact Us</a>
					</div>
				</Pages>
				<Social>
					<div>
						<a>
							<img src={facebook} />
						</a>
						<a>
							<img src={twitter} />
						</a>
						<a>
							<img src={instagram} />
						</a>
					</div>

					<small>&copy; Copyright 2018 Huddle. All rights reserved.</small>
				</Social>
			</InfoContainer>
		</FooterStyled>
	)
}
