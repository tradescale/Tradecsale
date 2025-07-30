export default function TradeScaleLandingPage() {
  return (
    <main className="min-h-screen bg-white text-black p-6">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto text-center py-10">
        <h1 className="text-4xl font-bold mb-4">Grow Your Trades Business with TradeScale</h1>
        <p className="text-lg text-gray-600 mb-8">
          We supply independent tradesmen with quality jobs and only take 5% — no upfront fees, no gimmicks.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-2xl shadow-lg hover:bg-gray-800 transition">
          Apply for Jobs Now
        </button>
      </section>

      {/* Features Section */}
      <section className="max-w-5xl mx-auto py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">We Get You Work</h3>
          <p className="text-gray-600">No ads, no lead fees — we handle the marketing and send you real jobs.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Only 5% Per Job</h3>
          <p className="text-gray-600">You only pay us if you get paid. We take 5% of the job you complete — simple and fair.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow">
          <h3 className="text-xl font-semibold mb-2">Zero Risk</h3>
          <p className="text-gray-600">No upfront costs. Keep full control of your schedule and accept or decline any job.</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="max-w-4xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <ol className="list-decimal list-inside text-lg text-gray-700 space-y-4">
          <li>We find people who need tradesmen through ads, SEO, and referrals.</li>
          <li>We match the job to a local, reliable tradesman in our network — you.</li>
          <li>You complete the work, get paid by the customer, and send us 5%.</li>
          <li>That’s it. No drama, no hidden fees, no chasing work.</li>
        </ol>
      </section>

      {/* Callout Section */}
      <section className="bg-black text-white py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Are You a Reliable Tradesman?</h2>
          <p className="text-lg mb-6">If you take pride in your work and want more jobs without the headache of marketing or lead fees — you're who we're looking for.</p>
          <button className="bg-white text-black px-6 py-3 rounded-2xl shadow hover:bg-gray-200 transition">
            Get Started
          </button>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="max-w-5xl mx-auto py-12">
        <h2 className="text-3xl font-bold text-center mb-8">Why Tradesmen Love TradeScale</h2>
        <div className="grid md:grid-cols-2 gap-8 text-gray-700">
          <div>
            <h4 className="text-xl font-semibold mb-2">We Respect Your Craft</h4>
            <p>We’re not here to micromanage or take over. You stay self-employed, in charge, and get paid directly by the client.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">No Time Wasters</h4>
            <p>We pre-qualify leads and only send you genuine customers who are ready to book and pay.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">Simple System</h4>
            <p>We text or WhatsApp you the job details. You reply yes/no. Easy.</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-2">We’ve Got Your Back</h4>
            <p>Got a problem with a job? We’ll help you sort it or find someone else who can handle it.</p>
          </div>
        </div>
      </section>

      {/* Application Form Section (Coming Soon) */}
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Apply to Join the Network</h2>
        <p className="text-lg text-gray-600 mb-6">We're currently onboarding qualified tradesmen across the UK. Fill out the form and we’ll be in touch.</p>
        <button className="bg-black text-white px-6 py-3 rounded-2xl shadow hover:bg-gray-800 transition">
          Apply Now
        </button>
      </section>
    </main>
  );
}
