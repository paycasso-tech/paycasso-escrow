export const SIDEBAR_DIMENSIONS = {
  container: {
    width: '302.82px',
    height: '832px',
    background: '#0D0D0D'
  },
  logo: {
    width: '427.66px',
    height: '114.27px',
    top: '19.5px',
    left: '-75.66px'
  },
  navItem: {
    width: '242.26px',
    height: '42.78px',
    leftPadding: '34.64px',
    borderRadius: '7px',
    activeBackground: '#1B3457'
  },
  icon: {
    width: '26px',
    height: '26px'
  },
  text: {
    fontFamily: 'Poppins',
    fontSize: '16px',
    lineHeight: '100%',
    fontWeight: 500
  }
} as const;

export const NAVIGATION_ITEMS = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: 'dashboard'
  },
  {
    title: 'Transactions',
    href: '/transactions',
    icon: 'transactions'
  },
  {
    title: 'Agreements',
    href: '/agreements',
    icon: 'agreements'
  },
  {
    title: 'Wallet',
    href: '/wallet',
    icon: 'wallet'
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: 'settings'
  },
  {
    title: 'Support',
    href: '/support',
    icon: 'support'
  }
] as const;

export const SIGN_OUT_ITEM = {
  title: 'Sign Out',
  href: '/sign-out',
  icon: 'sign-out'
} as const; 