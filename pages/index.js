import Head from 'next/head'
import { useState } from 'react'

const url = process.env.NEXT_PUBLIC_POST_URL

export default function Home() {
  const [email, setEmail]               = useState('')
  const [enabled, setEnabled]           = useState(false)
  const [inputEnabled, setInputEnabled] = useState(true)
  const [alertMessage, setAlertMessage] = useState('')
  const [alertStyle, setAlertStyle]     = useState('success')

  const onChange = e => {
    const value = e.target.value

    setEmail(value)
    setEnabled(/\S+@\S+\.\S+/.test(value) && value.length < 255)
  }

  const handleClick = event => {
    event.preventDefault()

    setEnabled(false)
    setInputEnabled(false)

    fetch(url, {
      method:  'POST',
      body:    JSON.stringify({ email }),
      headers: {
        'Accept':       'application/json',
        'Content-Type': 'application/json'
      }
    }).then(
      response => response.json()
    ).then(() => {
      setAlertMessage("Thanks, we'll be in touch!")
      setAlertStyle('success')
    }).catch(error => {
      setEnabled(true)
      setAlertMessage('Ups, something went wrong, please try again!')
      setAlertStyle('danger')
    }).finally(() => {
      setEmail('')
      setInputEnabled(true)
    })
  }

  const renderAlert = () => {
    if (alertMessage) {
      return (
        <div className={`alert alert-${alertStyle}`}>
          <p className="text-center mb-0">
            {alertMessage}
          </p>
        </div>
      )
    } else {
      return null
    }
  }

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
          <form>
            <div className="input-group mb-3">
              <span className="input-group-text bg-white border-end-0 pe-1">
                <i className="bi-envelope"></i>
              </span>

              <input type="email"
                     name="emailAddress"
                     className="form-control border-start-0 ps-2"
                     autoComplete="email"
                     maxLength="254"
                     aria-label="Email"
                     placeholder="Email address"
                     value={email}
                     disabled={! inputEnabled}
                     onKeyDown={e => onChange(e) && e.preventDefault()}
                     onChange={onChange} />

              <button className="btn btn-info"
                      type="submit"
                      disabled={! enabled}
                      onClick={handleClick}>
                Join Waitlist
              </button>
            </div>
          </form>

          {renderAlert()}
        </div>
      </div>
    </div>
  )
}
