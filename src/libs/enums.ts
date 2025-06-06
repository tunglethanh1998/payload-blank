// Route config use for payload.config.ts only
export enum ROUTE_CONFIG {
  RACE_LIST = '/race-list',
  RACE_SETTINGS = '/race-list/race-settings',
  PREDICTION_TARGET = '/prediction-target',
  PREDICTION_TARGET_ADMIN = '/prediction-target-admin',
}

// Apply when navigate
export enum ROUTE_NAVIGATE {
  // Collections
  MEDIA = '/admin/collections/media?limit=10',
  POSTS = '/admin/collections/posts?limit=10',
  USERS = '/admin/collections/users?limit=10',

  // Globals
  HEADER = '/admin/globals/header',
  FOOTER = '/admin/globals/footer',

  // Custom
  RACE_LIST = '/admin/race-list',
  RACE_SETTINGS = '/admin/race-list/race-settings',
  PREDICTION_TARGET = '/admin/prediction-target',
  PREDICTION_TARGET_ADMIN = '/admin/prediction-target-admin',
}
