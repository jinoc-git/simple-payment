import { z } from 'zod';

import { passwordRegExp } from './signupFormSchema';

export const signinFormSchema = z.object({
  email: z.string().email({ message: '이메일을 확인해 주세요.' }),
  password: z.string().regex(passwordRegExp, '비밀번호를 확인해 주세요.'),
});
