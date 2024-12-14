import React from "react";

const OurCommitment = () => {
  return (
    <div className="bg-gray-50 text-gray-700 min-h-screen">
      {/* Top Links */}
      <div className="flex justify-end gap-4 py-2 px-6 text-sm text-gray-600">
        <a href="#" className="hover:underline">Privacy Policy</a>
        <a href="#" className="hover:underline">Cookies Policy</a>
        <a href="#" className="hover:underline">Terms & Conditions</a>
      </div>

      {/* Title */}
      <div className="text-center mt-6 mb-4">
        <h1 className="text-4xl font-bold text-gray-800">
          Our terms of <span className="text-red-500">service</span>
        </h1>
        <p className="text-gray-500 mt-2">
          Anchored to the future, INTELU Digital empowers businesses through forwarding designs and tech products with limitless possibilities.
        </p>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6">
        {/* Introduction Section */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">INTRODUCTION</h2>
          <p className="leading-relaxed">
            This Privacy Policy explains what information of yours will be collected by the Group Companies when you use our Services...
          </p>
        </section>

        {/* Information We Process */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">INFORMATION WE PROCESS</h2>
          <p className="leading-relaxed">
            The types of information we process depends on how you use our Services. Many of our Services require users to set up an account...
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Complete the transaction...</li>
            <li>Detect security incidents, protect...</li>
            <li>Debug products to identify...</li>
            <li>Comply with the California...</li>
            <li>Enable solely internal uses...</li>
          </ul>
        </section>

        {/* Deletion Request Rights */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Deletion Request Rights</h2>
          <p className="leading-relaxed">
            You have the right to request that we delete any of your personal information...
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Complete the transaction...</li>
            <li>Detect security incidents...</li>
            <li>Debug products to identify...</li>
            <li>Comply with the California Consumer...</li>
          </ul>
        </section>

        {/* Your Account */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Your Account</h2>
          <p className="leading-relaxed">
            You, as a Personal User or a Business User, are responsible for all activity...
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Complete the transaction...</li>
            <li>Detect security incidents...</li>
            <li>Comply with the California Consumer Privacy Act...</li>
          </ul>
        </section>
      </div>

      {/* Footer */}
      <div className="text-center text-gray-500 text-sm py-4">
        &copy; 2024 INTELU Digital. All rights reserved.
      </div>
    </div>
  );
};

export default OurCommitment;
