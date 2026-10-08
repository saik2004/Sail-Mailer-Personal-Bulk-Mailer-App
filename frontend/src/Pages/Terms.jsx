import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Mail, Lock, AlertTriangle } from "lucide-react";

function Terms() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-3xl">

        {/* Back */}
        <Link
          to="/"
          className="text-sm font-medium text-blue-600 transition hover:text-blue-700"
        >
          ← Back to Sail Mailer
        </Link>

        {/* Header */}
        <div className="mt-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Terms & Privacy
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Please read how Sail Mailer handles your credentials, recipient
            data, and email sending.
          </p>
        </div>

        {/* Security Notice */}
        <div className="mt-8 flex gap-4 rounded-2xl border border-blue-100 bg-blue-50 p-5">
          <ShieldCheck
            size={22}
            className="mt-0.5 shrink-0 text-blue-600"
          />

          <div>
            <h2 className="text-sm font-semibold text-blue-900">
              Your credentials are used only for sending
            </h2>

            <p className="mt-1 text-sm leading-6 text-blue-700">
              Sail Mailer uses the Gmail address and App Password you provide
              to authenticate with Gmail and send your emails. Do not enter
              your normal Gmail password.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mt-6 space-y-6">

          {/* How it works */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Mail size={20} className="text-blue-600" />

              <h2 className="text-lg font-semibold text-gray-900">
                How Sail Mailer works
              </h2>
            </div>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Sail Mailer allows you to upload a list of recipient email
              addresses, enter an email subject and message, and send those
              emails through your own Gmail account using Nodemailer.
            </p>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Your Gmail account is used as the sender. Sail Mailer does not
              provide or own the Gmail account used to send your messages.
            </p>
          </section>

          {/* Gmail credentials */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <Lock size={20} className="text-blue-600" />

              <h2 className="text-lg font-semibold text-gray-900">
                Gmail credentials
              </h2>
            </div>

            <ul className="mt-4 space-y-3 text-sm leading-6 text-gray-600">
              <li>
                • Your normal Gmail password is never required.
              </li>

              <li>
                • You should use a Google App Password instead.
              </li>

              <li>
                • Your Gmail address and App Password are transmitted to the
                server only to authenticate the email-sending request.
              </li>

              <li>
                • Sail Mailer does not intentionally save your App Password
                in a database or permanent application storage.
              </li>

              <li>
                • You should never share your Gmail App Password with anyone.
              </li>
            </ul>
          </section>

          {/* Recipient data */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Recipient data
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Recipient email addresses are provided by you through the
              uploaded Excel or CSV file. They are used to determine where
              your emails should be sent.
            </p>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Do not upload sensitive, confidential, or personal information
              that is not necessary for sending your emails.
            </p>
          </section>

          {/* Message content */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Email content
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              You are responsible for the subject, message, and recipient list
              you provide. Make sure your emails comply with applicable laws,
              regulations, Gmail policies, and anti-spam requirements.
            </p>
          </section>

          {/* User responsibility */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <AlertTriangle size={20} className="text-amber-500" />

              <h2 className="text-lg font-semibold text-gray-900">
                Responsible use
              </h2>
            </div>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Sail Mailer must not be used to send spam, phishing messages,
              fraudulent content, malicious content, or unsolicited messages
              that violate applicable laws or service policies.
            </p>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              You are responsible for having the appropriate permission or
              legal basis to contact the recipients on your list.
            </p>
          </section>

          {/* Gmail limits */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Gmail sending limits
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Email delivery is performed through Gmail. Sending limits,
              authentication requirements, temporary restrictions, and other
              Gmail policies may affect whether your emails are delivered.
            </p>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Sail Mailer cannot guarantee delivery of every email.
            </p>
          </section>

          {/* Security */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Security
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              We take reasonable measures to avoid unnecessary storage of
              credentials and user-provided data. However, no internet-based
              application can guarantee absolute security.
            </p>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              If you believe your App Password has been exposed, revoke it
              immediately through your Google Account and create a new one.
            </p>
          </section>

          {/* Disclaimer */}
          <section className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-gray-900">
              Disclaimer
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              Sail Mailer is provided as-is. Email delivery may fail because
              of incorrect credentials, Gmail restrictions, network problems,
              invalid recipient addresses, or other technical issues.
            </p>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              You are responsible for the emails sent through your Gmail
              account and for complying with all applicable laws and service
              policies.
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="mt-8 pb-4 text-center">
          <p className="text-xs text-gray-400">
            Sail Mailer • Built by{" "}
            <span className="font-medium text-gray-500">Sai</span>
          </p>

          <p className="mt-1 text-xs text-gray-400">
            For educational and legitimate email automation purposes.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Terms;