import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { ServiceDetailCard } from '../../components/services/ServiceDetailCard';
import { ServiceLayout } from '../../components/services/ServiceLayout';
import { services } from '../../types/services';

export const ServiceDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const service = services.find(s => s.id === id);

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return (
    <ServiceLayout
      title={service.title}
      description={service.description}
    >
      <ServiceDetailCard service={service} />
    </ServiceLayout>
  );
};