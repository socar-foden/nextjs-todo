import * as yup from 'yup';

const schema = yup.object().shape({
  completed: yup.boolean().required(),
  todo: yup.string().required(),
});

export default schema;
