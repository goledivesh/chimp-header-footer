//import Script from "next/script";
import styled from "styled-components";
//import Delayed from "@/layout/Delayed";
import { HUBSPOT_ID, HUBSPOT_FORM_BLOG } from "../../lib/hubspot";
import axios from "axios";
import { useState } from "react";

import Cookies from "js-cookie";
import { getUserIPData } from "../../util/helper";
import { Button, Form } from "react-bootstrap";
var validator = require("validator");

const SubscribeFormWrap = styled.div`
  .form-group {
    position: relative;

    .form-control {
      border-radius: 30px;
      background: #ffffff;
      border: 1px solid #dddddd;
      /*box-shadow: 0px 2px 7px rgb(135 135 135 / 30%);*/
      padding: 8px 45px 8px 22px;
      height: 45px;
      font-size: 16px;

      @media only screen and (max-width: 767px) {
        box-shadow: none;
      }
    }

    .btn {
      border: 0;
      border-radius: 30px;
      padding: 10px 45px;
      background: #055ce5;
    }
  }
`;

const SubscribeForm = () => {
  const [emailValue, setEmailValue] = useState("Email address");
  const [footerError, setFooterError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validator.isEmail(emailValue)) {
      setFooterError("Please enter a valid email.");
      setSuccessMsg("");
    } else {
      const currentURL =
        window && window != undefined ? window.location.href : ``;
      const hubspotCookie = Cookies.get("hubspotutk");
      const userIpData = await getUserIPData();

      const data = {
        //"submittedAt": new Date().getTime(),
        fields: [
          {
            objectTypeId: "0-1",
            name: "email",
            value: emailValue,
          },
        ],

        context: {
          hutk: hubspotCookie, // include this parameter and set it to the hubspotutk cookie value to enable cookie tracking on your submission
          pageUri: currentURL,
          pageName: currentURL,
          ipAddress: userIpData.data.IPv4,
        },
      };


      await axios.post(`https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_ID}/${HUBSPOT_FORM_BLOG}`, JSON.stringify(data), {
        headers: {
          // Overwrite Axios's automatically set Content-Type
          'Content-Type': 'application/json'
        }
      }).then(response => {
        //console.log(response);
        if (response.status === 200) {

          if (response.data.inlineMessage)
            setSuccessMsg(response.data.inlineMessage);

          if (response.data.redirectUri) {
            if (window && window != undefined)
              window.location.href =
                response.data.redirectUri + "?email=" + emailValue;
          }

          setFooterError("");
        }
      })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  const handleChange = (event) => {
    setEmailValue(event.target.value);
  };

  return (
    <SubscribeFormWrap>
      <Form onSubmit={handleSubmit}>
        <Form.Group
          className="form-group d-flex flex-column flex-lg-row col-md-6 col-lg-auto mx-auto"
          controlId="formSearch"
        >
          <Form.Control
            type="text"
            name="email"
            autoComplete="off"
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="mt-2"
          />
          <Button type="submit" className="mt-2 ms-md-2">
            Subscribe
          </Button>
        </Form.Group>
      </Form>
      <p className="text-danger">{footerError}</p>
      <p
        className="text-success"
        dangerouslySetInnerHTML={{ __html: successMsg }}
      ></p>
    </SubscribeFormWrap>
  );
};

export default SubscribeForm;
