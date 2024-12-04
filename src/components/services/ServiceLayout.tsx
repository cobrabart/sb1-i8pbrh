import React, { Suspense } from 'react';
import { ErrorBoundary } from './ErrorBoundary';
import { LoadingSpinner } from './LoadingSpinner';

interface ServiceLayoutProps {
  children: React.ReactNode;
  title: string;
  description?: string;
}

export const ServiceLayout: React.FC<ServiceLayoutProps> = ({
  children,
  title,
  description
}) => {
  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>
        {description && (
          <p className="text-gray-600 dark:text-gray-300 mb-8">{description}</p>
        )}
        <ErrorBoundary>
          <Suspense fallback={<LoadingSpinner size="large" />}>
            {children}
          </Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}