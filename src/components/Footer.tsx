import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="hidden sm:block bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © 2025 Akshay Koul. All rights reserved.
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link 
              href="/privacy-policy" 
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Privacy Policy
            </Link>
            
            <Link 
              href="/terms-conditions" 
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Terms & Conditions
            </Link>
            
            <Link 
              href="/data-retention-policy" 
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              Data Retention
            </Link>
            
            <a 
              href="https://linkedin.com/in/koulakshay" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              LinkedIn
            </a>
            
            <a 
              href="https://github.com/xakoul" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}