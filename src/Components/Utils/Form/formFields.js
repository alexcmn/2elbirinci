import React from 'react';
import { StyledFormField } from 'Components/shared/styledComponents/StyledFormField';
import { Form } from 'react-bootstrap';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import { BsCheck } from 'react-icons/bs';

const Range = withStyles({
    root: {
        color: "var(--red)",
        height: 2,
        padding: "15px 0"
    },
    thumb: {
        height: 28,
        width: 28,
        backgroundColor: "#fff",
        boxShadow: "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)",
        marginTop: -14,
        marginLeft: -14,
        "&:focus, &:hover, &$active": {
            boxShadow:
                "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
            // Reset on touch devices, it doesn't add specificity
            "@media (hover: none)": {
                boxShadow: "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)"
            }
        }
    },
    active: {},
    valueLabel: {
        left: "calc(-50% + 12px)",
        top: -22,
        "& *": {
            background: "transparent",
            color: "#000"
        }
    },
    track: {
        height: 2
    },
    rail: {
        height: 2,
        opacity: 0.5,
        backgroundColor: "#bfbfbf"
    },
    mark: {
        backgroundColor: "#bfbfbf",
        height: 8,
        width: 1,
        marginTop: -3
    },
    markActive: {
        opacity: 1,
        backgroundColor: "currentColor"
    }
})(Slider);

const marks = [
    {
        value: 0
    },
    {
        value: 20
    },
    {
        value: 37
    },
    {
        value: 100
    }
];


const FormField = ({ formdata, change, id }) => {

    const showError = () => {
        let errorMessage = null;

        if (formdata.validation && !formdata.valid) {
            errorMessage = (
                <div className="error_label">
                    {formdata.validationMessage}
                </div>
            )
        }

        return errorMessage;
    }

    const renderTemplate = () => {
        let formTemplate = null;
        switch (formdata.element) {
            case ('input'):
                formTemplate = (
                    <StyledFormField {...formdata.sizes}>
                        <Form.Group>
                            {formdata.config.label && <Form.Label htmlFor={formdata.config.name}>{formdata.config.label}</Form.Label>}
                            <input
                                id={formdata.config.name}
                                className={`form-control ${!formdata.valid ? 'invalid-input' : ''}`}
                                {...formdata.config}
                                placeholder={formdata.config.placeholder}
                                value={formdata.value}
                                onBlur={(event) => change({ event, id, blur: true })}
                                onChange={(event) => change({ event, id })}
                            />
                            {showError()}
                        </Form.Group>
                    </StyledFormField>
                )
                break;
            case ('textarea'):
                formTemplate = (
                    <StyledFormField {...formdata.sizes}>
                        <Form.Group>
                            {formdata.config.label && <Form.Label htmlFor={formdata.config.name}>{formdata.config.label}</Form.Label>}
                            <textarea
                                className="form-control"
                                rows={formdata.config.rows}
                                {...formdata.config}
                                value={formdata.value}
                                onBlur={(event) => change({ event, id, blur: true })}
                                onChange={(event) => change({ event, id })}
                            />
                            {showError()}
                        </Form.Group>
                    </StyledFormField>
                )
                break;
            case ('select'):
                formTemplate = (
                    <StyledFormField {...formdata.sizes}>
                        <Form.Group>
                            {formdata.config.label && <Form.Label htmlFor={formdata.config.name}>{formdata.config.label}</Form.Label>}
                            <select
                                id={formdata.config.name}
                                className={`form-control ${!formdata.valid ? 'invalid-input' : ''}`}
                                value={formdata.value}
                                onBlur={(event) => change({ event, id, blur: true })}
                                onChange={(event) => change({ event, id })}
                            >
                                <option value="">{formdata.config.placeholder}</option>
                                {
                                    formdata?.config?.options?.map(item => (
                                        <option key={item.key}
                                            value={item.key}
                                        >
                                            {/* {
                                                id === 'color' ?
                                                    <>
                                                        <div
                                                            style={{
                                                                width: '2rem',
                                                                height: '2rem',
                                                                borderRadius: '50%',
                                                                background: `${item.hex}`
                                                            }}
                                                        />
                                                    </>
                                                }
                                                    : */}
                                            {item.value}
                                        </option>
                                    ))
                                }
                            </select>
                            {showError()}
                        </Form.Group>
                    </StyledFormField>
                )
                break;
            case ('range'):
                formTemplate = (
                    <StyledFormField {...formdata.sizes} className="mt-3">
                        <Form.Label>{formdata.label}</Form.Label>
                        <Range
                            aria-label="pretto slider"
                            marks={marks}
                            valueLabelDisplay="on"
                            defaultValue={formdata.defaultValue}
                            min={formdata.minValue}
                            max={formdata.maxValue}
                        />
                        <div className="range-min-max">
                            <span>{formdata.minValue} TRY</span>
                            <span>{formdata.maxValue} TRY</span>
                        </div>
                    </StyledFormField>
                )
                break;
            case ('checkbox'):
                formTemplate = (
                    <StyledFormField {...formdata.sizes}>
                        <Form.Group>
                            <Form.Label htmlFor={`formdata_${formdata.name}`} className="type-checkbox">
                                {formdata.config.icon ? formdata.config.icon : formdata.config.label}
                                <input
                                    id={`formdata_${formdata.name}`}
                                    type="checkbox"
                                    name={formdata.name}
                                    defaultChecked={formdata.value}
                                    onChange={(event) => change({ event, id })}
                                />
                                <span>{formdata.value ? <BsCheck /> : null}</span>
                            </Form.Label>
                        </Form.Group>
                    </StyledFormField>
                );
                break;
            default:
                formTemplate = null;
        }

        return formTemplate;
    }

    return (
        <>
            {renderTemplate()}
        </>
    );
}

export default FormField;