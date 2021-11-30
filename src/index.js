import React from "react";
import ReactDOM from "react-dom";
import { IntlProvider } from "react-intl";

import JobsList from "./components/jobslist";
import localeEsMessages from "./locales/es";
import localeEsMessagesEn from "./locales/en";

const language = "es";
console.log(language);
const messages = {
  es: localeEsMessages,
  en: localeEsMessagesEn,
};
ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <JobsList />
  </IntlProvider>,
  document.getElementById("root")
);
