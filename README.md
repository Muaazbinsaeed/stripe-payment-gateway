# esdev-payment-integration-using-stripe

A ecommerce application with stripe integration for payments

> How to operate in your local environment?

## Prerequisites

- Node installed (>= v12.16.1)
- npm installed (>= 6.14.7)

## Testing environment

Testing of this application was done in an environment with node version `12.16.1` and npm version `6.14.7`

### Clone the repo

### `git clone https://github.com/EdraakSystems/esdev-stripe-integration.git`

### Navigate to the main folder

### `cd esdev-stripe-payment`

### Navigate to the server folder

### `cd server`

### Install server dependencies

### `npm install`

navigate to the client directory and <br/>
Include a .env file in client directory<br/>
To install client dependencies,

```bash
npm install
```

```javascript
REACT_APP_STRIPE_KEY=<Your_stripe_Publishable key>
```

To use stripe for payment service,<br/>
head over to [stripe.com](https:/stripe.com) to get your Publishable key.

Modify the .env for server (To be added at the main route)

````javascript
STRIPE_ACCESS_KEY="<ANY_STRING>"


Finally run these commands from server directory `server`,

```bash
npm start
npm run client
````

Finally run these commands from client directory `client`,

```bash
npm run start
```

> Main Features

- Products Display
- Add to cart
- Remove From Cart
- Payment using stripe
- And many more...

> Tech stack

We have used React and Node js for building this application.
