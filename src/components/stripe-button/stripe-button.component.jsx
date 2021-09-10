import StripeCheckout from "react-stripe-checkout"

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51GyXTDDHi3AO86KrbQvOLFYMw8Xbh93RfNDPDjURssTfM8xa1vUHHQ781JI6xxhJTFMDZn5D888PgVP4ZjuFCFf200XckkdN6u'

    const onToken = token => {
        console.log(token)
        alert("Payment successful!")
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="ecommerce_app"
            billingAddress
            shippingAddress
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panellabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
