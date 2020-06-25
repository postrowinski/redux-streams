import React from 'react';
import { StreamDTO } from '../../../types/rest';
import { Button } from 'antd';
import { useIntl } from 'react-intl';
import { Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '../../actions/actions';
import { Dispatch } from 'redux';
import { useHistory } from 'react-router-dom';
import { History } from 'history';
import { STREAM_EDIT } from '../Navigation/paths';
import { RootState } from '../../reducers/reducer';
import { State as AuthState } from '../../reducers/authReducer';

interface Props extends StreamDTO {
    classNamePrefix: string;
}

export const StreamItem: React.FC<Props> = (props: Props): JSX.Element => {
    const auth: AuthState = useSelector<RootState, AuthState>((state: RootState): AuthState => state.auth);
    const history: History = useHistory();
    const { formatMessage } = useIntl();
    const dispatch: Dispatch = useDispatch();
    const { deleteStream } = actions.apiActions.stream;
    return (
        <li className={`${props.classNamePrefix}__item`}>
            <Card title={props.title}
                actions={auth.userId === props.userId ? [
                    <Button type='default' onClick={(): void => history.push(`${STREAM_EDIT}${props.id}`)}>
                        {formatMessage({id: 'stream.button.edit'})}
                    </Button>,
                    <Button type='danger' onClick={(): void => dispatch(deleteStream(props.id))}>
                        {formatMessage({id: 'stream.button.delete'})}
                    </Button>
                ] : undefined}
            >
                <div>
                    {props.description}
                </div>
            </Card>
        </li>
    )
}