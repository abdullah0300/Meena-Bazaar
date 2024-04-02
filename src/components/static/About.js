// AboutUs.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import { IoMdOpen } from 'react-icons/io';
import styles from './about.module.css'; // Import CSS module
import Footer from '../shared/Footer';
import WhatsAppButton from '../shared/Whatsapp';
function AboutUs({ filters, categories }) {
    return (
        <div>
            <Navbar categories={categories} filters={filters} />
            <section className={styles.aboutSection} >
                <div className=''>
                    <div className={`${styles.imageColumn} col-lg-6 col-md-12 col-sm-12 md:mt-[0rem] mt-[6rem]`}> {/* Use CSS module class */}
                        <div className={styles.innerColumn}> {/* Use CSS module class */}

                            <div className={styles.image1}> {/* Use CSS module class */}
                                <a href="#" className={styles.lightboxImage} data-fancybox="images"> {/* Use CSS module class */}
                                    <img title="" src="https://ik.imagekit.io/mctozv7td/meena/1.jpg?updatedAt=1711471154752" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className={styles.container}> {/* Use CSS module class */}
                        <div className={styles.row}> {/* Use CSS module class */}
                            <div className={`${styles.contentColumn} col-lg-6 col-md-12 col-sm-12 order-2`}> {/* Use CSS module class */}
                                <div className={styles.innerColumn}> {/* Use CSS module class */}
                                    <div className={styles.secTitle}> {/* Use CSS module class */}
                                        <span className={styles.title} >About <span className='text-[#af8e40] '>Meena Bazaar by Taj</span></span> {/* Use CSS module class */}
                                        <h2 className='mt-1'>Established in 2011</h2>
                                    </div>
                                    <div className={styles.text}> {/* Use CSS module class */}
                                        We specialise in South Asian Jewellery. We cater for all your jewellery needs from casual wear to party wear to bridal wear. We also have a wide range of accessories to finish off your look.

                                        If you need any help ordering please do contact us and we will be happy to help.
                                    </div>

                                    <div className={styles.btnBox}> {/* Use CSS module class */}
                                        <a href="https://wa.me/+447403113223?text=Hello%20there!" target="_blank" className={`${styles.themeBtn} ${styles.btnStyleOne}`}>Contact Us</a> {/* Use CSS module class */}
                                    </div>
                                </div>
                            </div>

                            {/* Image Column */}

                        </div>
                    </div>
                </div>
            </section>
            <Footer />
            <WhatsAppButton />
            <Outlet />
        </div>
    );
}

export default AboutUs;
