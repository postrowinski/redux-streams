import * as React from 'react';
import { StreamDTO } from '../../../types/rest';
import { StreamForm } from '../../components/StreamForm/StreamForm';

export const StreamCreate: React.FC<{}> = (): JSX.Element => {
    const initialValues: Partial<StreamDTO> = {
        description: '',
        title: '',
    }

    return <StreamForm initialValues={initialValues} />
}
