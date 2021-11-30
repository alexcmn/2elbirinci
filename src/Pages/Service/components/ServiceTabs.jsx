import React from "react";
import { Tabs, Tab, Container, Row, Col } from "react-bootstrap";
import { StyledHeadline } from "Components/shared/styledComponents/Elements";
import { StyledServiceTabs } from "../StyledService";
import { translate } from "react-switch-lang";
import Gar1 from "Assets/gar1.png";
import Gar2 from "Assets/gar2.png";

function ServiceTabs({ activeTab, handleTabChange, t }) {
  const tabs = [
    {
      tabKey: "garanty",
      tabTitle: t("service.tabs.garanty"),
      title1: t("service.tab1.h1"),
      desc1: t("service.tab1.p1"),
      gar1: t("service.tab1.gar1"),
      gar2: t("service.tab1.gar2")
    },
    {
      tabKey: "expertise",
      tabTitle: t("service.tabs.expertise"),
      title1: t("service.tab2.h1"),
      desc1: t("service.tab2.p1")
    },
    {
      tabKey: "insurance",
      tabTitle: t("service.tabs.insurance"),
      title1: t("service.tab3.h1"),
      desc1: t("service.tab3.p1")
    },
    {
      tabKey: "casco",
      tabTitle: t("service.tabs.casco"),
      title1: t("service.tab4.h1"),
      desc1: t("service.tab4.p1")
    },
    {
      tabKey: "help",
      tabTitle: t("service.tabs.help"),
      title1: t("service.tab5.h1"),
      desc1: t("service.tab5.p1"),
      title2: t("service.tab5.h2"),
      desc2: t("service.tab5.p2"),
      title3: t("service.tab5.h3"),
      desc3: t("service.tab5.p3"),
      title4: t("service.tab5.h4"),
      desc4: t("service.tab5.p4"),
      title5: t("service.tab5.h5"),
      desc5: t("service.tab5.p5"),
      title6: t("service.tab5.h6"),
      desc6: t("service.tab5.p6")
    }
  ];

  return (
    <StyledServiceTabs>
      <Container>
        <Tabs
          id="controlled-tab-example"
          activeKey={activeTab}
          onSelect={(k) => handleTabChange(k)}
        >
          {tabs.map((tab, idx) => {
            return (
              <Tab key={idx} eventKey={tab.tabKey} title={tab.tabTitle}>
                <StyledHeadline data-text={tab.title1}>
                  {tab.title1}
                </StyledHeadline>
                <p className="mb-5">{tab.desc1}</p>
                {tab?.tabKey === "garanty" ? (
                  <Row>
                    <Col
                      xs={12}
                      md={6}
                      className="d-flex align-items-center justify-content-center flex-column"
                    >
                      <img src={Gar1} alt="" />
                      <p>{tab?.gar1}</p>
                    </Col>
                    <Col
                      xs={12}
                      md={6}
                      className="d-flex align-items-center justify-content-center flex-column"
                    >
                      <img src={Gar2} alt="" />
                      <p>{tab?.gar2}</p>
                    </Col>
                  </Row>
                ) : null}
                <StyledHeadline data-text={tab.title2}>
                  {tab.title2}
                </StyledHeadline>
                <p className="mb-5">{tab.desc2}</p>
                <StyledHeadline data-text={tab.title3}>
                  {tab.title3}
                </StyledHeadline>
                <p className="mb-5">{tab.desc3}</p>
                <StyledHeadline data-text={tab.title4}>
                  {tab.title4}
                </StyledHeadline>
                <p className="mb-5">{tab.desc4}</p>
                <StyledHeadline data-text={tab.title5}>
                  {tab.title5}
                </StyledHeadline>
                <p className="mb-5">{tab.desc5}</p>
                <StyledHeadline data-text={tab.title6}>
                  {tab.title6}
                </StyledHeadline>
                <p className="mb-5">{tab.desc6}</p>
              </Tab>
            );
          })}
        </Tabs>
      </Container>
    </StyledServiceTabs>
  );
}

export default translate(ServiceTabs);
