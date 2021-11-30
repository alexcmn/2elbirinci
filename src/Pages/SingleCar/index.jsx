import React, { useEffect, useState } from "react";
import { Col, Container, Row, Tabs, Tab, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getSingleCar } from "Store/actions/cars_actions";
import { StyledSingleCar } from "./StyledSingleCar";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import Car from "Assets/cars/car5.png";
import { translate, getLanguage } from "react-switch-lang";
import { BsCalculator } from "react-icons/bs";

function SingleCar(props) {
  const dispatch = useDispatch();
  let { id } = useParams();
  const carsState = useSelector((state) => state.cars_reducer);
  const { singleCarData } = carsState;
  const [activeTab, setActiveTab] = useState("multimedia");
  const [dataToRender, setDataToRender] = useState([]);
  // const [carImages, setCarImages] = useState([]);
  const { t } = props;
  const activeLang = getLanguage();

  useEffect(() => {
    dispatch(getSingleCar(id));
  }, [dispatch, id]);

  useEffect(() => {
    singleCarData &&
      singleCarData[activeTab].length &&
      setDataToRender(singleCarData[activeTab]);
  }, [activeTab, singleCarData]);

  // useEffect(() => {
  //     const newImages = [];
  //     singleCarData?.image?.map(img => {
  //         return newImages.push({
  //             original: img?.path,
  //             thumbnail: img?.path
  //         })
  //     })
  //     setCarImages(newImages)
  // }, [singleCarData])

  const carImages = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/"
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/"
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/"
    }
  ];

  const tabs = [
    {
      eventKey: "multimedia",
      title: t("carDetails.multimedia")
    },
    {
      eventKey: "security",
      title: t("carDetails.security")
    },
    {
      eventKey: "interiorHardware",
      title: t("carDetails.interiorHardware")
    },
    {
      eventKey: "exteriorHardware",
      title: t("carDetails.exteriorHardware")
    }
  ];

  return (
    <StyledSingleCar>
      <div className="banner">
        {/* <img className="car-img" src={Car} alt="" /> */}
        <div className="main-head">
          <h1>{t("carDetails.bannheadline")}</h1>
        </div>
      </div>
      <Container>
        <Row>
          <Col md={12} xs={12} className="gallery">
            <ImageGallery items={carImages} />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={6} xs={12} className="info">
            <div className="main-card">
              <h3>{singleCarData?.title[activeLang]}</h3>
              {/* <p>{singleCarData?.description[activeLang]}</p> */}
              <div className="price">{singleCarData?.price} TRY</div>
            </div>
          </Col>
          <Col md={6} xs={12} className="info">
            <p>{singleCarData?.description[activeLang]}</p>
            <Button>
              <a
                href="https://tebdost2.tebcetelem.com.tr/HemenKredi/Bireysel.aspx?distNo=11043&bg=46#step=1"
                target="__blank"
              >
                {t("carDetails.calculatorBtn")}
              </a>
              <BsCalculator />
            </Button>
          </Col>
        </Row>
        <div className="carr-summary">
          <Row>
            <Col md={6} xs={12}>
              <div className="item">
                <span className="label">{t("carDetails.brand")}:</span>
                <span className="value">
                  {singleCarData?.brand?.name[activeLang]}
                </span>
              </div>
              <div className="item">
                <span className="label">{t("carDetails.model")}:</span>
                <span className="value">
                  {singleCarData?.model?.modelType[activeLang]}
                </span>
              </div>
              <div className="item">
                <span className="label">{t("carDetails.modelYear")}:</span>
                <span className="value">{singleCarData?.modelYear}</span>
              </div>
              <div className="item">
                <span className="label">{t("carDetails.km")}:</span>
                <span className="value">{singleCarData?.millage}</span>
              </div>
              <div className="item">
                <span className="label">{t("carDetails.fuelType")}:</span>
                <span className="value">
                  {singleCarData?.fuelType?.typeName[activeLang]}
                </span>
              </div>
              <div className="item">
                <span className="label">{t("carDetails.gearType")}:</span>
                <span className="value">
                  {singleCarData?.gearType?.typeName[activeLang]}
                </span>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="item">
                <span className="label">{t("carDetails.bodyType")}:</span>
                <span className="value">
                  {singleCarData?.bodyType?.typeName[activeLang]}
                </span>
              </div>
              <div className="item">
                <span className="label">{t("carDetails.motorPower")}:</span>
                <span className="value">{singleCarData?.horsepower} HP</span>
              </div>
              <div className="item">
                <span className="label">{t("carDetails.kilowatt")}:</span>
                <span className="value">{singleCarData?.kilowatt}</span>
              </div>
              <div className="item">
                <span className="label">{t("carDetails.cubicCapacity")}:</span>
                <span className="value">{singleCarData?.cubicCapacity}</span>
              </div>
              <div className="item">
                <span className="label">
                  {t("carDetails.seeringWheelSide")}:
                </span>
                <span className="value">
                  {singleCarData?.steeringWheelSide}
                </span>
              </div>
              <div className="item">
                <span className="label">{t("carDetails.color")}:</span>
                <span className="value">
                  {singleCarData?.color?.name[activeLang]}
                </span>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="add-banner">
        <div className="tab-wrapper">
          <Container>
            <Tabs
              id="controlled-tab-example"
              activeKey={activeTab}
              onSelect={(k) => setActiveTab(k)}
              className="mb-3"
            >
              {tabs.map((tab, idx) => {
                return (
                  <Tab key={idx} eventKey={tab.eventKey} title={tab.title}>
                    <div className="carr-summary">
                      <Row>
                        <Col md={6}>
                          {dataToRender.length &&
                            dataToRender?.map((item, idx) => {
                              return (
                                <div className="item">
                                  <span className="label">
                                    {t("carDetails.name")}:
                                  </span>
                                  <span className="value">
                                    {activeTab === "multimedia"
                                      ? activeLang === "tr"
                                        ? item?.typeName?.tr
                                        : item?.typeName?.en
                                      : activeLang === "tr"
                                      ? item?.featureName?.tr
                                      : item?.featureName?.en}
                                  </span>
                                </div>
                              );
                            })}
                        </Col>
                      </Row>
                    </div>
                  </Tab>
                );
              })}
            </Tabs>
          </Container>
        </div>
        <img className="car-img" src={Car} alt="" />
      </div>
    </StyledSingleCar>
  );
}

export default translate(SingleCar);
