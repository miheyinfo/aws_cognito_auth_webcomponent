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
      'fr': {
        'Sign In': "Se connecter",
        'Sign Up': "S'inscrire"
      },
      'es': {
        'Sign In': "Registrarse",
        'Sign Up': "Regístrate"
      }
    };

    I18n.putVocabularies(dict)

    I18n.setLanguage('fr');
  }


}
