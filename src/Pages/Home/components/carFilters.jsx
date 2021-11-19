import React, { useState } from 'react'
import { useSnackbar } from 'notistack';
import { StyledCardFilters } from '../StyledHome'
import { generateData, isFormValid, update } from 'Components/Utils/Form/formActions';
import { Col, Form, Row } from 'react-bootstrap';
import { ButtonPrimary } from 'Components/shared/styledComponents/Button';
import FormField from 'Components/Utils/Form/formFields';
import { ReactComponent as Sedan } from 'Assets/sedan.svg';
import { ReactComponent as Truck } from 'Assets/truck.svg';
import { ReactComponent as Wagon } from 'Assets/wagon.svg';
import { ReactComponent as Hatcback } from 'Assets/hatcback.svg';
import useWindowDimensions from 'Hooks/useWindowDimensions';

export default function CarFilters({isMobActive}) {

    const { enqueueSnackbar } = useSnackbar();
    const [formError, setFormError] = useState(false);
    const [formdata, setFormdata] = useState({
        brand: {
            element: 'select',
            value: '',
            config: {
                name: 'brand_input',
                placeholder: 'Select Car Brand',
                options: [
                    { key: 'bmw', value: 'BMW' },
                    { key: 'audi', value: 'Audi' },
                    { key: 'mercedes', value: 'Mercedes' },
                ]
            },
            validation: {
                required: false
            },
            sizes: { md: 4 },
            valid: true,
            touched: true,
            validationMessage: ''
        },
        model: {
            element: 'select',
            value: '',
            config: {
                name: 'brand_input',
                placeholder: 'Select Car Brand',
                options: [
                    { key: 'm1', value: 'M1' },
                    { key: 'm2', value: 'M2' },
                    { key: 'm3', value: 'M3' },
                ]
            },
            validation: {
                required: false
            },
            sizes: { md: 4 },
            valid: true,
            touched: true,
            validationMessage: ''
        },
        range: {
            element: 'range',
            defaultValue: 100000,
            sizes: { md: 4 },
            minValue: 0,
            maxValue: 1000000
        },
        sedan: {
            element: 'checkbox',
            name: `sedan_checkbox`,
            value: false,
            config: {
                label: 'Sedan',
                icon: <Sedan/>
            },
            sizes: { md: 3 }
        },
        wagon: {
            element: 'checkbox',
            name: `wagon_checkbox`,
            value: false,
            config: {
                label: 'Wagon',
                icon: <Wagon/>
            },
            sizes: { md: 3 }
        },
        suv: {
            element: 'checkbox',
            name: `suv_checkbox`,
            value: false,
            config: {
                label: 'SUV',
                icon: <Sedan/>
            },
            sizes: { md: 3 }
        },
        truck: {
            element: 'checkbox',
            name: `truck_checkbox`,
            value: false,
            config: {
                label: 'Truck',
                icon: <Truck/>
            },
            sizes: { md: 3 }
        },
        hatcback: {
            element: 'checkbox',
            name: `hatcback_checkbox`,
            value: false,
            config: {
                label: 'Hatcback',
                icon: <Hatcback/>
            },
            sizes: { md: 3 }
        }
    })
    const { width } = useWindowDimensions();

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
            enqueueSnackbar("You Have Successfuly Loged In", { variant: "success" });
            console.log(formError, dataToSubmit);
        } else {
            enqueueSnackbar("Please Check Your Data", { variant: "error" });
        }
    }

    return (
        <StyledCardFilters className={isMobActive && 'mob-active'}>
            <div className="wrapp">
                <Form onSubmit={() => handleSubmit()}>
                    <Row>
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
                        <Col md={3}>
                            <ButtonPrimary className="w-100">Search Property</ButtonPrimary>
                        </Col>
                    </Row>
                </Form>
            </div>
        </StyledCardFilters>
    )
}
