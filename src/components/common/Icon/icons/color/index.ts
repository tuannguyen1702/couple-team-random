import dynamic from 'next/dynamic';

export const PXuColor = dynamic(() => import('./PXu'));
export const FacebookColor = dynamic(() => import('./Facebook'));
export const GoogleColor = dynamic(() => import('./Google'));
export const AppleColor = dynamic(() => import('./Apple'));
export const StarColor = dynamic(() => import('./Star'));
export const DeliveryColor = dynamic(() => import('./Delivery'));
export const MedicineColor = dynamic(() => import('./Medicine'));
export const StoreFindingColor = dynamic(() => import('./StoreFinding'));
export const PMCColor = dynamic(() => import('./PMC'));
export const GoldColor = dynamic(() => import('./Gold'));
export const GreenLocationColor = dynamic(() => import('./GreenLocation'));
export const HotNewsColor = dynamic(() => import('./HotNews'));
export const CategoriesColor = dynamic(() => import('./Categories'));
export const ShipFastColor = dynamic(() => import('./ShipFast'));
export const NotificationColor = dynamic(() => import('./Notification'));
