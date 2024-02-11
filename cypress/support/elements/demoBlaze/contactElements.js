class contactElements {

    contactLinkHeader = () => {
        return 'a[data-target="#exampleModal"]'
    }

    contactModalLabel = () => {
        return '#exampleModalLabel'
    }

    contactEmailField = () => {
        return '#recipient-email'
    }

    contactNameField = () => {
        return '#recipient-name'
    }

    contactMessageField = () => {
        return '#message-text'
    }

    contactConfirmBtn = () => {
        return 'button[onclick="send()"]'
    }
    
}

export default contactElements;