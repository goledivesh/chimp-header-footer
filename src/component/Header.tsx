import Image from "next/image";
import Link from "next/link";
//import React from "react";
import styled from 'styled-components';
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const StyledNavbar = styled(Navbar)`
  border-bottom: 1px solid #ddd;
  background-color: #fff;
  padding: 0 1rem;
  font-size: 14px;
  transform: translateY(0);
  transition: all 0.3s ease-out;
  box-shadow: 0 1px 4px 0 rgba(209, 209, 209, 0.5) !important;
  height: var(--navbar-height);

  @media only screen and (min-width: 991px) {
    align-items: center;
  }

  @media only screen and (max-width: 991px) {
    padding: 18px 1rem;
  }

  .btn,
  button.btn {
    border-radius: 20.5px;
    font-size: 14px;
    height: 41px;
    padding: 9px 40px;
    transition: all 0.3s ease-out;

    &.btn-link {
      padding: 9px 10px;
      text-decoration: none;
    }
  }

  .btn-secondary {
    background-color: transparent;
    border-color: #035ce5;
    border-radius: 20.5px;
    color: #035ce5;
    min-width: 125px;
  }

  .navbar-brand {
    a {
      display: flex;
      align-items: center;
    }
  }

  .btn-primary {
    background-color: #055ce5;
    border-color: #055ce5;
    border-radius: 20.5px;
    font-family: ProximaNova-Regular;
    min-width: 125px;
  }

  .navbar-toggler {
    box-shadow: none !important;
  }

  .navbar-collapse {
    margin: 0 -1rem;
  }

  &.navbar-expand-lg > .container,
  &.navbar-expand-lg > .container-fluid {
    @media (max-width: 991.98px) {
      padding-right: 0;
      padding-left: 0;
    }
  }

  .navbar-nav {
    position: relative;
    padding: 1.3rem 0;
    margin-left: 15px;
    background: #ffffff;

    @media only screen and (max-width: 991px) {
      padding-bottom: 0;
      margin-bottom: -1rem;
    }

    @media (max-width: 575px) {
      margin-left: 0;
    }

    .nav-item {
      padding: 0 6px;
      position: relative;

      @media only screen and (max-width: 991px) {
        padding: 0;
      }

      &::after {
        content: "";
        position: absolute;
        left: 50%;
        right: 50%;
        height: 2px;
        background-color: #9142a1;
        bottom: -1.6rem;
        transition: all 0.3s ease-out;
      }

      &:hover {
        .nav-link {
          color: #9142a1;
        }

        &::after {
          @media only screen and (min-width: 991px) {
            left: 12px;
            right: 12px;
          }
        }
      }

      &.active {
        &::after {
          @media only screen and (min-width: 991px) {
            left: 12px;
            right: 12px;
          }
        }

        .nav-link {
          color: #9142a1;

          @media only screen and (min-width: 992px) {
            text-shadow: 0 0 0.3px #90459a, 0 0 0.3px #90459a !important;
            background: 0 0;
          }

          @media only screen and (max-width: 991px) {
            background-color: #90459a;
            color: #fff;
            text-align: center;
          }
        }
      }

      .nav-link {
        color: #424242;
        font-family: ProximaNova-Regular;
        font-size: 14px;
        line-height: 1.5;

        @media only screen and (max-width: 991px) {
          text-align: center;
          border-top: 1px solid #ccc;
        }
      }

      &.dropdown {
        &.show {
          .dropdown-toggle {
            &::after {
              transform: rotate(180deg);
            }

            &.nav-link {
              @media only screen and (max-width: 991px) {
                background-color: #90459a;
                color: #fff;
              }
            }
          }
        }

        .dropdown-toggle {
          &::after {
            background-image: url('/images/icons/grey-down-arrow-icon.svg');
            background-size: contain;
            background-repeat: no-repeat;
            width: 10px;
            height: 7px;
            vertical-align: 1px;
            border: 0 solid transparent !important;
            transition: all 0.3s ease-out;
          }
        }

        .dropdown-menu {
          margin-top: 21.9px;
          border: 1px solid #ededed;
          border-radius: 0 0 4px 4px;
          background-color: #fff;
          -webkit-box-shadow: 0 1px 4px 0 rgb(209 209 209 / 50%);
          box-shadow: 0 1px 4px 0 rgb(209 209 209 / 50%);

          @media only screen and (max-width: 991px) {
            box-shadow: none;
            border-top: 1px solid #ccc;
            border-bottom: 0 solid transparent;
            border-left: 0 solid transparent;
            border-right: 0px solid transparent;
            text-align: center;
            padding-top: 0;
            margin-top: 0;
          }

          .dropdown-item {
            font-size: 12px;
            color: #676767;
            padding: 17px 1.5rem;
            position: relative;
            line-height: 1.5;

            @media only screen and (max-width: 991px) {
              padding: 10px 1.5rem;
            }

            &::before {
              content: "";
              display: block;
              position: absolute;
              top: 50%;
              bottom: 50%;
              left: 0;
              width: 2px;
              background-color: #9142a1;
              -webkit-transition: all 0.3s ease-out;
              -o-transition: all 0.3s ease-out;
              transition: all 0.3s ease-out;

              @media only screen and (max-width: 991px) {
                display: none;
              }
            }

            &::after {
              content: "";
              display: block;
              position: absolute;
              left: 1rem;
              right: 1rem;
              bottom: 0;
              height: 1px;
              background-color: #e2e2e2;
              z-index: 999;

              @media only screen and (max-width: 991px) {
                left: 0;
                right: 0;
              }
            }

            &:last-child {
              &::after {
                display: none;
              }
            }

            &:hover {
              color: #9142a1;
              background: 0 0;

              &::before {
                top: 0;
                bottom: 0;
              }
            }

            &.active {
              font-weight: bolder;
              background-color: #fff;
              color: #9142a1;

              @media only screen and (max-width: 991px) {
                background-color: #efe7f5;
                color: #5b5b5b;
              }

              &::before {
                top: 0;
                bottom: 0;
              }
            }
          }
        }
      }
    }
  }

  .nav-search {
    &.btn {
      border-right: 1px solid #ccc;
      border-radius: 0;
      height: auto;
      padding: 0 10px;

      img {
        width: 17px;
        height: 17px;
      }
    }
  }
`;

