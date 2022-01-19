
import { useState, useEffect, useCallback } from "react"
import { ArrowRightCircle, Award, ChevronRight, Menu, Printer, Search, ShoppingBag, Unlock, User, Users } from "react-feather"
import { Navbar, Nav, NavDropdown } from "react-bootstrap"
import { Text } from "../text"
import { GeneralImage } from "../image"
import { Container } from '../container'
import { SecondaryButton, PrimaryButton, GrayButton } from "../button"
import { useWindowSize } from "../window/windowSize"
import { Drawer } from "../drawer"
import Logo from "../../public/assets/logo.png"
import LogoWhite from "../../public/assets/logowhite.png"
import Busket from "../../public/assets/navitems/busket_icon.svg"
import Image from "next/image"

// Base navbar
export const NavbarBase = () => {
    const window = useWindowSize()
    const [show, setShow] = useState(false)

    const [data, setData] = useState([])

    // fetching main category
    const fetchCategory = useCallback(async () => {
        try {
            const response = await Requests.LandingPage.Category();
            if (response.status === 200 && response.data.data) {
                console.log(response)
                setData(response.data.data)
            }
        } catch (error) {
            console.log(error)
        }

    }, [])


    useEffect(() => {
        fetchCategory()
    }, [fetchCategory])


    return (
        <div className="base-navbar sticky-top shadow-sm px-lg-5 bg-white">
            <Container.Fluid>
                <Container.Row>
                    <Container.Column>
                        <div className="d-flex">

                            {/* Logo container */}
                            <div>
                                <a href={"/"}>
                                    <GeneralImage
                                        src={Logo}
                                        alt="EFG Fashion logo."
                                        x={window.width >= 992 ? 170 : 140}
                                        y={window.width >= 992 ? 75 : 70}
                                    />
                                </a>
                            </div>

                            {/* Others elements */}
                            <div className="elements-container flex-fill d-none d-xl-block">
                                <div className="d-flex justify-content-end">

                                    <div className="text-center me-3">
                                        <a href="/product" className="text-decoration-none">
                                            <Text className="text-dark fw-bold fs-14 mb-0">About</Text>
                                            <Text className="text-muted fw-thin fs-12 mb-0">Be on Quality</Text>
                                        </a>
                                    </div>

                                    <div className="text-center me-3">
                                        <a href="/productfilter" className="text-decoration-none">
                                            <Text className="text-dark fw-bold fs-14 mb-0">Shop</Text>
                                            <Text className="text-muted fw-thin fs-12 mb-0">Choose Your Desire</Text>
                                        </a>
                                    </div>
                                    <div className="text-center me-3">
                                        <a href="/login" className="text-decoration-none">
                                            <Text className="text-dark fw-bold fs-14 mb-0">Shop</Text>
                                            <Text className="text-muted fw-thin fs-12 mb-0">Choose Your Desire</Text>
                                        </a>
                                    </div>
                                    <div className="text-center ms-5 w-50">
                                        <form className="d-flex justify-content-start">
                                            <input type="text" className="form-control shadow-none borde border-primary pb-2 pt-2" placeholder="Search for..." />
                                            <Search className="my-auto search text-primary" style={{ position: "relative", left: "-30px" }} />
                                        </form>
                                    </div>
                                    <div className="text-center ms-0 me-4 rounded">
                                        <div className="bg-primary-light" style={{ padding: "0.6rem" }}>
                                            <Users className="text-primary" />
                                        </div>
                                    </div>

                                    <div className="text-center ms-0 me-4 border border-primary ">
                                        <div className="pt-1 pb-1 ps-2 pe-2">
                                            <div className="d-flex justify-content-center pt-1">
                                                <Image src={Busket} alt="" className="pe-1"/>
                                                <Text className="text-primary my-auto">360৳</Text>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="elements-container flex-fill d-none d-xl-none d-sm-block d-md-block">
                                <div className="d-flex justify-content-center">
                                    <div className="text-center ms-5 w-100">
                                        <form className="d-flex justify-content-start">
                                            <input type="text" className="form-control shadow-none border border-primary" placeholder="Search for..." />
                                            <Search className="my-auto search text-primary" style={{ position: "relative", left: "-30px" }} />
                                        </form>
                                    </div>
                                </div>
                            </div>


                            {/* Menu button */}
                            <div className="elements-container d-xl-none ms-auto">
                                <GrayButton className="btn-circle" onClick={() => setShow(!show)}>
                                    <Menu className="text-dark" size={20} />
                                </GrayButton>
                            </div>
                        </div>
                        <div className="w-100 d-sm-block d-md-none">
                            <div>
                                <form>
                                    <input type="text" className="form-control shadow-none border border-primary w-100" placeholder="Search for..." />
                                </form>
                                <Search className="text-primary text-right" style={{ position: "relative", top: "-30px", left: "90%" }} />
                            </div>
                        </div>
                    </Container.Column>
                </Container.Row>
            </Container.Fluid>

            {/* Mobile drawer */}
            <Drawer
                show={show}
                width={280}
                placement="start"
                onHide={() => setShow(false)}
            >
                <div className="drawer-container">

                    <a href="#" className="btn shadow-none w-100 text-start border-bottom rounded-0 py-10">
                        <div className="d-flex">
                            <div className="pt-1 pe-3">
                                <Award size={20} className="text-muted" />
                            </div>
                            <div>
                                <Text className="text-dark fw-bold fs-13 mb-0">About</Text>
                                <Text className="text-muted fw-thin fs-12 mb-0">Be on Quality</Text>
                            </div>
                            <div className="ms-auto pt-10">
                                <ChevronRight className="text-dark float-end" size={16} />
                            </div>
                        </div>
                    </a>

                    <a href="#" className="btn shadow-none w-100 text-start border-bottom rounded-0 py-10">
                        <div className="d-flex">
                            <div className="pt-1 pe-3">
                                <ShoppingBag size={20} className="text-muted" />
                            </div>
                            <div>
                                <Text className="text-dark fw-bold fs-13 mb-0">Shop</Text>
                                <Text className="text-muted fw-thin fs-12 mb-0">Choose Your Desire</Text>
                            </div>
                            <div className="ms-auto pt-10">
                                <ChevronRight className="text-dark float-end" size={16} />
                            </div>
                        </div>
                    </a>

                    <a href="#" className="btn shadow-none w-100 text-start border-bottom rounded-0 py-10">
                        <div className="d-flex">
                            <div className="pt-1 pe-3">
                                <Printer size={20} className="text-muted" />
                            </div>
                            <div>
                                <Text className="text-dark fw-bold fs-13 mb-0">Print-on-Demand</Text>
                                <Text className="text-muted fw-thin fs-12 mb-0">Maeketplace Designs</Text>
                            </div>
                            <div className="ms-auto pt-10">
                                <ChevronRight className="text-dark float-end" size={16} />
                            </div>
                        </div>
                    </a>

                    <a href="#" className="btn shadow-none w-100 text-start border-bottom rounded-0 py-10">
                        <div className="d-flex">
                            <div className="pt-1 pe-3">
                                <Unlock size={20} className="text-muted" />
                            </div>
                            <div>
                                <Text className="text-dark fw-bold fs-13 mb-0">Login</Text>
                                <Text className="text-muted fw-thin fs-12 mb-0">Access your account</Text>
                            </div>
                            <div className="ms-auto pt-10">
                                <ChevronRight className="text-dark float-end" size={16} />
                            </div>
                        </div>
                    </a>

                    <a href="#" className="btn shadow-none w-100 text-start border-bottom rounded-0 py-10">
                        <div className="d-flex">
                            <div className="pt-1 pe-3">
                                <User size={20} className="text-muted" />
                            </div>
                            <div>
                                <Text className="text-dark fw-bold fs-13 mb-0">Signup</Text>
                                <Text className="text-muted fw-thin fs-12 mb-0">Create an account</Text>
                            </div>
                            <div className="ms-auto pt-10">
                                <ChevronRight className="text-dark float-end" size={16} />
                            </div>
                        </div>
                    </a>
                </div>
            </Drawer>
        </div>
    )
}


