import React from 'react';
import { useTranslation } from 'react-i18next';

const withTranslation = (WrappedComponent) => {
  const TranslatedComponent = (props) => {
    const { t } = useTranslation();

    return (
      <WrappedComponent {...props}>
        {React.Children.map(props.children, (child) => {
          if (typeof child === 'string') {
            return t(child);
          } else {
            return child;
          }
        })}
      </WrappedComponent>
    );
  };

  return TranslatedComponent;
};

export const TranslatedP = withTranslation('p');
export const TranslatedLi = withTranslation('li');
export const TranslatedSpan = withTranslation('span');
export const TranslatedH1 = withTranslation('h1');
export const TranslatedH2 = withTranslation('h2');
export const TranslatedH3 = withTranslation('h3');
export const TranslatedH4 = withTranslation('h4');
export const TranslatedH5 = withTranslation('h5');
export const TranslatedH6 = withTranslation('h6');

