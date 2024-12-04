import React from 'react';
import { useTranslation } from 'react-i18next';
import { Bot, Mic, Languages, PenTool } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export const ServicesGrid: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: Bot,
      title: t('services.ai.title'),
      description: t('services.ai.description'),
    },
    {
      icon: Mic,
      title: t('services.voice.title'),
      description: t('services.voice.description'),
    },
    {
      icon: Languages,
      title: t('services.translation.title'),
      description: t('services.translation.description'),
    },
    {
      icon: PenTool,
      title: t('services.content.title'),
      description: t('services.content.description'),
    },
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {services.map((service, index) => (
        <ServiceCard
          key={service.title}
          {...service}
          delay={index * 0.1}
        />
      ))}
    </div>
  );
};