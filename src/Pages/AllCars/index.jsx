import React, { useEffect, useState } from 'react'
import { StyledAllCars, StyledFilterSidebar, StyledResultCars, StyledFilterButton } from './StyledAllCars'
import Logo from 'Assets/logo1.png';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBodyTypes, getAllBrands, getAllCars, getAllColors, getAllFuelTypes, getAllGearTypes, getAllModels } from 'Store/actions/cars_actions';
import { Form, Container, Row, Col } from 'react-bootstrap';
import { update } from 'Components/Utils/Form/formActions';
import FormField from 'Components/Utils/Form/formFields';
import { ButtonPrimary } from 'Components/shared/styledComponents/Button';
import useWindowDimensions from 'Hooks/useWindowDimensions';
import { AiOutlinePlus } from 'react-icons/ai';
import { useHistory } from 'react-router';
import { translate, getLanguage } from 'react-switch-lang';

function AllCars(props) {

    const dispatch = useDispatch();
    const history = useHistory();
    const carsState = useSelector(state => state.cars_reducer);
    const { allCars, allBrands, allModels, allColors, allBodyTypes, allGearTypes, allFuelTypes } = carsState;
    const [formdata, setFormdata] = useState({})
    const [formError, setFormError] = useState(false);
    const [activeFilter, setActiveFilter] = useState(false);
    const { width } = useWindowDimensions();
    const { t } = props;
    const activeLang = getLanguage();

    useEffect(() => {
        dispatch(getAllCars());
        dispatch(getAllBrands());
        dispatch(getAllModels());
        dispatch(getAllBodyTypes());
        dispatch(getAllFuelTypes());
        dispatch(getAllGearTypes());
        dispatch(getAllColors());
    }, [])

    useEffect(() => {
        const newData = { ...formdata };
        Object.assign(newData, {
            brand: {
                element: 'select',
                value: '',
                config: {
                    name: 'brand_select',
                    placeholder: t('form.brand.placeholder'),
                    label: t('form.brand.label'),
                    options: allBrands?.map(cat => { return { key: cat?.name[activeLang]?.toLowerCase(), value: cat?.name[activeLang] } })
                },
                validation: {
                    required: false
                },
                sizes: { md: 12 },
                valid: true,
                touched: true,
                validationMessage: ''
            },
            price: {
                element: 'range',
                defaultValue: 100000,
                sizes: { md: 12 },
                minValue: 0,
                label: t('form.price.label'),
                maxValue: 1000000
            },
            bodyType: {
                element: 'select',
                value: '',
                config: {
                    name: 'body_type_select',
                    placeholder: t('form.bodyType.placeholder'),
                    label: t('form.bodyType.label'),
                    options: allBodyTypes?.map(cat => { return { key: cat?.typeName[activeLang]?.toLowerCase(), value: cat?.typeName[activeLang] } })
                },
                validation: {
                    required: false
                },
                sizes: { md: 12 },
                valid: true,
                touched: true,
                validationMessage: ''
            },
            fuelType: {
                element: 'select',
                value: '',
                config: {
                    name: 'fuel_type_select',
                    placeholder: t('form.fuelType.placeholder'),
                    label: t('form.fuelType.label'),
                    options: allFuelTypes?.map(cat => { return { key: cat?.typeName[activeLang]?.toLowerCase(), value: cat?.typeName[activeLang] } })
                },
                validation: {
                    required: false
                },
                sizes: { md: 12 },
                valid: true,
                touched: true,
                validationMessage: ''
            },
            gearType: {
                element: 'select',
                value: '',
                config: {
                    name: 'gear_type_select',
                    placeholder: t('form.gearType.placeholder'),
                    label: t('form.gearType.label'),
                    options: allGearTypes?.map(cat => { return { key: cat?.typeName[activeLang]?.toLowerCase(), value: cat?.typeName[activeLang] } })
                },
                validation: {
                    required: false
                },
                sizes: { md: 12 },
                valid: true,
                touched: true,
                validationMessage: ''
            },
            color: {
                element: 'select',
                value: '',
                config: {
                    name: 'color_select',
                    placeholder: t('form.color.placeholder'),
                    label: t('form.color.label'),
                    options: allColors?.map(cat => { return { key: cat?.name[activeLang]?.toLowerCase(), value: cat?.name[activeLang], hex: cat?.hexCode } })
                },
                validation: {
                    required: false
                },
                sizes: { md: 12 },
                valid: true,
                touched: true,
                validationMessage: ''
            }
        })
        setFormdata(newData);
    }, [carsState, activeLang])

    const handleChange = (element) => {
        const newFormdata = update(element, formdata);
        setFormError(false);
        setFormdata(newFormdata);
    }

    return (
        <StyledAllCars>
            {
                width < 768 ? 
                <StyledFilterButton onClick={() => setActiveFilter(!activeFilter)}>
                    <AiOutlinePlus/>
                </StyledFilterButton>
                : null
            }
            <StyledFilterSidebar className={activeFilter ? 'active' : ''}>
                <div className="logo"><img src={Logo} alt="" /></div>
                <Form>
                    {
                        Object.entries(formdata).map(([key, val]) => {
                            return (
                                <FormField
                                    id={key}
                                    formdata={val}
                                    change={(element) => handleChange(element)}
                                />
                            )
                        })
                    }
                    <ButtonPrimary>{t('form.searchBtn')}</ButtonPrimary>
                </Form>
            </StyledFilterSidebar>
            <StyledResultCars>
                <Container>
                    <Row>
                        {
                            allCars && allCars.map((car, idx) => {
                                return (
                                    <Col key={idx} md={4} xs={12}>
                                        <div className="wrapp">
                                            <div class="car-card">
                                                <div class="image">
                                                    <img src="https://i.pinimg.com/736x/1f/a5/eb/1fa5eb16020bb5894ab19750a3192093.jpg" alt="HR" />
                                                </div>
                                                <div class="content">
                                                    <h1>{car?.title?.en} / {car?.fuelType?.typeName?.en}</h1>
                                                    <p>{car?.brand?.name.en} - {car?.model?.modelType?.en}</p>
                                                    <div className="more-content">
                                                        <span>{car?.modelYear} HP</span>
                                                        <span>{car?.millage ? car?.millage : 0} KM</span>
                                                        <span>{car?.gearType?.typeName?.en}</span>
                                                    </div>
                                                    <p className="price">{car?.price} TRY</p>
                                                    <ButtonPrimary onClick={() => history.push(`/car/${car.id}`)}>{t('form.showMoreBtn')}</ButtonPrimary>
                                                </div>
                                            </div>
                                        </div>
                                    </Col>
                                )
                            })
                        }
                    </Row>
                </Container>
            </StyledResultCars>
        </StyledAllCars>
    )
}

export default translate(AllCars);