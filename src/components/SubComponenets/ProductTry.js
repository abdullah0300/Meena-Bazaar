import React, { useEffect, useState ,Fragment} from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../SubComponenets/ProductPage.css";
import { MdArrowForward } from "react-icons/md";
import { MdArrowBack } from "react-icons/md";
import Footer from "../shared/Footer.jsx";
import { Link, Outlet, useParams } from "react-router-dom";
import Slider from "react-slick";
import { data } from "../../data/Pdata.js";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import Pagination from "react-bootstrap/Pagination";
import { FaRegSquare } from "react-icons/fa";
import Navbar from "../shared/Navbar.jsx";
import { apiUrl } from "../../data/env.js";
import { Dialog, Disclosure, Menu, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'

function BarFilter({ filter, handleSelectOpt, handleFilterChange }) {




  const [open1, setOpen1] = useState(false);
  const [icon1, setIcon1] = useState(<BsChevronUp />);
  const changeIcon1 = () => {
    setIcon1(!icon1);
    setOpen1(!open1);
  };

  return (
    <div>
      <div
        className="flex justify-center item-center px-2 border-gray-300 rounded-md border mx-2 items-baseline"
        onClick={changeIcon1}
        style={{
          overflowY:
            filter.options && filter.options.length > 5 ? "scroll" : "auto",
        }}
      >
        <p className="text-[#59A0B8] text-[15px] px-2 pt-2 py-2 text-base font-semibold flex">
          {filter.alternateName}
        </p>
        <p>
          {icon1 ? (
            <BsChevronDown className="text-[#707070] font-semibold" />
          ) : (
            <BsChevronUp className="text-[#707070] font-semibold" />
          )}
        </p>
      </div>{" "}
      {open1 ? (
        <ul
          className="flex flex-col justify-start item-center px-2 border-gray-300 rounded-md border mx-2 items-baseline"
          style={{
            maxHeight:
              filter.options && filter.options.length > 5 ? "200px" : "auto",
            overflowY: "auto",
          }}
        >
          {filter.options?.map((opt, i) => {
            return (
              <li className="flex justify-start gap-2  item-center" key={i}>
                <input
                  type="checkbox"
                  id={opt}
                  className="text-[#707070] text-[15px] px-2 py-2 text-base font-semibold flex"
                  onChange={(e) =>
                    handleFilterChange(filter._id, opt, e.target.checked)
                  }
                />
                <label htmlFor={opt} className="py-2">
                  {opt}
                </label>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

function BarFilterMobile({ filter, handleFilterChange }) {
  const [open1, setOpen1] = useState(false);
  const [icon1, setIcon1] = useState(<BsChevronUp />);
  const changeIcon1 = () => {
    setIcon1(!icon1);
    setOpen1(!open1);
  };

  return (
    <div>
      <div
        className="flex justify-center item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline "
        onClick={changeIcon1}
      >
        <p className=" text-[#59A0B8] text-[15px] px-2 pt-2 py-2 text-base  font-semibold flex">
          {filter.alternateName}
        </p>
        <p className="">
          {icon1 ? (
            <BsChevronDown class="text-[#707070] font-semibold" />
          ) : (
            <BsChevronUp class="text-[#707070] font-semibold" />
          )}
        </p>
      </div>
      {open1 ? (
        <ul className="flex flex-col justify-start item-center  px-2 border-gray-300 rounded-md border mx-2 items-baseline ">
          {filter.options?.map((opt, i) => {
            return (
              <li class="flex justify-start item-center " key={i}>
                <input
                  type="checkbox"
                  id={opt}
                  className="text-[#707070] text-[15px] px-2 py-2 text-base font-semibold flex"
                  onChange={(e) =>
                    handleFilterChange(filter._id, opt, e.target.checked)
                  }
                />
                <label htmlFor={opt} className="py-2">
                  {opt}
                </label>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

function ProductPage({
  products,
  // currentCategory,
  categories,
  // setCurrentProductId,
  // filters,
  img,
  title,
}) {
  const { categoryId, currentCategoryName } = useParams();
  console.log("hellllll", categoryId);

  // const filteredBarFilters = [...filters].filter(
  //   (fil) => fil.categoryId === categoryId
  // );

  // const filteredCategory = categories?.filter(cat => cat._id === currentCategory);

  // console.log("allllllll", products);

  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  const [icon1, setIcon1] = useState(<BsChevronUp />);
  const [icon2, setIcon2] = useState(<BsChevronUp />);
  const [icon3, setIcon3] = useState(<BsChevronUp />);
  const [icon4, setIcon4] = useState(<BsChevronUp />);
  const [icon5, setIcon5] = useState(<BsChevronUp />);
  const [icon6, setIcon6] = useState(<BsChevronUp />);

  const changeIcon1 = () => {
    setIcon1(!icon1);
    setOpen1(!open1);
  };
  const changeIcon2 = () => {
    setIcon2(!icon2);
    setOpen2(!open2);
  };
  const changeIcon3 = () => {
    setIcon3(!icon3);
    setOpen3(!open3);
  };
  const changeIcon4 = () => {
    setIcon4(!icon4);
    setOpen4(!open4);
  };
  const changeIcon5 = () => {
    setIcon5(!icon5);
    setOpen5(!open5);
  };
  const changeIcon6 = () => {
    setIcon6(!icon6);
    setOpen6(!open6);
  };

  const [buttonVisible, setButtonVisible] = useState(false);

  const handleMouseEnter = () => {
    setButtonVisible(true);
  };

  const handleMouseLeave = () => {
    setButtonVisible(false);
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    speed: 500,
    appendDots: (dots) => (
      <div
        style={{
          display: "none",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          display: "none",
        }}
      >
        {i + 1}
      </div>
    ),
  };

  const settings1 = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    speed: 500,
    appendDots: (dots) => (
      <div
        style={{
          display: "none",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          display: "none",
        }}
      >
        {i + 1}
      </div>
    ),
  };

  function handleFilterProducts() {
    const allOptions = document.querySelectorAll(".special-element");

    const optionsArr = allOptions.map((el) =>
      el.dataset.opt ? el.dataset.opt : null
    );
    console.log(optionsArr);
  }

  const [selectedFilters, setSelectedFilters] = useState({});

  // Filter products based on the selected filters
  const filteredProducts = products
    ?.filter((p) => p.category === categoryId)
    .filter((product) => {
      return Object.entries(selectedFilters).every(([filterId, options]) => {
        // If no options are selected for a filter, include the product
        if (options.length === 0) return true;
        // Otherwise, check if the product has at least one of the selected options for the filter
        return options.some((option) =>
          product.chosenFilters.some(
            (filter) =>
              filter.filterId === filterId && filter.chosenOption === option
          )
        );
      });
    });

  // Update selected filters when a checkbox is changed
  const handleFilterChange = (filterId, option, checked) => {
    setSelectedFilters((prevFilters) => {
      // Clone the previous selected filters object
      const updatedFilters = { ...prevFilters };
      // If the filter is not yet in the selected filters, initialize it as an empty array
      if (!updatedFilters[filterId]) {
        updatedFilters[filterId] = [];
      }
      // Update the selected options for the filter based on the checkbox change
      if (checked) {
        updatedFilters[filterId].push(option);
      } else {
        updatedFilters[filterId] = updatedFilters[filterId].filter(
          (selectedOption) => selectedOption !== option
        );
      }
      return updatedFilters;
    });
  };

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)
  const sortOptions = [
    { name: 'Most Popular', href: '#', current: true },
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
  ]
  const subCategories = [
    { name: 'Totes', href: '#' },
    { name: 'Backpacks', href: '#' },
    { name: 'Travel Bags', href: '#' },
    { name: 'Hip Bags', href: '#' },
    { name: 'Laptop Sleeves', href: '#' },
  ]
  const filters = [
    {
      id: 'color',
      name: 'Color',
      options: [
        { value: 'white', label: 'White', checked: false },
        { value: 'beige', label: 'Beige', checked: false },
        { value: 'blue', label: 'Blue', checked: true },
        { value: 'brown', label: 'Brown', checked: false },
        { value: 'green', label: 'Green', checked: false },
        { value: 'purple', label: 'Purple', checked: false },
      ],
    },
    {
      id: 'category',
      name: 'Category',
      options: [
        { value: 'new-arrivals', label: 'New Arrivals', checked: false },
        { value: 'sale', label: 'Sale', checked: false },
        { value: 'travel', label: 'Travel', checked: true },
        { value: 'organization', label: 'Organization', checked: false },
        { value: 'accessories', label: 'Accessories', checked: false },
      ],
    },
    {
      id: 'size',
      name: 'Size',
      options: [
        { value: '2l', label: '2L', checked: false },
        { value: '6l', label: '6L', checked: false },
        { value: '12l', label: '12L', checked: false },
        { value: '18l', label: '18L', checked: false },
        { value: '20l', label: '20L', checked: false },
        { value: '40l', label: '40L', checked: true },
      ],
    },
  ]
  

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


  return (
    <div class="mt-0 md:mt-52">
      <div>
      <Navbar categories={categories} filters={filters} />
     

      {/* <Container fluid class="flex justify-center items-baseline">
        <Row>
          <Col xs={4} md={2}>
            <p class="font-semibold py-3 text-center text-[#59A0B8]">
              Scroll Left
            </p>
          </Col>
          <Col xs={12} md={9}>
            {" "}
            <div class="md:block hidden">
              <Slider {...settings}>
                {filteredBarFilters?.map((fil, i) => {
                  return (
                    <BarFilter
                      filter={fil}
                      handleSelectOpt={handleFilterProducts}
                      handleFilterChange={handleFilterChange}
                      key={i}
                    />
                  );
                })}
              </Slider>
            </div>
            <div class="block md:hidden">
              <Slider {...settings1}>
                {filteredBarFilters?.map((fil, i) => {
                  return (
                    <BarFilterMobile
                      filter={fil}
                      handleSelectOpt={handleFilterProducts}
                      handleFilterChange={handleFilterChange}
                      key={i}
                    />
                  );
                })}
              </Slider>
            </div>
          </Col>
        </Row>
      </Container> */}

<div >
      <div>
        {/* Mobile filter dialog */}
        <Transition.Root show={mobileFiltersOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 z-40 flex">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                  <div className="flex items-center justify-between px-4">
                    <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    <button
                      type="button"
                      className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                      onClick={() => setMobileFiltersOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>

                  {/* Filters */}
                  <form className="mt-4 border-t border-gray-200">
                    <h3 className="sr-only">Categories</h3>
                    <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                      {subCategories.map((category) => (
                        <li key={category.name}>
                          <a href={category.href} className="block px-2 py-3">
                            {category.name}
                          </a>
                        </li>
                      ))}
                    </ul>

                    {filters.map((section) => (
                      <Disclosure as="div" key={section.id} className="border-t border-gray-200 px-4 py-6">
                        {({ open }) => (
                          <>
                            <h3 className="-mx-2 -my-3 flow-root">
                              <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                <span className="font-medium text-gray-900">{section.name}</span>
                                <span className="ml-6 flex items-center">
                                  {open ? (
                                    <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                  ) : (
                                    <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                  )}
                                </span>
                              </Disclosure.Button>
                            </h3>
                            <Disclosure.Panel className="pt-6">
                              <div className="space-y-6">
                                {section.options.map((option, optionIdx) => (
                                  <div key={option.value} className="flex items-center">
                                    <input
                                      id={`filter-mobile-${section.id}-${optionIdx}`}
                                      name={`${section.id}[]`}
                                      defaultValue={option.value}
                                      type="checkbox"
                                      defaultChecked={option.checked}
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                      className="ml-3 min-w-0 flex-1 text-gray-500"
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>
                    ))}
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </Dialog>
        </Transition.Root>

        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-12">
            <h1 className="text-4xl font-bold tracking-tight  text-[#BD9229]">{currentCategoryName}</h1>

            <div className="flex items-center">
              <Menu as="div" className="relative inline-block text-left">
                <div>
                  <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                    Sort
                    <ChevronDownIcon
                      className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                      aria-hidden="true"
                    />
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      {sortOptions.map((option) => (
                        <Menu.Item key={option.name}>
                          {({ active }) => (
                            <a
                              href={option.href}
                              className={classNames(
                                option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm'
                              )}
                            >
                              {option.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>

              <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                <span className="sr-only">View grid</span>
                <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                onClick={() => setMobileFiltersOpen(true)}
              >
                <span className="sr-only">Filters</span>
                <FunnelIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <section aria-labelledby="products-heading" className="pb-24 pt-6">
            <h2 id="products-heading" className="sr-only">
              Products
            </h2>

            <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
              {/* Filters */}
              <form className="hidden lg:block">
                <h3 className="sr-only">Categories</h3>
                <ul role="list" className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                  {subCategories.map((category) => (
                    <li key={category.name}>
                      <a href={category.href}>{category.name}</a>
                    </li>
                  ))}
                </ul>

                {filters.map((section) => (
                  <Disclosure as="div" key={section.id} className="border-b border-gray-200 py-6">
                    {({ open }) => (
                      <>
                        <h3 className="-my-3 flow-root">
                          <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                            <span className="font-medium text-gray-900">{section.name}</span>
                            <span className="ml-6 flex items-center">
                              {open ? (
                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                              ) : (
                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                              )}
                            </span>
                          </Disclosure.Button>
                        </h3>
                        <Disclosure.Panel className="pt-6">
                          <div className="space-y-4">
                            {section.options.map((option, optionIdx) => (
                              <div key={option.value} className="flex items-center">
                                <input
                                  id={`filter-${section.id}-${optionIdx}`}
                                  name={`${section.id}[]`}
                                  defaultValue={option.value}
                                  type="checkbox"
                                  defaultChecked={option.checked}
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  htmlFor={`filter-${section.id}-${optionIdx}`}
                                  className="ml-3 text-sm text-gray-600"
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                ))}
              </form>
              <div className="lg:col-span-3">

      <Container fluid class="flex justify-center items-baseline">
        <Row xs={2} md={4}>
          {filteredProducts?.map((item) => (
            <Col
              key={item._id}
              class="flex justify-center items-center"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Link to={`/productDetails/${item._id}`}>
                <div className=" flex flex-col justify-start items-center  md:w-full md:w-80 w-[14rem]  xl:px-4 md:px-3 px-3">
                  <div id="content" class="mx-3 my-4 sellingCard relative">
                    <img
                      // src={item.coverImage?.url}
                      src={
                        item.coverImage?.url?.replace(
                          "/product",
                          "/tr:ar-1-1,w-640/product"
                        ) || ""
                      }
                      alt={item.name}
                      class="w-60"
                    />

                    <div className=" sellingCard-hover-div">
                      <p className="w-full text-center text-sm font-semibold uppercase">
                        Add To Cart
                      </p>
                    </div>
                  </div>
                  <h2 className=" xl:text-xl text-base font-medium mx-auto text-center">
                    {item.name}
                  </h2>
                  <span className=" xl:text-base text-sm text-primaryColor">
                    £ {item.basePrice}
                  </span>
                </div>{" "}
                <br></br>{" "}
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
</div>
      </div>
          </section>
        </main>
      </div>
    </div>
      <div class="flex justify-center items-center mb-5">
        <div class="pagination">
          <div>
            <a href="#" className="active">
              1
            </a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#" className="active">
              «
            </a>
            <a href="#" className="active_end text-[#BD9229]">
              »
            </a>
          </div>
        </div>
      </div>
    </div>
      <Outlet />
      <Footer categories={categories} />
    </div>
  );
}

export default ProductPage;
