import Link from "next/link";
import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import SubscribeForm from "./subscribe/SubscribeForm";

const FooterWrap = styled.footer`
  background-color: #f2f7fe;
  margin: 0 0 0;
  width: 100%;
`;

const SubscribeWraper = styled.div`
  padding: 45px 0;
  border-bottom: 1px solid #c0c3d4;

  @media only screen and (max-width: 991px) {
    padding: 40px;
    text-align: center;
  }
`;

const StyledH3 = styled.h3`
  font-size: 18px;
  line-height: 25px;
  margin: 0;
  color: #424242;
  font-family: ProximaNova-Regular;
  font-weight: 600;

  span {
    color: #9142a1;
  }
`;

const FooterLinksWrap = styled.div`
  padding: 45px 0;
  border-bottom: 1px solid #c0c3d4;
  min-height: 390px;

  @media (max-width: 767px) {
    text-align: center;
  }
`;

const FooterLogo = styled.div`
  @media only screen and (max-width: 767px) {
    margin-bottom: 1rem;
  }
`;

const F_Logo = styled.div`
  margin-bottom: 1rem;

  img {
    height: 36px;
    max-width: 180px;
    width: 100%;
  }
`;

const Address = styled.div`
  a {
    text-decoration: none;
    color: #263238;
    font-size: 14px;
  }
`;

const F_LinkWrap = styled.div`
  margin-bottom: 30px;

  @media only screen and (max-width: 767px) {
    margin: 0;
  }
`;

const F_LinkHeader = styled.div`
  a {
    color: #393939;
    font-size: 18px;
    font-family: ProximaNova-Semibold;
    margin-bottom: 10px;
    text-decoration: none;
    display: inline-block;

    &:hover {
      color: #9142a1;
    }
  }
`;

const F_ListHeader = styled.div`
  color: #393939;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  font-family: ProximaNova-Semibold;
`;

const F_LinkItem = styled.div`
  a {
    font-family: ProximaNova-Regular;
    color: #7f7f7f;
    font-size: 14px;
    text-decoration: none;
    display: inline-block;
    margin-bottom: 10px;

    &:hover {
      color: #9142a1;
      font-family: ProximaNova-Semibold;
    }
  }

  &.btm-border {
    border-bottom: 1px solid #c0c3d4;
    margin-bottom: 18px;
    padding-bottom: 5px;
    width: 75%;

    @media (max-width: 767px) {
      width: 100%;
    }
  }
`;

const F_AppLogo = styled.div`
  display: flex;

  @media (max-width: 767px) {
    justify-content: center;
  }
`;

const AppLogo = styled.a`
  width: auto;

  img {
    width: auto;
    max-height: 35px;
    margin-right: 5px;
    height: 100%;
  }
`;

const StyledH5 = styled.h5`
  font-size: 16px;
  font-weight: 700;
  font-family: ProximaNova-Regular;
  line-height: 22px;
  color: #393939;
  margin-bottom: 10px;
`;

const F_CopyRight = styled.div`
  padding-top: 12px;
  padding-bottom: 12px;
  display: inline-block;
  font-family: ProximaNova-Regular;

  @media only screen and (max-width: 767px) {
    text-align: center;
  }
`;

const F_SocialLinks = styled.div`
  display: inline-block;
  float: right;
  padding: 12px 0;

  @media only screen and (max-width: 767px) {
    float: none;
    display: block;
    text-align: center;
  }

  a {
    display: inline-block;
    margin-left: 10px;
  }
`;