const StyledNavbarToggle = styled(Navbar.Toggle)`
  width: 26px;
  height: 18px;
  position: relative;
  margin: 5px 0 0;
  border: 0 solid transparent;
  -webkit-transform: rotate(0);
  -moz-transform: rotate(0);
  -o-transform: rotate(0);
  -ms-transform: rotate(0);
  transform: rotate(0);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: #242734;
    border-radius: 9px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0);
    -moz-transform: rotate(0);
    -o-transform: rotate(0);
    -ms-transform: rotate(0);
    transform: rotate(0);
    -webkit-transition: 0.25s ease-in-out;
    -moz-transition: 0.25s ease-in-out;
    -o-transition: 0.25s ease-in-out;
    transition: 0.25s ease-in-out;

    &:nth-child(1) {
      top: 6px;
      width: 0%;
      left: 50%;
    }

    &:nth-child(2) {
      -webkit-transform: rotate(45deg);
      -moz-transform: rotate(45deg);
      -o-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }

    &:nth-child(3) {
      -webkit-transform: rotate(-45deg);
      -moz-transform: rotate(-45deg);
      -o-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-45deg);
    }

    &:nth-child(4) {
      top: 6px;
      width: 0%;
      left: 50%;
    }
  }

  &.collapsed {
    span {
      display: block;
      position: absolute;
      height: 2px;
      width: 100%;
      background: #242734;
      border-radius: 9px;
      opacity: 1;
      left: 0;
      -webkit-transform: rotate(0);
      -moz-transform: rotate(0);
      -o-transform: rotate(0);
      -ms-transform: rotate(0);
      transform: rotate(0);
      -webkit-transition: 0.25s ease-in-out;
      -moz-transition: 0.25s ease-in-out;
      -o-transition: 0.25s ease-in-out;
      transition: 0.25s ease-in-out;

      &:nth-child(1) {
        top: 0;
      }

      &:nth-child(2),
      &:nth-child(3) {
        top: 6px;
      }

      &:nth-child(4) {
        top: 12px;
      }
    }
  }
`;

const MobileTopBg = styled.div`
  display: none;

  @media (max-width: 575px) {
    display: none;
    width: 100%;
    padding: 15px;
    vertical-align: middle;
    padding: 15px 20px 15px 20px;
    background-image: url(https://d1wjn4fmcgu4dn.cloudfront.net/mobile/bg_menu_tablet.svg);
    background-size: 60%;
    background-repeat: no-repeat;
    background-position: right top;
  }
`;

const MobileNavBtn = styled.div`
  margin: 0 10px 0 auto;

  @media (min-width: 577px) {
    display: none;
  }
`;

const TabNavBtn = styled.div`
  margin: 0 10px 0 auto;
  display: none;

  @media (max-width: 991px) and (min-width: 576px) {
    display: block;
  }
`;

const MobileAuthBtn = styled.div`
  text-align: center;
  padding: 18px 21px;
  background-color: #f2f5fa;

  .btn-secondary {
    margin-right: 9px;
  }
`;

const DesktopNavBtn = styled.div`
  @media (max-width: 992px) {
    display: none;
  }

  .nav-login {
    font-family: ProximaNova-Medium;
    margin-right: 12px;
  }
`;

