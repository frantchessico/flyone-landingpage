'use client'

import { useState, useEffect } from 'react'

const Pricing = () => {
  const [plans, setPlans] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await fetch('https://subscriptions.f1y.pro/api/paypal/flyone/plans/all')
        if (!response.ok) {
          throw new Error('Failed to fetch pricing plans')
        }
        const data = await response.json()
        setPlans(data)
        setIsLoading(false)
      } catch (err) {
        setError(err.message)
        setIsLoading(false)
      }
    }

    fetchPlans()
  }, [])

  if (isLoading) {
    return <div className="text-center text-white">Loading pricing plans...</div>
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>
  }
  const handleGetstarted = () => {
   return window.location.href = 'https://app.f1y.pro/'
  }
  return (
    <section id="pricing" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Find a plan to power your business
          </h2>
        </div>
        <div className="grid gap-8 lg:grid-cols-3 sm:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col p-6 rounded-lg ${
                plan.isPopular
                  ? 'border-4'
                  : 'border-2'
              }`}
              style={{
                borderColor: plan.isPopular ? '#57d468' : '#3e3e3e',
              }}
            >
              {plan.isPopular && (
                <span className="px-3 py-1 text-sm text-green-600 font-semibold bg-green-100 rounded-full self-start">
                  Most Popular
                </span>
              )}
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-white">{plan.name}</h3>
                <p className="text-gray-400 mt-2">{plan.description}</p>
              </div>
              <div className="mb-4">
                <span className="text-4xl font-bold text-white">
                  ${plan.promotionalPrice || plan.price}
                </span>
                <span className="text-gray-400 ml-1">{plan.billingCycle}</span>
                {plan.promotionalPrice && (
                  <span className="text-sm text-gray-400 line-through ml-2">
                    ${plan.price}
                  </span>
                )}
              </div>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <svg
                      className="w-5 h-5 text-green-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button
                className="mt-auto py-2 px-4 font-semibold rounded-lg transition duration-200 text-white"
                style={{
                  backgroundColor: '#57d468',
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = '#45b857')
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = '#57d468')
                }
                onMouseDown={(e) =>
                  (e.target.style.backgroundColor = '#3e9f4d')
                }
                onMouseUp={(e) =>
                  (e.target.style.backgroundColor = '#57d468')
                }

                onClick={handleGetstarted}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing
