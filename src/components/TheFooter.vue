<template>
	<footer class="footer-bar">
		<div class="container">
			<small>joeysteel.com ©{{ currentYear }}</small>
			<ul class="footer-links">
				<li>
					<router-link
						href="https://www.linkedin.com/in/joseph-steel-6271a955/"
						class="hover-black-blue-gradient"
						target="_blank"
					>
						<img src="../assets/linkedin.png" alt="linkedin logo" class="footer-icon-link" />
						&nbsp;linkedin
					</router-link>
				</li>
				<li>
					<router-link
						href="https://docs.google.com/document/d/1MXtAspclKKkcOSu9L5TZgQZmOr-Ep_IAriPMn7QSSpc/edit?pli=1&tab=t.0"
						class="hover-black-blue-gradient"
						target="_blank"
					>
						<img src="../assets/cv.png" alt="linkedin logo" class="footer-icon-link" />
						&nbsp;resume
					</router-link>
				</li>
				<li>
					<router-link
						href="mailto:joseph.steel.iv@gmail.com""
						class="hover-black-blue-gradient"
						target="_blank"
					>
						<img src="../assets/email.png" alt="linkedin logo" class="footer-icon-link" />
						&nbsp;email
					</router-link>
				</li>
			</ul>
		</div>
	</footer>
</template>

<script>
export default {
	computed: {
		currentYear() {
			const d = new Date();
			return d.getFullYear();
		},
	},
};
</script>

<style scoped lang="scss">
@use "../assets/variables" as *;
.footer-bar {
	width: 100%;
	z-index: 1000;
	padding-bottom: 1rem;
	.container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		max-width: 900px;
		margin: 0 auto;

		.footer-links {
			list-style: none;
			display: flex;
			margin: 0;
			padding: 0;
			color: $background-color;
			li {
				margin-left: 20px;
				a {
					display: flex;

					.footer-icon-link {
						height: 1rem;
						align-self: center;
						transition: opacity 0.3s ease;
					}
				}

				&:hover {
					.footer-icon-link {
						opacity: 0.7;
					}
				}
			}
		}
	}
}
</style>
