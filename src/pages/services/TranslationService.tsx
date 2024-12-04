import React from 'react';
import { ServiceLayout } from '../../components/services/ServiceLayout';
import { ServiceFeatures } from '../../components/services/translation/ServiceFeatures';
import { translationService } from '../../types/services/translation';

export const TranslationService: React.FC = () => {
  return (
    <ServiceLayout
      title="Translation & Localization Services"
      description="Professional translation services ensuring cultural relevance and accuracy"
    >
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-6">Our Translation Services</h2>
          <ServiceFeatures services={translationService.services} />
        </section>
      </div>
    </ServiceLayout>
  );
};