import { lazy } from 'react';

/**
 * Maps a service id (see siteData.services[].id) to the modal that explains it.
 * Adding a new service-with-modal means adding one entry here — App.jsx never
 * changes. Modals are code-split so they stay out of the initial bundle.
 */
const serviceModals = {
  'custom-engineering': lazy(() => import('./EngineeringModal')),
  compliance: lazy(() => import('./ComplianceModal')),
  'zero-downtime': lazy(() => import('./MigrationModal')),
};

export default serviceModals;
