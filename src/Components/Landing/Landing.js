import './Landing.css'
import { ImageName } from '../../enums';
import { Link } from "react-router-dom"

const Landing = () => {
    return (
        <html>
            <body class="is-boxed has-animations">
                <div class="body-wrap">
                    <header class="site-header">
                        <div class="container">
                            <div class="site-header-inner">
                                <div class="brand header-brand">
                                    <h1 class="m-0">
                                        <a href="#">
                                            <img class="header-logo-image" src={ImageName.IMAGE_NAME.landingLogo} alt="Logo" />
                                        </a>
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </header>

                    <main>
                        <section class="hero">
                            <div class="container">
                                <div class="hero-inner">
                                    <div class="hero-copy">
                                        <h1 class="hero-title mt-0">Welcome to Sadasya</h1>
                                        <p class="hero-paragraph">The employee management tool is a comprehensive software solution designed to streamline and enhance the management of employees within an organization. With its user-friendly interface and powerful features, the tool provides HR departments and managers with efficient and effective tools to handle various aspects of employee management.</p>
                                        <div class="hero-cta">
                                            <Link to="/addCompany" className="button button-primary" id="signIn">Try now</Link>
                                            <a class="button" href="#">Get in touch</a></div>
                                    </div>
                                    <div class="hero-figure anime-element">
                                        <svg class="placeholder" width="528" height="396" viewBox="0 0 528 396">
                                            <rect width="528" height="396" class="landingRect"  />
                                        </svg>
                                        <div class="hero-figure-box hero-figure-box-01" data-rotation="45deg"></div>
                                        <div class="hero-figure-box hero-figure-box-02" data-rotation="-45deg"></div>
                                        <div class="hero-figure-box hero-figure-box-03" data-rotation="0deg"></div>
                                        <div class="hero-figure-box hero-figure-box-04" data-rotation="-135deg"></div>
                                        <div class="hero-figure-box hero-figure-box-05"></div>
                                        <div class="hero-figure-box hero-figure-box-06"></div>
                                        <div class="hero-figure-box hero-figure-box-07"></div>
                                        <div class="hero-figure-box hero-figure-box-08" data-rotation="-22deg"></div>
                                        <div class="hero-figure-box hero-figure-box-09" data-rotation="-52deg"></div>
                                        <div class="hero-figure-box hero-figure-box-10" data-rotation="-50deg"></div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section class="features section">
                            <div class="container">
                                <div class="features-inner section-inner has-bottom-divider">
                                    <div class="features-wrap">
                                        <div class="feature text-center is-revealing">
                                            <div class="feature-inner">
                                                <div class="feature-icon">
                                                    <img src={ImageName.IMAGE_NAME.feature1} alt="Feature 01" />
                                                </div>
                                                <h4 class="feature-title mt-24">Employee Database</h4>
                                                <p class="text-sm mb-0">The tool allows HR administrators to maintain a centralized employee database that includes essential information such as personal details, contact information, employment history, and job-related information.</p>
                                            </div>
                                        </div>
                                        <div class="feature text-center is-revealing">
                                            <div class="feature-inner">
                                                <div class="feature-icon">
                                                    <img src={ImageName.IMAGE_NAME.feature2} alt="Feature 02" />
                                                </div>
                                                <h4 class="feature-title mt-24">Leave Management</h4>
                                                <p class="text-sm mb-0">Simplify the process of managing employee leave requests. Employees can submit leave applications, and managers can review, approve, or reject requests within the tool. The system can also provide visibility into available leave balances.</p>
                                            </div>
                                        </div>
                                        <div class="feature text-center is-revealing">
                                            <div class="feature-inner">
                                                <div class="feature-icon">
                                                    <img src={ImageName.IMAGE_NAME.feature3} alt="Feature 03" />
                                                </div>
                                                <h4 class="feature-title mt-24">Document Management</h4>
                                                <p class="text-sm mb-0">Store and organize employee-related documents such as contracts, performance reviews, and certifications in a secure digital repository. This facilitates easy access and reduces reliance on physical paperwork.</p>
                                            </div>
                                        </div>
                                        <div class="feature text-center is-revealing">
                                            <div class="feature-inner">
                                                <div class="feature-icon">
                                                    <img src={ImageName.IMAGE_NAME.feature4} alt="Feature 04" />
                                                </div>
                                                <h4 class="feature-title mt-24">File Sharing</h4>
                                                <p class="text-sm mb-0"> Enable employees to share files and collaborate seamlessly within the organization. The tool provides a secure and centralized platform for employees to upload, download, and share files with colleagues or specific teams.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </main>

                    <footer class="site-footer">
                        <div class="container">
                            <div class="site-footer-inner">
                                <div class="brand footer-brand">
                                    <a href="#">
                                        <img class="header-logo-image" src={ImageName.IMAGE_NAME.landingLogo} alt="Logo" />
                                    </a>
                                </div>
                                <ul class="footer-links list-reset">
                                    <li>
                                        <a href="#">Contact</a>
                                    </li>
                                    <li>
                                        <a href="#">About us</a>
                                    </li>
                                    <li>
                                        <a href="#">FAQ's</a>
                                    </li>
                                    <li>
                                        <a href="#">Support</a>
                                    </li>
                                </ul>
                                <ul class="footer-social-links list-reset">
                                    <li>
                                        <a href="#">
                                            <span class="screen-reader-text">Facebook</span>
                                            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" fill="#0270D7"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="screen-reader-text">Twitter</span>
                                            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" fill="#0270D7"/>
                                            </svg>
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <span class="screen-reader-text">Google</span>
                                            <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" fill="#0270D7"/>
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                                <div class="footer-copyright">&copy; 2023 Solid, all rights reserved</div>
                            </div>
                        </div>
                    </footer>
                </div>

            </body>
        </html>
    )
}

export default Landing