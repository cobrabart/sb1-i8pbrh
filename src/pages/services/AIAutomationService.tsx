import React from 'react';
import { ServiceLayout } from '../../components/services/ServiceLayout';
import { SolutionCard } from '../../components/services/ai-automation/SolutionCard';
import { aiAutomationService } from '../../types/services/aiAutomation';

export const AIAutomationService: React.FC = () => {
  return (
    <ServiceLayout
      title="AI Automation Solutions"
      description="Advanced AI-powered automation for your business needs"
    >
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-6">Our AI Solutions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {aiAutomationService.solutions.map((solution, index) => (
              <SolutionCard
                key={solution.name}
                solution={solution}
                index={index}
              />
            ))}
          </div>
        </section>
      </div>
    </ServiceLayout>
  );
};