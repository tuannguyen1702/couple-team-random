import dynamic from 'next/dynamic';

export const Coupon3D = dynamic(() => import('./Coupon'));
export const LevelProfile3D = dynamic(() => import('./LevelProfile'));
export const ScanBarCode3D = dynamic(() => import('./ScanBarCode'));
export const PXuHistory3D = dynamic(() => import('./PXuHistory'));
