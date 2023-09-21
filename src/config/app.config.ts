interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Admin', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Foox again',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Manage freelance profile',
    'Apply for jobs',
    'Check application status',
    'Accept or reject hiring',
  ],
  ownerAbilities: [
    'Manage country data',
    'Manage freelance profiles',
    'Manage job postings',
    'Manage applications',
    'Manage hiring data',
    'Manage user data',
    'Manage company data',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/8d7d2fac-d545-43af-8b2b-6e23e0e0954a',
};
