import React from "react";
import { Link } from "react-router-dom";
import excelformatpng from '../assets/excel-format.png'

function Fileformat() {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-3xl">

        {/* Back */}
        <Link
          to="/"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          ← Back to Bulk Mailer
        </Link>

        {/* Header */}
        <div className="mt-6">
          <h1 className="text-3xl font-bold text-gray-900">
            Excel File Format
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Follow this format when preparing your recipient list for Bulk
            Mailer.
          </p>
        </div>

        {/* Main Card */}
        <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

          <h2 className="text-lg font-semibold text-gray-900">
            📋 How should your Excel file look?
          </h2>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Make sure all recipient email addresses are placed in{" "}
            <span className="font-semibold text-gray-700">
              Column A
            </span>
            .
          </p>

          {/* Image */}
          <div className="mt-6 overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
            <img
              src={excelformatpng}
              alt="Example Excel file with email addresses in Column A"
              className="w-full"
            />
          </div>

          {/* Example */}
          <div className="mt-6 rounded-xl bg-blue-50 p-4">
            <p className="text-sm font-semibold text-blue-700">
              Example
            </p>

            <p className="mt-2 text-sm text-blue-600">
              A1 → alex.johnson@example.com
            </p>

            <p className="mt-1 text-sm text-blue-600">
              A2 → sarah.wilson@example.com
            </p>

            <p className="mt-1 text-sm text-blue-600">
              A3 → michael.brown@example.com
            </p>
          </div>

          {/* Rules */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-900">
              Important
            </h2>

            <div className="mt-4 space-y-3">

              <div className="flex gap-3">
                <span className="text-green-500">✓</span>
                <p className="text-sm text-gray-600">
                  Put one email address in each row.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-green-500">✓</span>
                <p className="text-sm text-gray-600">
                  Keep all email addresses in Column A.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-green-500">✓</span>
                <p className="text-sm text-gray-600">
                  Make sure the email addresses are valid.
                </p>
              </div>

              <div className="flex gap-3">
                <span className="text-red-500">✕</span>
                <p className="text-sm text-gray-600">
                  Do not place email addresses across multiple columns.
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-6 text-center">
          <Link
            to="/"
            className="inline-flex rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 active:scale-95"
          >
            ← Back to Sail Mailer
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Fileformat;