// Route config use for payload.config.ts only
export enum ROUTE_CONFIG {
  RACE_LIST = '/race-list',
  RACE_SETTINGS = '/race-list/race-settings',
  RACE_INFO = '/race-list/race-info',
  PREDICTION_TARGET = '/prediction-target',
  PREDICTION_TARGET_ADMIN = '/prediction-target-admin',
  PREDICTION_DETAIL = '/prediction-detail',
  EDIT_PREDICTION_DETAIL = '/edit-prediction-detail',
}

// Apply when navigate
export enum ROUTE_NAVIGATE {
  // Collections
  USERS = '/admin/collections/users',
  NEWS = '/admin/collections/news',
  MEDIA = '/admin/collections/media',

  // Globals
  HEADER = '/admin/globals/header',
  FOOTER = '/admin/globals/footer',

  // Custom
  RACE_LIST = '/admin/race-list',
  RACE_SETTINGS = '/admin/race-list/race-settings',
  RACE_INFO = '/admin/race-list/race-info',
  PREDICTION_TARGET = '/admin/prediction-target',
  PREDICTION_TARGET_ADMIN = '/admin/prediction-target-admin',
  PREDICTION_DETAIL = '/admin/prediction-detail',
  EDIT_PREDICTION_DETAIL = '/admin/edit-prediction-detail',
}
