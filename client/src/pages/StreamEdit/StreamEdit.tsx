import * as React from 'react';
import { useFormik, FormikProps } from 'formik';
import * as Yup from 'yup';
import { useIntl } from 'react-intl';
import { Form, Input, Button } from 'antd';
import { StreamDTO } from '../../../types/rest';
import { useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { actions } from '../../actions/actions';
import _ from 'lodash';


export const StreamEdit: React.FC<{}> = (): JSX.Element => {
    const { formatMessage } = useIntl();
    const formik: FormikProps<StreamDTO> = useFormik<StreamDTO>({
        enableReinitialize: true,
        validateOnBlur: false,
        validateOnChange: false,
        initialValues: {
            title: '',
            description: ''
        },
        validationSchema: Yup.object().shape({
            title: Yup.string().nullable().required(formatMessage({id: 'form.validation.required'})),
            description: Yup.string().nullable().required(formatMessage({id: 'form.validation.required'}))
        }),
        onSubmit: (values: StreamDTO): void => onSubmit(values)
    });
    const dispatch: Dispatch = useDispatch();
    const { createStream } = actions.apiActions.stream;

    function onSubmit(values: StreamDTO): void {
        dispatch(createStream(values));
    }

    return (
        <Form style={{maxWidth: 400, margin: 'auto'}} onSubmit={formik.handleSubmit}>
            <Form.Item
                label={formatMessage({id: 'stream.form.title'})}
                required
                validateStatus={formik.errors.title ? 'error' : undefined}
                help={formik.errors.title}
            >
                <Input
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
    );
}
