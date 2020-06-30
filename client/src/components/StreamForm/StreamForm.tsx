import * as React from 'react';
import { useFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { useIntl } from 'react-intl';
import { Form, Input, Button } from 'antd';
import { StreamDTO } from '../../../types/rest';
import { useSelector } from 'react-redux';
import _ from 'lodash';
import { RootState } from '../../reducers/reducer';
import { State as AuthState } from '../../reducers/authReducer'


interface Props {
    initialValues: Partial<StreamDTO>;
    onSubmit: (values: StreamDTO) => void;
}

export const StreamForm: React.FC<Props> = (props: Props): JSX.Element => {
    const auth: AuthState = useSelector<RootState, AuthState>((state: RootState): AuthState => state.auth);
    const { formatMessage } = useIntl();
    const formik: FormikProps<Partial<StreamDTO>> = useFormik<Partial<StreamDTO>>({
        enableReinitialize: true,
        validateOnBlur: false,
        validateOnChange: false,
        initialValues: props.initialValues,
        validationSchema: Yup.object().shape({
            title: Yup.string().nullable().required(formatMessage({id: 'form.validation.required'})),
            description: Yup.string().nullable().required(formatMessage({id: 'form.validation.required'}))
        }),
        onSubmit: (values: StreamDTO): void => props.onSubmit(values)
    });

    return (
        <>
            {auth.isSignedIn &&
                <Form style={{maxWidth: 400, margin: 'auto'}} onSubmit={formik.handleSubmit}>
                    <Form.Item
                        label={formatMessage({id: 'stream.form.title'})}
                        required
                        validateStatus={formik.errors.title ? 'error' : undefined}
                        help={formik.errors.title}
                    >
                        <Input
                            autoComplete='none'
                            name={'title' as keyof StreamDTO}
                            onChange={formik.handleChange}
                            value={formik.values.title}
                            placeholder={formatMessage({id: 'stream.form.title'})}
                        />
                    </Form.Item>
                    <Form.Item
                        label={formatMessage({id: 'stream.form.description'})}
                        required
                        validateStatus={formik.errors.description ? 'error' : undefined}
                        help={formik.errors.description}
                    >
                        <Input
                            autoComplete='none'
                            name={'description' as keyof StreamDTO}
                            onChange={formik.handleChange}
                            value={formik.values.description}
                            placeholder={formatMessage({id: 'stream.form.description'})}
                        />
                    </Form.Item>
                    <Button
                        type='primary'
                        htmlType='submit'
                        block
                        size='large'
                    >
                        {formatMessage({id: 'form.example.submit'})}
                    </Button>
                </Form>
            }
        </>
    );
}
