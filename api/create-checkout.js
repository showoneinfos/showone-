// api/create-checkout.js
// Crée une session de paiement Stripe Checkout

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const PRICE_IDS = {
  talent_pro: 'price_1TWtKMDf46TAJOdGM44YH0kZ',
  recruteur_pro: 'price_1TWtLeDf46TAJOdG5KQmg3iM'
};

module.exports = async (req, res) => {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { plan, userId, userEmail, successUrl, cancelUrl } = req.body;

    const priceId = PRICE_IDS[plan];
    if (!priceId) {
      return res.status(400).json({ error: 'Plan invalide' });
    }

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      payment_method_types: ['card'],
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: userEmail,
      success_url: successUrl || 'https://www.showone.fr/paiement-succes?session_id={CHECKOUT_SESSION_ID}',
      cancel_url: cancelUrl || 'https://www.showone.fr/dashboard-talent',
      metadata: {
        userId: userId,
        plan: plan
      },
      locale: 'fr'
    });

    return res.status(200).json({ url: session.url, sessionId: session.id });

  } catch (err) {
    console.error('Stripe error:', err);
    return res.status(500).json({ error: err.message });
  }
};
