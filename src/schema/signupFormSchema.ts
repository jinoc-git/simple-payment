import { z } from 'zod';

const phoneRegExp = /^010\d{8}$/;
export const passwordRegExp =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?`~^&])[A-Za-z\d@$!%*#?`~^&]{6,}$/;

export const signupFormSchema = z
  .object({
    username: z
      .string()
      .min(2, {
        message: '이름은 2글자 이상이어야 합니다.',
      })
      .max(50, '이름은 50자 이하이어야 합니다.'),
    email: z.string().email({ message: '올바른 이메일을 입력해 주세요.' }),
    phone: z.string().regex(phoneRegExp, '올바른 핸드폰 번호를 입력해 주세요'),
    role: z.string().min(1, { message: '역할을 선택해 주세요' }),
    password: z
      .string()
      .min(6, '비밀번호는 6자리 이상이어야 합니다.')
      .max(50, '비밀번호는 50자리 이하이어야 합니다.')
      .regex(
        passwordRegExp,
        '비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.',
      ),
    confirmPassword: z
      .string()
      .min(6, '비밀번호는 최소 6자리 이상이어야 합니다.')
      .max(50, '비밀번호는 50자리 이하이어야 합니다.')
      .regex(
        passwordRegExp,
        '비밀번호는 최소 6자리 이상, 영문, 숫자, 특수문자를 포함해야 합니다.',
      ),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: 'custom',
        message: '비밀번호가 일치하지 않습니다.',
        path: ['confirmPassword'],
      });
    }
  });
