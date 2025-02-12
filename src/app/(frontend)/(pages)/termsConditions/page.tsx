import React from 'react'

const Page = () => {
  return (
    <div className="flex flex-col flex-1">
      <span className="fixed w-full h-16 bg-[rgba(46,46,46)]" />
      <span className="w-full h-16" />
      <div className="w-full max-w-[1178px] self-center p-8 flex flex-col gap-4 text-center">
        <h1>Terms and Conditions</h1>
        <div className="text-left flex flex-col gap-2">
          <br />
          <h3>1. Introduction</h3>
          <p>
            Welcome to NextElectricians. By using our website and services, you agree to comply with
            the following terms and conditions. If you do not agree, please do not use our services.
          </p>
          <br />
          <h3>2. Services Provided</h3>
          <p>
            We offer residential and commercial electrical services, including installations,
            repairs, and maintenance. All services are performed by qualified license electricians
            in compliance with Australian standard AS3000 and regulations.
          </p>
          <br />
          <h3>3. Quotes and Pricing</h3>
          <p>
            All quotes are based on the information provided and may be subject to change upon site
            inspection. Prices are in $AUD and include GST unless otherwise specified. Additional
            costs may apply for unforeseen circumstances, variations, or changes to the agreed scope
            of work.
          </p>
          <br />
          <h3>4. Bookings</h3>
          <p>Bookings can be made via phone, email, or our website.</p>
          <h3>5. Payments</h3>
          <p>
            Payments must be made in full upon a PO and or completion of the service unless prior
            arrangements have been made. We accept [payment methods, e.g., bank transfer, credit
            card] Late payments may incur interest or additional fees.
          </p>
          <br />
          <h3>6. Warranties and Liability</h3>
          <p>
            We provide a warranty on workmanship for [warranty period] from the date of service.
            Manufacturer warranties apply to all materials and components supplied. We are not
            liable for damages caused by misuse, alterations, or third-party interference.
          </p>
          <br />
          <h3>7. Health and Safety</h3>
          <p>
            We adhere to all relevant workplace health and safety regulations. Customers must ensure
            safe access to the work area and disclose any known hazards.
          </p>
          <br />
          <h3>8. Limitation of Liability</h3>
          <p>
            We are not responsible for any indirect, incidental, or consequential damages arising
            from our services. Our liability is limited to the cost of the service provided.
          </p>
          <br />
          <h3>9. Privacy Policy</h3>
          <p>
            We collect and store customer details only for service and billing purposes. We do not
            share personal information with third parties except as required by law.
          </p>
          <br />
          <h3>10. Changes to Terms and Conditions</h3>
          <p>
            We reserve the right to update these terms at any time. The latest version will be
            available on our website.
          </p>
          <br />
          <h3>11. Contact Information</h3>
          <p>
            If you have any questions about these terms, please contact us at
            admin@nextelectricians.com.au
          </p>
        </div>
      </div>
    </div>
  )
}

export default Page
