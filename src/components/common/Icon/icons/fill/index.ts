import dynamic from 'next/dynamic';

export const ConsultingFill = dynamic(() => import('./Consulting'));
export const ProfileFill = dynamic(() => import('./Profile'));
export const NotiFill = dynamic(() => import('./Noti'));
export const DeliveryFill = dynamic(() => import('./DeliveryFill'));
export const StoreFindingFill = dynamic(() => import('./StoreFinding'));
export const FavoriteFill = dynamic(() => import('./Favorite'));
export const QuestionFill = dynamic(() => import('./Question'));
export const PlayFill = dynamic(() => import('./Play'));
export const CircleCloseFill = dynamic(() => import('./CircleClose'));
export const CircleCheckFill = dynamic(() => import('./CircleCheck'));
export const OrderFailedFill = dynamic(() => import('./OrderFailed'));
export const OrderWaitingFill = dynamic(() => import('./OrderWaiting'));
export const MapFill = dynamic(() => import('./Map'));
export const InfoFill = dynamic(() => import('./Info'));
