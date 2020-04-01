export const COOKIES = {
  COUNTRY: 'novaCardShopCountry',
};

export const ENV = {
  development: 'development',
  staging: 'staging',
  production: 'production',
};

// TODO: Update these urls once we have a better idea of where the backend lives
export const BASE_API_URLS = {
  development: `http://localhost:8012`,
  staging: 'https://offers.aphrodite.novacredit.com',
  production: 'https://offers.novacredit.com',
};

export const ANALYTICS_API_URLS = {
  development: `http://localhost:8000`,
  staging: 'https://api.aphrodite.neednova.com',
  production: 'https://api.neednova.com',
};

export const VALID_FEATURES = {
  no_annual_fee: 'NO_ANNUAL_FEE',
  zero_intro_purchase_apr: 'ZERO_INTRO_PURCHASE_APR',
  zero_intro_transfer_apr: 'ZERO_INTRO_TRANSFER_APR',
  no_deposit_required: 'NO_DEPOSIT_REQUIRED',
};

export const VALID_REWARDS = {
  airline: 'AIRLINE',
  hotel: 'HOTEL',
  gas: 'GAS',
  cash_back: 'CASH_BACK',
};

export const CREDIT_RATING_LABELS = {
  POOR: 'Poor',
  AVERAGE: 'Average',
  FAIR: 'Fair',
  GOOD: 'Good',
  EXCELLENT: 'Excellent',
  LIMITEDHISTORY: 'Limited History',
  NOHISTORY: 'No History',
  LIMITED: 'Limited',
  NOCREDIT: 'No Credit',
};

export const MIXPANEL_API_TOKENS = {
  development: '99a8318efe49a590ce67b7cc6ea430ce',
  staging: 'f6c931bae30548e29bcb4a9a9571bbb5',
  production: '24569b07426cb329a5f78a7adaf32d40',
};

export const CTA_COUNTRIES = [
  'Australia',
  'Brazil',
  'Canada',
  'India',
  'Mexico',
  'Nigeria',
  'South Korea',
  'United Kingdom',
  'Other',
];

export const CTA_SERVICE_CENTERS = [
  'Potomac Service Center',
  'California Service Center',
  'National Service Center',
  'Nebraska Service Center',
  'Texas Service Center',
  'Vermont Service Center',
  'Other',
];

export const CTA_MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const CTA_YEARS = [
  'Earlier',
  '2016',
  '2017',
  '2018',
  '2019',
  '2020',
  '2021',
  '2022',
  'Later',
];

export const GOOGLE_ANALYTICS_ID = 'UA-119692704-1';
export const FACEBOOK_PIXEL_ID = '297766240602824';
export const INTERCOM_APP_ID = 'j4g7nq0k';
export const USERLEAP_APP_ID = 'dPCcu9x_f-Q';

export const AMEX_SUPPORTED_COUNTRIES = [
  'AUS',
  'CAN',
  'GBR',
  'IND',
  'MEX',
  'USA',
];

export const SUBSCRIBE_URL = 'https://novacredit.com/subscribe';