const FooterComp = () => {
  return (
    <>
      <FooterWrap>
        <Container>
          <SubscribeWraper>
            <Row>
              <Col lg={7}>
                <StyledH3>
                  Get our best news, stories, and tips for making an impact{" "}<br />
                  <span>Subscribe to the newsletter</span>
                </StyledH3>
              </Col>

              <Col lg={5} className="align-self-center">
                <div className="text-center text-md-end">
                  <SubscribeForm />
                </div>
              </Col>
            </Row>
          </SubscribeWraper>
        </Container>

        <Container>
          <FooterLinksWrap>
            <Row>
              <Col md={9}>
                <Row>
                  <Col md={3}>
                    <FooterLogo>
                      <F_Logo>
                        <Link href='/' passHref legacyBehavior prefetch={false}>
                          <a>
                            <Image
                              src={`/images/chimp-logo.svg`}
                              alt="Charitable Impact"
                              width={180}
                              height={36}
                              loading='lazy'
                            />
                          </a>
                        </Link>
                      </F_Logo>

                      <Address>
                        <a
                          href="https://g.page/CharitableImpact?share"
                          target="_blank"
                        >
                          Charitable Impact <br />
                          #1250 - 1500 W Georgia St <br />
                          Vancouver, BC V6G 2Z6 Canada
                          <br />
                        </a>
                      </Address>
                    </FooterLogo>
                  </Col>

                  <Col md={3}>
                    <F_LinkWrap>
                      <F_LinkHeader>
                        <Link href={`/how-it-works`} passHref legacyBehavior prefetch={false}>
                          <a>How it works</a>
                        </Link>
                      </F_LinkHeader>
                    </F_LinkWrap>
                  </Col>

                  <Col md={3}>
                    <F_LinkWrap>
                      <F_ListHeader>About</F_ListHeader>
                      <F_LinkItem>
                        <Link href={`/who-we-are`} passHref legacyBehavior prefetch={false}>
                          <a>Who we are</a>
                        </Link>
                      </F_LinkItem>
                      <F_LinkItem>
                        <Link href={`/foundation`} passHref legacyBehavior prefetch={false}>
                          <a>The Foundation</a>
                        </Link>
                      </F_LinkItem>
                      <F_LinkItem>
                        <Link href={`/fees`} passHref legacyBehavior prefetch={false}>
                          <a>Fees</a>
                        </Link>
                      </F_LinkItem>
                      <F_LinkItem>
                        <Link href={`/careers`} passHref legacyBehavior prefetch={false}>
                          <a>Careers</a>
                        </Link>
                      </F_LinkItem>
                      <F_LinkItem>
                        <Link href={`/press`} passHref legacyBehavior prefetch={false}>
                          <a>Press</a>
                        </Link>
                      </F_LinkItem>
                      <F_LinkItem>
                        <Link href={`/blog`} passHref legacyBehavior prefetch={false}>
                          <a>Blog</a>
                        </Link>
                      </F_LinkItem>
                    </F_LinkWrap>
                  </Col>

                  <Col md={3}>
                    <F_LinkWrap>
                      <F_LinkItem>
                        <F_ListHeader>Support</F_ListHeader>
                      </F_LinkItem>
                      <F_LinkItem>
                        <a href="https://help.charitableimpact.com">
                          Help Centre
                        </a>
                      </F_LinkItem>
                      <F_LinkItem>
                        <Link href={`/advisor-guide`} passHref legacyBehavior prefetch={false}>
                          <a>Advisors Guide</a>
                        </Link>
                      </F_LinkItem>
                      <F_LinkItem>
                        <Link href={`/contact`} passHref legacyBehavior prefetch={false}>
                          <a>Contact us</a>
                        </Link>
                      </F_LinkItem>
                      <F_LinkItem>
                        <Link href={`/privacy`} passHref legacyBehavior prefetch={false}>
                          <a>Privacy</a>
                        </Link>
                      </F_LinkItem>
                      <F_LinkItem>
                        <Link href={`/terms`} passHref legacyBehavior prefetch={false}>
                          <a>Terms</a>
                        </Link>
                      </F_LinkItem>
                      <F_LinkItem>
                        <Link href={`/account-agreement`} passHref legacyBehavior prefetch={false}>
                          <a>Account Agreement</a>
                        </Link>
                      </F_LinkItem>
                    </F_LinkWrap>
                  </Col>
                </Row>
              </Col>

              <Col md={3}>
                <F_LinkWrap>
                  <F_ListHeader>Solutions</F_ListHeader>
                  <F_LinkItem>
                    <Link href={`/advisors`} passHref legacyBehavior prefetch={false}>
                      <a>For Advisors</a>
                    </Link>
                  </F_LinkItem>
                  <F_LinkItem className="btm-border">
                    <Link href={`/charities/`} passHref legacyBehavior prefetch={false}>
                      <a>For Charities</a>
                    </Link>
                  </F_LinkItem>
                  <F_LinkItem>
                    <StyledH5>Get the app</StyledH5>
                    <F_AppLogo>
                      <AppLogo
                        href="https://play.google.com/store/apps/details?id=com.chimp.charitableimpact.android "
                        target="_blank"
                      >
                        <Image
                          alt=""
                          src={`/images/google-play-badge.webp`}
                          className="img-fluid"
                          width={117}
                          height={35}
                          loading='lazy'
                        />
                      </AppLogo>
                      <AppLogo
                        href="https://charitableimpact.app.link/ios-corpweb"
                        target="_blank"
                        className="ms-2"
                      >
                        <Image
                          alt=""
                          src={`/images/ios-app-download-dark.svg`}
                          className="img-fluid"
                          width={105}
                          height={35}
                          loading='lazy'
                        />
                      </AppLogo>
                    </F_AppLogo>
                  </F_LinkItem>
                </F_LinkWrap>
              </Col>
            </Row>
          </FooterLinksWrap>

          <Container>
            <F_CopyRight>
              &copy; Copyright {new Date().getFullYear()} CHIMP Technology Inc. – All Rights Reserved.
            </F_CopyRight>
            <F_SocialLinks>
              <a
                href="https://go.charitableimpact.com/facebook"
                target="_blank"
              >
                <Image
                  src={`/images/social/facebook.png`}
                  width={20}
                  height={20}
                  alt="facebook"
                  loading='lazy'
                />
              </a>
              <a
                href="https://go.charitableimpact.com/linkedin"
                target="_blank"
              >
                <Image
                  src={`/images/social/linkedin.png`}
                  width={20}
                  height={20}
                  alt="linkedin"
                  loading='lazy'
                />
              </a>
              <a href="https://go.charitableimpact.com/twitter" target="_blank">
                <Image
                  src={`/images/social/twitter.png`}
                  width={20}
                  height={20}
                  alt="twitter"
                  loading='lazy'
                />
              </a>
              <a
                href="https://go.charitableimpact.com/instagram"
                target="_blank"
              >
                <Image
                  src={`/images/social/instagram.png`}
                  width={20}
                  height={20}
                  alt="instagram"
                  loading='lazy'
                />
              </a>
            </F_SocialLinks>
          </Container>
        </Container>
      </FooterWrap>
    </>
  );
};

export default FooterComp;
