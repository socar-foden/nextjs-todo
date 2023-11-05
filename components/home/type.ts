import * as yup from 'yup';
import schema from './validation';

export type TodoFormData = yup.InferType<typeof schema>;
