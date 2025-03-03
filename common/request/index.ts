/* eslint-disable lines-between-class-members */
import * as AccountPinApi from './types/accountPin';
import * as CaptchaApi from './types/captcha';
import * as EmailApi from './types/email';
import * as GamesApi from './types/games';
import * as MyAccountApi from './types/myAccount';
import * as OtpApi from './types/otp';
import * as PasswordsApi from './types/passwords';
import * as PhoneApi from './types/phone';
import * as PlaystationApi from './types/playstation';
import * as PromptAssignmentsApi from './types/promptAssignments';
import * as ProofOfSpaceApi from './types/proofOfSpace';
import * as ProofOfWorkApi from './types/proofOfWork';
import * as ReauthenticationApi from './types/reauthentication';
import * as RostileApi from './types/rostile';
import * as SecurityQuestionsApi from './types/securityQuestions';
import * as SessionManagementApi from './types/sessionManagement';
import * as ThumbnailsApi from './types/thumbnails';
import * as TwoStepVerificationApi from './types/twoStepVerification';
import * as UniversalAppConfigurationApi from './types/universalAppConfiguration';
import * as XboxApi from './types/xbox';
import * as MetricsAPI from './types/metrics';
import * as PrivateAccessTokenApi from './types/privateAccessToken';
import * as GenericChallengeApi from './types/genericChallenge';
import * as AuthApi from './types/auth';
import * as Fido2Api from './types/fido2';

/**
 * A class encapsulating the various HTTP requests in this web app.
 *
 * Note that all of the requests return `Result` types, which can be explicitly
 * instantiated with either a response value or an error, depending on whether
 * the request succeeded. The requests should only throw an error if a fatal
 * (i.e. unexpected) exception occurred.
 */
export class RequestServiceDefault {
  // Note that these names correspond to logical groupings of endpoints rather
  // than explicit microservices.
  accountPin = AccountPinApi;
  captcha = CaptchaApi;
  email = EmailApi;
  fido2 = Fido2Api;
  games = GamesApi;
  metrics = MetricsAPI;
  myAccount = MyAccountApi;
  otp = OtpApi;
  password = PasswordsApi;
  phone = PhoneApi;
  playstation = PlaystationApi;
  promptAssignments = PromptAssignmentsApi;
  securityQuestions = SecurityQuestionsApi;
  sessionManagement = SessionManagementApi;
  reauthentication = ReauthenticationApi;
  rostile = RostileApi;
  thumbnails = ThumbnailsApi;
  twoStepVerification = TwoStepVerificationApi;
  universalAppConfiguration = UniversalAppConfigurationApi;
  proofOfSpace = ProofOfSpaceApi;
  proofOfWork = ProofOfWorkApi;
  xbox = XboxApi;
  privateAccessToken = PrivateAccessTokenApi;
  genericChallenge = GenericChallengeApi;
  authApi = AuthApi;
}

/**
 * An interface encapsulating the various HTTP requests in this web app.
 *
 * Note that all of the requests return `Result` types, which can be explicitly
 * instantiated with either a response value or an error, depending on whether
 * the request succeeded. The requests should only throw an error if a fatal
 * (i.e. unexpected) exception occurred.
 *
 * This interface type offers future flexibility e.g. for mocking the default
 * request service.
 */
export type RequestService = { [K in keyof RequestServiceDefault]: RequestServiceDefault[K] };
