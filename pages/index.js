import Head from 'next/head'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>2pi Finance - Devs</title>

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="2pi Finance, next gen DeFi API for devs" />
        <meta name="theme-color" content="#0f80aa" />

        <link rel="icon" type="image/svg+xml" href="/images/favicon.svg" sizes="any" />
        <link rel="icon" type="image/png" href="/images/favicon.png" sizes="64x64" />
        <link rel="manifest" href="/manifest.json" />

        <meta property="og:local" content="en_US" />
        <meta property="og:title" content="2pi Finance" />
        <meta property="og:description" content="2pi Finance, next gen DeFi API for devs" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devs.2pi.finance" />
        <meta property="og:image" content="https://devs.2pi.finance/images/logo512.png" />
      </Head>

      <header className="mt-5 pt-5">
        <div className="row mt-5 pt-5 mt-sm-0 mt-sm-0">
          <div className="col-12 col-sm-6 mt-5 mt-sm-0">
            <p className="h3 text-info text-uppercase">
              Coming soon
            </p>

            <h1 className="display-1 text-primary fw-bold mb-4">
              2pi.finance
            </h1>

            <h2 className="h4 mb-4 fw-bold text-info">
              The easiest way for developers to connect their app to DeFi
            </h2>
          </div>
        </div>
      </header>

      <div className="row">
        <div className="col-12 col-sm-6">
          <p className="h6 text-muted mb-4">
            Connect your app to our DeFi API.
            Build engaging and next-generation products your users will love.
            From lending, to investing directly on DeFi via your own app.
            Built by developers, for developers
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="input-group mb-3">
            <span className="input-group-text bg-white border-end-0 pe-1">
              <i className="bi-envelope"></i>
            </span>
            <input type="email" className="form-control border-start-0 ps-2" aria-label="Email" placeholder="Email address" />
            <button className="btn btn-info" type="button">Join Waitlist</button>
          </div>
        </div>
      </div>
    </div>
  )
}
