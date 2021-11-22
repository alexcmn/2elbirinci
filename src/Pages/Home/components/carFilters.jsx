import React, { useEffect, useState } from 'react'
import { StyledCardFilters } from '../StyledHome'
import { generateData, isFormValid, update } from 'Components/Utils/Form/formActions';
import { Col, Form, Row } from 'react-bootstrap';
import { ButtonPrimary } from 'Components/shared/styledComponents/Button';
import FormField from 'Components/Utils/Form/formFields';
// import { ReactComponent as Sedan } from 'Assets/sedan.svg';
// import { ReactComponent as Truck } from 'Assets/truck.svg';
// import { ReactComponent as Wagon } from 'Assets/wagon.svg';
// import { ReactComponent as Hatcback } from 'Assets/hatcback.svg';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { translate } from 'react-switch-lang';

function CarFilters({ isMobActive, t, activeLang }) {

    const history = useHistory();
    const carsState = useSelector(state => state.cars_reducer);
    const { allBrands, allColors, allBodyTypes, allGearTypes, allFuelTypes } = carsState;
    const [formError, setFormError] = useState(false);
    const [formdata, setFormdata] = useState()

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
                sizes: { md: 3 },
                valid: true,
                touched: true,
                validationMessage: ''
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
                sizes: { md: 3 },
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
                sizes: { md: 3 },
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
                sizes: { md: 3 },
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
                sizes: { md: 4 },
                valid: true,
                touched: true,
                validationMessage: ''
            },
            price: {
                element: 'range',
                defaultValue: 300000,
                sizes: { md: 4 },
                minValue: 0,
                label: t('form.price.label'),
                maxValue: 1000000
            },
        })
        setFormdata(newData);
    }, [allBrands, allColors, allBodyTypes, allGearTypes, allFuelTypes, activeLang, formdata, t])

    const handleChange = (element) => {
        const newFormdata = update(element, formdata);
        setFormError(false);
        setFormdata(newFormdata);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let dataToSubmit = generateData(formdata);
        let formIsVaid = isFormValid(formdata);

        if (formIsVaid) {
            // enqueueSnackbar("You Have Successfuly Loged In", { variant: "success" });
            console.log(formError, dataToSubmit);
        } else {
            // enqueueSnackbar("Please Check Your Data", { variant: "error" });
        }
    }

    return (
        <StyledCardFilters className={isMobActive && 'mob-active'}>
            <div className="wrapp">
                <Form onSubmit={() => handleSubmit()}>
                    <Row>
                        {
                            formdata && Object.entries(formdata).map(([key, val]) => {
                                return (
                                    <FormField
                                        id={key}
                                        formdata={val}
                                        change={(element) => handleChange(element)}
                                    />
                                )
                            })
                        }
                        <Col md={4}>
                            <ButtonPrimary className="w-100" onClick={() => history.push('/cars')}>{t('form.searchBtn')}</ButtonPrimary>
                        </Col>
                    </Row>
                </Form>
            </div>
        </StyledCardFilters>
    )
}

export default translate(CarFilters);