/**
 * SNS items
 */

export type SNSItem =
  | {
      icon: string;
      link: string;
      iconScale?: number;
    }
  | string;

export interface SNS {
  [platform: string]: SNSItem;
}

export interface PersonalConfig {
  name: string;
  avatar: string;
  description: string;
  sns?: SNS;
}
