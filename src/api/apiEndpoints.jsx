export const API = {
  AUTH: {
    LOGIN: '/auth/login/',
    REGISTER: '/auth/register/',
    LOGOUT: '/auth/logout/',
    ACTIVATE: (token) => `/auth/activate/${token}/`,
  },
  USERS: {
    LIST: '/users/',
    DETAIL: (userId) => `/user/${userId}/`,
  },
  TRANSACTIONS: {
    DEPOSITS: '/transactions/deposits/',
    ADD_DEPOSIT: '/transactions/deposits/add/',
    UPDATE_DEPOSIT_STATUS: '/transactions/deposits/update/status/',
    
    WITHDRAWALS: '/transactions/withdrawals/',
    ADD_WITHDRAWAL: '/transactions/withdrawals/add/',
    UPDATE_WITHDRAWAL_STATUS: '/transactions/withdrawals/update/status/',
  },
  INVESTMENTS: {
    LIST: '/investments/',
  },
  EARNINGS: {
    LIST: '/earnings/',
    ADD: '/earnings/add/',
  },
  DASHBOARD: {
    OVERVIEW: '/dashboard/overview/',
  },
  TESTIMONIALS: {
    LIST: '/testimonials/',
    DETAIL: (id) => `/testimonials/${id}/`,
  },
  PAYMENT_METHODS: {
    LIST: '/payment-methods/',
    DETAIL: (id) => `/payment-methods/${id}/`,
  },
  USER_PAYMENT_ACCOUNTS: {
    LIST: '/payment-accounts/',                 
    DETAIL: (id) => `/payment-accounts/${id}/`, 
    ADD: '/payment-accounts/add/',             
  },
  COMPLETE_DEPOSIT: {
    ADD: '/deposits/',
  },

  BONUS: {
    DETAIL: (id) => `/bonuses/${id}/`,   
    ADD: '/bonuses/',                   
    
  }
  
};
