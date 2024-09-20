import React from "react";

const PrivacyPolicyPage = (): React.ReactNode => {
  return (
    <div className="bg-[#121316] text-white min-h-screen">
      <div className="max-w-3xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
        <p className="mb-4">
          <span className="font-semibold text-[#6EACDA]">meard.vercel.app</span>{" "}
          is committed to protecting your privacy. This Privacy Policy explains
          how we collect, use, disclose, and safeguard your information when you
          visit our website meard.vercel.app, including any other media form,
          media channel, mobile website, or mobile application related or
          connected thereto (collectively, the “Site”). Please read this privacy
          policy carefully. If you do not agree with the terms of this privacy
          policy, please do not access the site.
        </p>
        <p className="mb-4">
          We reserve the right to make changes to this Privacy Policy at any
          time and for any reason. We will alert you about any changes by
          updating the “Last Updated” date of this Privacy Policy. You are
          encouraged to periodically review this Privacy Policy to stay informed
          of updates. You will be deemed to have been made aware of, will be
          subject to, and will be deemed to have accepted the changes in any
          revised Privacy Policy by your continued use of the Site after the
          date such revised Privacy Policy is posted.
        </p>
        <p className="mb-4">
          If you have any questions about this Privacy Policy, please contact us
          at :
          <a href="/" className="text-[#6EACDA] hover:underline">
            {" "}
            contact @meard.vercel.app
          </a>
          .
        </p>
      </div>
      <div className="flex w-full flex-col items-center justify-center gap-5 border-t border-gray-900/5 bg-[#121316] dark:border-white/5">
        <h1 className="text-white p-3">
          © 2024 Arunava Dutta. All rights reserved.
        </h1>
        <div className="flex items-center">
          <h1 className="text-[#6EACDA] p-3">Developed by Arunava Dutta</h1>
          <span className="text-gray-400 mx-2">|</span>
          <a href="/" className="text-[#6EACDA] hover:underline">
            Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
