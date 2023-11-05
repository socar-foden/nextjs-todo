import * as yup from 'yup';

const schema = yup.object().shape({
  checked: yup.boolean().required(),
  text: yup.string().required(),
});

export default schema;
