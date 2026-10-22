import Google from '../../assets/icons/colored/Google.svg';
import Mastercard from '../../assets/icons/colored/Mastercard.svg';
import Visa from '../../assets/icons/colored/Visa.svg';
import AddToCart from '../../assets/icons/general/Add to cart.svg';
import Add from '../../assets/icons/general/Add.svg';
import ArrowLeft from '../../assets/icons/general/Arrow Left.svg';
import ArrowRight from '../../assets/icons/general/Arrow Right.svg';
import ArrowUp from '../../assets/icons/general/Arrow up.svg';
import Cart from '../../assets/icons/general/Cart.svg';
import Check from '../../assets/icons/general/Check.svg';
import ChevronDown from '../../assets/icons/general/Chevron Down.svg';
import ChevronLeft from '../../assets/icons/general/Chevron Left.svg';
import ChevronRight from '../../assets/icons/general/Chevron Right.svg';
import Copy from '../../assets/icons/general/Copy.svg';
import Dashboard from '../../assets/icons/general/Dashboard.svg';
import Delivery from '../../assets/icons/general/Delivery.svg';
import EmptyStar from '../../assets/icons/general/Empty Star.svg';
import Heart from '../../assets/icons/general/Heart.svg';
import Home from '../../assets/icons/general/Home.svg';
import Info from '../../assets/icons/general/Info.svg';
import Key from '../../assets/icons/general/Key.svg';
import Logout from '../../assets/icons/general/Logout.svg';
import Menu from '../../assets/icons/general/Menu.svg';
import Minus from '../../assets/icons/general/Minus.svg';
import More from '../../assets/icons/general/More.svg';
import Product from '../../assets/icons/general/Product.svg';
import Search from '../../assets/icons/general/Search.svg';
import Settings from '../../assets/icons/general/Settings.svg';
import Share from '../../assets/icons/general/Share.svg';
import ShieldCheck from '../../assets/icons/general/Shield Check.svg';
import Sort from '../../assets/icons/general/Sort.svg';
import StarBadge from '../../assets/icons/general/Star Badge.svg';
import Star from '../../assets/icons/general/Star.svg';
import Upload from '../../assets/icons/general/Upload.svg';
import UserAlt from '../../assets/icons/general/User-1.svg';
import User from '../../assets/icons/general/User.svg';
import Users from '../../assets/icons/general/Users.svg';
import Warning from '../../assets/icons/general/Warning.svg';
import Close from '../../assets/icons/general/X.svg';
import Facebook from '../../assets/icons/social/Facebook.svg';
import Github from '../../assets/icons/social/Github.svg';
import Instagram from '../../assets/icons/social/Instagram.svg';
import Pinterest from '../../assets/icons/social/Pinterest.svg';
import Telegram from '../../assets/icons/social/Telegram.svg';
import Twitter from '../../assets/icons/social/Twitter.svg';
import Whatsapp from '../../assets/icons/social/Whatsapp.svg';
import Youtube from '../../assets/icons/social/Youtube.svg';

export const icons = {
  add: Add,
  addToCart: AddToCart,
  arrowLeft: ArrowLeft,
  arrowRight: ArrowRight,
  arrowUp: ArrowUp,
  cart: Cart,
  check: Check,
  chevronDown: ChevronDown,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  close: Close,
  copy: Copy,
  dashboard: Dashboard,
  delivery: Delivery,
  emptyStar: EmptyStar,
  facebook: Facebook,
  github: Github,
  google: Google,
  heart: Heart,
  home: Home,
  info: Info,
  instagram: Instagram,
  key: Key,
  logout: Logout,
  mastercard: Mastercard,
  menu: Menu,
  minus: Minus,
  more: More,
  pinterest: Pinterest,
  product: Product,
  search: Search,
  settings: Settings,
  share: Share,
  shieldCheck: ShieldCheck,
  sort: Sort,
  star: Star,
  starBadge: StarBadge,
  telegram: Telegram,
  twitter: Twitter,
  upload: Upload,
  user: User,
  userAlt: UserAlt,
  users: Users,
  visa: Visa,
  warning: Warning,
  whatsapp: Whatsapp,
  youtube: Youtube,
} as const;

export type IconName = keyof typeof icons;
