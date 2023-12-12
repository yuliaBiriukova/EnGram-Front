import React, {ReactNode} from "react";
import {Button, ButtonProps} from '@mui/material';
import {SxProps} from '@mui/system';
import {ButtonType} from "../../models/enums/ButtonType";
import {IconPosition} from "../../models/enums/IconPosition";
import { ButtonVariant } from "../../models/enums/ButtonVariant";

const mainButtonStyle = {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 'normal',
    height: 40,
    borderRadius: '4px',
    boxShadow: 'none',
    padding: '8px 24px',
    '&:hover': {
        boxShadow: 'none',
    },
}

const buttonPrimaryStyle = {
    color: 'white',
    backgroundColor: 'primary.main',
    '&:hover': {
        boxShadow: 'none',
        backgroundColor: 'primary.dark',
    },
    '&:disabled': {
        backgroundColor: '#F2F2F2',
        color: '#A3A7A8',
    },
}

const buttonSecondaryStyle = {
    color: 'white',
    border: '1px solid #1B8DF7',
    backgroundColor: 'transparent',
    '&:hover': {
        boxShadow: 'none',
        backgroundColor: 'primary.light',
    },
    '&:disabled': {
        border: '1px solid #E5E6E6',
        color: '#A3A7A8',
    },
}

const buttonTextStyle = {
    fontSize: 16,
    fontWeight: 500,
    lineHeight: 'normal',
    color: 'black',
    backgroundColor: 'transparent',
    '&:hover': {
        boxShadow: 'none',
        backgroundColor: 'transparent',
        color: 'primary.main',
    },
    '&:disabled': {
        backgroundColor: 'transparent',
        color: '#A3A7A8',
    },
}

interface ButtonComponentProps{
    type?: ButtonType,
    disabled?: boolean,
    iconSource?: ReactNode,
    iconPosition?: IconPosition,
    sx?: SxProps,
    buttonProps?: ButtonProps,
    children?: ReactNode,
}

export const ButtonComponent = (props: ButtonComponentProps) => {

    let buttonStyle: SxProps = {
        textTransform: 'none',
    };

    let buttonProps: ButtonProps = {...props.buttonProps};

    buttonProps.disabled = props.disabled;

    switch(props.type) {
        case ButtonType.Primary: {
            buttonProps.variant = ButtonVariant.Contained;
            buttonStyle = {
                ...buttonStyle,
                ...mainButtonStyle,
                ...buttonPrimaryStyle,
            };
            break;
        }
        case ButtonType.Secondary: {
            buttonProps.variant = ButtonVariant.Outlined;
            buttonStyle = {
                ...buttonStyle,
                ...mainButtonStyle,
                ...buttonSecondaryStyle,
            };
            break;
        }
        case ButtonType.Text:
            buttonStyle = {
                ...buttonStyle,
                ...buttonTextStyle,
            };
            break;
    }

    buttonStyle = {
        ...buttonStyle,
        ...props.sx,
    } as SxProps;

    if(props.iconSource) {
        switch(props.iconPosition) {
            case IconPosition.Start:
                buttonProps.startIcon = props.iconSource;
                break;
            case IconPosition.End:
                buttonProps.endIcon = props.iconSource;
                break;
            case IconPosition.Both:
                buttonProps.startIcon = props.iconSource;
                buttonProps.endIcon = props.iconSource;
                break;
            default:
                buttonProps.endIcon = props.iconSource;
        }
    }

    return (
        <Button {...buttonProps} sx={buttonStyle}>
            {props.children}
        </Button>
    );

}