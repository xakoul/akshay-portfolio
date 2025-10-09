import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Data Retention Policy - Akshay Koul',
  description: 'Data Retention Policy for Akshay Koul\'s portfolio website outlining how long we keep your data and our data management practices.',
  robots: 'index, follow',
  openGraph: {
    title: 'Data Retention Policy - Akshay Koul',
    description: 'Data Retention Policy for Akshay Koul\'s portfolio website outlining how long we keep your data and our data management practices.',
    type: 'website',
  },
};

export default function DataRetentionPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="text-gray-900 leading-relaxed">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Data Retention Policy</h1>
          <p className="text-gray-600 mb-6">Last updated: October 09, 2025</p>
          
          <p className="mb-6 text-gray-700">
            This Data Retention Policy explains how long we keep your personal information and the procedures we follow for data management and deletion. This policy works in conjunction with our Privacy Policy and Terms & Conditions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Overview</h2>
          <p className="mb-4 text-gray-700">
            We are committed to retaining your personal data only for as long as necessary to fulfill the purposes for which it was collected, comply with legal obligations, resolve disputes, and enforce our agreements. We follow the principle of data minimization and regularly review our data retention practices.
          </p>

          <p className="mb-6 text-gray-700">
            This policy applies to all personal data collected through our website, including but not limited to contact information, usage data, cookies, and any other information that can identify you.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Types of Data We Collect</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Personal Information</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
            <li>Contact information (email addresses, names)</li>
            <li>Communication records (messages, inquiries)</li>
            <li>Professional information (if shared voluntarily)</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Technical Data</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
            <li>IP addresses and device identifiers</li>
            <li>Browser information and user agent data</li>
            <li>Website usage patterns and analytics</li>
            <li>Cookies and similar tracking technologies</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Log Data</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
            <li>Access logs and timestamps</li>
            <li>Error logs and debugging information</li>
            <li>Security incident records</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Retention Periods</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Contact Information</h3>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-4">
            <p className="text-gray-700">
              <strong className="text-gray-900">Retention Period:</strong> 3 years from last contact or interaction
            </p>
            <p className="text-gray-700 mt-2">
              <strong className="text-gray-900">Purpose:</strong> To maintain professional relationships and respond to follow-up inquiries
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Website Analytics Data</h3>
          <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-4">
            <p className="text-gray-700">
              <strong className="text-gray-900">Retention Period:</strong> 26 months maximum (Google Analytics standard)
            </p>
            <p className="text-gray-700 mt-2">
              <strong className="text-gray-900">Purpose:</strong> To understand website performance and improve user experience
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Server Logs</h3>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
            <p className="text-gray-700">
              <strong className="text-gray-900">Retention Period:</strong> 90 days
            </p>
            <p className="text-gray-700 mt-2">
              <strong className="text-gray-900">Purpose:</strong> Security monitoring, troubleshooting, and system optimization
            </p>
          </div>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Cookies and Tracking Data</h3>
          <div className="bg-purple-50 border-l-4 border-purple-400 p-4 mb-6">
            <p className="text-gray-700">
              <strong className="text-gray-900">Retention Period:</strong> 1-24 months (varies by cookie type)
            </p>
            <p className="text-gray-700 mt-2">
              <strong className="text-gray-900">Purpose:</strong> Website functionality, preferences, and analytics
            </p>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Legal Basis for Retention</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Legitimate Business Interests</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
            <li>Maintaining professional relationships and networking</li>
            <li>Improving website performance and user experience</li>
            <li>Security monitoring and fraud prevention</li>
            <li>Business analytics and optimization</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Legal Compliance</h3>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
            <li>Tax and accounting record requirements</li>
            <li>Data protection law compliance (GDPR, CCPA, etc.)</li>
            <li>Employment and business law obligations</li>
            <li>Regulatory reporting requirements</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Contract Performance</h3>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
            <li>Fulfilling service agreements and commitments</li>
            <li>Managing ongoing professional relationships</li>
            <li>Providing requested information and support</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Deletion Procedures</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Automatic Deletion</h3>
          <p className="mb-4 text-gray-700">
            We have implemented automated systems that regularly review and delete data that has exceeded its retention period. This includes:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
            <li>Scheduled deletion of expired log files</li>
            <li>Automatic cookie expiration</li>
            <li>Regular cleanup of temporary files and caches</li>
            <li>Periodic review of analytics data retention</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Manual Review Process</h3>
          <p className="mb-4 text-gray-700">
            Every 6 months, we conduct a comprehensive review of all stored personal data to:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
            <li>Identify data that should be deleted or anonymized</li>
            <li>Update retention periods based on legal changes</li>
            <li>Verify compliance with data protection regulations</li>
            <li>Document data processing activities</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Secure Deletion Methods</h3>
          <p className="mb-4 text-gray-700">
            When data is deleted, we ensure it cannot be recovered by:
          </p>
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
            <li>Overwriting data multiple times on storage devices</li>
            <li>Using cryptographic deletion for encrypted data</li>
            <li>Physical destruction of storage media when necessary</li>
            <li>Verifying deletion through audit procedures</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Your Rights Regarding Data Retention</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Right to Erasure</h3>
          <p className="mb-4 text-gray-700">
            You have the right to request deletion of your personal data before the standard retention period expires, subject to legal and legitimate business requirements. We will honor such requests unless:
          </p>
          <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-1">
            <li>We have a legal obligation to retain the data</li>
            <li>The data is necessary for defending legal claims</li>
            <li>There are overriding legitimate interests for retention</li>
          </ul>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Right to Rectification</h3>
          <p className="mb-4 text-gray-700">
            You can request correction of inaccurate personal data and have incomplete data completed.
          </p>

          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Right to Data Portability</h3>
          <p className="mb-6 text-gray-700">
            You can request a copy of your personal data in a structured, commonly used format.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Data Processing</h2>
          <p className="mb-4 text-gray-700">
            Some of our services may use third-party processors (such as analytics providers or hosting services). These processors have their own data retention policies:
          </p>
          
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
            <li>
              <strong className="text-gray-900">Web Hosting:</strong> Server logs retained according to hosting provider&apos;s policy (typically 30-90 days)
            </li>
            <li>
              <strong className="text-gray-900">Analytics Services:</strong> Data retention follows service provider settings (usually 14-50 months)
            </li>
            <li>
              <strong className="text-gray-900">Content Delivery Networks:</strong> Cache data retained for performance optimization (typically 24-48 hours)
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Breach Response</h2>
          <p className="mb-4 text-gray-700">
            In the event of a data breach affecting retained personal data:
          </p>
          
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
            <li>We will assess the scope and impact within 24 hours</li>
            <li>Affected individuals will be notified within 72 hours if required</li>
            <li>Regulatory authorities will be informed as required by law</li>
            <li>We will review and update retention policies if necessary</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Policy Updates</h2>
          <p className="mb-4 text-gray-700">
            This Data Retention Policy may be updated periodically to reflect:
          </p>
          
          <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-1">
            <li>Changes in data protection laws and regulations</li>
            <li>Updates to our business practices and services</li>
            <li>Improvements in data management technologies</li>
            <li>Feedback from users and regulatory guidance</li>
          </ul>

          <p className="mb-6 text-gray-700">
            When we make significant changes, we will notify users through our website and update the &quot;Last updated&quot; date at the top of this policy.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact Information</h2>
          <p className="mb-4 text-gray-700">
            If you have questions about our data retention practices or wish to exercise your rights regarding your personal data, please contact us:
          </p>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Data Protection Contact</h3>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong className="text-gray-900">Email:</strong>{' '}
                <a href="mailto:koul.akshay17@gmail.com" className="text-blue-600 hover:text-blue-800 underline">
                  koul.akshay17@gmail.com
                </a>
              </li>
              <li><strong className="text-gray-900">Subject Line:</strong> Data Retention Policy Inquiry</li>
              <li><strong className="text-gray-900">Response Time:</strong> Within 30 days of receipt</li>
            </ul>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Related Policies</h3>
            <p className="text-gray-700 mb-3">
              This Data Retention Policy should be read in conjunction with our other legal documents:
            </p>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-blue-600 hover:text-blue-800 underline">
                  Privacy Policy
                </Link>
                {' '}- How we collect, use, and protect your data
              </li>
              <li>
                <Link href="/terms-conditions" className="text-blue-600 hover:text-blue-800 underline">
                  Terms & Conditions
                </Link>
                {' '}- Rules and regulations for using our services
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <Link 
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}