// Seconday navbar
export const NavbarSecondary = (props) => {
    const [data, setData] = useState([])

    // fetching main category
    const fetchCategory = useCallback(async () => {
        try {
            const response = await Requests.LandingPage.Category();
            if (response.status === 200 && response.data.data) {
                console.log(response)
                setData(response.data.data)
            }
        } catch (error) {
            console.log(error)
        }

    }, [])


    useEffect(() => {
        fetchCategory()
    }, [fetchCategory])

    return (
        <Navbar className="secondary-navbar py-0" expand="lg">
            <Container.Fluid>
                <Navbar.Brand href="/">
                    <GeneralImage
                        src={LogoWhite}
                        alt="White logo"
                        x={140}
                        y={60}
                    />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" variant="light" className="shadow-none border-0">
                    <Menu className="text-white" />
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#">design your garment</Nav.Link>
                        {/* <Nav.Link href="#">products</Nav.Link> */}
                        {data && data.length > 0 ?
                            <NavDropdown title="Products" id="basic-nav-dropdown">
                                {data && data.map((item, index) => <div key={index}><NavDropdown.Item href={`${item._id}`}>{item.title}</NavDropdown.Item></div>)}
                            </NavDropdown>
                            : null}
                        <Nav.Link href="#">shop online</Nav.Link>
                        <Nav.Link href="#">about us</Nav.Link>
                        <Nav.Link href="#">more</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#">sign in</Nav.Link>
                        <Nav.Link href="#">sign up</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container.Fluid>
        </Navbar>
    )
}


