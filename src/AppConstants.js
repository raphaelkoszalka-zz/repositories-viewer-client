class AppConstants {

  static GITHUB_BASE_API = 'https://api.github.com';
  static GITHUB_USER_REPOSITORIES = AppConstants.GITHUB_BASE_API + '/users/{OWNER}/repos';
  static GITHUB_BASE_AUTH_URI = 'https://github.com/login/oauth/authorize';

}

export default AppConstants;