const NavbarComp = () => {


  return (
    <StyledNavbar expand="lg" sticky="top" className="cp_nav">
      <Container>
        <Navbar.Brand>
          <Link href='/' prefetch={false}>
            <Image
              src="/images/header_logo.svg"
              alt="Charitable Impact"
              width={122}
              height={25}
            />
          </Link>
        </Navbar.Brand>

        {/* Mobile Nav Button */}
        <MobileNavBtn>
          <a
            href="/search"
            className="btn btn-link nav-search"
          >
            <Image
              src="/images/icon-search.png"
              alt="Search for charities and giving groups"
              width={17}
              height={17}
            />
          </a>
        </MobileNavBtn>

        {/* Tablet Nav Button */}
        <TabNavBtn id="tablet-header-right-section">
          <a
            href={`/search`}
            className="btn btn-link nav-search"
          >
            <Image
              src={`/images/icon-search.png`}
              alt="Search for charities and giving groups"
              width={17}
              height={17}
            />
          </a>
          <a
            href={`/users/login`}
            className="btn btn-link"
          >
            Log in
          </a>
          <a
            className="btn btn-primary my-2 my-sm-0"
            href={`/users/new`}
          >
            Sign up
          </a>
        </TabNavBtn>

        <StyledNavbarToggle aria-controls="navbarSupportedContent">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </StyledNavbarToggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav as="ul">
            <MobileTopBg />

            <MobileAuthBtn className="d-block d-sm-none">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    `/users/login`;
                }}
              >
                Log in
              </button>

              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href =
                    `/users/new`;
                }}
              >
                Sign up
              </button>
            </MobileAuthBtn>

            <Nav.Item as="li">
              <Link href={`/how-it-works`} passHref legacyBehavior prefetch={false}>
                <a className="nav-link">How it works</a>
              </Link>
            </Nav.Item>

            <NavDropdown as="li" title=" About " id="ci-nav-dropdown">
              <Link href={`/who-we-are`} passHref legacyBehavior prefetch={false}>
                <NavDropdown.Item>Who we are</NavDropdown.Item>
              </Link>
              <Link href={`/foundation`} passHref legacyBehavior prefetch={false}>
                <NavDropdown.Item>
                  The Foundation
                </NavDropdown.Item>
              </Link>
              <Link href={`/fees`} passHref legacyBehavior prefetch={false}>
                <NavDropdown.Item>Fees</NavDropdown.Item>
              </Link>
              <Link href={`/careers`} passHref legacyBehavior prefetch={false}>
                <NavDropdown.Item>Careers</NavDropdown.Item>
              </Link>
            </NavDropdown>

            <NavDropdown as="li" title=" Solutions " id="ci-nav-dropdown">
              <Link href={`/advisors`} passHref legacyBehavior prefetch={false}>
                <NavDropdown.Item>For Advisors</NavDropdown.Item>
              </Link>
              <Link href={`/charities`} passHref legacyBehavior prefetch={false}>
                <NavDropdown.Item>For Charities</NavDropdown.Item>
              </Link>
            </NavDropdown>

            <NavDropdown as="li" title=" Resources " id="ci-nav-dropdown" className="active">
              <Link href={`/blog`} passHref legacyBehavior prefetch={false}>
                <NavDropdown.Item className="active">Blog</NavDropdown.Item>
              </Link>
              <Link href="https://help.charitableimpact.com" passHref legacyBehavior prefetch={false}>
                <NavDropdown.Item>Help Centre</NavDropdown.Item>
              </Link>
              <Link href={`/advisor-guide`} passHref legacyBehavior prefetch={false}>
                <NavDropdown.Item>Charitable Impact for Advisors Guide</NavDropdown.Item>
              </Link>
            </NavDropdown>


            <Nav.Item as="li">
              <Link href={`/press`} passHref legacyBehavior prefetch={false}>
                <a className="nav-link">Press</a>
              </Link>
            </Nav.Item>

            <Nav.Item as="li">
              <Link href={`/contact`} passHref legacyBehavior prefetch={false}>
                <a className="nav-link">Contact us</a>
              </Link>
            </Nav.Item>

          </Nav>
        </Navbar.Collapse>

        {/* Desktop Navigation */}
        <DesktopNavBtn id="header-right-section">
          <a
            href={`/search`}
            className="btn btn-link nav-search"
          >
            <Image
              src='/images/icon-search.png'
              alt="Search for charities and giving groups"
              width={17}
              height={17}
            />
          </a>
          <a
            href={`/users/login`}
            className="btn btn-link nav-login nonAuthBtns"
          >
            Log in
          </a>
          <a
            className="btn btn-primary my-2 my-sm-0 nonAuthBtns"
            href={`m/users/new`}
          >
            Sign up
          </a>
        </DesktopNavBtn>
      </Container>
    </StyledNavbar>
  );
};

export default NavbarComp;
