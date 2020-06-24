import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { Navigation } from '../Navigation/Navigation';
import { useSelector } from 'react-redux';
import { Locale } from '../../actions/localeAction';
import { RootState } from '../../reducers/reducer';

export const localeData: any = {
    "en": require( "../../locales/messages_en.json"),
    "pl": require( "../../locales/messages_pl.json")
};

export const Intl: React.FC<{}> = (): JSX.Element => {
    const locale: Locale = useSelector<RootState, Locale>((state: RootState): Locale => state.locale);
    return (
        <IntlProvider locale={locale} messages={localeData[locale]}>
            <Navigation />
        </IntlProvider>
    )
}
