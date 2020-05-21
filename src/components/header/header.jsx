import React from 'react';
import {
    Button,
    Collapse,
    DropdownItem,
    DropdownMenu,
    Nav,
    Navbar,
    NavbarBrand,
    UncontrolledDropdown
} from 'reactstrap';

// import profilephoto from '../../assets/images/users/1.jpg';
/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/
// import logodarkicon from '../../assets/images/logo-icon.png';
// import logolighticon from '../../assets/images/logo-light-icon.png';

const Header = () => {

    /*--------------------------------------------------------------------------------*/
    /*To open SIDEBAR-MENU in MOBILE VIEW                                             */
    /*--------------------------------------------------------------------------------*/

    return (
        <header className="topbar navbarbg" data-navbarbg="skin1">
            <Navbar className="top-navbar" dark expand="md">
                <div className="navbar-header" id="logobg" data-logobg="skin6">
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Logos Or Icon will be goes here for Light Layout && Dark Layout                */}
                    {/*--------------------------------------------------------------------------------*/}
                    <NavbarBrand href="/">
                        <span>
                           COVID-19 sample data - Maharashtra
                        </span>
                    </NavbarBrand>
                    {/*--------------------------------------------------------------------------------*/}
                    {/* Mobile View Toggler  [visible only after 768px screen]                         */}
                    {/*--------------------------------------------------------------------------------*/}

                </div>
                <Collapse className="navbarbg" navbar data-navbarbg="skin1">
                    <Nav className="ml-auto float-right" navbar>

                        {/*--------------------------------------------------------------------------------*/}
                        {/* Start Profile Dropdown                                                         */}
                        {/*--------------------------------------------------------------------------------*/}
                        <UncontrolledDropdown nav inNavbar>

                            <DropdownMenu right className="user-dd">
                                <DropdownItem>
                                    <i className="ti-user mr-1 ml-1"/> My Account
                                </DropdownItem>
                                <DropdownItem>
                                    <i className="ti-wallet mr-1 ml-1"/> My Balance
                                </DropdownItem>
                                <DropdownItem>
                                    <i className="ti-email mr-1 ml-1"/> Inbox
                                </DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem>
                                    <i className="ti-settings mr-1 ml-1"/> Account Settings
                                </DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem href="/pages/login">
                                    <i className="fa fa-power-off mr-1 ml-1"/> Logout
                                </DropdownItem>
                                <DropdownItem divider/>
                                <Button
                                    color="success"
                                    className="btn-rounded ml-3 mb-2 mt-2"
                                >
                                    View Profile
                                </Button>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        {/*--------------------------------------------------------------------------------*/}
                        {/* End Profile Dropdown                                                           */}
                        {/*--------------------------------------------------------------------------------*/}
                    </Nav>
                </Collapse>
            </Navbar>
        </header>
    );
}
export default Header;
