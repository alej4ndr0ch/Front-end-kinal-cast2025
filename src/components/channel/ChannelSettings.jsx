import { useState } from "react";
import {
    validateUsername,
    validateUsernameMessage,
    validationAvatarUrl,
    avatarUrlValidationMessage,
    validateDescription,
    ValidateDescriptionMessage,
    validateTitle,
    validateTitleMessage
} from "../../shared/validators"

import {Input} from '../Input.jsx'

const inputs = [
    {
        field : 'username',
        label : 'Username',
        validationMessage : validateUsernameMessage,
        type : 'text'
    },

    {
        field : 'title',
        label: 'Title',
        validationMessage : validateTitleMessage,
        type : 'text'
    },
    {
        field : 'avataUrl',
        label : 'Avatar Url',
        validationMessage: avatarUrlValidationMessage,
        type : 'text'
    },
    {
        field: 'description',
        label : 'Descripcion',
        validationMessage : ValidateDescriptionMessage
    }
]

export const ChannelSettings = ({settings, saveSettings}) => {
    const [formState, setFormState] = useState({
        username: {
            isValid: validateUsername(settings.title),
            showError: false,
            value: settings.title
        },
        avatarUrl: {
            isValid: validationAvatarUrl(settings.avatarUrl),
            showError: false,
            value : settings.avatarUrl
        },
        description: {
            isValid: validateDescription(settings.description),
            showError: false,
            value: settings.description
        }


    })

    const handleInputValueChange = (value, field) => {
        
    }


    const handleInputValidationOnBlur = (value, field) => {

        let isValid = false

        switch(field) {
            case 'username' :
                isValid = validateUsername(value)
                break
            case 'title' :
                isValid = validateTitle(value)
                break
            case 'avatarUrl' :
                isValid = validationAvatarUrl(value)
                break
            case 'description' :
                isValid = validateDescription(value)
                break
            default:
                break
        }
        setFormState((prevState) => ({
            ...prevState,
            [field] : {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        saveSettings({
            username: formState.username.value,
            title: formState.title.value,
            avatarUrl: formState.avatarUrl.value,
            description: formState.description.value
        })
    }
}