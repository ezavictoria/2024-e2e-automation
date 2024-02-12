class purchaseElements {

    phoneLinkInMenu = () => {
        return `a[onclick="byCat('phone')"]`
    }

    firstItemInList = () => {
        return 'a[href="prod.html?idp_=1"]'
    }

    phoneAddToCart = () => {
        return `a[onclick="addToCart(1)"]`
    }
    
    placeOrderButton = () => {
        return 'button[data-target="#orderModal"]'
    }

    nameField = () => {
        return '#name'
    }

    countryField = () => {
        return '#country'
    }

    cityField = () => {
        return '#city'
    }

    cardField = () => {
        return '#card'
    }

    monthField = () => {
        return '#month'
    }

    yearField = () => {
        return '#year'
    }

    confirmButton = () => {
        return 'button[onclick="purchaseOrder()"]'
    }

    confirmationMsg = () => {
        return 'h2'
    }
}

export default purchaseElements;