export const TopBar = () => {
    const window = useWindowSize()
    const [show, setShow] = useState(false)
    return (
        <div className="base-topbar sticky-top shadow-sm">
            <Container.Fluid className="p-0">
                <div className="d-flex justify-content-between">
                    <div className="bg-secondary d-none d-lg-block pe-2">
                        <div className="my-auto d-flex justify-content-start">
                            <img className="p-2" src="https://img.icons8.com/external-flat-juicy-fish/25/000000/external-thunder-vehicle-mechanics-flat-flat-juicy-fish.png" />
                            <Text className="text-white my-auto fw-bolder">Exclusive T-Shirt On Sell | Limited Time Only</Text>
                            <ArrowRightCircle size={26} color="white" className="ps-1 my-auto" />
                        </div>
                    </div>
                    <div className="bg-white d-none d-lg-block">
                        <a href="#">
                            <SecondaryButton className="rounded-0">
                                <Text className="fs-15 fw-thin mb-0">Start Tailoring</Text>
                            </SecondaryButton>
                        </a>
                        <a href="#">
                            <PrimaryButton className="rounded-0">
                                <Text className="fs-15 fw-thin mb-0">Call For Tailor</Text>
                            </PrimaryButton>
                        </a>
                    </div>
                </div>
                <div className="bg-secondary d-md-block d-lg-none d-xl-none p-2">
                    <div className="my-auto d-flex justify-content-start">
                        <img className="p-2" src="https://img.icons8.com/external-flat-juicy-fish/25/000000/external-thunder-vehicle-mechanics-flat-flat-juicy-fish.png" />
                        <Text className="text-white my-auto fw-bolder fs-16">Exclusive T-Shirt On Sell | Limited Time Only</Text>
                        <ArrowRightCircle size={26} color="white" className="ps-1 my-auto" />
                    </div>
                </div>
                <div className="d-flex justify-content-center ">
                    <a href="#" className="w-50 d-md-block d-lg-none d-xl-none">
                        <SecondaryButton className="rounded-0 w-100">
                            <Text className="fs-13 fw-thin mb-0">Start Tailoring</Text>
                        </SecondaryButton>
                    </a>
                    <a href="#" className="w-50 d-md-block d-lg-none d-xl-none">
                        <PrimaryButton className="rounded-0 w-100">
                            <Text className="fs-13 fw-thin mb-0">Call For Tailor</Text>
                        </PrimaryButton>
                    </a>
                </div>
            </Container.Fluid>
        </div>
    )
}
