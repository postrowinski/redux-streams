import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'antd';
import { useIntl } from 'react-intl';
import { Locale } from '../../actions/localeAction';
import { RootState } from '../../reducers/reducer';
import { Dispatch } from 'redux';
import { actions } from '../../actions/actions';
import { Action } from '../../actions/actionTypes';

export const ChangeLanguage: React.FC<{}> = (): JSX.Element => {
    const { formatMessage } = useIntl();
    const locale: Locale = useSelector<RootState, Locale>((state: RootState): Locale => state.locale);
    const dispatch: Dispatch = useDispatch();
    const { changeLocale } = actions.localeActions;

    return (
        <span style={{marginRight: 12}}>
            {locale === 'pl' ?
                <Button type='primary' onClick={(): Action<Locale> => dispatch(changeLocale('en'))}>
                    {formatMessage({id: 'local.english'})}
                </Button> :
                <Button type='primary' onClick={(): Action<Locale> => dispatch(changeLocale('pl'))}>
                    {formatMessage({id: 'local.polish'})}
                </Button>
            }
        </span>
    );
}
