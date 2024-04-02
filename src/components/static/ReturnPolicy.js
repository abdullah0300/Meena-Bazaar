// AboutUs.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import { IoMdOpen } from 'react-icons/io';
import styles from './about.module.css'; // Import CSS module
import Footer from '../shared/Footer';
import WhatsAppButton from '../shared/Whatsapp';
function ReturnPolicy({ filters, categories }) {
    return (
        <div>
            <Navbar categories={categories} filters={filters} />
            <section className={styles.aboutSection} >
                <div className='md:mt-[2rem] mt-[8rem]'>

                    <div className={styles.container}>
                        <div className={styles.row}>
                            <div className={`${styles.contentColumn} col-lg-6 col-md-12 col-sm-12 order-2`}>
                                <div className={styles.innerColumn}>
                                    <div className={styles.secTitle}>
                                        <span className={styles.title} >Shipping Policy <span className='text-[#af8e40] '>Meena Bazaar by Taj</span></span>
                                    </div>
                                    <div className={styles.text}>
                                        Due to hygiene regulations we are unable to refund or exchange jewellery items.

                                        In the rare event your item(s) arrive damaged or faulty, please notify us via email or website chat within 48 hours of receiving your jewellery with a picture of the issue.
                                    </div>

                                    {/* <div className={styles.btnBox}> 
                                        <a href="https://wa.me/+447403113223?text=Hello%20there!" target="_blank" className={`${styles.themeBtn} ${styles.btnStyleOne}`}>Contact Us</a>
                                    </div> */}
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

export default ReturnPolicy;
