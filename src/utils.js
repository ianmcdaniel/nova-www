import { VALID_FEATURES, VALID_REWARDS, ENV } from './consts';
import AmexInstructions from './components/blocks/AmexInstructions';
import HeadlineCta from './components/blocks/HeadlineCta';
import LogoCta from './components/blocks/LogoCta';
import EmailSignupCta from './components/blocks/EmailSignupCta';
import StatusCheckCta from './components/blocks/StatusCheckCta';
import FormCta from './components/blocks/FormCta';
import ImageCopyBlock from './components/blocks/ImageCopyBlock';
import RichTextBlock from './components/blocks/RichTextBlock';
import TwoColumnOfferBlock from './components/blocks/TwoColumnOfferBlock';
import HeadlineBlock from './components/blocks/HeadlineBlock';
import ComponentBlock from './components/blocks/ComponentBlock';
import AccordionBlock from './components/blocks/AccordionBlock';
import IconList from './components/common/IconList';
import ArticleGridBlock from './components/blocks/ArticleGridBlock';
import CardCta from './components/common/CardCTA';
import BlockQuoteBlock from './components/blocks/BlockQuoteBlock';
import MapAnimationBlock from './components/blocks/MapAnimationBlock';
import CollectionBlock from './components/blocks/CollectionBlock';
import CountryNavigator from './components/common/CountryNavigator';
import ProductOffer from './components/blocks/ProductOffer';

export const redirect = url => {
  window.location.href = url;
};

export const getNodeEnv = (() => {
  if (typeof window === 'undefined') {
    return;
  }
  const href = window.location.href;
  if (/localhost.*/.test(href) || process.env.NODE_ENV === ENV.development) {
    return () => ENV.development;
  }
  if (/aphrodite.*/.test(href)) {
    return () => ENV.staging;
  }
  return () => ENV.production;
})();

export const getValidFeatures = featuresStr => {
  if (!featuresStr) {
    return [];
  }
  return featuresStr
    .split(',')
    .filter(feature => VALID_FEATURES[feature])
    .map(feature => VALID_FEATURES[feature]);
};

export const getValidRewards = rewardsStr => {
  if (!rewardsStr) {
    return [];
  }
  return rewardsStr
    .split(',')
    .filter(reward => VALID_REWARDS[reward])
    .map(reward => VALID_REWARDS[reward]);
};

export const stringifyArray = arr => arr.join(',').toLowerCase() || undefined;

export const COMPONENT_MAP = {
  amexInstructions: AmexInstructions,
  ctaHeadline: HeadlineCta,
  ctaLogo: LogoCta,
  ctaEmailSignup: EmailSignupCta,
  ctaStatusCheck: StatusCheckCta,
  ctaForm: FormCta,
  ctaCard: CardCta,
  ContentfulBlockImageWCopy: ImageCopyBlock,
  ContentfulBlockRichText: RichTextBlock,
  ContentfulBlockTwoColumnOffer: TwoColumnOfferBlock,
  ContentfulBlockHeadline: HeadlineBlock,
  ContentfulBlockComponent: ComponentBlock,
  ContentfulBlockAccordion: AccordionBlock,
  ContentfulCtaHeadline: HeadlineCta,
  ContentfulCtaEmailSignup: EmailSignupCta,
  ContentfulBlockBlockQuote: BlockQuoteBlock,
  ContentfulBlockCollection: CollectionBlock,
  ContentfulElementProductOffer: ProductOffer,
  collection: CollectionBlock,
  iconList: IconList,
  component: ComponentBlock,
  articleGrid: ArticleGridBlock,
  accordionBlock: AccordionBlock,
  ContentfulBlockCollection: CollectionBlock,
  collection: CollectionBlock,
  component: ComponentBlock,
  mapAnimation: MapAnimationBlock,
  countryNavigator: CountryNavigator,
};

export const getComponent = type => COMPONENT_MAP[type] || null;

export default {
  redirect,
  getValidFeatures,
  getValidRewards,
  stringifyArray,
};
