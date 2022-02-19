import {Component, OnInit} from '@angular/core';

import { I18n } from 'aws-amplify';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'aws-cognito-auth-webcomponent';


  ngOnInit(): void {
    const dict = {
      'de':
        {
          Username: "Benutzername",
          Password: "Passwort",
          Confirm: "Bestätigen",
          Email: "E-Mail-Adresse *",
          "Confirm Password": "Passwort Bestätigen",
          "Back to Sign In": "Zurück zur Anmeldung",
          "CHANGE_PASSWORD_ACTION": "Veränderung",
          "CHANGE_PASSWORD": "Passwort ändern",
          "CODE_LABEL": "Verifizierungs-Schlüssel",
          "CODE_PLACEHOLDER": "Code eingeben",
          "CONFIRM_SIGN_UP_CODE_LABEL": "Bestätigungscode",
          "CONFIRM_SIGN_UP_CODE_PLACEHOLDER": "Gib deinen Code ein",
          "CONFIRM_SIGN_UP_HEADER_TEXT": "Bestätigen Sie die Anmeldung",
          "CONFIRM_SIGN_UP_LOST_CODE": "Hast du deinen Code verloren?",
          "CONFIRM_SIGN_UP_RESEND_CODE": "Code erneut senden",
          "CONFIRM_SIGN_UP_SUBMIT_BUTTON_TEXT": "Bestätigen",
          "CONFIRM_SMS_CODE": "Bestätigen Sie den SMS-Code",
          "CONFIRM_TOTP_CODE": "Bestätigen Sie den TOTP-Code",
          "Create Account": "Konto erstellen",
          "EMAIL_LABEL": "E-Mail-Adresse *",
          "EMAIL_PLACEHOLDER": "amplify@example.com",
          "Forgot your password?": "Haben Sie Ihr Passwort vergessen?",
          "LESS_THAN_TWO_MFA_VALUES_MESSAGE": "Weniger als zwei mfa-Typen verfügbar",
          "NEW_PASSWORD_LABEL": "Neues Kennwort",
          "NEW_PASSWORD_PLACEHOLDER": "Gib dein neues Passwort ein",
          "NO_ACCOUNT_TEXT": "Kein Account?",
          "PASSWORD_LABEL": "Passwort *",
          "PASSWORD_PLACEHOLDER": "Geben Sie Ihr Passwort ein",
          "Phone Number": "Telefonnummer *",
          "PHONE_PLACEHOLDER": "(555) 555-1212",
          "QR_CODE_ALT": "qrcode",
          "RESET_PASSWORD_TEXT": "Passwort zurücksetzen",
          "RESET_YOUR_PASSWORD": "Setze dein Passwort zurück",
          "SELECT_MFA_TYPE_HEADER_TEXT": "Wählen Sie MFA-Typ",
          "SELECT_MFA_TYPE_SUBMIT_BUTTON_TEXT": "Überprüfen",
          "SEND_CODE": "Code senden",
          "SETUP_TOTP_REQUIRED": "TOTP muss konfiguriert werden",
          "Sign In Action": "Einloggen",
          "SIGN_IN_HEADER_TEXT": "Melden Sie sich bei Ihrem Konto an",
          "Sign In": "Einloggen",
          "Sign in": "Einloggen",
          "SIGN_IN_WITH_AMAZON": "Melden Sie sich bei Amazon an",
          "SIGN_IN_WITH_AUTH0": "Melden Sie sich mit Auth0 an",
          "SIGN_IN_WITH_AWS": "Melden Sie sich mit AWS an",
          "SIGN_IN_WITH_FACEBOOK": "Mit Facebook anmelden",
          "SIGN_IN_WITH_GOOGLE": "Anmeldung mit Google",
          "SIGN_OUT": "Ausloggen",
          "SIGN_UP_EMAIL_PLACEHOLDER": "E-Mail",
          "SIGN_UP_HAVE_ACCOUNT_TEXT": "Konto vorhanden?",
          "SIGN_UP_HEADER_TEXT": "Ein neues Konto erstellen",
          "SIGN_UP_PASSWORD_PLACEHOLDER": "Passwort",
          "SIGN_UP_SUBMIT_BUTTON_TEXT": "Benutzerkonto anlegen",
          "SIGN_UP_USERNAME_PLACEHOLDER": "Nutzername",
          "SUCCESS_MFA_TYPE": "Erfolg! Ihr MFA-Typ lautet jetzt:",
          "TOTP_HEADER_TEXT": "Scannen Sie und geben Sie den Bestätigungscode ein",
          "TOTP_LABEL": "Sicherheitscode eingeben:",
          "TOTP_SETUP_FAILURE": "Das TOTP-Setup ist fehlgeschlagen",
          "TOTP_SUBMIT_BUTTON_TEXT": "Überprüfen Sie das Sicherheitstoken",
          "TOTP_SUCCESS_MESSAGE": "TOTP erfolgreich einrichten!",
          "UNABLE_TO_SETUP_MFA_AT_THIS_TIME": "Gescheitert! MFA kann derzeit nicht konfiguriert werden",
          "USERNAME_LABEL": "Nutzername *",
          "USERNAME_PLACEHOLDER": "Geben Sie Ihren Benutzernamen ein",
          "VERIFY_CONTACT_EMAIL_LABEL": "E-Mail",
          "VERIFY_CONTACT_HEADER_TEXT": "Für die Wiederherstellung des Kontos sind überprüfte Kontaktinformationen erforderlich",
          "VERIFY_CONTACT_PHONE_LABEL": "Telefonnummer",
          "VERIFY_CONTACT_SUBMIT_LABEL": "einreichen",
          "VERIFY_CONTACT_VERIFY_LABEL": "Überprüfen"
        }
    };

    I18n.putVocabularies(dict)
    I18n.setLanguage('de');
  }


}
