const stripe = require("stripe")(process.env.STRIPE_ACCESS_KEY);
const { v4: uuidv4 } = require("uuid");

//Create Payment using stripe

exports.chargeStripe = async (req, res, next) => {
  try {
    let { token, amount } = req.body;
    let idempotencyKey = uuidv4();
    let charge;
    return stripe.customers
      .create({
        email: token.email,
        source: token,
      })
      .then(async (customer) => {
        charge = await stripe.charges.create(
          {
            amount: amount * 100,
            currency: "usd",
            customer: customer.id,
            receipt_email: token.email,
          },
          { idempotencyKey }
        );
      })
      .then((result) => {
        console.log({ charge });
        res.status(200).json(charge);
      })
      .catch((err) => {
        console.log({ err });
        res.status(400).json(err);
      });
  } catch (error) {
    console.log({ err });
    res.status(400).json(err);
  }
};
