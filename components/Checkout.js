import { CardElement, Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import styled from 'styled-components';
import SickButton from './styles/SickButton';

const CheckoutFormStyles = styled.form`
  box-shadow: 0 1px 2px 2px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  padding: 1rem;
  display: grid;
  grid-gap: 1rem;
`;

const stripeLib = loadStripe(process.env.NEXT_PUBLIC_STRIPE_KEY);

export default function Checkout() {
  function handleSubmit(e) {
    // 1. Stop the form from submitting and turn the loader on
    e.preventDefault();
    console.log('We gotta do some work...');
    // 2. Start the page transition
    // 3. Create the payment method via stripe (Token comes back here if successful)
    // 4. Handle any errors from stripe
    // 5. Send the toekn from step 3 to our keystone server, via a custom mutation!
    // 6. Change the page to view the order
    // 7. Close the cart
    // 8. Turn the loader off
  }

  return (
    <Elements stripe={stripeLib}>
      <CheckoutFormStyles onSubmit={handleSubmit}>
        <CardElement />
        <SickButton>Check Out Now</SickButton>
      </CheckoutFormStyles>
    </Elements>
  );
}
