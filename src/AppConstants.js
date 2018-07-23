class AppConstants {

  static SERVER_API_BASE = 'http://localhost:9000';
  static SERVER_API_REPOSITORIES = AppConstants.SERVER_API_BASE + '/repositories?q=';
  static SERVER_API_AUTHENTICATE = AppConstants.SERVER_API_BASE + '/authenticate/';

  static GITHUB_BASE_API = 'https://api.github.com';
  static GITHUB_USER_REPOSITORIES = AppConstants.GITHUB_BASE_API + '/users/{OWNER}/repos';
  static GITHUB_REPOSITORY_README = AppConstants.GITHUB_BASE_API + '/repos/{OWNER}/{REPO}/readme';
  static GITHUB_ACCESS_TOKEN = AppConstants.GITHUB_BASE_API  + '/user?access_token=';

}

export default AppConstants;