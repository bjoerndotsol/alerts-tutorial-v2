'use client'

import { AppHero } from '../ui/ui-layout'

const links: { label: string; href: string }[] = [
  { label: 'Dialect Documentation', href: 'https://docs.dialect.to' },
  { label: 'Dialect Dashboard', href: 'https://dashboard.dialect.to' },
  { label: 'Solana Docs', href: 'https://docs.solana.com/' },
  { label: 'Dialect GitHub', href: 'https://github.com/dialectlabs' },
  { label: 'Solana Developers GitHub', href: 'https://github.com/solana-developers/' },
]

export default function DashboardFeature() {
  return (
    <div>
      <AppHero
        title="Dialect Alerts Tutorial"
        subtitle="Learn how to integrate Dialect's alerts system into your Solana dApp"
      >
        <div className="alert alert-warning mb-6">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-2.186-.833-2.956 0L3.858 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <div>
            <div className="font-bold">Legacy v2 Stack</div>
            <div className="text-sm">This tutorial uses the outdated v2 alerts stack. Visit <a href="https://docs.dialect.to" className="link font-semibold" target="_blank" rel="noopener noreferrer">docs.dialect.to</a> for the latest version.</div>
          </div>
        </div>
      </AppHero>

      {/* YouTube Video Section */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 mb-12">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-4">📺 Complete Integration Tutorial</h2>
          <p className="text-lg text-base-content/70">
            Watch our comprehensive guide to integrating Dialect alerts into your Solana application
          </p>
        </div>

        <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 aspect ratio */ }}>
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
            src="https://www.youtube.com/embed/aPLaXqEkzJY"
            title="Dialect Alerts Integration Tutorial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>

        <div className="text-center mt-6">
          <a
            href="https://www.youtube.com/watch?v=aPLaXqEkzJY"
            className="btn btn-primary btn-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            ▶️ Watch on YouTube
          </a>
        </div>
      </div>

      {/* Quick Start Section */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">🚀 Quick Start</h3>
              <div className="space-y-3">
                <div className="step">
                  <span className="step-number">1</span>
                  <span>Clone the repository</span>
                </div>
                <div className="step">
                  <span className="step-number">2</span>
                  <span>Run <code className="bg-base-300 px-2 py-1 rounded">npm install</code></span>
                </div>
                <div className="step">
                  <span className="step-number">3</span>
                  <span>Copy <code className="bg-base-300 px-2 py-1 rounded">.env.example</code> to <code className="bg-base-300 px-2 py-1 rounded">.env</code></span>
                </div>
                <div className="step">
                  <span className="step-number">4</span>
                  <span>Register at <a href="https://dashboard.dialect.to" className="link" target="_blank" rel="noopener noreferrer">dashboard.dialect.to</a></span>
                </div>
                <div className="step">
                  <span className="step-number">5</span>
                  <span>Run <code className="bg-base-300 px-2 py-1 rounded">npm run dev</code></span>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow-xl">
            <div className="card-body">
              <h3 className="card-title">🔐 Security Tips</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-warning mr-2">⚠️</span>
                  <span>Create a dedicated wallet for sending alerts</span>
                </li>
                <li className="flex items-start">
                  <span className="text-error mr-2">🚫</span>
                  <span>Never use your daily hot wallet</span>
                </li>
                <li className="flex items-start">
                  <span className="text-success mr-2">✅</span>
                  <span>Store keypairs securely</span>
                </li>
                <li className="flex items-start">
                  <span className="text-info mr-2">💡</span>
                  <span>Keep private keys out of your code</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Links Section */}
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-bold mb-6">📚 Helpful Resources</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="btn btn-outline btn-sm"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
