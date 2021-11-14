/**
 * SNS items
 */
export interface SNS {
  github?: string;
  linkedin?: string;
  facebook?: string;
  twitter?: string;
  zhihu?: string;
  email?: string;
}

export interface PersonalConfig {
  name: string;
  avatar: string;
  description: string;
  sns?: SNS;
}
